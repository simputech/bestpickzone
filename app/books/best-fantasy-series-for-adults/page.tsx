import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-fantasy-series-for-adults'), '/books/best-fantasy-series-for-adults')
export default function Page() { return <ResearchedBuyingGuide slug="best-fantasy-series-for-adults" /> }
