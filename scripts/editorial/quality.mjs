// Deterministic heuristics supplement editorial review; they cannot establish truth.
export function visibleText(html) {
  return html.replace(/<(script|style|svg|nav|header|footer)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&(?:[a-z]+|#\d+|#x[a-f0-9]+);/gi, ' ')
    .replace(/\s+/g, ' ').trim();
}
export function inspectHtml(route, html, inventory, publicAssets = []) {
  const errors = [], warnings = [];
  const body = (html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i) || [null, html])[1];
  const plain = visibleText(body);
  const fail = s => errors.push(route + ': ' + s);
  if ((body.match(/<h1\b/gi) || []).length !== 1) fail('expected one H1');
  if (/\bbestpickzone-20\b/i.test(body)) fail('obsolete affiliate tag');
  if (/\b(?:lorem ipsum|TODO|TBD|insert (?:product|source)|coming soon)\b/i.test(plain)) fail('placeholder/drafting text');
  if (/\b(?:in our testing|we tested|when we used both|lab data proves)\b/i.test(plain)) warnings.push(route + ': verify hands-on/testing evidence');
  if (/\b(?:when it comes to|it is important to note|game-changer|look no further|in conclusion)\b/i.test(plain)) warnings.push(route + ': filler phrase review');
  const attrs = raw => Object.fromEntries([...raw.matchAll(/([\w:-]+)=["']([^"']*)["']/g)].map(m => [m[1].toLowerCase(), m[2].replace(/&amp;/g, '&')]));
  for (const match of body.matchAll(/<a\b[^>]*>/gi)) {
    const a = attrs(match[0]); if (!a.href) continue;
    let url; try { url = new URL(a.href, 'https://bestpickzone.com'); } catch { fail('invalid link'); continue; }
    if (/(^|\.)amazon\.com$/.test(url.hostname)) {
      if (url.searchParams.get('tag') !== 'althcu-20') fail('Amazon link missing required tag');
      if (a.target !== '_blank' || !['sponsored','noopener'].every(v => (a.rel || '').split(/\s+/).includes(v))) fail('Amazon link attributes');
    }
    if (url.origin === 'https://bestpickzone.com' && !inventory.includes(url.pathname.replace(/\/$/, '') || '/') && !publicAssets.includes(url.pathname)) fail('unresolved internal link ' + url.pathname);
  }
  return { errors, warnings, approximateWords: plain.split(/\s+/).filter(Boolean).length };
}
export function duplicateCandidates(pages, affected) {
  const normalized = new Map(pages.map(p => [p.route, visibleText(p.html).toLowerCase()]));
  const results = [];
  for (const route of affected) {
    const text = normalized.get(route) || '';
    const paragraphs = new Set(text.match(/(?:\S+\s+){39}\S+/g) || []);
    for (const [other, body] of normalized) {
      if (other === route) continue;
      const matches = [...paragraphs].filter(p => body.includes(p)).length;
      if (text && (text === body || matches >= 2)) results.push({ route, other, exact: text === body, repeated40WordBlocks: matches });
    }
  }
  return results;
}
