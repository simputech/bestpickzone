import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-beach-reads'), '/books/best-beach-reads')
export default function Page() { return <ResearchedBuyingGuide slug="best-beach-reads" /> }
