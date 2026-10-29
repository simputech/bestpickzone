import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-crime-fiction'), '/books/best-crime-fiction')
export default function Page() { return <ResearchedBuyingGuide slug="best-crime-fiction" /> }
