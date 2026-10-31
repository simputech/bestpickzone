import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-sports-books'), '/books/best-sports-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-sports-books" /> }
