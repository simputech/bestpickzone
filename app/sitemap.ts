import { MetadataRoute } from 'next';
import { articlesData } from '@/lib/books-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestpickzone.com';
  const refreshedAt = new Date('2026-06-13T18:00:00.000Z');
  const techSlugs = [
    'best-laptops-for-college-students',
    'airpods-pro-vs-sony-wf-1000xm5',
    'best-budget-monitors',
    'best-wireless-earbuds',
    'best-mechanical-keyboards',
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/books`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/tech`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/finance-software`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/health-fitness`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/home-kitchen`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/books/authors`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/books/genre-fiction`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/books/self-help`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/books/kids-and-ya`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.9 },
    {
      url: `${baseUrl}/books/kids-and-ya/best-2026-summer-reading-for-high-school-students`,
      lastModified: refreshedAt,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    { url: `${baseUrl}/books/reader-picks`, lastModified: refreshedAt, changeFrequency: 'weekly', priority: 0.9 },
    // Genre Fiction standalone pages
    { url: `${baseUrl}/books/genre-fiction/best-spy-thriller-books`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-new-spy-thriller-books-2026`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-world-war-ii-books`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-cold-war-thriller-books`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-military-fiction-books`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction/best-history-books-for-beginners`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    // Authors standalone pages
    { url: `${baseUrl}/books/authors/best-lee-child-books`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    // Reader Picks standalone pages
    { url: `${baseUrl}/books/reader-picks/best-new-books-april-2026`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-books-like-da-vinci-code`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-action-adventure-books-for-men`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks/best-books-for-people-who-dont-like-reading`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    // Self-Help standalone pages
    { url: `${baseUrl}/books/self-help/best-self-help-books-2026`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/self-help/best-personal-finance-books-young-adults`, lastModified: refreshedAt, changeFrequency: 'monthly', priority: 0.85 },
  ];

  const articlePages: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/books/${article.slug}`,
    lastModified: refreshedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const techPages: MetadataRoute.Sitemap = techSlugs.map((slug) => ({
    url: `${baseUrl}/tech/${slug}`,
    lastModified: refreshedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages, ...techPages];
}
