"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function AboutRedirectPage() {
  useEffect(() => {
    window.location.replace("/#story");
  }, []);

  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", paddingBlock: "4rem" }}>
        <p>Redirecting to our story...</p>
        <Link href="/#story" className="textLink">
          Continue to Home
        </Link>
      </div>
    </section>
  );
}
