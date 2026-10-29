import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-ergonomic-chairs-for-sciatica-and-lower-back-pain'), '/wfh/best-ergonomic-chairs-for-sciatica-and-lower-back-pain')
export default function Page() { return <ResearchedBuyingGuide slug="best-ergonomic-chairs-for-sciatica-and-lower-back-pain" /> }
