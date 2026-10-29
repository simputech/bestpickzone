import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-on-parenting'), '/books/best-books-on-parenting')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-on-parenting" /> }
