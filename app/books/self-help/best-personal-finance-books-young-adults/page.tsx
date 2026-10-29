import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-personal-finance-books-young-adults'), '/books/self-help/best-personal-finance-books-young-adults')
export default function Page() { return <ResearchedBuyingGuide slug="best-personal-finance-books-young-adults" /> }
