import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
const slug = 'best-vintage-coffee-grinders-ebay'
export const metadata = withSeo(buyingGuideMetadata(slug), '/coffee/best-vintage-coffee-grinders-ebay')
export default function Page() { return <ResearchedBuyingGuide slug={slug} /> }
