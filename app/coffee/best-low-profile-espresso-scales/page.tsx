import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-low-profile-espresso-scales'), "/coffee/best-low-profile-espresso-scales")
export default function Page() { return <ResearchedBuyingGuide slug="best-low-profile-espresso-scales" /> }
