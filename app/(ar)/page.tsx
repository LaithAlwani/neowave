import { MarketingPage } from "@/components/marketing-page";
import { ar } from "@/content/ar";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata(ar);

export default function ArabicHome() {
  return <MarketingPage c={ar} />;
}
