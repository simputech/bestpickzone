import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('fredrik-backman-books-ranked'), '/books/fredrik-backman-books-ranked')
export default function Page() { return <ResearchedBuyingGuide slug="fredrik-backman-books-ranked" /> }
