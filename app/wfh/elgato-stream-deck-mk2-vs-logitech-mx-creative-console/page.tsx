import { withSeo } from '@/lib/seo-metadata'
import OrganicPilotProductCard from '@/components/article/OrganicPilotProductCard'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('elgato-stream-deck-mk2-vs-logitech-mx-creative-console'), "/wfh/elgato-stream-deck-mk2-vs-logitech-mx-creative-console")
export default function Page() { return <><ResearchedBuyingGuide slug="elgato-stream-deck-mk2-vs-logitech-mx-creative-console" /><section className="mx-auto max-w-5xl px-4 pb-12"><h2 className="mb-4 text-2xl font-bold">Compare these products on Amazon</h2><div className="grid gap-4 md:grid-cols-2"><OrganicPilotProductCard query="Elgato Stream Deck MK.2 15 keys" label="Elgato Stream Deck MK.2" /><OrganicPilotProductCard query="Logitech MX Creative Console" label="Logitech MX Creative Console" /></div></section></> }
