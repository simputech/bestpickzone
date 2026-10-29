import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('agatha-christie-hercule-poirot-in-order'), '/books/agatha-christie-hercule-poirot-in-order')
export default function Page() { return <ResearchedBuyingGuide slug="agatha-christie-hercule-poirot-in-order" /> }
