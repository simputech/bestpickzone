"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { dealGuides, findGuide } from "@/lib/deals/products";
type Watch = { topic: string; target: number | null; added: string };
const STORE = "bpz-deal-watchlist-v1";
export default function DealAlerts() {
  const [topic, setTopic] = useState("opportunities"),
    [target, setTarget] = useState(""),
    [email, setEmail] = useState(""),
    [consent, setConsent] = useState(false),
    [website, setWebsite] = useState(""),
    [watches, setWatches] = useState<Watch[]>([]),
    [status, setStatus] = useState(""),
    [emailStatus, setEmailStatus] = useState(""),
    [manage, setManage] = useState(""),
    [busy, setBusy] = useState(false),
    [available, setAvailable] = useState<{
      capture: boolean;
      email: boolean;
      prices: boolean;
    } | null>(null);
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    if (findGuide(p.get("topic") || "")) setTopic(p.get("topic")!);
    const t = Number(p.get("target"));
    if (t > 0 && t <= 100000) setTarget(String(t));
    try {
      const list = JSON.parse(localStorage.getItem(STORE) || "[]");
      if (Array.isArray(list))
        setWatches(
          list
            .filter(
              (x) =>
                x &&
                findGuide(x.topic) &&
                (x.target === null ||
                  (typeof x.target === "number" &&
                    x.target > 0 &&
                    x.target <= 100000)),
            )
            .slice(0, 20),
        );
    } catch {}
    fetch("/api/deal-alerts")
      .then((r) => r.json())
      .then(setAvailable)
      .catch(() =>
        setAvailable({ capture: false, email: false, prices: false }),
      );
  }, []);
  function persist(next: Watch[]) {
    try {
      localStorage.setItem(STORE, JSON.stringify(next));
      setWatches(next);
      return true;
    } catch {
      setStatus("Browser storage is unavailable. Your target was not saved.");
      return false;
    }
  }
  function save() {
    if (topic === "opportunities") {
      setStatus("Choose a product to save a target on this device.");
      return;
    }
    const amount = target === "" ? null : Number(target);
    if (
      amount !== null &&
      (!Number.isFinite(amount) || amount <= 0 || amount > 100000)
    ) {
      setStatus("Enter a target between $0.01 and $100,000.");
      return;
    }
    const next = [
      { topic, target: amount, added: new Date().toISOString() },
      ...watches.filter((w) => w.topic !== topic),
    ].slice(0, 20);
    if (persist(next))
      setStatus(
        "Saved on this browser. No automatic price check or notification has been activated.",
      );
  }
  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setEmailStatus("");
    setManage("");
    try {
      const r = await fetch("/api/deal-alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          topic,
          target: target || null,
          consent,
          website,
        }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error);
      setEmailStatus(d.message);
      if (d.manageToken) setManage(`/deal-alerts/manage#${d.manageToken}`);
    } catch (e) {
      setEmailStatus(
        e instanceof Error ? e.message : "Request could not be saved.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <section className="deal-panel">
        <h2>Your product and target</h2>
        <label>
          What would you like to follow?
          <select
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              setStatus("");
            }}
          >
            <option value="opportunities">
              General shopping opportunities
            </option>
            {dealGuides.map((g) => (
              <option key={g.slug} value={g.slug}>
                {g.product}
              </option>
            ))}
          </select>
        </label>
        <label>
          Target price in US dollars (optional)
          <input
            type="number"
            min="0.01"
            max="100000"
            step="0.01"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="Your personal maximum"
          />
        </label>
        <p className="deal-small">
          Targets are your preferences, not current prices. Keep the same model
          and condition when comparing offers.
        </p>
        <button className="deal-button" onClick={save}>
          Save on this device
        </button>
        <p role="status">{status}</p>
      </section>
      <section>
        <h2>Your saved watchlist</h2>
        {!watches.length ? (
          <p>No products saved on this browser yet.</p>
        ) : (
          <div className="deal-grid">
            {watches.map((w) => (
              <article className="deal-card" key={w.topic}>
                <h3>{findGuide(w.topic)?.product}</h3>
                <p>
                  {w.target === null
                    ? "No target selected"
                    : `Your target: $${w.target.toLocaleString("en-US")}`}
                </p>
                <p className="deal-small">
                  Current price: unavailable · Automatic monitoring: inactive
                </p>
                <Link href={`/deals/${w.topic}`}>Revisit buying checks →</Link>
                <div className="deal-actions">
                  <button
                    className="deal-button secondary"
                    onClick={() => {
                      setTopic(w.topic);
                      setTarget(w.target === null ? "" : String(w.target));
                      setStatus("Edit the target above, then save.");
                    }}
                  >
                    Edit target
                  </button>
                  <button
                    className="deal-button secondary"
                    onClick={() => {
                      if (persist(watches.filter((x) => x.topic !== w.topic)))
                        setStatus("Removed from this browser.");
                    }}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        <p className="deal-small">
          Saved locally on this device. Clearing browser data removes the
          watchlist. It is separate from any email request.
        </p>
      </section>
      <section className="deal-panel">
        <h2>Request opportunity emails or product alerts</h2>
        <div className="deal-status">
          <strong>
            {!available
              ? "Checking availability…"
              : available.email
                ? "Email confirmation is available"
                : "Email alerts are not active yet"}
          </strong>
          <p>
            {available?.capture
              ? "You can save an opt-in request. No automatic price monitoring is active; there is no verified price feed. Pending requests are retained for 30 days."
              : "Capture availability is being checked. We only confirm a request after it has been stored."}
          </p>
        </div>
        <form onSubmit={subscribe}>
          <label>
            Email address
            <input
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label className="deal-honey" aria-hidden="true">
            Website
            <input
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            I want BestPickZone opportunity emails or alerts for the selected
            product when available. I understand delivery and price monitoring
            may be inactive, and can remove my request at any time.
          </label>
          <p className="deal-small">
            We store your email, selected topic, optional target and consent.
            Read <Link href="/privacy">privacy details</Link>. No retailer
            affiliate links are sent in confirmation messages.
          </p>
          <button
            className="deal-button"
            disabled={busy || !available?.capture}
          >
            {busy ? "Saving request…" : "Save email request"}
          </button>
        </form>
        <p role="status">{emailStatus}</p>
        {manage && (
          <p>
            <a href={manage}>Remove this email request</a> — bookmark this
            private link; it is shown only now. Do not share it.
          </p>
        )}
      </section>
    </>
  );
}
