import { LegalPage } from "@/components/legal-page";
import { en } from "@/content/en";
import { legalMetadata } from "@/lib/metadata";

export const metadata = legalMetadata(en, en.legal.privacy);

export default function EnglishPrivacy() {
  return <LegalPage c={en} doc={en.legal.privacy} />;
}
