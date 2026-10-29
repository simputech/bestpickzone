import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-self-help-books-2026'), '/books/self-help/best-self-help-books-2026')
export default function Page() { return <ResearchedBuyingGuide slug="best-self-help-books-2026" /> }
