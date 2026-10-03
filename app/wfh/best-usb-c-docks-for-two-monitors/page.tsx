import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-usb-c-docks-for-two-monitors'), "/wfh/best-usb-c-docks-for-two-monitors")
export default function Page() { return <ResearchedBuyingGuide slug="best-usb-c-docks-for-two-monitors" /> }
