import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-ww2-books-for-beginners'), '/books/best-ww2-books-for-beginners')
export default function Page() { return <ResearchedBuyingGuide slug="best-ww2-books-for-beginners" /> }
