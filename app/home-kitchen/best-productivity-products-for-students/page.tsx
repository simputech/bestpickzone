import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-productivity-products-for-students'), '/home-kitchen/best-productivity-products-for-students')
export default function Page() { return <ResearchedBuyingGuide slug="best-productivity-products-for-students" /> }
