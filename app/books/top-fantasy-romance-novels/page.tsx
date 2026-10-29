import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('top-fantasy-romance-novels'), '/books/top-fantasy-romance-novels')
export default function Page() { return <ResearchedBuyingGuide slug="top-fantasy-romance-novels" /> }
