import EnterprisePage from "@/components/enterprise/EnterprisePage";
import { isLocale } from "@/locales/registry";
import { notFound } from "next/navigation";

export default async function LabsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <EnterprisePage kind="labs" locale={locale} />;
}
