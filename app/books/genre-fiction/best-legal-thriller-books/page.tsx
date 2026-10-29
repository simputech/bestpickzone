import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-legal-thriller-books'), '/books/genre-fiction/best-legal-thriller-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-legal-thriller-books" /> }
