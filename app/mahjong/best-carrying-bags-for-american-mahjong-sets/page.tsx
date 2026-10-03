import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-carrying-bags-for-american-mahjong-sets'), "/mahjong/best-carrying-bags-for-american-mahjong-sets")
export default function Page() { return <ResearchedBuyingGuide slug="best-carrying-bags-for-american-mahjong-sets" /> }
