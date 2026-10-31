import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
const slug = 'best-vintage-countertop-milkshake-machines-ebay'
export const metadata = withSeo(buyingGuideMetadata(slug), '/home-kitchen/best-vintage-countertop-milkshake-machines-ebay')
export default function Page() { return <ResearchedBuyingGuide slug={slug} /> }
