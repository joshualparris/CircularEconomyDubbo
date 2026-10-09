import "./globals.css";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import Link from "next/link";

export const metadata = {
  title: {
    default: "Dubbo Circular Economy",
    template: "%s · Dubbo Circular Economy",
  },
  description: "Practical repair, reuse, sharing and recycling information for Dubbo, NSW.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <AnalyticsTracker />
        <PublicHeader />
        <main>{children}</main>
        <PublicFooter />
        <div style={{ textAlign: "center", fontSize: 12, padding: "8px 16px 20px" }}><Link href="/privacy-analytics">Analytics and privacy</Link></div>
      </body>
    </html>
  );
}
