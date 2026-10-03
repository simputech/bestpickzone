import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-monitor-arms-for-shallow-desks'), "/wfh/best-monitor-arms-for-shallow-desks")
export default function Page() { return <ResearchedBuyingGuide slug="best-monitor-arms-for-shallow-desks" /> }
