import { MetadataRoute } from 'next';
import { articlesData } from '@/lib/books-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bestpickzone.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date('2026-03-31'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/books`, lastModified: new Date('2026-03-31'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/books/authors`, lastModified: new Date('2026-03-05'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/genre-fiction`, lastModified: new Date('2026-03-10'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/self-help`, lastModified: new Date('2026-03-15'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/kids-and-ya`, lastModified: new Date('2026-03-20'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/books/reader-picks`, lastModified: new Date('2026-03-31'), changeFrequency: 'monthly', priority: 0.85 },
  ];

  const articlePages: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/books/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
