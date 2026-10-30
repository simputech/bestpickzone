import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-romantic-comedy-books'), '/books/best-romantic-comedy-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-romantic-comedy-books" /> }
