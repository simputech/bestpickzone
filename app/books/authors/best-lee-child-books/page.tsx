import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-lee-child-books'), '/books/authors/best-lee-child-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-lee-child-books" /> }
