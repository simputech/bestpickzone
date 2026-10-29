import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-about-race-and-identity'), '/books/best-books-about-race-and-identity')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-about-race-and-identity" /> }
