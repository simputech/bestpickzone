// Master index — aggregates all 5 data parts into a single export
import { articlesData as part1, type ArticleData, type BookPick, type BookCategory } from './books-data-part1';
import { articlesDataPart2 as part2 } from './books-data-part2';
import { articlesDataPart3 as part3 } from './books-data-part3';
import { articlesDataPart4 as part4 } from './books-data-part4';
import { articlesDataPart5 as part5 } from './books-data-part5';
import { bookRewriteOverrides } from './book-rewrite-overrides';

export type { ArticleData, BookPick, BookCategory };

export const articlesData: ArticleData[] = [
  ...part1,
  ...part2,
  ...part3,
  ...part4,
  ...part5,
].map((article) => ({ ...article, ...bookRewriteOverrides[article.slug] }));

export function getArticleBySlug(slug: string): ArticleData | undefined {
  return articlesData.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: BookCategory): ArticleData[] {
  return articlesData.filter((a) => a.category === category);
}

export function getArticlesBySlugs(slugs: string[]): ArticleData[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is ArticleData => Boolean(article));
}

export function getAllSlugs(): string[] {
  return articlesData.map((a) => a.slug);
}
