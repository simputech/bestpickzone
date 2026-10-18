import ArticleAmazonProducts from './ArticleAmazonProducts'

/** Keep the existing editorial layout and place commerce before a standalone local footer. */
export default function RawHtmlCommerceArticle({ article, path }: {
  article: { rawCss: string; rawHtml: string }
  path: string
}) {
  const footerStart = article.rawHtml.indexOf('<footer')
  const editorial = footerStart < 0 ? article.rawHtml : article.rawHtml.slice(0, footerStart)
  const footer = footerStart < 0 ? '' : article.rawHtml.slice(footerStart)
  return <>
    <style dangerouslySetInnerHTML={{ __html: article.rawCss }} />
    <div dangerouslySetInnerHTML={{ __html: editorial }} />
    <div className="mx-auto max-w-5xl px-4 pb-10">
      <ArticleAmazonProducts path={path} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: footer }} />
  </>
}
