/**
 * Writes public/sitemap.xml before static export so hosts always serve plain XML
 * (avoids broken /sitemap.xml route handlers on some platforms).
 */
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://foundationhorizon.space").replace(
  /\/$/,
  ""
);

const today = new Date().toISOString().slice(0, 10);

const entries = [
  { loc: `${base}/`, changefreq: "weekly", priority: "1" },
  { loc: `${base}/projects`, changefreq: "weekly", priority: "0.9" },
  { loc: `${base}/donate`, changefreq: "monthly", priority: "0.9" },
  { loc: `${base}/contact`, changefreq: "monthly", priority: "0.7" },
];

const body = entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml, "utf8");
