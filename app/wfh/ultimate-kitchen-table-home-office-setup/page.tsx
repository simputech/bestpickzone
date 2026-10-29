import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('ultimate-kitchen-table-home-office-setup'), '/wfh/ultimate-kitchen-table-home-office-setup')
export default function Page() { return <ResearchedBuyingGuide slug="ultimate-kitchen-table-home-office-setup" /> }
