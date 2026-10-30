import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-mystery-series'), '/books/best-mystery-series')
export default function Page() { return <ResearchedBuyingGuide slug="best-mystery-series" /> }
