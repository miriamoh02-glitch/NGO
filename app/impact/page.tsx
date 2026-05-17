"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ImpactRedirectPage() {
  useEffect(() => {
    window.location.replace("/projects#impact");
  }, []);

  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", paddingBlock: "4rem" }}>
        <p>Redirecting to Projects &amp; Impact...</p>
        <Link href="/projects#impact" className="textLink">
          View impact data
        </Link>
      </div>
    </section>
  );
}
