import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-2026-summer-reading-for-12-year-old-girls'), '/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls')
export default function Page() { return <ResearchedBuyingGuide slug="best-2026-summer-reading-for-12-year-old-girls" /> }
