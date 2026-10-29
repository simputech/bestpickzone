import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-like-da-vinci-code'), '/books/reader-picks/best-books-like-da-vinci-code')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-like-da-vinci-code" /> }
