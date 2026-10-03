import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-bottomless-portafilters-gaggia-classic-pro'), "/coffee/best-bottomless-portafilters-gaggia-classic-pro")
export default function Page() { return <ResearchedBuyingGuide slug="best-bottomless-portafilters-gaggia-classic-pro" /> }
