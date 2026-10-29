import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-history-books-for-beginners'), '/books/genre-fiction/best-history-books-for-beginners')
export default function Page() { return <ResearchedBuyingGuide slug="best-history-books-for-beginners" /> }
