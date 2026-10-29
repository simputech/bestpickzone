import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-kids-fort-for-girls-2026'), '/home-kitchen/best-kids-fort-for-girls-2026')
export default function Page() { return <ResearchedBuyingGuide slug="best-kids-fort-for-girls-2026" /> }
