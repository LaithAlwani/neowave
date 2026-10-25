import { MarketingPage } from "@/components/marketing-page";
import { en } from "@/content/en";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata(en);

export default function EnglishHome() {
  return <MarketingPage c={en} />;
}
