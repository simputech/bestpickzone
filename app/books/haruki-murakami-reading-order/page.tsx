import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('haruki-murakami-reading-order'), '/books/haruki-murakami-reading-order')
export default function Page() { return <ResearchedBuyingGuide slug="haruki-murakami-reading-order" /> }
