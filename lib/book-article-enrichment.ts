import type { ArticleData, BookPick, BookCategory } from './books-data'

type ReaderSignal = {
  title: string
  text: string
}

const categoryFraming: Record<BookCategory, { summary: string; guidance: string; warning: string }> = {
  author: {
    summary:
      'Author pages work best when you are not asking "is this writer good?" but "which book gives me the right version of this writer first?"',
    guidance:
      'The strongest starting points usually balance reputation, accessibility, and how well the book represents the author at full power.',
    warning:
      'The wrong first book can make a major author feel overrated, especially when the fan favorite is long, structurally odd, or sequel-dependent.',
  },
  genre: {
    summary:
      'Genre roundups are most useful when they separate mood, pacing, and reader tolerance for darkness instead of treating every pick as interchangeable.',
    guidance:
      'Use these lists to match the reading experience you actually want: page-turner, atmosphere, ambition, comfort, or challenge.',
    warning:
      'If you ignore the tradeoffs, you can easily buy the most famous title in a category and still hate the reading experience.',
  },
  'self-help': {
    summary:
      'Self-help pages are best treated like problem-solving guides, not motivational posters.',
    guidance:
      'The right book is the one that matches your bottleneck right now: habits, thinking, money, leadership, focus, relationships, or emotional resilience.',
    warning:
      'Broad bestseller energy is usually a weak buying signal here because many popular self-help books repeat the same advice with different branding.',
  },
  'kids-ya': {
    summary:
      'Kids and YA buying decisions work better when you match the book to reading confidence and emotional readiness, not just age.',
    guidance:
      'A great fit often means choosing the book a child will actually finish, even if it is shorter, weirder, or more illustrated than the "prestige" option.',
    warning:
      'Parents and gift buyers lose kids fastest when they choose for literary reputation rather than momentum, humor, and reader confidence.',
  },
  'reader-intent': {
    summary:
      'Reader-intent pages should solve a live shopping problem quickly: what to read on vacation, in a slump, for a club, or after finishing a favorite book.',
    guidance:
      'These guides work best when they narrow by situation, attention span, and emotional payoff rather than handing out a generic top-ten list.',
    warning:
      'The biggest failure mode is buying the "best" book on paper when what you actually needed was a faster, warmer, darker, or easier read.',
  },
}

function normalizeBestFor(bestFor: string) {
  return bestFor.replace(/^best for\s*/i, '').replace(/^the\s+/i, '').trim()
}

function ordinal(index: number) {
  return ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'][index] || `${index + 1}th`
}

export function buildCategoryContext(article: ArticleData) {
  const frame = categoryFraming[article.category]
  return `${frame.summary} ${frame.guidance} ${frame.warning}`
}

export function buildReaderSignals(article: ArticleData): ReaderSignal[] {
  const topPick = article.books[0]
  const altPick = article.books[1] || article.books[0]
  const lastPick = article.books[article.books.length - 1] || article.books[0]

  return [
    {
      title: `Start with ${topPick.title} if you want the safest recommendation`,
      text: `${topPick.title} is the clearest pick for readers who want ${normalizeBestFor(
        topPick.bestFor
      ).toLowerCase()}. It usually wins because it delivers the category promise without demanding that you already love every quirk of the niche.`,
    },
    {
      title: `Pick ${altPick.title} if your taste runs slightly off the center line`,
      text: `${altPick.title} is the better move when the obvious bestseller is not quite your speed. In practical terms, it tends to work better for readers who want a different mood, a cleaner structure, or a more specific reader fit than the default starting point.`,
    },
    {
      title: `Skip the wrong entry point and you will judge the whole category badly`,
      text: `${lastPick.title} is not a bad book just because it appears later. It usually ranks lower here because the fit is narrower, the patience requirement is higher, or the tone is less welcoming for someone testing the category for the first time.`,
    },
  ]
}

export function buildDirectAnswerDetail(article: ArticleData) {
  const topPick = article.books[0]
  const altPick = article.books[1] || article.books[0]

  return `That recommendation is less about prestige and more about reader fit. ${topPick.title} is the strongest overall answer when you want ${normalizeBestFor(
    topPick.bestFor
  ).toLowerCase()}, while ${altPick.title} becomes the smarter pivot if you want a different tone, structure, or level of commitment from the same topic.`
}

export function buildBookFitParagraph(article: ArticleData, book: BookPick, index: number) {
  const categoryText = categoryFraming[article.category].summary
  return `${book.title} earns the ${ordinal(index)} slot because it answers a specific version of the search instead of trying to satisfy every reader at once. In this category, "${normalizeBestFor(
    book.bestFor
  )}" usually means the book has the cleanest fit for a certain mood, patience level, or shopping goal. ${categoryText}`
}

export function buildBookTradeoffParagraph(book: BookPick) {
  return `The main tradeoff is simple: ${book.skipIf} That is not a small caveat. It tells you whether this book is likely to feel rewarding, frustrating, too slow, too intense, or just wrong for the reading mood you have right now.`
}

export function buildVerdictBridge(article: ArticleData) {
  const first = article.books[0]
  const second = article.books[1]

  if (!second) {
    return `If you are still undecided, the safest move is to start with ${first.title} in the format you are most likely to finish.`
  }

  return `If you only buy one book from this page, choose ${first.title}. If you already know that fit is not quite right, move directly to ${second.title} instead of forcing yourself through the obvious bestseller.`
}

export function verificationLabel(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}
