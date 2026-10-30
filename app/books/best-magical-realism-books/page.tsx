import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-magical-realism-books'), '/books/best-magical-realism-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-magical-realism-books" /> }
