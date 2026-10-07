import EmailPreference from "@/components/deals/EmailPreference";
export const metadata = {
  title: "Confirm Your Email Request",
  robots: { index: false, follow: false },
  referrer: "no-referrer" as const,
};
export default function Page() {
  return (
    <main className="deal-shell">
      <h1>Confirm your email request</h1>
      <EmailPreference action="confirm" />
    </main>
  );
}
