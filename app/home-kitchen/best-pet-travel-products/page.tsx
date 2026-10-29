import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-pet-travel-products'), '/home-kitchen/best-pet-travel-products')
export default function Page() { return <ResearchedBuyingGuide slug="best-pet-travel-products" /> }
