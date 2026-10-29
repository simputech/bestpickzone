import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-bedtime-books-for-toddlers'), '/books/best-bedtime-books-for-toddlers')
export default function Page() { return <ResearchedBuyingGuide slug="best-bedtime-books-for-toddlers" /> }
