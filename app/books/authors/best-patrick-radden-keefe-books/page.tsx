import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-patrick-radden-keefe-books'), '/books/authors/best-patrick-radden-keefe-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-patrick-radden-keefe-books" /> }
