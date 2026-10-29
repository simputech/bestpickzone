import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-book-club-books'), '/books/best-book-club-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-book-club-books" /> }
