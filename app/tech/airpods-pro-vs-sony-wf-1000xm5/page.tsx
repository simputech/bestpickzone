import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('airpods-pro-vs-sony-wf-1000xm5'), '/tech/airpods-pro-vs-sony-wf-1000xm5')
export default function Page() { return <ResearchedBuyingGuide slug="airpods-pro-vs-sony-wf-1000xm5" /> }
