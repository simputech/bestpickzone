import 'server-only'

import { unstable_cache } from 'next/cache'

type CreatorsApiTokenResponse = {
  access_token?: string
  expires_in?: number
  scope?: string
  token_type?: string
}

export type AmazonCreatorItem = {
  asin: string
  detailPageURL: string
  title?: string
  imageUrl?: string
  price?: string
}

type SearchItemsResponse = {
  searchResult?: {
    items?: Array<{
      asin?: string
      detailPageURL?: string
      images?: {
        primary?: {
          medium?: {
            url?: string
          }
        }
      }
      itemInfo?: {
        title?: {
          displayValue?: string
        }
      }
      offersV2?: {
        listings?: Array<{
          price?: {
            displayAmount?: string
          }
        }>
      }
    }>
  }
}

const API_BASE_URL = 'https://creatorsapi.amazon'
const DEFAULT_MARKETPLACE = 'www.amazon.com'
const DEFAULT_PARTNER_TAG = 'althcu-20'
const TOKEN_EXPIRY_SAFETY_MS = 60_000

let tokenCache: { value: string; expiresAt: number } | null = null

function creatorsApiConfig() {
  return {
    clientId: process.env.AMAZON_CREATORS_API_CLIENT_ID?.trim(),
    clientSecret: process.env.AMAZON_CREATORS_API_CLIENT_SECRET?.trim(),
    credentialVersion:
      process.env.AMAZON_CREATORS_API_CREDENTIAL_VERSION?.trim() || '3.1',
    marketplace: process.env.AMAZON_MARKETPLACE?.trim() || DEFAULT_MARKETPLACE,
    partnerTag:
      process.env.AMAZON_ASSOCIATE_TAG?.trim() ||
      process.env.NEXT_PUBLIC_AMAZON_TRACKING_ID?.trim() ||
      DEFAULT_PARTNER_TAG,
  }
}

export function isAmazonCreatorsApiConfigured() {
  const { clientId, clientSecret } = creatorsApiConfig()
  return Boolean(clientId && clientSecret)
}

function tokenEndpointForVersion(version: string) {
  if (version.startsWith('3.2')) {
    return 'https://api.amazon.co.uk/auth/o2/token'
  }

  if (version.startsWith('3.3')) {
    return 'https://api.amazon.co.jp/auth/o2/token'
  }

  return 'https://api.amazon.com/auth/o2/token'
}

async function getAccessToken() {
  const now = Date.now()

  if (tokenCache && tokenCache.expiresAt > now) {
    return tokenCache.value
  }

  const { clientId, clientSecret, credentialVersion } = creatorsApiConfig()

  if (!clientId || !clientSecret) {
    throw new Error('Amazon Creators API credentials are not configured')
  }

  const response = await fetch(tokenEndpointForVersion(credentialVersion), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'creatorsapi::default',
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(
      `Amazon Creators API token request failed with HTTP ${response.status}`
    )
  }

  const token = (await response.json()) as CreatorsApiTokenResponse

  if (!token.access_token) {
    throw new Error('Amazon Creators API token response did not include an access token')
  }

  const expiresInSeconds = Math.max(token.expires_in ?? 3600, 120)

  tokenCache = {
    value: token.access_token,
    expiresAt: now + expiresInSeconds * 1000 - TOKEN_EXPIRY_SAFETY_MS,
  }

  return token.access_token
}

async function searchAmazonProductUncached(query: string): Promise<AmazonCreatorItem | null> {
  if (!isAmazonCreatorsApiConfigured()) {
    return null
  }

  const normalizedQuery = query.trim()

  if (!normalizedQuery) {
    return null
  }

  try {
    const accessToken = await getAccessToken()
    const { marketplace, partnerTag } = creatorsApiConfig()

    const response = await fetch(`${API_BASE_URL}/catalog/v1/searchItems`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'x-marketplace': marketplace,
      },
      body: JSON.stringify({
        keywords: normalizedQuery,
        itemCount: 1,
        marketplace,
        partnerTag,
        resources: [
          'images.primary.medium',
          'itemInfo.title',
          'offersV2.listings.price',
        ],
      }),
      cache: 'no-store',
    })

    if (!response.ok) {
      console.warn(
        `Amazon Creators API searchItems failed with HTTP ${response.status} for query: ${normalizedQuery}`
      )
      return null
    }

    const payload = (await response.json()) as SearchItemsResponse
    const item = payload.searchResult?.items?.[0]

    if (!item?.asin || !item.detailPageURL) {
      return null
    }

    return {
      asin: item.asin,
      detailPageURL: item.detailPageURL,
      title: item.itemInfo?.title?.displayValue,
      imageUrl: item.images?.primary?.medium?.url,
      price: item.offersV2?.listings?.[0]?.price?.displayAmount,
    }
  } catch (error) {
    console.warn('Amazon Creators API lookup failed; using the existing Amazon search-link fallback.', error)
    return null
  }
}

const cachedSearchAmazonProduct = unstable_cache(
  searchAmazonProductUncached,
  ['amazon-creators-api-search-v1'],
  { revalidate: 21600 }
)

export async function searchAmazonProduct(query: string) {
  if (!isAmazonCreatorsApiConfigured()) {
    return null
  }

  return cachedSearchAmazonProduct(query)
}
