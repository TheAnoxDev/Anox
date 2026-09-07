import EnterprisePage from "@/components/enterprise/EnterprisePage";
import { isLocale } from "@/locales/registry";
import { notFound } from "next/navigation";

export default async function CompanyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <EnterprisePage kind="company" locale={locale} />;
}
