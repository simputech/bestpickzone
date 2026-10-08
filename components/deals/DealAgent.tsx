"use client";
import { useEffect, useRef, useState } from "react";
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
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (result) {
      resultRef.current?.focus({ preventScroll: true });
      resultRef.current?.scrollIntoView({ block: "center" });
    }
  }, [result]);
  useEffect(() => {
    const topic = new URLSearchParams(location.search).get("topic");
    const g = topic && findGuide(topic);
    if (g) setQuery(`Is this ${g.product} offer a good deal?`);
  }, []);
  async function ask(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError("");
    setResult(null);
    setFeedback("");
    const question = query.trim();
    if (question.length < 3 || question.length > 400) {
      setError("Enter a product or shopping question between 3 and 400 characters.");
      questionRef.current?.focus();
      return;
    }
    setBusy(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const r = await fetch("/api/deal-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: question }),
        signal: controller.signal,
      });
      const data = await r.json().catch(() => null);
      if (!r.ok || !data)
        throw new Error(data?.error || "Buying checks are temporarily unavailable. Please try again.");
      setResult(data);
    } catch (e) {
      setError(
        controller.signal.aborted
          ? "The request took too long. Please try again."
          : e instanceof Error && e.name !== "TypeError"
            ? e.message
            : "We could not load your buying checks. Check your connection and try again.",
      );
    } finally {
      clearTimeout(timeout);
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
      <form className="deal-panel" onSubmit={ask} noValidate>
        <label htmlFor="shopping-question">
          What are you looking for?
          <textarea
            id="shopping-question"
            ref={questionRef}
            disabled={busy}
            aria-describedby="shopping-question-help shopping-question-error"
            aria-invalid={Boolean(error) && (query.trim().length < 3 || query.trim().length > 400)}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setResult(null);
              setError("");
            }}
            minLength={3}
            maxLength={400}
            required
            rows={3}
            placeholder="Is a refurbished Airwrap worth it? Find a Bambino setup under $500."
          />
        </label>
        <p className="deal-small" id="shopping-question-help">
          Include a product, budget and must-haves. Do not include personal
          information. This guided assistant matches editorial buying guides; it
          does not retrieve or rank live retailer prices.
        </p>
        <button type="submit" className="deal-button" disabled={busy}>
          {busy ? "Finding guidance…" : "Get buying advice →"}
        </button>
        <p className="error" id="shopping-question-error" role="alert">
          {error}
        </p>
        <p role="status">
          {busy ? "Finding your buying checks…" : result ? "Your buying checks are ready below." : ""}
        </p>
      </form>
      <div className="deal-actions" aria-label="Example shopping questions">
        {[
          "Is a Bambino bundle a good deal?",
          "Should I buy refurbished Airwrap?",
          "Find a CREAMi under $250",
        ].map((q) => (
          <button
            key={q}
            type="button"
            disabled={busy}
            className="deal-button secondary"
            onClick={() => {
              setQuery(q);
              setResult(null);
              setError("");
              questionRef.current?.focus();
            }}
          >
            {q}
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {result && (
          <section>
            <h2 ref={resultRef} tabIndex={-1}>Your next buying decision</h2>
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
