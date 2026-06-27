import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata';
import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import BookCTA from '@/components/article/BookCTA';

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best 2026 Summer Reading for High School Students | BestPickZone',
  description:
    'The best 2026 summer reading for high school students, ranked with honest reader-fit logic: The Outsiders, Fahrenheit 451, The Hate U Give, The Poet X, and more.',
  alternates: {
    canonical:
      'https://bestpickzone.com/books/kids-and-ya/best-2026-summer-reading-for-high-school-students',
  },
  openGraph: {
    title: 'Best 2026 Summer Reading for High School Students',
    description:
      'A polished summer reading guide for high school students with clear winner logic, content notes, and Amazon referral links for each pick.',
    url: 'https://bestpickzone.com/books/kids-and-ya/best-2026-summer-reading-for-high-school-students',
    type: 'article',
  },
}, {
  publishedTime: '2026-01-01T00:00:00Z',
  category: 'kids-and-ya' });

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/books' },
  { label: 'Kids & Young Adult', href: '/books/kids-and-ya' },
  { label: 'Best 2026 Summer Reading for High School Students' },
];

const books = [
  {
    title: 'The Outsiders',
    author: 'S.E. Hinton',
    bestFor: 'Best overall summer reading pick',
    skipIf:
      'Skip this if the student only wants contemporary settings and current slang.',
    whyItWins:
      'Short, emotionally direct, and immediately teachable without feeling like homework.',
    description:
      'The Outsiders remains the strongest all-purpose summer reading book for high school students because it is readable in a weekend, emotionally legible to teenagers, and rich enough for class discussion afterward. Ponyboy, Johnny, and the Greasers still feel close to adolescent intensity: loyalty, class pressure, loneliness, and the fear that adults have already made the world unequal. This is the rare assigned-reading candidate that can satisfy both the teacher who wants substance and the student who just wants a story that moves.',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    bestFor: 'Best classic for discussion and essays',
    skipIf:
      'Skip this if the student struggles with symbolism-heavy writing and needs something more grounded.',
    whyItWins:
      'A compact classic that creates easy entry points into censorship, conformity, and media culture.',
    description:
      'If the summer reading goal is a classic that will generate strong class conversation in the fall, Fahrenheit 451 is the cleanest recommendation. Bradbury writes in vivid, combustible scenes rather than long Victorian paragraphs, which matters for real high school readers. The book is short, quotable, and still sharp on entertainment culture, passive consumption, and intellectual drift. It gives students something to argue with, which is usually what makes an assigned book stick.',
  },
  {
    title: 'The Hate U Give',
    author: 'Angie Thomas',
    bestFor: 'Best modern novel for social conversation',
    skipIf:
      'Skip this for younger or heavily sheltered readers who are not ready for violence, grief, and explicit language.',
    whyItWins:
      'One of the most discussable contemporary YA novels on identity, code-switching, race, and voice.',
    description:
      'The Hate U Give works especially well for students who disengage from older school texts because it sounds like a living person rather than a museum object. Starr Carter moves between two worlds and narrates that split with urgency, humor, and self-awareness. The novel is emotionally immediate, but it is also structurally useful for teachers because it opens strong conversations about public narratives, protest, family loyalty, and the difference between being seen and being known.',
  },
  {
    title: 'The Poet X',
    author: 'Elizabeth Acevedo',
    bestFor: 'Best for reluctant readers or packed summer schedules',
    skipIf:
      'Skip this if the student wants plot mechanics above all else; this is voice-first and interior.',
    whyItWins:
      'Written in verse, but never thin. Fast to finish, easy to enter, and emotionally powerful.',
    description:
      'The Poet X is one of the smartest summer reading choices for high school students who are capable readers but resistant readers. Acevedo uses verse to lower friction without lowering seriousness. Xiomara’s voice arrives fully formed from page one: angry, observant, funny, embarrassed, tender. Students who claim they hate reading often discover that what they hate is slog. This book removes slog while keeping theme, style, and discussion value fully intact.',
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    bestFor: 'Best nonfiction pick for older teens',
    skipIf:
      'Skip this for freshmen or for readers who are not ready for family abuse, extremism, and traumatic memory.',
    whyItWins:
      'A memoir that feels urgent enough for pleasure reading while still offering serious analytical material.',
    description:
      'For older high school students, especially juniors and seniors, Educated is the best nonfiction summer reading pick on this list. Westover’s memoir is about education, but not in a simplistic inspirational way. It is also about loyalty, self-invention, knowledge as rupture, and the emotional cost of leaving the story your family tells about itself. The prose is clear enough for broad accessibility, yet the book gives advanced students plenty to analyze around memory, authority, and identity formation.',
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    bestFor: 'Best for empathetic readers who want depth',
    skipIf:
      'Skip this if the student needs a fast, purely straightforward narrative voice.',
    whyItWins:
      'A memorable entry point into war, language, mortality, and moral choice.',
    description:
      'The Book Thief is a stronger summer pick than many heavier war novels because it stays emotionally accessible while still carrying real moral weight. Death narrates, which could have felt gimmicky in lesser hands, but here it gives the novel lift and distance at the same time. Students who respond to language, friendship, and loss tend to remember this book for years. It is especially useful when the goal is to keep a reader emotionally engaged over summer rather than simply assigning a historical duty text.',
  },
  {
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    bestFor: 'Best stretch pick for advanced high school readers',
    skipIf:
      'Skip this if the student needs immediate plot momentum; the novel works through quiet dread, not action.',
    whyItWins:
      'A serious, unsettling novel for AP, IB, and discussion-heavy classrooms.',
    description:
      'Never Let Me Go is the best choice here for advanced readers who want something more literary than conventionally YA. Ishiguro’s surface calm is the point: the novel teaches students how to read implication, omission, and atmosphere rather than waiting for everything to be announced. It is one of the best books on this list for close reading, but it is not the safest broad recommendation. Give it to the student who likes ambiguity and is ready to sit with a book that grows darker the more fully they understand it.',
  },
] as const;

const faqs = [
  {
    q: 'What is the best 2026 summer reading book for high school students overall?',
    a: 'The Outsiders is the best overall pick because it is short, emotionally direct, and still rich enough for class discussion, essays, and re-reading.',
  },
  {
    q: 'What if the student says they hate reading?',
    a: 'Start with The Poet X or The Outsiders. Both are accessible quickly, create emotional momentum early, and do not feel like punishment disguised as literature.',
  },
  {
    q: 'Are these all brand-new books from 2026?',
    a: 'No. This is a guide to the best summer reading for high school students in 2026, not a list of books published in 2026. We prefer durable books that actually work for real students over fake freshness.',
  },
  {
    q: 'Which pick is best for advanced or honors students?',
    a: 'Never Let Me Go is the strongest stretch pick for advanced readers, while Educated is the best nonfiction option for older students who want serious discussion material.',
  },
];

const relatedGuides = [
  {
    href: '/books/best-books-for-high-school-students',
    title: 'Best Books for High School Students',
    text: 'A broader all-year guide if you want more classroom and independent-reading options.',
  },
  {
    href: '/books/best-ya-coming-of-age-books',
    title: 'Best YA Coming-of-Age Books',
    text: 'Useful if the student responds best to identity, friendship, and growing-up stories.',
  },
  {
    href: '/books/best-books-for-reluctant-readers',
    title: 'Best Books for Reluctant Readers',
    text: 'A better next step if the real problem is reading resistance, not topic selection.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best 2026 Summer Reading for High School Students',
  description:
    'The best 2026 summer reading for high school students, ranked with honest reader-fit logic and clear reasons to choose each book.',
  datePublished: '2026-06-13',
  dateModified: '2026-06-26',
  author: { '@type': 'Organization', name: 'BestPickZone' },
  publisher: { '@type': 'Organization', name: 'BestPickZone' },
  mainEntityOfPage:
    'https://bestpickzone.com/books/kids-and-ya/best-2026-summer-reading-for-high-school-students',
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
  name: 'Best 2026 Summer Reading for High School Students',
  numberOfItems: books.length,
  itemListElement: books.map((book, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: book.title,
    author: book.author,
  })),
};

export default function BestSummerReadingHighSchoolPage() {
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

        <header className="mb-10 overflow-hidden rounded-[32px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 shadow-sm md:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-orange-100 px-3 py-1 font-semibold uppercase tracking-[0.18em] text-orange-700">
              Summer Reading
            </span>
            <span>Published June 13, 2026</span>
            <span>For grades 9-12</span>
          </div>
          <h1 className="mb-4 max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Best 2026 Summer Reading for High School Students
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-700">
            The best 2026 summer reading for high school students is <em>The Outsiders</em>.
            It is short enough to finish without dread, emotionally honest enough to matter,
            and teachable without feeling dead on arrival. If you want a sharper classic,
            start with <em>Fahrenheit 451</em>. If you need a modern novel that actually sounds
            alive to teenagers, pick <em>The Hate U Give</em>.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
            This guide is built for real summer-reading decisions: assigned reading, honors prep,
            reluctant readers, and students who need a book that feels worth carrying into August.
          </p>
        </header>

        <section className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
              Best overall
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">The Outsiders</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The safest broad recommendation when you need one book that is readable, discussable,
              and not instantly resented.
            </p>
          </div>
          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Best classic
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">Fahrenheit 451</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Best for discussion-heavy classes that still need a short book with actual narrative heat.
            </p>
          </div>
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Best modern pick
            </p>
            <h2 className="mb-2 text-xl font-bold text-gray-900">The Hate U Give</h2>
            <p className="text-sm leading-relaxed text-gray-700">
              Best for students who need a contemporary voice, strong social relevance, and real momentum.
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
              Which kind of summer reader are you buying for?
            </h2>
          </div>

          <svg viewBox="0 0 860 280" className="mb-5 w-full" role="img" aria-label="Summer reading fit map">
            <rect x="0" y="0" width="860" height="280" rx="28" fill="#fff7ed" />
            <rect x="36" y="42" width="236" height="192" rx="24" fill="#ffffff" stroke="#fdba74" />
            <rect x="312" y="42" width="236" height="192" rx="24" fill="#ffffff" stroke="#7dd3fc" />
            <rect x="588" y="42" width="236" height="192" rx="24" fill="#ffffff" stroke="#86efac" />
            <text x="60" y="78" fill="#9a3412" fontSize="20" fontWeight="700">Needs momentum fast</text>
            <text x="60" y="112" fill="#374151" fontSize="18">1. The Poet X</text>
            <text x="60" y="142" fill="#374151" fontSize="18">2. The Outsiders</text>
            <text x="60" y="172" fill="#374151" fontSize="18">3. Fahrenheit 451</text>
            <text x="336" y="78" fill="#075985" fontSize="20" fontWeight="700">Needs class discussion value</text>
            <text x="336" y="112" fill="#374151" fontSize="18">1. Fahrenheit 451</text>
            <text x="336" y="142" fill="#374151" fontSize="18">2. The Hate U Give</text>
            <text x="336" y="172" fill="#374151" fontSize="18">3. Educated</text>
            <text x="612" y="78" fill="#166534" fontSize="20" fontWeight="700">Needs a stretch read</text>
            <text x="612" y="112" fill="#374151" fontSize="18">1. Never Let Me Go</text>
            <text x="612" y="142" fill="#374151" fontSize="18">2. Educated</text>
            <text x="612" y="172" fill="#374151" fontSize="18">3. The Book Thief</text>
          </svg>

          <p className="text-sm leading-relaxed text-gray-600">
            Summer reading usually fails when adults optimize for respectability before fit. Pick
            for pace first, then for discussion depth, then for literary difficulty.
          </p>
        </section>

        <section className="mb-12 rounded-[32px] border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">How we chose these books</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Readable over summer</p>
              <p className="text-sm leading-relaxed text-gray-600">
                We prioritized books students can actually finish without needing a teacher to drag them through.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Strong fall discussion value</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Good summer reading should survive the return to school and generate essays, debate, and memory.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-900">Real student fit</p>
              <p className="text-sm leading-relaxed text-gray-600">
                We include honest skip-this-if notes because a good book for one student can be the wrong first book for another.
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
              The best summer reading books for high school students in 2026
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

        <section className="mb-12 rounded-[32px] border border-blue-200 bg-blue-50 p-6">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">Quick advice for parents and teachers</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">Do not confuse hard with valuable</p>
              <p className="text-sm leading-relaxed text-gray-600">
                A summer book that gets finished and remembered beats a "more impressive" one that dies on page 26.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">Voice matters in summer</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Teenagers read more willingly when the narrator sounds like someone with a pulse.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="mb-2 font-semibold text-gray-900">Match the assignment to the student</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Advanced readers can stretch into Ishiguro or Westover. Everyone else does better with immediate traction first.
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
