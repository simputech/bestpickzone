/** Source-owned editorial HTML only. Preserve destinations and tracking IDs. */
export function labelAmazonSearchLinks(html: string): string {
  return html.replace(/<a\b([^>]*\bhref\s*=\s*(["'])(.*?)\2[^>]*)>([\s\S]*?)<\/a>/gi, (anchor, attrs, _quote, href, body) => {
    let url: URL
    try { url = new URL(href.replace(/&amp;/g, '&')) } catch { return anchor }
    if (!['amazon.com', 'www.amazon.com'].includes(url.hostname) || url.pathname !== '/s' || !url.searchParams.has('k')) return anchor
    const text = body.replace(/<[^>]+>/g, '').trim()
    if (/\bsearch\b/i.test(text)) return anchor
    const label = /(?:buy|check.*price|view.*amazon|get.*amazon|shop.*amazon)/i.test(text)
      ? 'Search Amazon for this product'
      : `${body} <span class="text-sm">(Amazon search)</span>`
    return `<a${attrs}>${label}</a>`
  })
}
