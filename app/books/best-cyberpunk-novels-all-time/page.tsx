import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-cyberpunk-novels-all-time'), '/books/best-cyberpunk-novels-all-time')
export default function Page() { return <ResearchedBuyingGuide slug="best-cyberpunk-novels-all-time" /> }
