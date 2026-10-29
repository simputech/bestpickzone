import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-for-new-moms'), '/books/best-books-for-new-moms')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-for-new-moms" /> }
