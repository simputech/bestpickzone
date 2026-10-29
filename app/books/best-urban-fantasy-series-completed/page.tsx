import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-urban-fantasy-series-completed'), '/books/best-urban-fantasy-series-completed')
export default function Page() { return <ResearchedBuyingGuide slug="best-urban-fantasy-series-completed" /> }
