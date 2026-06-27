import type { Metadata } from 'next'
import { withArticleMetadataDefaults } from '@/lib/article-metadata'

const pageUrl = 'https://bestpickzone.com/books/best-cyberpunk-novels-all-time'
const heroImage =
  'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=80'

export const metadata: Metadata = withArticleMetadataDefaults({
  title: 'Best Cyberpunk Novels All Time',
  description:
    'Best cyberpunk novels of all time, from Neuromancer to Snow Crash, for readers who want neon, code, surveillance, and corporate rot.',
  alternates: { canonical: pageUrl },
}, { category: 'books' })

export default function CyberpunkPage() {
  const picks = [
    ['Neuromancer', 'William Gibson', 'Best overall cyberpunk benchmark'],
    ['Snow Crash', 'Neal Stephenson', 'Best if you want more velocity and satire'],
    ['Altered Carbon', 'Richard K. Morgan', 'Best if you want noir plus body-tech violence'],
    ['Do Androids Dream of Electric Sheep?', 'Philip K. Dick', 'Best proto-cyberpunk moral unease'],
    ['Synners', 'Pat Cadigan', 'Best if you want media-tech consciousness overload'],
  ] as const
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">Best Cyberpunk Novels Of All Time</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        The best cyberpunk novel of all time is still <strong>Neuromancer</strong> because it gave the genre its most enduring texture:
        console cowboys, corporate domination, information overload, and language that feels wired into the machinery itself. If you want
        the same core ideas with more comic speed and clearer exposition, start with <strong>Snow Crash</strong> instead.
      </p>
      <img src={heroImage} alt="A neon-soaked cyberpunk city scene with glowing signs, wet streets, and futuristic urban atmosphere." className="mb-6 w-full rounded-xl shadow-sm" />
      <p className="mb-8 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm leading-relaxed text-cyan-900">
        Titles, authors, and availability verified against Amazon as of June 2026. Availability and price can change — confirm before purchasing.
      </p>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What is cyberpunk, and where did the genre come from?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Cyberpunk is the part of science fiction that usually asks what happens when advanced technology lands in a broken social world instead of a clean utopia.
          The genre is obsessed with high tech and low trust: megacorporations, hacked bodies, artificial intelligence, surveillance, urban collapse, and people trying to survive systems they did not build.
          The mood matters as much as the gadgets. Cyberpunk tends to feel neon-lit, crowded, cynical, stylish, and morally unstable.
        </p>
        <p className="leading-relaxed text-gray-700">
          As a recognizable genre, cyberpunk took shape in the late 1970s and early 1980s, then crystallized with books like <strong>Neuromancer</strong> by William Gibson.
          It drew energy from noir fiction, punk attitude, computer culture, Japanese urban imagery, and growing anxiety about corporate power and digital life.
          That is why the best cyberpunk novels still feel relevant: they are not just predicting gadgets, they are dramatizing what happens when technology amplifies inequality, alienation, and control.
        </p>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Which cyberpunk novels still matter most today?</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead><tr className="border-b border-gray-200 bg-gray-50"><th className="px-3 py-3 font-semibold">Book</th><th className="px-3 py-3 font-semibold">Author</th><th className="px-3 py-3 font-semibold">Best For</th><th className="px-3 py-3 font-semibold">Amazon</th></tr></thead>
          <tbody>
            {picks.map(([title, author, fit]) => (
              <tr key={title} className="border-b border-gray-100"><td className="px-3 py-3 font-semibold">{title}</td><td className="px-3 py-3 text-gray-700">{author}</td><td className="px-3 py-3 text-gray-700">{fit}</td><td className="px-3 py-3"><a href={`https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="font-semibold text-cyan-700">Find on Amazon</a></td></tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">What makes a novel cyberpunk instead of just futuristic science fiction?</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          Cyberpunk is usually high technology under low trust. Megacorporations, hacked identity, body modification, urban decay,
          synthetic consciousness, and a worldview shaped by systems too large to escape all tend to matter more than clean utopian futurism.
          The best books in the mode are not just gadget catalogs; they are pressure studies about power, access, and what remains human under networks and market logic.
        </p>
        <p className="leading-relaxed text-gray-700">
          If you want a broader science-fiction lane, move to
          <strong> <a href="/books/best-sci-fi-doorstoppers-epic-space-opera">best sci-fi doorstoppers and epic space opera</a></strong>
          and <strong><a href="/books/best-science-fiction-books">best science fiction books</a></strong>.
        </p>
        <a href={`https://www.amazon.com/s?k=${encodeURIComponent('Neuromancer William Gibson')}&tag=althcu-20`} target="_blank" rel="noopener nofollow" className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-cyan-700 px-6 py-3 text-base font-bold text-white transition hover:bg-cyan-600">
          Click Here to Buy on Amazon
        </a>
      </section>
    </main>
  )
}
