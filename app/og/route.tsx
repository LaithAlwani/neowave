import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };

/** Shared social preview image for every page, served at /og (static, 1200x630 PNG). */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#0b2545",
          color: "#fff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", top: 0, left: 0 }}>
          <path d="M-20 520 C 150 400, 300 400, 450 500 S 750 620, 900 500 S 1100 400, 1220 470" stroke="#0e9384" strokeWidth="26" fill="none" strokeLinecap="round" />
          <path d="M-20 560 C 150 450, 300 450, 450 540 S 750 650, 900 540 S 1100 450, 1220 510" stroke="#3dd6c3" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />
        </svg>
        <div style={{ display: "flex", fontSize: 112, fontWeight: 700, letterSpacing: -4 }}>
          <span style={{ color: "#fff" }}>neo</span>
          <span style={{ color: "#3dd6c3" }}>wave</span>
        </div>
        <div style={{ marginTop: 24, fontSize: 40, color: "#cfe3e0" }}>Web and AI solutions, Hama, Syria</div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#a9b8c8" }}>Your business website, built free, from USD 9.99 a month</div>
      </div>
    ),
    size,
  );
}
