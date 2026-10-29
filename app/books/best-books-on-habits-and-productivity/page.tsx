import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-on-habits-and-productivity'), '/books/best-books-on-habits-and-productivity')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-on-habits-and-productivity" /> }
