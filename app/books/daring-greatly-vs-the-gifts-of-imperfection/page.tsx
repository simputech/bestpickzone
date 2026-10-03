import { withSeo } from '@/lib/seo-metadata'
import ResearchedBuyingGuide from '@/components/article/ResearchedBuyingGuide'
import { buyingGuideMetadata } from '@/lib/buying-guides'
export const metadata = withSeo(buyingGuideMetadata('daring-greatly-vs-the-gifts-of-imperfection'), "/books/daring-greatly-vs-the-gifts-of-imperfection")
export default function Page() { return <ResearchedBuyingGuide slug="daring-greatly-vs-the-gifts-of-imperfection" /> }
