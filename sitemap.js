export default function sitemap() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
  return ["", "/blog", "/privacy", "/terms", "/contact"].map(path => ({ url: `${site}${path}`, lastModified: new Date() }));
}
