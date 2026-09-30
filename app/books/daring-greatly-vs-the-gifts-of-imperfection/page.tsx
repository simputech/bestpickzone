import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = buyingGuideMetadata('daring-greatly-vs-the-gifts-of-imperfection')
export default function Page() { return <ResearchedBuyingGuide slug="daring-greatly-vs-the-gifts-of-imperfection" /> }
