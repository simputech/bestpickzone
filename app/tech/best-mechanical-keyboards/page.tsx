import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-mechanical-keyboards'), '/tech/best-mechanical-keyboards')
export default function Page() { return <ResearchedBuyingGuide slug="best-mechanical-keyboards" /> }
