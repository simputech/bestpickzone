import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-gothic-novels'), '/books/best-gothic-novels')
export default function Page() { return <ResearchedBuyingGuide slug="best-gothic-novels" /> }
