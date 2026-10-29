import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-colleen-hoover-books'), '/books/best-colleen-hoover-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-colleen-hoover-books" /> }
