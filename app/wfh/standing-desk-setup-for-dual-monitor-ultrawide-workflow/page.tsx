import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('standing-desk-setup-for-dual-monitor-ultrawide-workflow'), '/wfh/standing-desk-setup-for-dual-monitor-ultrawide-workflow')
export default function Page() { return <ResearchedBuyingGuide slug="standing-desk-setup-for-dual-monitor-ultrawide-workflow" /> }
