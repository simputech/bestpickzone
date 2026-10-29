import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-cozy-mystery-series-to-read'), '/books/best-cozy-mystery-series-to-read')
export default function Page() { return <ResearchedBuyingGuide slug="best-cozy-mystery-series-to-read" /> }
