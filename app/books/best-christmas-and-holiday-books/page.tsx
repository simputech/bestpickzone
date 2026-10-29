import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-christmas-and-holiday-books'), '/books/best-christmas-and-holiday-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-christmas-and-holiday-books" /> }
