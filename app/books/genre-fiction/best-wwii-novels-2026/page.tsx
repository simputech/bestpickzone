import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-wwii-novels-2026'), '/books/genre-fiction/best-wwii-novels-2026')
export default function Page() { return <ResearchedBuyingGuide slug="best-wwii-novels-2026" /> }
