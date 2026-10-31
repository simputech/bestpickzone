import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-spy-thrillers'), '/books/best-spy-thrillers')
export default function Page() { return <ResearchedBuyingGuide slug="best-spy-thrillers" /> }
