import "./marketing-page.css";
import { InViewAnimations } from "@/components/in-view";
import { JsonLd } from "@/components/json-ld";
import { Nav } from "@/components/nav";
import { AiChat } from "@/components/sections/ai-chat";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { MobileBar } from "@/components/sections/mobile-bar";
import { Pricing } from "@/components/sections/pricing";
import { Services } from "@/components/sections/services";
import { Steps } from "@/components/sections/steps";
import { Strip } from "@/components/sections/strip";
import type { Content } from "@/content/types";
import { homeJsonLd } from "@/lib/structured-data";

export function MarketingPage({ c }: { c: Content }) {
  return (
    <div className="n-pg" dir={c.dir} lang={c.locale}>
      <JsonLd data={homeJsonLd(c)} />
      <InViewAnimations />
      <Nav c={c} />
      <main id="top">
        <Hero c={c} />
        <Strip c={c} />
        <Services c={c} />
        <Steps c={c} />
        <AiChat c={c} />
        <Pricing c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
      <MobileBar c={c} />
    </div>
  );
}
