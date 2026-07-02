const baseUrl = 'https://bestpickzone.com'

export type ItemListEntry = {
  name: string
  path: string
}

export function buildItemListJsonLd(name: string, items: ItemListEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${baseUrl}${item.path}`,
    })),
  }
}

export default function ItemListJsonLd({ name, items }: { name: string; items: ItemListEntry[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListJsonLd(name, items)) }}
    />
  )
}
