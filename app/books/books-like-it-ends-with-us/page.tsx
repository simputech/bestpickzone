import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('books-like-it-ends-with-us'), '/books/books-like-it-ends-with-us')
export default function Page() { return <ResearchedBuyingGuide slug="books-like-it-ends-with-us" /> }
