import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
const slug = 'best-portable-monitors-under-100-ebay'
export const metadata = withSeo(buyingGuideMetadata(slug), '/wfh/best-portable-monitors-under-100-ebay')
export default function Page() { return <ResearchedBuyingGuide slug={slug} /> }
