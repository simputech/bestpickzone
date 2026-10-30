import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-philosophy-books'), '/books/best-philosophy-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-philosophy-books" /> }
