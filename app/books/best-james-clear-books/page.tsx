import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-james-clear-books'), '/books/best-james-clear-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-james-clear-books" /> }
