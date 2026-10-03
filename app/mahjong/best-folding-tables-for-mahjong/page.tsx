import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-folding-tables-for-mahjong'), "/mahjong/best-folding-tables-for-mahjong")
export default function Page() { return <ResearchedBuyingGuide slug="best-folding-tables-for-mahjong" /> }
