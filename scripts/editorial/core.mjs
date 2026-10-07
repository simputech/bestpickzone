// Trusted policy code: activation must execute an independently pinned copy.
export const DIMENSIONS = [
  'readerIntent', 'specificUsefulness', 'primarySourceSupport',
  'originalValue', 'honestCommerce', 'structureAndDepth', 'metadataAndLinks'
];
const SHA = /^[a-f0-9]{40}$/;
const HASH = /^[a-f0-9]{64}$/;
const routeOK = r => typeof r === 'string' && /^\/[a-zA-Z0-9/_-]*$/.test(r);
const text = s => typeof s === 'string' && s.trim().length >= 20 && s.length <= 12000;
function keys(o, expected) {
  return o && !Array.isArray(o) && typeof o === 'object' &&
    Object.keys(o).sort().join('|') === [...expected].sort().join('|');
}
export function scopeChanges(files, inventory) {
  const routes = [...new Set(inventory)].sort();
  if (routes.some(r => !routeOK(r))) throw new Error('Unsupported route inventory');
  const policyChanged = files.some(f => /^(?:\.github\/|\.agents\/|\.codex\/|scripts\/|editorial\/|AGENTS\.md$|BESTPICKZONE_.*\.md$|package(?:-lock)?\.json$|next\.config\.)/.test(f));
  const content = files.filter(f => !/^(?:docs\/|reports\/|scripts\/|editorial\/|\.github\/)/.test(f) && !/\.md$/.test(f));
  // Any shared, data, asset, unknown, dynamic, or routing edit fans out to all routes.
  // This intentionally over-reviews rather than guessing a dependency graph.
  const all = content.some(f => !/^app\/(?:[a-zA-Z0-9_-]+\/)*page\.(?:tsx|jsx|js)$/.test(f));
  const direct = content.map(f => '/' + f.replace(/^app\//, '').replace(/(?:^|\/)page\.(?:tsx|jsx|js)$/, ''));
  const missing = all ? [] : direct.filter(r => !routes.includes(r));
  return { routes: content.length ? (all ? routes : [...new Set(direct)].sort()) : [],
    reason: all ? 'shared-or-unknown-change: all rendered routes' : 'standalone-pages-or-no-content',
    policyChanged, missing };
}
export function validateReview(value, context, now = new Date()) {
  const errors = [];
  const fail = s => errors.push(s);
  if (!keys(value, ['version','reviewId','headSha','baseSha','policySha','corpusSha','generatedAt','verdict','pages','limitations'])) return ['Invalid review envelope'];
  for (const k of ['headSha','baseSha','policySha']) if (!SHA.test(value[k]) || value[k] !== context[k]) fail(k + ' mismatch');
  if (!HASH.test(value.corpusSha) || value.corpusSha !== context.corpusSha) fail('corpusSha mismatch');
  if (value.version !== 1 || value.reviewId !== context.reviewId || !/^[a-zA-Z0-9_-]{8,100}$/.test(value.reviewId)) fail('version/reviewId mismatch');
  const age = now - new Date(value.generatedAt);
  if (!Number.isFinite(age) || age < -300000 || age > 86400000) fail('Review stale or invalid date');
  if (!['pass','revise','block'].includes(value.verdict)) fail('Invalid verdict');
  if (!text(value.limitations)) fail('Explicit limitations required');
  if (!Array.isArray(value.pages) || value.pages.length !== context.routes.length) return [...errors, 'Missing or extra route coverage'];
  const seen = new Set();
  for (const page of value.pages) {
    if (!keys(page, ['route','checks','sources','comparisons','editorialWords','pageType','findings'])) { fail('Invalid page'); continue; }
    if (!routeOK(page.route) || !context.routes.includes(page.route) || seen.has(page.route)) fail('Unexpected or duplicate route');
    seen.add(page.route);
    if (!keys(page.checks, DIMENSIONS)) { fail('Missing or unknown review dimensions'); continue; }
    for (const d of DIMENSIONS) {
      const check = page.checks[d];
      if (!keys(check, ['status','evidence']) || !['pass','revise','block'].includes(check.status) || !text(check.evidence)) fail('Invalid check: ' + d);
      else if (value.verdict === 'pass' && check.status !== 'pass') fail('Contradictory pass');
    }
    if (!['article','hub','service'].includes(page.pageType)) fail('Invalid page type');
    if (page.pageType === 'article' && page.editorialWords < 1000) fail('Article below 1000 editorial words');
    if (!Number.isInteger(page.editorialWords) || page.editorialWords < 0) fail('Invalid editorial word count');
    if (!Array.isArray(page.findings) || page.findings.some(f => !text(f))) fail('Invalid findings');
    if (value.verdict === 'pass' && page.findings?.length) fail('Unresolved findings');
    if (!Array.isArray(page.comparisons) || page.comparisons.length < 1) fail('Existing-content comparison required');
    else for (const item of page.comparisons) {
      if (!keys(item,['route','difference']) || !context.inventory.includes(item.route) || item.route === page.route || !text(item.difference)) fail('Invalid existing-content comparison');
    }
    if (!Array.isArray(page.sources) || page.sources.length < 1) fail('Claim-level sources required');
    else for (const s of page.sources) {
      if (!keys(s,['claim','url','kind','checkedAt','support']) || !text(s.claim) || !text(s.support) ||
          !['primary','manufacturer','retailer-price-availability','attributed-review-lab'].includes(s.kind)) { fail('Invalid source evidence'); continue; }
      try { const u = new URL(s.url); if (u.protocol !== 'https:' || u.username || u.password) fail('Invalid source URL'); } catch { fail('Invalid source URL'); }
      const sourceAge = now - new Date(s.checkedAt);
      const maxAge = s.kind === 'retailer-price-availability' ? 86400000 : 30 * 86400000;
      if (!Number.isFinite(sourceAge) || sourceAge < -300000 || sourceAge > maxAge) fail('Source needs fresh verification');
    }
  }
  return errors;
}
export function publishingDecision({ enabled = false, context, review, deterministic, provenance, currentHead, now }) {
  if (!enabled) return { status: 'blocked', reason: 'pilot-inactive' };
  if (currentHead !== context.headSha) return { status: 'blocked', reason: 'head-moved' };
  // Provenance is supplied by a trusted controller, never from PR JSON/artifacts alone.
  if (provenance !== true) return { status: 'blocked', reason: 'untrusted-review-producer' };
  if (context.policyChanged || context.missing.length) return { status: 'blocked', reason: 'policy-or-scope-needs-maintainer' };
  if (!deterministic || deterministic.headSha !== context.headSha || deterministic.corpusSha !== context.corpusSha ||
      deterministic.status !== 'pass' || deterministic.errors.length) return { status: 'blocked', reason: 'deterministic-checks' };
  const errors = validateReview(review, context, now);
  if (errors.length || review.verdict !== 'pass') return { status: 'blocked', reason: 'semantic-review', errors };
  return { status: 'pass', reason: 'reviewed-current-commit' };
}
export async function correctionCycle(adapter, { enabled = false, maxCorrections = 2 } = {}) {
  if (!enabled) return { status: 'blocked', reason: 'pilot-inactive' };
  if (!Number.isInteger(maxCorrections) || maxCorrections < 0 || maxCorrections > 2) throw new Error('Maximum two corrections');
  const history = [];
  const reviewIds = new Set();
  for (let round = 0; round <= maxCorrections; round++) {
    // prepare/review must be fresh invocations, including after a bot correction.
    const prepared = await adapter.prepare();
    if (reviewIds.has(prepared.context.reviewId)) return { status: 'blocked', reason: 'reused-review-invocation', history };
    reviewIds.add(prepared.context.reviewId);
    const review = await adapter.review(prepared);
    const result = publishingDecision({ ...prepared, review, enabled: true, currentHead: await adapter.head() });
    history.push({ headSha: prepared.context.headSha, reviewId: prepared.context.reviewId, ...result });
    if (result.status === 'pass') return { ...result, history };
    if (result.reason !== 'semantic-review' || result.errors?.length || review.verdict !== 'revise' || round === maxCorrections) return { ...result, history };
    // Correction adapter must enforce a content-only diff, no policy/workflow edits,
    // no new credentials, and commit with an expected-head lease.
    const corrected = await adapter.correct({ prepared, review, round: round + 1 });
    const patchErrors = validateCorrection(corrected?.changes, prepared.context.allowedContentFiles);
    if (patchErrors.length) return { status: 'blocked', reason: 'unsafe-correction', errors: patchErrors, history };
    if (!SHA.test(corrected.headSha) || corrected.headSha === prepared.context.headSha || await adapter.head() !== corrected.headSha) return { status: 'blocked', reason: 'correction-did-not-produce-current-commit', history };
  }
}

export function validateCorrection(changes, allowedFiles) {
  if (!Array.isArray(changes) || changes.length === 0 || changes.length > 20) return ['Empty or oversized correction'];
  if (!Array.isArray(allowedFiles)) return ['Missing trusted file allowlist'];
  const seen = new Set(), errors = [];
  for (const c of changes) {
    if (!keys(c,['path','status','mode','binary']) || typeof c.path !== 'string') { errors.push('Invalid correction entry'); continue; }
    const p = c.path;
    const content = /^(?:app\/[a-zA-Z0-9_/-]+\/(?:page\.tsx|article-source\.html)|content\/[a-zA-Z0-9_/-]+\.(?:html|md)|lib\/[a-zA-Z0-9_-]*(?:articles|books-data|showdowns|comparisons)[a-zA-Z0-9_-]*\.ts)$/.test(p);
    if (!content || p.includes('..') || !allowedFiles.includes(p) || seen.has(p) || c.status !== 'modified' || c.mode !== '100644' || c.binary !== false) errors.push('Correction outside allowed editorial scope: ' + p);
    seen.add(p);
  }
  return errors;
}
