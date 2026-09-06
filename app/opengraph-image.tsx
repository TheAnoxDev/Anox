import { ImageResponse } from "next/og";

export const alt = "ANOX — Engineering Intelligent Future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #020617 0%, #07111f 55%, #082f49 100%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, color: "#67e8f9", fontWeight: 700 }}>
        ANOX
      </div>
      <div style={{ display: "flex", marginTop: 24, fontSize: 72, fontWeight: 800 }}>
        Engineering The Future
      </div>
      <div style={{ display: "flex", marginTop: 22, fontSize: 30, color: "#94a3b8" }}>
        AI · Cybersecurity · Software · Cloud
      </div>
      <div style={{ display: "flex", marginTop: 55, fontSize: 22, color: "#22d3ee" }}>
        Intelligent systems for the next generation.
      </div>
    </div>
  );
}
