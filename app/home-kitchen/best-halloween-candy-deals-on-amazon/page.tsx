import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-halloween-candy-deals-on-amazon'), '/home-kitchen/best-halloween-candy-deals-on-amazon')
export default function Page() { return <ResearchedBuyingGuide slug="best-halloween-candy-deals-on-amazon" /> }
