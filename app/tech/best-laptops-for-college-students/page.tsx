import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-laptops-for-college-students'), '/tech/best-laptops-for-college-students')
export default function Page() { return <ResearchedBuyingGuide slug="best-laptops-for-college-students" /> }
