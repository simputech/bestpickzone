import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'

const root = process.cwd()
const read = p => fs.readFileSync(path.join(root, p), 'utf8')
const inventory = JSON.parse(read('docs/operations/service-inventory.json'))
const errors = []
const requireFact = (ok, message) => { if (!ok) errors.push(message) }
requireFact(inventory.schemaVersion === 1, 'Unsupported operations inventory version')
requireFact(inventory.repository === 'simputech/bestpickzone', 'Inventory repository identity changed; reconcile ownership')
requireFact(Number.isFinite(Date.parse(inventory.verifiedAt)), 'Missing inventory evidence date')
requireFact(Array.isArray(inventory.unknowns), 'Record unknowns explicitly, including an empty list if fully resolved')
for (const file of ['BESTPICKZONE_PROJECT_BRIEF_JUNE_2026.md', 'reports/README.md'])
  requireFact(read(file).includes('BACKEND_AND_DEPLOYMENT_INVENTORY.md'), `${file} must link the operations inventory`)
for (const service of inventory.services ?? []) {
  requireFact(['planned','created','configured','tested','live','unknown'].includes(service.status), `Invalid service state: ${service.id}`)
  requireFact(typeof service.ownershipEvidence === 'string' && service.ownershipEvidence.length > 15, `Missing ownership evidence/unknown: ${service.id}`)
}
const keys = new Set((inventory.credentials ?? []).map(c => c.name))
for (const credential of inventory.credentials ?? []) {
  requireFact(!('value' in credential), `Credential values must not be stored: ${credential.name}`)
  requireFact(typeof credential.storage === 'string' && Array.isArray(credential.targets), `Missing storage/targets: ${credential.name}`)
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory() ? walk(full) : /\.(?:tsx?|m?js)$/.test(entry.name) ? [full] : []
  })
}
for (const folder of ['app','lib','components','supabase']) {
  for (const file of walk(path.join(root, folder))) {
    const source = fs.readFileSync(file, 'utf8')
    for (const match of source.matchAll(/process\.env\.([A-Z][A-Z0-9_]*)|Deno\.env\.get\(["']([A-Z][A-Z0-9_]*)["']\)/g))
      requireFact(keys.has(match[1] || match[2]), `Uncatalogued runtime variable ${match[1] || match[2]} in ${path.relative(root,file)}`)
  }
}
for (const record of [...(inventory.migrations ?? []).map(m => ({path:m.sourceFile,sha256:m.sourceSha256})), ...(inventory.sourceFingerprints ?? [])]) {
  requireFact(fs.existsSync(record.path), `Missing operations source: ${record.path}`)
  if (fs.existsSync(record.path)) requireFact(createHash('sha256').update(fs.readFileSync(record.path)).digest('hex') === record.sha256, `Reconcile changed source and deployment/migration receipt: ${record.path}`)
}
for (const file of [inventory.documentation,inventory.verification.articleProduction,inventory.verification.pregnancyCorrection])
  requireFact(typeof file === 'string' && fs.existsSync(file), `Missing operations evidence: ${file}`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Operations inventory: ${inventory.services.length} services, ${keys.size} runtime/CI variable names, source fingerprints and evidence links verified. Provider state still requires release-time verification.`)
