import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-about-food-and-cooking'), '/books/best-books-about-food-and-cooking')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-about-food-and-cooking" /> }
