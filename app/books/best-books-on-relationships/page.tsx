import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-on-relationships'), '/books/best-books-on-relationships')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-on-relationships" /> }
