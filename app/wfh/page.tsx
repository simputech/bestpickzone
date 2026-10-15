import type { Metadata } from 'next'
import { withSeo } from '@/lib/seo-metadata'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'
import ShopperHub from '@/components/ShopperHub'
import { shopperHubContent } from '@/lib/shopper-hub-content'
import { getShopperHubDirectory } from '@/lib/shopper-hub-directory'
import MembershipHubLinks from '@/components/article/MembershipHubLinks'

const content = shopperHubContent['wfh']

export const metadata: Metadata = withSeo(withArticleMetadataDefaults({
  title: content.title,
  description: 'Plan a home office around desk space, screen placement, laptop compatibility, and chair fit. Find practical guides for docks, monitor arms, lighting, and controls.',
  alternates: { canonical: `https://bestpickzone.com${content.path}` },
  openGraph: { type: 'website', url: `https://bestpickzone.com${content.path}` },
}, { category: 'wfh', metadataType: 'website' }), content.path)

export default function Page() {
  return <ShopperHub content={content} groups={getShopperHubDirectory('wfh')}><MembershipHubLinks audience="wfh" /></ShopperHub>
}
