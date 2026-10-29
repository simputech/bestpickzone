import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-action-adventure-books'), '/books/best-action-adventure-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-action-adventure-books" /> }
