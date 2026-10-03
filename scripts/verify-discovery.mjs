import assert from 'node:assert/strict'
const base = (process.argv[2] || 'http://localhost:3107').replace(/\/$/, '')
const canonical = 'https://bestpickzone.com'
const source = '/books/best-books-for-people-who-dont-like-reading'
const destination = '/books/reader-picks/best-books-for-people-who-dont-like-reading'
const fetchHtml = async (path) => {
  const response = await fetch(base + path, { redirect: 'manual' })
  assert.equal(response.status, 200, path)
  return response.text()
}
for (const suffix of ['', '/', '?utm_source=discovery-check']) {
  const response = await fetch(base + source + suffix, { redirect: 'manual' })
  assert.equal(response.status, 308, source + suffix)
  const location = new URL(response.headers.get('location'), base)
  assert.equal(location.pathname, destination)
  assert.equal(location.search, suffix.startsWith('?') ? suffix : '')
}
const [books, readers, selfHelp, target, sitemap] = await Promise.all([
  fetchHtml('/books'), fetchHtml('/books/reader-picks'), fetchHtml('/books/self-help'),
  fetchHtml(destination), fetchHtml('/sitemap-books.xml'),
])
for (const path of ['/books/authors', '/books/genre-fiction', '/books/self-help', '/books/kids-and-ya', '/books/reader-picks', '/books/authors/best-patrick-radden-keefe-books', '/books/books-like-dune-hard-sci-fi', '/books/genre-fiction/best-legal-thriller-books', '/books/reader-picks/best-books-like-da-vinci-code']) {
  assert.ok(books.includes(`href="${path}"`), `Books hub missing ${path}`)
}
assert.ok(readers.includes('href="/books/reader-picks/best-books-like-da-vinci-code"'))
assert.ok(selfHelp.includes('href="/books/self-help/best-personal-finance-books-young-adults"'))
for (const html of [books, readers, selfHelp, target]) {
  assert.ok(!html.includes(`href="${source}"`), 'Link still points to alias')
  assert.ok(!/priority author guides to crawl|priority crawl paths|freshness signals|want crawled and indexed/i.test(html))
}
assert.ok(target.includes(`rel="canonical" href="${canonical}${destination}"`))
assert.ok(target.includes('\"dateModified\":\"2026-10-03\"'), 'Article schema modification date')
assert.ok(target.includes('More options if those five do not fit'))
assert.ok(target.includes('Big Little Lies'))
assert.ok(target.includes('Gone Girl'))
assert.ok(!sitemap.includes(`<loc>${canonical}${source}</loc>`))
assert.equal(sitemap.split(`<loc>${canonical}${destination}</loc>`).length - 1, 1)
assert.ok(!sitemap.includes('<lastmod>2026-07-01</lastmod>'))
assert.ok(sitemap.includes(`<loc>${canonical}/books</loc><lastmod>2026-10-03</lastmod>`))
console.log(`Discovery regression checks passed against ${base}: redirect variants, canonical destination, retained picks, hub links, sitemap exclusion and dates.`)
