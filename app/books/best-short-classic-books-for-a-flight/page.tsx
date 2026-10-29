import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-short-classic-books-for-a-flight'), '/books/best-short-classic-books-for-a-flight')
export default function Page() { return <ResearchedBuyingGuide slug="best-short-classic-books-for-a-flight" /> }
