export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://circular-economy-dubbo.vercel.app";
  return ["", "/where-next", "/repair-cafe", "/library-of-things"].map((path) => ({
    url: base + path,
    lastModified: new Date(),
  }));
}
