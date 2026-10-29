import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-classic-childrens-books'), '/books/best-classic-childrens-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-classic-childrens-books" /> }
