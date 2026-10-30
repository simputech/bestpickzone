import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-one-sitting-reads'), '/books/best-one-sitting-reads')
export default function Page() { return <ResearchedBuyingGuide slug="best-one-sitting-reads" /> }
