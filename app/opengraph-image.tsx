import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const dynamic = "force-static";

export const alt = `${siteConfig.name} — humanitarian schools, clinics, and clean water`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #0f261c 0%, #18392b 45%, #245a45 100%)",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 8,
              border: "3px solid #b8965d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d8c6a5",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            FH
          </div>
          <span style={{ color: "#d8c6a5", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            Humanitarian NGO
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#f6f3ee",
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 28,
              lineHeight: 1.45,
              color: "#d8c6a5",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Schools · Clinics · Boreholes · Lasting infrastructure for underserved communities
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span style={{ color: "#b8965d", fontSize: 20, fontWeight: 600 }}>
            foundationhorizon.org
          </span>
          <span style={{ color: "#8fb39a", fontSize: 18 }}>127 schools · 84 clinics · 312 boreholes</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
