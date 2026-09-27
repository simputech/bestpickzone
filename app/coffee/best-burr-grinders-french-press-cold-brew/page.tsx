import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = buyingGuideMetadata('best-burr-grinders-french-press-cold-brew')
export default function Page() { return <ResearchedBuyingGuide slug="best-burr-grinders-french-press-cold-brew" /> }
