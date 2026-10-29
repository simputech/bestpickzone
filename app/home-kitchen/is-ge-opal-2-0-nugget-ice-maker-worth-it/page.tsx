import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('is-ge-opal-2-0-nugget-ice-maker-worth-it'), '/home-kitchen/is-ge-opal-2-0-nugget-ice-maker-worth-it')
export default function Page() { return <ResearchedBuyingGuide slug="is-ge-opal-2-0-nugget-ice-maker-worth-it" /> }
