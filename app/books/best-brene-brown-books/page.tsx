import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-brene-brown-books'), '/books/best-brene-brown-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-brene-brown-books" /> }
