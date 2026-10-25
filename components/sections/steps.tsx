import type { Content } from "@/content/types";

export function Steps({ c }: { c: Content }) {
  const s = c.steps;
  return (
    <section className="n-sec n-sunk" id="start">
      <div className="n-wrap">
        <h2 className="n-h2">{s.h2}</h2>
        <p className="n-sub">{s.sub}</p>
        <svg className="n-flow" data-inview="" viewBox="0 0 1200 80" fill="none" aria-hidden="true">
          <path
            className="n-draw"
            pathLength={1}
            d="M0 40 C 100 0, 200 0, 300 40 S 500 80, 600 40 S 800 0, 900 40 S 1100 80, 1200 40"
            stroke="#0e9384"
            strokeWidth={6}
            strokeLinecap="round"
          />
        </svg>
        <div className="n-steps">
          {s.items.map((step) => (
            <div className="n-step" key={step.title}>
              <div className="n-num" aria-hidden="true">
                {step.num}
              </div>
              <div>
                <h3 className="n-h3">{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
