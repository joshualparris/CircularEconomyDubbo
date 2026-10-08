import "./globals.css";
import { PublicFooter } from "@/components/PublicFooter";
import { PublicHeader } from "@/components/PublicHeader";

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
        <PublicHeader />
        <main>{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}
