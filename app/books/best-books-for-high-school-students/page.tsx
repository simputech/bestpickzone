import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-for-high-school-students'), '/books/best-books-for-high-school-students')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-for-high-school-students" /> }
