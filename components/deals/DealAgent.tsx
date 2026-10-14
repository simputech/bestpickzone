"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { RecommendationResult } from "@/lib/deals/recommend";
import categoryIndex from "@/lib/deals/category-index.json";

type Category = (typeof categoryIndex)[number];
type Turn = { question: string; answer: RecommendationResult };
export default function DealAgent({
  initialCategory,
}: {
  initialCategory?: Category;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const input = useRef<HTMLTextAreaElement>(null);
  const answer = useRef<HTMLDivElement>(null);
  const pending = useRef(false);
  useEffect(() => {
    if (initialCategory) return;
    const topic = new URLSearchParams(window.location.search).get("topic");
    setCategory(
      categoryIndex.find((c) => c.oldSlug === topic || c.slug === topic),
    );
  }, [initialCategory]);
  useEffect(() => {
    if (turns.length) {
      answer.current?.focus({ preventScroll: true });
      answer.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [turns]);
  async function ask(value = query) {
    if (pending.current) return;
    const question = value.trim();
    if (question.length < 3 || question.length > 400) {
      setError("Tell me what you need in 3–400 characters.");
      input.current?.focus();
      return;
    }
    pending.current = true;
    setBusy(true);
    setError("");
    setFeedback("");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("/api/deal-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: question,
          category: category?.slug,
          history: turns.slice(-6).map((t) => t.question),
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setTurns((old) => [...old, { question, answer: result }]);
      setQuery("");
      if (result.category)
        setCategory(categoryIndex.find((c) => c.slug === result.category));
    } catch {
      setError(
        "Your answer could not load. Please try again; your message is still here.",
      );
      setQuery(question);
    } finally {
      clearTimeout(timer);
      pending.current = false;
      setBusy(false);
    }
  }
  const latest = turns.at(-1)?.answer;
  async function rate(helpful: boolean) {
    if (!category || feedback) return;
    setFeedback("Saving…");
    try {
      const response = await fetch("/api/deal-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: category.oldSlug,
          intent: "compare-offers",
          consent: true,
          budgetBand:
            latest?.budget == null
              ? "unspecified"
              : latest.budget < 100
                ? "under-100"
                : latest.budget < 500
                  ? "100-499"
                  : "500-plus",
          helpful,
        }),
      });
      if (!response.ok) throw new Error();
      setFeedback("Thanks — this helps us improve our recommendations.");
    } catch {
      setFeedback("Feedback could not be saved.");
    }
  }
  function reset() {
    setTurns([]);
    setQuery("");
    setError("");
    setFeedback("");
    input.current?.focus();
  }
  return (
    <div className="shopping-chat" aria-label="Deal Agent chat">
      <div className="shopping-chat-top">
        <span className="shopping-agent-mark" aria-hidden="true">
          ✦
        </span>
        <div>
          <strong>BestPickZone Deal Agent</strong>
          <span>
            Your shopping shortlist{category ? ` · ${category.title}` : ""}
          </span>
        </div>
        {turns.length > 0 && (
          <button
            type="button"
            className="shopping-reset"
            disabled={busy}
            onClick={reset}
          >
            Start over
          </button>
        )}
      </div>
      {!turns.length && (
        <div className="shopping-welcome">
          <h2>Tell me what you’re looking for.</h2>
          <p>I’ll help find your best fit and explain why.</p>
        </div>
      )}
      <div
        className="shopping-conversation"
        aria-live="polite"
        aria-busy={busy}
      >
        {turns.slice(-3).map((turn, i, visible) => (
          <div
            key={turns.length - visible.length + i}
            className="shopping-turn"
          >
            <p className="shopping-user">
              <span className="sr-only">You: </span>
              {turn.question}
            </p>
            <div
              className="shopping-answer"
              ref={i === visible.length - 1 ? answer : undefined}
              tabIndex={-1}
            >
              <span className="shopping-answer-label">DEAL AGENT</span>
              <p>{turn.answer.message}</p>
              {turn.answer.budget !== null && (
                <p className="shopping-note">
                  Your budget: ${turn.answer.budget.toLocaleString("en-US")}.
                  Price fit has not been verified.
                </p>
              )}
              {turn.answer.products.map((p) => (
                <article className="shopping-pick" key={p.id}>
                  <span className="shopping-answer-label">
                    YOUR SUGGESTED STARTING POINT
                  </span>
                  <h3>{p.name}</h3>
                  <p>
                    <strong>Why it fits:</strong> {p.reason}
                  </p>
                  <p>
                    <strong>The tradeoff:</strong> {p.tradeoff}
                  </p>
                  <div className="shopping-pick-links">
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Manufacturer information ↗
                    </a>
                    <a href={p.search} target="_blank" rel="sponsored noopener">
                      Check Amazon (affiliate) ↗
                    </a>
                  </div>
                </article>
              ))}
              {"switchCategory" in turn.answer &&
                turn.answer.switchCategory && (
                  <Link href={`/deals/${turn.answer.switchCategory.slug}`}>
                    Open {turn.answer.switchCategory.title} →
                  </Link>
                )}
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void ask();
        }}
        className="shopping-composer"
      >
        <label
          htmlFor="shopping-question"
          className={!turns.length ? "sr-only" : undefined}
        >
          {turns.length
            ? "Refine your recommendation"
            : "What are you looking for?"}
        </label>
        <textarea
          ref={input}
          id="shopping-question"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setError("");
          }}
          disabled={busy}
          maxLength={400}
          rows={2}
          aria-describedby="shopping-chat-note shopping-chat-error"
          placeholder={
            category
              ? `${category.examples[0]}. My budget is…`
              : "e.g. A coffee grinder for espresso and filter coffee…"
          }
        />
        <div className="shopping-send-row">
          <span className="shopping-note">
            Your needs, budget and must-haves.
          </span>
          <button type="submit" disabled={busy} className="shopping-send">
            {busy
              ? "Finding your fit…"
              : turns.length
                ? "Send message →"
                : "Find my recommendation →"}
          </button>
        </div>
        <p id="shopping-chat-error" role="alert" className="shopping-error">
          {error}
        </p>
        <span className="sr-only" role="status">
          {busy
            ? "Finding your recommendation."
            : turns.length
              ? "Your answer is ready."
              : ""}
        </span>
      </form>
      <div className="shopping-prompts" aria-label="Suggested replies">
        {(
          latest?.suggestions ||
          category?.examples || [
            "A coffee grinder",
            "An espresso machine",
            "Wireless earbuds",
          ]
        ).map((prompt) => (
          <button
            key={prompt}
            type="button"
            disabled={busy}
            onClick={() => void ask(prompt)}
          >
            {prompt} ↗
          </button>
        ))}
      </div>
      <p className="shopping-note" id="shopping-chat-note">
        Curated recommendations, with linked sources. Live prices and stock are
        not checked. Please leave personal information out of your message.
      </p>
      {!!latest?.products.length && (
        <div className="shopping-feedback">
          <span>
            Did this help? Share the topic, budget range and rating (not your
            message).
          </span>
          <button
            type="button"
            disabled={!!feedback}
            onClick={() => void rate(true)}
          >
            Yes
          </button>
          <button
            type="button"
            disabled={!!feedback}
            onClick={() => void rate(false)}
          >
            Not yet
          </button>
          <span role="status">{feedback}</span>
        </div>
      )}
    </div>
  );
}
