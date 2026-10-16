import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('elgato-stream-deck-mk2-vs-logitech-mx-creative-console'), "/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console")
export default function Page() { return <ResearchedBuyingGuide slug="elgato-stream-deck-mk2-vs-logitech-mx-creative-console" /> }
