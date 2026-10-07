import "server-only";
import {
  createHash,
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";
export function emailReady() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.BPZ_EMAIL_FROM &&
      process.env.BPZ_POSTAL_ADDRESS,
  );
}
export const token = () => randomBytes(32).toString("hex");
export async function backend(body: Record<string, unknown>) {
  if (!process.env.BPZ_BACKEND_URL || !process.env.BPZ_BACKEND_SECRET)
    throw new Error("Capture is temporarily unavailable.");
  const r = await fetch(process.env.BPZ_BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-bpz-secret": process.env.BPZ_BACKEND_SECRET,
    },
    body: JSON.stringify(body),
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!r.ok) throw new Error("Capture is temporarily unavailable.");
  return r.json();
}
export async function requestBody(request: Request) {
  const origin = request.headers.get("origin");
  const own = new URL(request.url).origin;
  const host = request.headers.get("host");
  if (
    origin &&
    origin !== own &&
    origin !== "https://bestpickzone.com" &&
    new URL(origin).host !== host
  )
    throw new Error("Invalid request origin.");
  if (!request.headers.get("content-type")?.includes("application/json"))
    throw new Error("Expected JSON.");
  const text = await request.text();
  if (text.length > 4000) throw new Error("Request too long.");
  return JSON.parse(text);
}
export async function rate(request: Request, action: string, limit = 20) {
  const ip =
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0] ||
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    "local";
  const key = createHash("sha256")
    .update(`${process.env.BPZ_BACKEND_SECRET}:${action}:${ip}`)
    .digest("hex");
  return (await backend({ action: "rate", key, limit })).allowed;
}
export function isOperator(request: Request) {
  const actual = request.headers.get("authorization") || "";
  const expected = `Bearer ${process.env.CRON_SECRET || process.env.BPZ_CRON_SECRET || ""}`;
  return (
    Boolean(process.env.CRON_SECRET || process.env.BPZ_CRON_SECRET) &&
    actual.length === expected.length &&
    timingSafeEqual(Buffer.from(actual), Buffer.from(expected))
  );
}
export async function sendEmail(
  to: string,
  subject: string,
  text: string,
  id: string,
) {
  if (!emailReady()) throw new Error("Email is not active.");
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": id,
    },
    body: JSON.stringify({
      from: process.env.BPZ_EMAIL_FROM,
      to: [to],
      subject,
      text: `${text}\n\nBestPickZone\n${process.env.BPZ_POSTAL_ADDRESS}`,
    }),
    signal: AbortSignal.timeout(15000),
  });
  if (!r.ok) throw new Error("Email service temporarily unavailable.");
  return r.json();
}

export function signedRemoval(id: string) {
  return `${id}.${createHmac("sha256", process.env.BPZ_BACKEND_SECRET!).update(`remove:${id}`).digest("hex")}`;
}
export function removalId(value: string) {
  if (!/^[a-f0-9-]{36}\.[a-f0-9]{64}$/.test(value)) return null;
  const id = value.split(".")[0];
  const expected = signedRemoval(id);
  return value.length === expected.length &&
    timingSafeEqual(Buffer.from(value), Buffer.from(expected))
    ? id
    : null;
}
