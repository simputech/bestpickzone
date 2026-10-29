import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-brandon-sanderson-cosmere-order'), '/books/best-brandon-sanderson-cosmere-order')
export default function Page() { return <ResearchedBuyingGuide slug="best-brandon-sanderson-cosmere-order" /> }
