import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = buyingGuideMetadata('kitchenaid-pasta-roller-vs-pasta-press')
export default function Page() { return <ResearchedBuyingGuide slug="kitchenaid-pasta-roller-vs-pasta-press" /> }
