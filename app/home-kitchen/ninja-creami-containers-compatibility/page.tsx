import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('ninja-creami-containers-compatibility'), "/home-kitchen/ninja-creami-containers-compatibility")
export default function Page() { return <ResearchedBuyingGuide slug="ninja-creami-containers-compatibility" /> }
