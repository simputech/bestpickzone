import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-kids-book-series'), '/books/best-kids-book-series')
export default function Page() { return <ResearchedBuyingGuide slug="best-kids-book-series" /> }
