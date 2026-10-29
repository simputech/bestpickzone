import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-of-all-time'), '/books/best-books-of-all-time')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-of-all-time" /> }
