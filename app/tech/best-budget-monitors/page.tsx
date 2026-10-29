import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-budget-monitors'), '/tech/best-budget-monitors')
export default function Page() { return <ResearchedBuyingGuide slug="best-budget-monitors" /> }
