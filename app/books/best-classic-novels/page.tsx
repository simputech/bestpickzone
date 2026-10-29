import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-classic-novels'), '/books/best-classic-novels')
export default function Page() { return <ResearchedBuyingGuide slug="best-classic-novels" /> }
