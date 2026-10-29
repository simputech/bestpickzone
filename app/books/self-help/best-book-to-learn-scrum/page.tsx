import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-book-to-learn-scrum'), '/books/self-help/best-book-to-learn-scrum')
export default function Page() { return <ResearchedBuyingGuide slug="best-book-to-learn-scrum" /> }
