import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: "Redirecting to the Foundation Horizon story on our home page.",
  path: "/about",
  noIndex: true,
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
