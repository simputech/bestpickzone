import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-biographies-and-memoirs'), '/books/best-biographies-and-memoirs')
export default function Page() { return <ResearchedBuyingGuide slug="best-biographies-and-memoirs" /> }
