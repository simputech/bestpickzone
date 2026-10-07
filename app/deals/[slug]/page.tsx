import { notFound } from "next/navigation";
import { dealGuides, findGuide } from "@/lib/deals/catalog";
import { withSeo } from "@/lib/seo-metadata";
import DealGuidePage from "@/components/deals/DealGuidePage";
export const dynamicParams = false;
export function generateStaticParams() {
  return dealGuides.map((g) => ({ slug: g.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const g = findGuide(params.slug);
  return g
    ? withSeo(
        { title: g.title, description: g.description },
        `/deals/${g.slug}`,
      )
    : {};
}
export default function Page({ params }: { params: { slug: string } }) {
  const g = findGuide(params.slug);
  if (!g) notFound();
  return <DealGuidePage guide={g} />;
}
