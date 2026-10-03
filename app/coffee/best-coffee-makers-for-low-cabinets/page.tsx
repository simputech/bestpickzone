import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-coffee-makers-for-low-cabinets'), "/coffee/best-coffee-makers-for-low-cabinets")
export default function Page() { return <ResearchedBuyingGuide slug="best-coffee-makers-for-low-cabinets" /> }
