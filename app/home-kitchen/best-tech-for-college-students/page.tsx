import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-tech-for-college-students'), '/home-kitchen/best-tech-for-college-students')
export default function Page() { return <ResearchedBuyingGuide slug="best-tech-for-college-students" /> }
