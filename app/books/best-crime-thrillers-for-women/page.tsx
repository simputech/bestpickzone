import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('best-crime-thrillers-for-women'), '/books/best-crime-thrillers-for-women')
export default function Page() { return <ResearchedBuyingGuide slug="best-crime-thrillers-for-women" /> }
