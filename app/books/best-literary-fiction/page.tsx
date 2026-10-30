import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-literary-fiction'), '/books/best-literary-fiction')
export default function Page() { return <ResearchedBuyingGuide slug="best-literary-fiction" /> }
