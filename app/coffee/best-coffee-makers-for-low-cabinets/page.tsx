import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = buyingGuideMetadata('best-coffee-makers-for-low-cabinets')
export default function Page() { return <ResearchedBuyingGuide slug="best-coffee-makers-for-low-cabinets" /> }
