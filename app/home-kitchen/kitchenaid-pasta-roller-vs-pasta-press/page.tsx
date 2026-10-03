import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('kitchenaid-pasta-roller-vs-pasta-press'), "/home-kitchen/kitchenaid-pasta-roller-vs-pasta-press")
export default function Page() { return <ResearchedBuyingGuide slug="kitchenaid-pasta-roller-vs-pasta-press" /> }
