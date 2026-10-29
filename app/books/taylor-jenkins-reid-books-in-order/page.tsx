import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('taylor-jenkins-reid-books-in-order'), '/books/taylor-jenkins-reid-books-in-order')
export default function Page() { return <ResearchedBuyingGuide slug="taylor-jenkins-reid-books-in-order" /> }
