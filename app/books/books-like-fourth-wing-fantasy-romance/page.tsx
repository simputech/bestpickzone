import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('books-like-fourth-wing-fantasy-romance'), '/books/books-like-fourth-wing-fantasy-romance')
export default function Page() { return <ResearchedBuyingGuide slug="books-like-fourth-wing-fantasy-romance" /> }
