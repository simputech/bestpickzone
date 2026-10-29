import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-world-war-ii-books'), '/books/genre-fiction/best-world-war-ii-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-world-war-ii-books" /> }
