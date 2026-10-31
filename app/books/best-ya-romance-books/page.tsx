import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-ya-romance-books'), '/books/best-ya-romance-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-ya-romance-books" /> }
