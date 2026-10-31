import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-science-fiction-books'), '/books/best-science-fiction-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-science-fiction-books" /> }
