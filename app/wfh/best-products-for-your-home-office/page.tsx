import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-products-for-your-home-office'), '/wfh/best-products-for-your-home-office')
export default function Page() { return <ResearchedBuyingGuide slug="best-products-for-your-home-office" /> }
