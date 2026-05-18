import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Impact",
  description: "Redirecting to Foundation Horizon projects and measured impact.",
  path: "/impact",
  noIndex: true,
});

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
