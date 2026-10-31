import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-self-help-books'), '/books/best-self-help-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-self-help-books" /> }
