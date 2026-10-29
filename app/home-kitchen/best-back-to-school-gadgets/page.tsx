import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-back-to-school-gadgets'), '/home-kitchen/best-back-to-school-gadgets')
export default function Page() { return <ResearchedBuyingGuide slug="best-back-to-school-gadgets" /> }
