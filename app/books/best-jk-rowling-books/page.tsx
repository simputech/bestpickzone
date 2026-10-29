import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-jk-rowling-books'), '/books/best-jk-rowling-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-jk-rowling-books" /> }
