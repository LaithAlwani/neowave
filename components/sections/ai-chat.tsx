import type { Content } from "@/content/types";

function Typing({ className }: { className: string }) {
  return (
    <div className={`n-typing ${className}`}>
      <span />
      <span />
      <span />
    </div>
  );
}

export function AiChat({ c }: { c: Content }) {
  const a = c.ai;
  const [m1, m2, m3, m4] = a.messages;
  return (
    <section className="n-sec n-ai" id="ai">
      <div className="n-wrap n-ai-grid">
        <div>
          <h2 className="n-h2">{a.h2}</h2>
          <p className="n-sub">{a.sub}</p>
        </div>
        <div className="n-chat" role="img" aria-label={a.chatAria}>
          <div className="n-chat-cap">
            <span className="n-dot" />
            {a.caption}
          </div>
          <div className="n-m c n-m1">{m1}</div>
          <div className="n-cell">
            <Typing className="n-t1" />
            <div className="n-m a n-m2">{m2}</div>
          </div>
          <div className="n-m c n-m3">{m3}</div>
          <div className="n-cell">
            <Typing className="n-t2" />
            <div className="n-m a n-m4">{m4}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
