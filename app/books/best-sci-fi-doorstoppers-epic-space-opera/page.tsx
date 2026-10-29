import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-sci-fi-doorstoppers-epic-space-opera'), '/books/best-sci-fi-doorstoppers-epic-space-opera')
export default function Page() { return <ResearchedBuyingGuide slug="best-sci-fi-doorstoppers-epic-space-opera" /> }
