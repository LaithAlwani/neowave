import { LegalPage } from "@/components/legal-page";
import { ar } from "@/content/ar";
import { legalMetadata } from "@/lib/metadata";

export const metadata = legalMetadata(ar, ar.legal.terms);

export default function ArabicTerms() {
  return <LegalPage c={ar} doc={ar.legal.terms} />;
}
