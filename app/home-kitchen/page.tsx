import type { Metadata } from 'next'
import { withSeo } from '@/lib/seo-metadata'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import ShopperHub from '@/components/ShopperHub'
import { shopperHubContent } from '@/lib/shopper-hub-content'
import { getShopperHubDirectory } from '@/lib/shopper-hub-directory'
import MembershipHubLinks from '@/components/article/MembershipHubLinks'

const content = shopperHubContent['home-kitchen']

export const metadata: Metadata = withSeo(withArticleMetadataDefaults({
  title: content.title,
  description: 'Compare appliances, attachments, and home essentials by usable space, model compatibility, cleaning, and storage. Find guides for kitchens, dorms, and outdoor setups.',
  alternates: { canonical: `https://bestpickzone.com${content.path}` },
  openGraph: { type: 'website', url: `https://bestpickzone.com${content.path}` },
}, { category: 'home-kitchen', metadataType: 'website' }), content.path)

export default function Page() {
  return <ShopperHub content={content} groups={getShopperHubDirectory('home-kitchen')}><MembershipHubLinks audience="home" /></ShopperHub>
}
