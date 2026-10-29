import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-air-fryer-accessories'), '/home-kitchen/best-air-fryer-accessories')
export default function Page() { return <ResearchedBuyingGuide slug="best-air-fryer-accessories" /> }
