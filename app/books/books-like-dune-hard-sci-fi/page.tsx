import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('books-like-dune-hard-sci-fi'), '/books/books-like-dune-hard-sci-fi')
export default function Page() { return <ResearchedBuyingGuide slug="books-like-dune-hard-sci-fi" /> }
