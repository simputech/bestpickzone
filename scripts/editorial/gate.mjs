import fs from 'node:fs';
import { validateReview } from './core.mjs';
const [contextFile, reviewFile] = process.argv.slice(2);
try {
  if (!contextFile || !reviewFile) throw new Error('Context and review files required');
  const context = JSON.parse(fs.readFileSync(contextFile,'utf8'));
  const raw = fs.readFileSync(reviewFile,'utf8');
  if (raw.length > 2_000_000) throw new Error('Review too large');
  const errors = validateReview(JSON.parse(raw),context);
  console.log(JSON.stringify({status:'blocked', reason:'pilot-inactive', validationErrors:errors}));
} catch (e) {
  console.error(JSON.stringify({status:'blocked', reason:'missing-or-malformed-evidence', error:e.message}));
}
process.exitCode = 1; // Cannot release before the separate activation change.
