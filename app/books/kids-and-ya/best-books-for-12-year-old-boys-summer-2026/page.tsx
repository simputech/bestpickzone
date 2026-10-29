import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-for-12-year-old-boys-summer-2026'), '/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-for-12-year-old-boys-summer-2026" /> }
