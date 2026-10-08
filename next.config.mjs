/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/repair-cafe",
        destination: "https://dubbo-ewaste-app.vercel.app/repair-cafe-dubbo",
        permanent: true,
      },
      {
        source: "/internal/repair-cafe",
        destination: "https://dubbo-ewaste-app.vercel.app/repair-cafe-volunteers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
