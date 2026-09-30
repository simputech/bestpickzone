import redirects from '../lib/legacy-redirects.json' with { type: 'json' }
const base = (process.argv[2] || 'https://bestpickzone.com').replace(/\/$/, '')
const results = []
for (const [source, target] of Object.entries(redirects)) {
  for (const suffix of ['', '/', '?utm_source=crawl-audit']) {
    const path = source + suffix
    const response = await fetch(base + path, { redirect: 'manual' })
    const location = new URL(response.headers.get('location') || '/', base)
    const expected = new URL(target + (suffix.startsWith('?') ? suffix : ''), base)
    if (![301, 308].includes(response.status) || location.href !== expected.href) {
      throw new Error(`${path}: ${response.status} -> ${location.href}; expected ${expected.href}`)
    }
    const final = await fetch(location, { redirect: 'manual' })
    if (final.status !== 200) throw new Error(`${path} redirects to ${final.status}: ${location}`)
    results.push({ path, status: response.status, destination: location.href, finalStatus: final.status })
  }
}
for (const path of ['/coffee/', '/wfh/', '/mahjong/', '/books/']) {
  const response = await fetch(base + path, { redirect: 'manual' })
  const location = new URL(response.headers.get('location') || '/', base)
  if (response.status !== 308 || location.pathname !== path.slice(0, -1)) throw new Error(`Normalization failed: ${path}`)
}
console.log(JSON.stringify({ base, passed: results.length, results }, null, 2))
