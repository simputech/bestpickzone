import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-for-girls-ages-8-12'), '/books/best-books-for-girls-ages-8-12')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-for-girls-ages-8-12" /> }
