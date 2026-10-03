import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-video-call-lighting-for-glasses'), "/wfh/best-video-call-lighting-for-glasses")
export default function Page() { return <ResearchedBuyingGuide slug="best-video-call-lighting-for-glasses" /> }
