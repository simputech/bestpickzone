import { MetadataRoute } from 'next';
import { articlesData } from '@/lib/books-data';

// Dates reflect actual publish/last-modified dates, not a shared timestamp.
// Hub pages use site launch date (2026-04-09). Standalone articles use their
// commit date. articlesData entries use their own publishedDate field.
// Keeping dates accurate prevents Google from treating the sitemap as fabricated.

const d = (iso: string) => new Date(iso);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestpickzone.com';

  const techSlugs: { slug: string; date: string }[] = [
    { slug: 'best-laptops-for-college-students',  date: '2026-04-09' },
    { slug: 'airpods-pro-vs-sony-wf-1000xm5',     date: '2026-04-09' },
    { slug: 'best-budget-monitors',               date: '2026-04-09' },
    { slug: 'best-wireless-earbuds',              date: '2026-04-09' },
    { slug: 'best-mechanical-keyboards',          date: '2026-04-09' },
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                              lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/books`,                   lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/tech`,                    lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/finance-software`,        lastModified: d('2026-04-09'), changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${baseUrl}/health-fitness`,          lastModified: d('2026-04-09'), changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${baseUrl}/home-kitchen`,            lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 0.75 },
    { url: `${baseUrl}/books/authors`,           lastModified: d('2026-04-20'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/books/genre-fiction`,     lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/books/self-help`,         lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/books/kids-and-ya`,       lastModified: d('2026-06-13'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/books/reader-picks`,      lastModified: d('2026-04-20'), changeFrequency: 'weekly',  priority: 0.9 },
    // Kids & YA standalone pages
    { url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-high-school-students`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/kids-and-ya/best-books-for-12-year-old-boys-summer-2026`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    // Genre Fiction standalone pages
    { url: `${baseUrl}/books/genre-fiction/best-spy-thriller-books`,        lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-new-spy-thriller-books-2026`, lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-world-war-ii-books`,        lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-cold-war-thriller-books`,   lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-military-fiction-books`,    lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-history-books-for-beginners`, lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/devils-guard-review`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    // Authors standalone pages
    { url: `${baseUrl}/books/authors/best-lee-child-books`, lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/authors/best-patrick-radden-keefe-books`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    // Reader Picks standalone pages
    { url: `${baseUrl}/books/reader-picks/best-new-books-april-2026`,              lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-new-books-june-2026`,               lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-books-like-da-vinci-code`,          lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-action-adventure-books-for-men`,    lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-books-for-people-who-dont-like-reading`, lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    // Self-Help standalone pages
    { url: `${baseUrl}/books/self-help/best-self-help-books-2026`,              lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/self-help/best-personal-finance-books-young-adults`, lastModified: d('2026-04-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/self-help/best-book-to-learn-scrum`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/self-help/best-comptia-security-plus-books-2026`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.85 },
    // Home & Kitchen standalone pages
    { url: `${baseUrl}/home-kitchen/best-kids-fort-for-girls-2026`, lastModified: d('2026-06-13'), changeFrequency: 'monthly', priority: 0.8 },
  ];

  const articlePages: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/books/${article.slug}`,
    lastModified: article.publishedDate ? d(article.publishedDate) : d('2026-04-09'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const techPages: MetadataRoute.Sitemap = techSlugs.map(({ slug, date }) => ({
    url: `${baseUrl}/tech/${slug}`,
    lastModified: d(date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages, ...techPages];
}
