import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-new-books-june-2026'), '/books/reader-picks/best-new-books-june-2026')
export default function Page() { return <ResearchedBuyingGuide slug="best-new-books-june-2026" /> }
