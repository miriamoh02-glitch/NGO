import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #18392b, #245a45)",
          borderRadius: 36,
        }}
      >
        <svg
          width="96"
          height="96"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 24V10l8-5 8 5v14"
            stroke="#b8965d"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 24v-8h8v8"
            stroke="#d8c6a5"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <span
          style={{
            marginTop: 12,
            color: "#d8c6a5",
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
            letterSpacing: 2,
          }}
        >
          FH
        </span>
      </div>
    ),
    { ...size }
  );
}
