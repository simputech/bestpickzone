import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-cold-war-thriller-books'), '/books/genre-fiction/best-cold-war-thriller-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-cold-war-thriller-books" /> }
