import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18392b",
          borderRadius: 6,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 24V10l8-5 8 5v14"
            stroke="#b8965d"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M12 24v-8h8v8"
            stroke="#d8c6a5"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
