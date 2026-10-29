import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-dorm-organization-products'), '/home-kitchen/best-dorm-organization-products')
export default function Page() { return <ResearchedBuyingGuide slug="best-dorm-organization-products" /> }
