"use client";
import { useState } from "react";
export default function EmailPreference({
  action,
}: {
  action: "cancel" | "confirm";
}) {
  const [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  async function submit() {
    setBusy(true);
    try {
      const token = location.hash.slice(1);
      if (!token)
        throw new Error(
          "Open your complete private link, including the part after #.",
        );
      const r = await fetch(`/api/deal-alerts/${action}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error);
      setMessage(
        action === "cancel"
          ? "Your request has been removed."
          : "Your email is confirmed. Alerts require a verified offer and active delivery.",
      );
      history.replaceState(null, "", location.pathname);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <p>
        {action === "cancel"
          ? "Remove this email request and its saved target. Your separate browser watchlist will remain until you remove it."
          : "Confirm your request for BestPickZone opportunity or product-alert emails. This does not activate a live price feed."}
      </p>
      <button className="deal-button" onClick={submit} disabled={busy}>
        {busy
          ? "Working…"
          : action === "cancel"
            ? "Remove my request"
            : "Confirm my email"}
      </button>
      <p role="status">{message}</p>
    </>
  );
}
