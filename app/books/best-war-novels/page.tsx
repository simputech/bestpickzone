import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-war-novels'), '/books/best-war-novels')
export default function Page() { return <ResearchedBuyingGuide slug="best-war-novels" /> }
