export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: ["/", "/where-next", "/repair-cafe", "/library-of-things"], disallow: ["/internal", "/login"] },
    ],
  };
}
