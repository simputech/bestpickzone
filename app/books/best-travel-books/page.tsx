import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-travel-books'), '/books/best-travel-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-travel-books" /> }
