import type { Metadata } from 'next'
import { withSeo } from '@/lib/seo-metadata'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import ShopperHub from '@/components/ShopperHub'
import { shopperHubContent } from '@/lib/shopper-hub-content'
import { getShopperHubDirectory } from '@/lib/shopper-hub-directory'

const content = shopperHubContent['coffee']

export const metadata: Metadata = withSeo(withArticleMetadataDefaults({
  title: content.title,
  description: 'Choose coffee gear by brewing method, counter space, grinder needs, and accessory fit. Find espresso, filter-coffee, and machine-specific buying guides.',
  alternates: { canonical: `https://bestpickzone.com${content.path}` },
  openGraph: { type: 'website', url: `https://bestpickzone.com${content.path}` },
}, { category: 'coffee', metadataType: 'website' }), content.path)

export default function Page() {
  return <ShopperHub content={content} groups={getShopperHubDirectory('coffee')} />
}
