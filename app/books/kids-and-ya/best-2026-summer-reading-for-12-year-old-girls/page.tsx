import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import BookCTA from '@/components/article/BookCTA';

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best 2026 Summer Reading for 12-Year-Old Girls | BestPickZone',
  description:
    'The best 2026 summer reading for 12-year-old girls, ranked with honest reader-fit logic: Are You There God? It\'s Me, Margaret, A Wrinkle in Time, Anne of Green Gables, and more.',
  alternates: {
    canonical:
      'https://bestpickzone.com/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls',
  },
  openGraph: {
    title: 'Best 2026 Summer Reading for 12-Year-Old Girls',
    description:
      'A summer reading guide for 12-year-old girls with clear winner logic, content notes, and Amazon referral links for each pick.',
    url: 'https://bestpickzone.com/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls',
    type: 'article',
  },
}, { category: 'kids-and-ya' });

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Kids & Young Adult', href: '/books/kids-and-ya' },
  { label: 'Best 2026 Summer Reading for 12-Year-Old Girls' },
];

const books = [
  {
    title: "Are You There God? It's Me, Margaret",
    author: 'Judy Blume',
    bestFor: 'Best overall summer reading pick for 12-year-old girls',
    skipIf:
      "Skip this if the girl is reading well above grade level and wants plot complexity over interior voice — this book's power is in its intimacy, not its architecture.",
    whyItWins:
      'Nobody else has written the interior life of a 12-year-old girl with this much honesty and zero condescension.',
    description:
      "Are You There God? It's Me, Margaret is the strongest all-purpose summer reading pick for 12-year-old girls because it is one of the few books written specifically for them rather than at them. Margaret is eleven going on twelve, new to town, navigating friendships that feel like tests, a body she doesn't fully understand yet, and a religious identity she hasn't chosen. Blume writes her interior monologue without irony or adult hindsight — Margaret is exactly as self-conscious, dramatic, funny, and sincere as 12-year-old girls actually are. The book was published in 1970 and has never been out of print because the core experience it describes hasn't changed. Readers who pick this up at the right age often describe it as the first book that felt like it was about them specifically.",
  },
  {
    title: 'A Wrinkle in Time',
    author: 'Madeleine L\'Engle',
    bestFor: 'Best science fiction / adventure pick',
    skipIf:
      "Skip this if the reader wants grounded realistic fiction — L'Engle's universe-hopping narrative demands willingness to follow logic that is more mythic than scientific.",
    whyItWins:
      "Meg Murry is the rare female protagonist in a science fiction novel who wins through emotional intelligence and stubbornness, not competence at things boys are usually good at.",
    description:
      "A Wrinkle in Time works especially well at 12 because Meg Murry is 12 — awkward, underestimated, furious at the unfairness of school and adults, and in possession of gifts nobody around her recognizes yet. The tesseract, the Black Thing, and IT are not distractions from Meg's emotional journey; they are the structure through which it happens. What L'Engle figured out is that a 12-year-old girl's actual experience of the world — being dismissed, finding her people, discovering that love is a form of precision — maps cleanly onto cosmic stakes. This is the safest summer adventure recommendation for a girl who claims not to like reading, because Meg's frustration with her situation is instantly recognizable even before the plot becomes science fiction.",
  },
  {
    title: 'Anne of Green Gables',
    author: 'L.M. Montgomery',
    bestFor: 'Best classic for girls who love voice-driven fiction',
    skipIf:
      "Skip this if the reader needs fast modern pacing — Anne's story moves at the rhythm of Prince Edward Island seasons, not plot escalation. Readers who need action every chapter will stall out by chapter four.",
    whyItWins:
      "Anne Shirley has one of the most distinctive first-person voices in English-language fiction, and reading her is the clearest argument that a strong protagonist makes pace irrelevant.",
    description:
      "Anne of Green Gables has been in continuous print since 1908 because Anne Shirley is genuinely funny, stubbornly herself, and resistant to being made smaller than she is by adults who think imagination is a liability. The novel covers roughly ages 11 to 16 across its first arc, which makes it ideal for a 12-year-old who will recognize Anne's specific embarrassments — saying the wrong thing, wanting desperately to be liked and also refusing to change to earn it, being better at school than people expected. The friendship between Anne and Diana Barry is one of the most honestly rendered female friendships in children's literature. Unlike many classics, it is not assigned-reading dense: it reads quickly and with pleasure.",
  },
  {
    title: 'Wonder',
    author: 'R.J. Palacio',
    bestFor: 'Best for empathetic readers and family discussion',
    skipIf:
      "Skip this if the reader is looking for high-concept fantasy or adventure — Wonder's strength is emotional precision, not plot mechanics.",
    whyItWins:
      'The multiple-perspective structure makes this the most immediately discussable middle grade novel published in the last fifteen years.',
    description:
      "Wonder covers one school year for Auggie Pullman, a ten-year-old with a facial difference entering school for the first time. Palacio uses a shifting perspective structure — multiple narrators including Auggie's sister, his friend Jack, and others — that turns a story about one kid into a story about how a community of kids processes difference, loyalty, and the gap between who they want to be and how they actually behave. The novel works for 12-year-old girls in particular because the most morally complex characters are the ones trying to be good: Auggie's sister Via, and Jack, whose betrayal and reckoning is the emotional center of the middle section. The conversations this book generates — between kids, between kids and parents — are more substantive than most middle grade summer reading. Palacio doesn't let anyone be only a bystander.",
  },
  {
    title: 'Front Desk',
    author: 'Kelly Yang',
    bestFor: 'Best contemporary realistic fiction',
    skipIf:
      "Skip this if the reader wants fantasy or historical fiction — Front Desk is firmly in the present, and its power comes from specificity about immigration, class, and American contradictions that is more confrontational than some parents expect from middle grade.",
    whyItWins:
      "Mia Tang's voice is one of the freshest in middle grade fiction, and her story is specific enough about the actual experience of immigrant working-class life that it reads as reportage.",
    description:
      "Front Desk follows Mia Tang, a ten-year-old Chinese immigrant managing the front desk of a Calivista Motel while her parents work the cleaning and maintenance. Yang based the novel on her own childhood, which gives Mia's observations a specificity that generic middle grade fiction rarely achieves — the cost of a phone call to China, the way adults say one thing and mean another when they talk to immigrant families, the arithmetic of tip income and what it does to a month. Mia is also trying to become a writer, and the novel's structure includes her writing samples, which gives it an additional texture. For a 12-year-old who has experienced economic pressure or family immigrant experience, this is the most resonant realistic fiction recommendation on this list. For readers without that background, it is one of the most effective empathy-expanding books available at this grade level.",
  },
  {
    title: 'Coraline',
    author: 'Neil Gaiman',
    bestFor: 'Best pick for girls who want something genuinely unsettling',
    skipIf:
      'Skip this for sensitive readers or those who are easily frightened by psychological horror — the Other Mother and the button eyes are genuinely disturbing, not cartoon-scary.',
    whyItWins:
      "Short, perfectly constructed, and the only book on this list where the protagonist wins through courage rather than cleverness, which makes the ending feel earned instead of tidy.",
    description:
      "Coraline is 162 pages and can be finished in a long afternoon, which makes it the easiest summer reading recommendation on this list for a resistant reader or a busy schedule. What it does in those 162 pages is more sophisticated than most novels three times its length: it builds genuine dread through accumulation of wrong details, refuses to explain itself, and ends with a resolution that is satisfying without being safe. Coraline is not lovable the way many female protagonists are designed to be — she is bored, observant, somewhat rude to adults, and fundamentally curious even when curiosity is clearly the wrong response. Gaiman wrote her as a real child rather than an idealized one, which is why the novel's danger feels real. This is the pick for a 12-year-old who has already read all the obvious fantasy and wants something stranger and smaller.",
  },
] as const;

const faqs = [
  {
    q: 'What is the single best summer reading book for a 12-year-old girl in 2026?',
    a: "Are You There God? It's Me, Margaret is the strongest all-purpose pick because it was written specifically for girls at this exact age and describes their interior experience — social pressure, self-consciousness, friendship, and growing up — with more honesty than almost any other book on this list. A Wrinkle in Time is the better choice if she prefers adventure over interior voice.",
  },
  {
    q: 'My daughter says she hates reading. Where do I start?',
    a: "Start with Coraline — it is 162 pages, builds suspense quickly, and does not feel like assigned reading. A Wrinkle in Time is the second option because Meg Murry's frustration with school and adults connects immediately before the science fiction begins. Avoid starting with Anne of Green Gables for a resistant reader; the payoff is real but the pacing requires patience.",
  },
  {
    q: 'Are these books appropriate for 12-year-olds, or are some too mature?',
    a: "All six books are appropriate for most 12-year-olds with the notes included in the guide. Are You There God? It's Me, Margaret discusses puberty directly and honestly — that is appropriate for 12 and is the point of the book. Wonder includes bullying and grief. Coraline includes psychological horror that can genuinely disturb sensitive readers. Front Desk addresses immigration, economic hardship, and adult deception. None of these books include sexual content, graphic violence, or language that would be out of place at this age level.",
  },
  {
    q: 'Which pick works best for a strong or advanced reader?',
    a: "Anne of Green Gables rewards advanced readers most because its pleasures are stylistic — Montgomery's sentences and Anne's voice are worth savoring, not just following. A Wrinkle in Time has thematic complexity that holds up to analysis. Both have been used successfully in advanced middle school English programs.",
  },
];

const relatedGuides = [
  {
    href: '/books/best-books-for-girls-ages-8-12',
    title: 'Best Books for Girls Ages 8–12',
    text: 'A broader guide if you want more options across the middle grade range.',
  },
  {
    href: '/books/best-fantasy-books-for-teens',
    title: 'Best Fantasy Books for Teens',
    text: 'Good next step for readers who loved A Wrinkle in Time and want more genre fiction.',
  },
  {
    href: '/books/best-ya-coming-of-age-books',
    title: 'Best YA Coming-of-Age Books',
    text: 'Useful if she is reading above grade level and is ready for older YA themes.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best 2026 Summer Reading for 12-Year-Old Girls',
  description:
    'The best 2026 summer reading for 12-year-old girls, ranked with honest reader-fit logic and clear reasons to choose each book.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-26',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage:
    'https://bestpickzone.com/books/kids-and-ya/best-2026-summer-reading-for-12-year-old-girls',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best 2026 Summer Reading for 12-Year-Old Girls',
  numberOfItems: books.length,
  itemListElement: books.map((book, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: book.title,
    author: book.author,
  })),
};

export default function BestSummerReadingGirls12Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="mx-auto max-w-5xl px-4 py-10">
        <Breadcrumb items={breadcrumbItems} />

        <header className="mb-10 overflow-hidden rounded-[32px] border border-pink-200 bg-gradient-to-br from-pink-50 via-white to-rose-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-pink-100 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-pink-700">
              Summer Reading
            </span>
            <span>Published June 13, 2026</span>
            <span>For ages 11–13 / Grade 6–7</span>
          </div>
          <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Best 2026 Summer Reading for 12-Year-Old Girls
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            The best 2026 summer reading for a 12-year-old girl is{' '}
            <em>Are You There God? It&apos;s Me, Margaret</em>. It is the only book on this
            list written specifically for girls at this exact age — not aimed at a general
            middle grade audience and hoping girls find something in it. If she wants
            adventure, start with <em>A Wrinkle in Time</em>. If she wants something
            genuinely unsettling and short, give her <em>Coraline</em>.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            Every pick includes a specific skip-this-if note because the wrong book for
            this reader is worse than no book at all.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-pink-200 bg-pink-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-pink-700">
              Best overall
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Are You There God?</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The only book on this list written specifically for girls navigating exactly this age.
            </p>
          </div>
          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Best adventure
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">A Wrinkle in Time</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Meg Murry is 12, underestimated, and right about everything that matters.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
              Best for reluctant readers
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Coraline</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              162 pages, genuinely unsettling, can be finished in one long afternoon.
            </p>
          </div>
        </section>

        <section
          id="visual-map"
          className="mb-12 overflow-hidden rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Visual map
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Which kind of reader are you buying for?
            </h2>
          </div>

          <svg viewBox="0 0 860 280" className="mb-5 w-full" role="img" aria-label="Summer reading fit map for 12-year-old girls">
            <rect x="0" y="0" width="860" height="280" rx="28" fill="#fdf2f8" />
            <rect x="36" y="42" width="236" height="192" rx="24" fill="#ffffff" stroke="#f9a8d4" />
            <rect x="312" y="42" width="236" height="192" rx="24" fill="#ffffff" stroke="#c4b5fd" />
            <rect x="588" y="42" width="236" height="192" rx="24" fill="#ffffff" stroke="#94a3b8" />
            <text x="60" y="78" fill="#9d174d" fontSize="18" fontWeight="700">Wants to feel understood</text>
            <text x="60" y="112" fill="#374151" fontSize="16">1. Are You There God?</text>
            <text x="60" y="142" fill="#374151" fontSize="16">2. Wonder</text>
            <text x="60" y="172" fill="#374151" fontSize="16">3. Front Desk</text>
            <text x="336" y="78" fill="#5b21b6" fontSize="18" fontWeight="700">Wants adventure</text>
            <text x="336" y="112" fill="#374151" fontSize="16">1. A Wrinkle in Time</text>
            <text x="336" y="142" fill="#374151" fontSize="16">2. Anne of Green Gables</text>
            <text x="336" y="172" fill="#374151" fontSize="16">3. Coraline</text>
            <text x="612" y="78" fill="#334155" fontSize="18" fontWeight="700">Wants something quick</text>
            <text x="612" y="112" fill="#374151" fontSize="16">1. Coraline</text>
            <text x="612" y="142" fill="#374151" fontSize="16">2. Are You There God?</text>
            <text x="612" y="172" fill="#374151" fontSize="16">3. Wonder</text>
          </svg>

          <p className="text-sm leading-relaxed text-gray-600">
            The most common summer reading mistake is choosing the most respectable-sounding
            book on the list. Pick for the specific reader in front of you: what she responded to
            last, what kind of summer she is having, and how much patience she has for slow starts.
          </p>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">How we chose these books</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Written for this age, not just appropriate for it</p>
              <p className="text-sm leading-relaxed text-gray-600">
                There is a difference between a book a 12-year-old can handle and a book written specifically
                for her experience. We prioritized the latter.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Readable without a teacher</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Summer reading works when the book creates its own momentum. Every pick here has a
                first chapter that earns the second.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Honest skip-if notes</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Every book on this list is the wrong book for some readers. We name that clearly
                rather than pretending every pick works for everyone.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="mb-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Ranked picks
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              The best summer reading books for 12-year-old girls in 2026
            </h2>
          </div>

          <div className="space-y-6">
            {books.map((book, index) => (
              <article
                key={book.title}
                className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{book.title}</h3>
                    <p className="text-sm text-gray-500">by {book.author}</p>
                  </div>
                  <div className="max-w-sm rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
                    <p className="font-semibold text-gray-900">{book.bestFor}</p>
                    <p className="mt-1">{book.whyItWins}</p>
                  </div>
                </div>

                <p className="mb-4 text-base leading-relaxed text-gray-700">{book.description}</p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Best for
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">{book.bestFor}</p>
                  </div>
                  <div className="rounded-2xl border border-rose-100 bg-rose-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">
                      Skip this if
                    </p>
                    <p className="text-sm leading-relaxed text-gray-700">{book.skipIf}</p>
                  </div>
                </div>

                <BookCTA title={book.title} author={book.author} />
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-pink-200 bg-pink-50 p-6">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Quick advice for parents</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">Let her pick first</p>
              <p className="text-sm leading-relaxed text-gray-600">
                A book chosen by the reader is three times more likely to be finished than one
                handed to her. Use this guide to narrow the field, then let her choose between
                two or three finalists.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">Content notes are honest here</p>
              <p className="text-sm leading-relaxed text-gray-600">
                The skip-if notes in this guide are written plainly. If a book discusses puberty,
                immigration, or psychological horror, we say so. Use the notes to match the book
                to where she actually is, not where you wish she were.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">12 is not a monolith</p>
              <p className="text-sm leading-relaxed text-gray-600">
                The gap between an advanced 12-year-old reader and a reluctant one is larger than
                the gap between 12 and 16. Pick by reading level and temperament, not just age.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">Related reading</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-2xl border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <h3 className="mb-2 text-lg font-bold text-gray-900">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{guide.text}</p>
                <span className="mt-3 block text-sm font-semibold text-blue-600">Read guide {'->'}</span>
              </Link>
            ))}
          </div>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <Link href="/books/kids-and-ya" className="text-sm font-medium text-blue-600 hover:underline">
            Back to Kids &amp; Young Adult
          </Link>
        </div>
      </main>
    </>
  );
}
