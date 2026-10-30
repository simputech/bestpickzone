import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-leadership-books'), '/books/best-leadership-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-leadership-books" /> }
