import { ImageResponse } from "next/og";
import { facility } from "@/lib/facility";

export const alt =
  "Storage Units Idaho Falls — affordable self storage at 1421 East Iona Road";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Dynamically generated social sharing image (Open Graph + Twitter). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a1f33",
          borderTop: "16px solid #e2562a",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e2562a",
          }}
        >
          {facility.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            marginTop: 20,
            lineHeight: 1.05,
          }}
        >
          Storage Units in Idaho Falls, ID
        </div>
        <div style={{ display: "flex", fontSize: 38, marginTop: 28, color: "#dbeafe" }}>
          {`Roll up doors · 24/7 access · from $${facility.startingPrice}/mo`}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 700,
            marginTop: 36,
            color: "#e2562a",
          }}
        >
          {facility.phoneDisplay}
        </div>
      </div>
    ),
    { ...size }
  );
}
