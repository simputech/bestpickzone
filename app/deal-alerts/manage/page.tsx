import EmailPreference from "@/components/deals/EmailPreference";
export const metadata = {
  title: "Manage Your Email Request",
  robots: { index: false, follow: false },
  referrer: "no-referrer" as const,
};
export default function Page() {
  return (
    <main className="deal-shell">
      <h1>Manage your email request</h1>
      <EmailPreference action="cancel" />
    </main>
  );
}
