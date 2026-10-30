import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-john-grisham-books'), '/books/best-john-grisham-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-john-grisham-books" /> }
