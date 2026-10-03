import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-mahjong-racks-pushers-oversized-tiles'), "/mahjong/best-mahjong-racks-pushers-oversized-tiles")
export default function Page() { return <ResearchedBuyingGuide slug="best-mahjong-racks-pushers-oversized-tiles" /> }
