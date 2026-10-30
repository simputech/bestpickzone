import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-science-books-for-non-scientists'), '/books/best-science-books-for-non-scientists')
export default function Page() { return <ResearchedBuyingGuide slug="best-science-books-for-non-scientists" /> }
