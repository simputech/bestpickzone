import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-pizza-peels-ooni-koda-12'), "/home-kitchen/best-pizza-peels-ooni-koda-12")
export default function Page() { return <ResearchedBuyingGuide slug="best-pizza-peels-ooni-koda-12" /> }
