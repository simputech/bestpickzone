import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-cozy-mystery-books'), '/books/best-cozy-mystery-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-cozy-mystery-books" /> }
