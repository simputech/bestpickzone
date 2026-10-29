import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-military-fiction-books'), '/books/genre-fiction/best-military-fiction-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-military-fiction-books" /> }
