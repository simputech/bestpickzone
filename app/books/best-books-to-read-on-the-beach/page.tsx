import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-books-to-read-on-the-beach'), '/books/best-books-to-read-on-the-beach')
export default function Page() { return <ResearchedBuyingGuide slug="best-books-to-read-on-the-beach" /> }
