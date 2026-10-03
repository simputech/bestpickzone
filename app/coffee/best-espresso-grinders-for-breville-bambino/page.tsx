import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-espresso-grinders-for-breville-bambino'), "/coffee/best-espresso-grinders-for-breville-bambino")
export default function Page() { return <ResearchedBuyingGuide slug="best-espresso-grinders-for-breville-bambino" /> }
