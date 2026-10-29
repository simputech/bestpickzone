import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-study-desk-essentials'), '/home-kitchen/best-study-desk-essentials')
export default function Page() { return <ResearchedBuyingGuide slug="best-study-desk-essentials" /> }
