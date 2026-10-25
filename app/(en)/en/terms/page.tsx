import { LegalPage } from "@/components/legal-page";
import { en } from "@/content/en";
import { legalMetadata } from "@/lib/metadata";

export const metadata = legalMetadata(en, en.legal.terms);

export default function EnglishTerms() {
  return <LegalPage c={en} doc={en.legal.terms} />;
}
