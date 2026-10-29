import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-james-patterson-books'), '/books/best-james-patterson-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-james-patterson-books" /> }
