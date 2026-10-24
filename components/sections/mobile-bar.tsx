import { buttonClassName } from "@/components/ds/button";
import type { Content } from "@/content/types";

/** Sticky bottom call-to-action from the Mobile artboard; shown only at <=640px via CSS. */
export function MobileBar({ c }: { c: Content }) {
  return (
    <div className="n-bar">
      <a className={buttonClassName({ variant: "primary", block: true })} href="#contact">
        {c.mobileBar.cta}
      </a>
    </div>
  );
}
