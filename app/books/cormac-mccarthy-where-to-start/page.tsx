import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('cormac-mccarthy-where-to-start'), '/books/cormac-mccarthy-where-to-start')
export default function Page() { return <ResearchedBuyingGuide slug="cormac-mccarthy-where-to-start" /> }
