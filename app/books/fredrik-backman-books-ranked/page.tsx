import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/books/fredrik-backman-books-ranked'
const heroImage =
  'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80'

const picks = [
  {
    rank: '4',
    title: 'My Grandmother Asked Me to Tell You She’s Sorry',
    label: 'Best whimsical-emotional crossover',
    reason:
      'A strong Backman book, but more eccentric and fairy-tale-inflected than the cleanest entry points for most readers.',
    description:
      'This novel follows Elsa, a lonely and very bright child navigating grief, family damage, and the strange moral afterlife of her grandmother’s stories. The book shows one of Backman’s most distinctive gifts: he can make whimsy function as an emotional delivery system rather than a decorative quirk. Readers who love it usually love its tenderness, imaginative structure, and refusal to separate fantasy from hurt. Readers who resist it often want a quieter, less storybook-shaped experience.',
    bestFor:
      'Readers who want the softer, more openly whimsical version of Backman before moving into his heavier community novels.',
  },
  {
    rank: '3',
    title: 'Anxious People',
    label: 'Best crowd-pleasing ensemble',
    reason:
      'Probably the easiest later Backman to recommend to a broad audience, but not quite as piercing as his top two books.',
    description:
      'A failed bank robbery, an apartment viewing, and a room full of emotionally disordered strangers should feel like a gimmick, but Backman turns the setup into a study of panic, loneliness, and ordinary human embarrassment. The book is funny in a very specific Backman way: anxious, affectionate, and always one beat away from sadness. It is one of his most accessible novels because the ensemble structure keeps the pages moving, even when the real subject is pain people do not know how to name.',
    bestFor:
      'Readers who want humor, momentum, and a warm entry into Backman’s worldview without starting with his heaviest material.',
  },
  {
    rank: '2',
    title: 'Beartown',
    label: 'Best if you want the sharpest social pressure',
    reason:
      'The most morally forceful Backman novel for many readers, but also heavier and less immediately comforting than Ove.',
    description:
      'Beartown is where Backman proves he is not only a writer of lovable cranks and cathartic softness. The novel uses a small hockey town to examine loyalty, complicity, class, masculinity, and the way communities protect themselves when truth becomes inconvenient. It is sharper, colder, and more openly political than A Man Called Ove, while still keeping Backman’s signature interest in what ordinary people owe one another. For some readers, this is his best book. It lands second here only because it is not the easiest place to start.',
    bestFor:
      'Readers who want the darkest, most socially serious version of Backman and do not mind leaving “uplifting fiction” territory behind.',
  },
  {
    rank: '1',
    title: 'A Man Called Ove',
    label: 'Best overall starting point',
    reason:
      'The clearest expression of Backman’s emotional method: abrasive surface, buried grief, communal repair, and a payoff that feels earned.',
    description:
      'Ove works so well as an introduction because it contains nearly every Backman strength in a controlled form. The premise is simple: a rigid, grief-stricken older man keeps being interrupted by the people around him. But Backman uses that setup to build a novel about widowhood, routine, pride, usefulness, and reluctant belonging. The emotional reversals are visible, but they still work because the book understands that sentiment only lands if it is carried by character. This is the novel that made him a global name, and it remains the safest answer when someone asks where to begin.',
    bestFor:
      'Readers who want the broadest, most reliable Fredrik Backman recommendation and the fastest explanation for why so many people love him.',
  },
] as const

function amazonLink(title: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Fredrik Backman`)}&tag=althcu-20`
}

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Fredrik Backman Books Ranked',
  description:
    'Fredrik Backman books ranked with fuller book descriptions, author history, style notes, and a clear start-here recommendation.',
  alternates: { canonical: pageUrl },
}, { category: 'books' })

export default function BackmanRankedPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
        Fredrik Backman Books Ranked
      </h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        <strong>A Man Called Ove</strong> stays at number one because it is the clearest version of
        what Fredrik Backman does best: abrasive first impressions, hidden grief, ordinary people
        carrying extraordinary emotional weight, and endings that release tension without feeling fake.
        <strong> Beartown</strong> is the stronger choice only if you already know you want the darker,
        more communal-moral version of his work.
      </p>
      <img
        src={heroImage}
        alt="A stack of contemporary uplifting fiction and character-driven Scandinavian novels arranged cleanly on a light wood table."
        className="mb-6 w-full rounded-xl shadow-sm"
      />
      <p className="mb-8 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-relaxed text-sky-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and
        price can change, so confirm before purchasing.
      </p>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Who is Fredrik Backman?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Fredrik Backman is a Swedish writer, blogger, and former columnist whose fiction blends
          humor, emotional injury, and unusually strong sympathy for ordinary people who do not always
          make a good first impression. His official site describes his novels as “wickedly funny,
          touching and wise” stories about everyday courage, and that is close to the center of his
          appeal. According to his Wikipedia biography, he was born in 1981, grew up in Helsingborg,
          worked as a columnist and magazine writer, and broke through as a novelist with{' '}
          <em>A Man Called Ove</em> in 2012.
        </p>
        <p className="leading-relaxed text-gray-700">
          His career matters because it explains the tone of the books. Backman writes like somebody
          who spent years observing ordinary public behavior and then asking what private wound might
          be hiding behind it. That mix of wit, irritation, kindness, and delayed emotional exposure
          is why his fiction connects so strongly with readers who want books that are accessible but
          not emotionally empty.
        </p>
      </section>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          How should you rank Fredrik Backman books?
        </h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-3 py-3 font-semibold">Rank</th>
              <th className="px-3 py-3 font-semibold">Book</th>
              <th className="px-3 py-3 font-semibold">Why it lands here</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((pick) => (
              <tr key={pick.title} className="border-b border-gray-100 align-top">
                <td className="px-3 py-3 font-semibold">{pick.rank}</td>
                <td className="px-3 py-3 font-semibold text-gray-900">{pick.title}</td>
                <td className="px-3 py-3 text-gray-700">{pick.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          What is Fredrik Backman’s writing style?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Backman’s style is emotional, conversational, and very deliberately reader-facing. He likes
          to begin with a person or community that seems irritating, damaged, or absurdly overdefined,
          then slowly reveal the fear, shame, or grief underneath that surface. That is why his books
          often feel sentimental to some readers and deeply cathartic to others. He is always pushing
          toward understanding, even when the people on the page behave badly.
        </p>
        <p className="leading-relaxed text-gray-700">
          He also has a recognizable structural habit: he circles a wound before he names it. The
          jokes come first, then the ache, then the moral clarifying moment. In the lighter books,
          that rhythm feels warm and crowd-pleasing. In <em>Beartown</em>, the same rhythm gets used
          for something much harsher and more socially exposing.
        </p>
      </section>

      {picks.map((pick) => {
        const href = amazonLink(pick.title)
        return (
          <section
            key={pick.title}
            className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              #{pick.rank}: {pick.title}
            </h2>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              {pick.label}
            </p>
            <p className="mb-4 leading-relaxed text-gray-700">{pick.description}</p>
            <div className="mb-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Why it ranks here</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.reason}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Best for</h3>
                <p className="text-sm leading-relaxed text-gray-700">{pick.bestFor}</p>
              </div>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-sky-600 px-6 py-3 text-base font-bold text-white transition hover:bg-sky-500"
            >
              Click Here to Buy on Amazon
            </a>
          </section>
        )
      })}

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Which Fredrik Backman book should you start with first?
        </h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Start with{' '}
          <a href={amazonLink('A Man Called Ove')} target="_blank" rel="noopener nofollow">
            <strong>A Man Called Ove</strong>
          </a>{' '}
          if you want the broadest recommendation. Start with{' '}
          <a href={amazonLink('Beartown')} target="_blank" rel="noopener nofollow">
            <strong>Beartown</strong>
          </a>{' '}
          only if you specifically want hockey-town pressure, moral complicity, and a much heavier
          communal climate.
        </p>
        <p className="leading-relaxed text-gray-700">
          For quick biography context, this{' '}
          <a href="https://en.wikipedia.org/wiki/Fredrik_Backman" target="_blank" rel="noopener nofollow">
            Wikipedia page on Fredrik Backman
          </a>{' '}
          is a useful reference, and his{' '}
          <a href="https://www.fredrikbackman.com/" target="_blank" rel="noopener nofollow">
            official website
          </a>{' '}
          plus the{' '}
          <a href="https://www.simonandschuster.com/p/fredrik-backman" target="_blank" rel="noopener nofollow">
            Simon &amp; Schuster author page
          </a>{' '}
          are good for catalog context.
        </p>
      </section>
    </main>
  )
}
