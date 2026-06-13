import { MetadataRoute } from 'next';
import { articlesData } from '@/lib/books-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestpickzone.com';
  const refreshedAt = new Date('2026-06-13');
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
