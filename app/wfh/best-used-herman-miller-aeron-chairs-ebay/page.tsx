import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
const slug = 'best-used-herman-miller-aeron-chairs-ebay'
export const metadata = withSeo(buyingGuideMetadata(slug), '/wfh/best-used-herman-miller-aeron-chairs-ebay')
export default function Page() { return <ResearchedBuyingGuide slug={slug} /> }
