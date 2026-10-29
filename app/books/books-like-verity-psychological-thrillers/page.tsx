import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('books-like-verity-psychological-thrillers'), '/books/books-like-verity-psychological-thrillers')
export default function Page() { return <ResearchedBuyingGuide slug="books-like-verity-psychological-thrillers" /> }
