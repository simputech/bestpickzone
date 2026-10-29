import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-stephen-king-books'), '/books/best-stephen-king-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-stephen-king-books" /> }
