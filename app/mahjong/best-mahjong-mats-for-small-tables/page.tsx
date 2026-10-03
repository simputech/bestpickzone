import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-mahjong-mats-for-small-tables'), "/mahjong/best-mahjong-mats-for-small-tables")
export default function Page() { return <ResearchedBuyingGuide slug="best-mahjong-mats-for-small-tables" /> }
