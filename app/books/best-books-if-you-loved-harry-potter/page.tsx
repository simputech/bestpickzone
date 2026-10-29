import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-if-you-loved-harry-potter'), '/books/best-books-if-you-loved-harry-potter')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-if-you-loved-harry-potter" /> }
