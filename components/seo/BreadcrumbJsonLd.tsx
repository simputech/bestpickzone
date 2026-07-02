const baseUrl = 'https://bestpickzone.com'

export type BreadcrumbTrailItem = {
  name: string
  path?: string
}

export function buildBreadcrumbJsonLd(trail: BreadcrumbTrailItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${baseUrl}${item.path}` } : {}),
    })),
  }
}

export default function BreadcrumbJsonLd({ trail }: { trail: BreadcrumbTrailItem[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(trail)) }}
    />
  )
}
