"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { dealGuides, findGuide } from "@/lib/deals/products";
type Result = {
  budget: number | null;
  intent: string;
  message: string;
  guides: {
    slug: string;
    product: string;
    title: string;
    answer: string;
    checks: { label: string; detail: string }[];
    searches: { name: string; url: string; affiliate: boolean }[];
  }[];
};
export default function DealAgent() {
  const [query, setQuery] = useState(""),
    [result, setResult] = useState<Result | null>(null),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [feedback, setFeedback] = useState("");
  useEffect(() => {
    const topic = new URLSearchParams(location.search).get("topic");
    const g = topic && findGuide(topic);
    if (g) setQuery(`Is this ${g.product} offer a good deal?`);
  }, []);
  async function ask(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    setResult(null);
    setFeedback("");
    try {
      const r = await fetch("/api/deal-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Try again.");
    } finally {
      setBusy(false);
    }
  }
  async function share(helpful: boolean) {
    if (!result) return;
    setFeedback("Saving…");
    try {
      const r = await fetch("/api/deal-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          consent: true,
          topic: result.guides[0]?.slug || "unmatched",
          intent: result.intent,
          budgetBand:
            result.budget === null
              ? "unspecified"
              : result.budget < 100
                ? "under-100"
                : result.budget < 500
                  ? "100-499"
                  : "500-plus",
          helpful,
        }),
      });
      setFeedback(
        r.ok
          ? "Thank you. Your anonymous topic and feedback were saved."
          : "Feedback could not be saved. Please try again.",
      );
    } catch {
      setFeedback("Feedback could not be saved.");
    }
  }
  return (
    <>
      <form className="deal-panel" onSubmit={ask}>
        <label htmlFor="shopping-question">
          What are you looking for?
          <textarea
            id="shopping-question"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setResult(null);
            }}
            minLength={3}
            maxLength={400}
            required
            rows={3}
            placeholder="Is a refurbished Airwrap worth it? Find a Bambino setup under $500."
          />
        </label>
        <p className="deal-small">
          Include a product, budget and must-haves. Do not include personal
          information. This guided assistant matches editorial buying guides; it
          does not retrieve or rank live retailer prices.
        </p>
        <button className="deal-button" disabled={busy}>
          {busy ? "Finding guidance…" : "Find my buying checks →"}
        </button>
      </form>
      <p className="error" role="alert">
        {error}
      </p>
      <div className="deal-actions" aria-label="Example shopping questions">
        {[
          "Is a Bambino bundle a good deal?",
          "Should I buy refurbished Airwrap?",
          "Find a CREAMi under $250",
        ].map((q) => (
          <button
            key={q}
            className="deal-button secondary"
            onClick={() => {
              setQuery(q);
              setResult(null);
            }}
          >
            {q}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {result && (
          <section>
            <h2>Your next buying decision</h2>
            <p>{result.message}</p>
            {result.budget !== null && (
              <p>
                <strong>
                  Your stated budget: ${result.budget.toLocaleString("en-US")}
                </strong>{" "}
                — a personal limit, not a verified product price. No matching
                offer has been confirmed.
              </p>
            )}
            <div className="deal-status">
              <strong>Live prices and price history: unavailable</strong>
              <p>
                Model, condition, stock, seller terms and your other
                requirements still need verification. Searches below may include
                products outside your budget.
              </p>
            </div>
            {result.guides.map((g) => (
              <article className="deal-panel" key={g.slug}>
                <h3>{g.title}</h3>
                <p>{g.answer}</p>
                <ul>
                  {g.checks.map((c) => (
                    <li key={c.label}>
                      <strong>{c.label}:</strong> {c.detail}
                    </li>
                  ))}
                </ul>
                <div className="deal-actions">
                  <Link href={`/deals/${g.slug}`} className="deal-button">
                    Read the full deal guide →
                  </Link>
                  <Link
                    href={`/deal-alerts?topic=${g.slug}${result.budget ? `&target=${result.budget}` : ""}`}
                    className="deal-button secondary"
                  >
                    Save my target →
                  </Link>
                </div>
                <div className="deal-actions">
                  {g.searches.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      rel={
                        s.affiliate
                          ? "sponsored noopener"
                          : "noopener noreferrer"
                      }
                      target="_blank"
                    >
                      Search {s.name}
                      {s.affiliate ? " (affiliate)" : ""} ↗
                    </a>
                  ))}
                </div>
              </article>
            ))}
            <aside className="deal-panel">
              <h3>Help choose our next content update</h3>
              <p>
                Optionally share whether this helped. We save only the matched
                topic, question type, budget range and your rating—not your
                question text or email. Feedback informs editorial review, never
                automatic publication.
              </p>
              <div className="deal-actions">
                <button
                  className="deal-button secondary"
                  disabled={
                    feedback.startsWith("Thank") || feedback === "Saving…"
                  }
                  onClick={() => share(true)}
                >
                  Share: useful
                </button>
                <button
                  className="deal-button secondary"
                  disabled={
                    feedback.startsWith("Thank") || feedback === "Saving…"
                  }
                  onClick={() => share(false)}
                >
                  Share: still need help
                </button>
              </div>
              <p role="status">{feedback}</p>
            </aside>
          </section>
        )}
      </div>
      <section>
        <h2>Choose a product to start</h2>
        <div className="deal-grid">
          {dealGuides.map((g) => (
            <Link className="deal-card" key={g.slug} href={`/deals/${g.slug}`}>
              {g.product} deal questions →
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
