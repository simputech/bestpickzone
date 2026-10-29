import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-products-for-your-dorm-room'), '/home-kitchen/best-products-for-your-dorm-room')
export default function Page() { return <ResearchedBuyingGuide slug="best-products-for-your-dorm-room" /> }
