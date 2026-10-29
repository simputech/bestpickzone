import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-feel-good-books'), '/books/best-feel-good-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-feel-good-books" /> }
