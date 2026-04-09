/**
 * Estimates reading time for article content.
 * Average adult reading speed: ~238 words per minute.
 */
export function getReadingTime(text: string): number {
  const wordCount = text.trim().split(/\s+/).length
  const minutes = Math.ceil(wordCount / 238)
  return Math.max(1, minutes)
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`
}
