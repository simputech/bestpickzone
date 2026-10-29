import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('authors-like-colleen-hoover'), '/books/authors/authors-like-colleen-hoover')
export default function Page() { return <ResearchedBuyingGuide slug="authors-like-colleen-hoover" /> }
