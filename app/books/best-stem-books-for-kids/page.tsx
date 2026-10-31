import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-stem-books-for-kids'), '/books/best-stem-books-for-kids')
export default function Page() { return <ResearchedBuyingGuide slug="best-stem-books-for-kids" /> }
