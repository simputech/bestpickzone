import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-picture-books-for-toddlers'), '/books/best-picture-books-for-toddlers')
export default function Page() { return <ResearchedBuyingGuide slug="best-picture-books-for-toddlers" /> }
