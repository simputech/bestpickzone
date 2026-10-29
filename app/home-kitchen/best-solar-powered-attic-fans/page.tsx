import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-solar-powered-attic-fans'), '/home-kitchen/best-solar-powered-attic-fans')
export default function Page() { return <ResearchedBuyingGuide slug="best-solar-powered-attic-fans" /> }
