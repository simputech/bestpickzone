import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-malcolm-gladwell-books'), '/books/best-malcolm-gladwell-books')
export default function Page() { return <ResearchedBuyingGuide slug="best-malcolm-gladwell-books" /> }
