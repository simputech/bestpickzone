import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-dan-brown-books'), '/books/best-dan-brown-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-dan-brown-books" /> }
