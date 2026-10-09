import Link from "next/link";
export const metadata = { title: "Analytics and privacy" };
export default function PrivacyAnalyticsPage() {
  return <main style={{margin:"36px auto",maxWidth:750,padding:20,lineHeight:1.7}}>
    <h1>Analytics and privacy</h1>
    <p>To improve the Dubbo Circular Economy, Repair Café and Library of Things websites,
    we count page-group visits, link/button clicks and general site usage.</p>
    <p>We retain the date, grouped page (without query strings or record identifiers), device category,
    referring domain and approximate country/state from our web host. This is not GPS location.</p>
    <p>We do not collect or store names, emails, account IDs, IP addresses, passwords,
    form entries, search text, private page contents, or visitor fingerprints in analytics.</p>
    <p>Raw analytics are restricted to administrators and kept for up to 90 days.
    Daily aggregate totals may be shared in our GitHub repositories; groups of fewer than
    five events have their detailed location withheld. Global Privacy Control and Do Not Track
    requests are respected.</p>
    <p><Link href="/">Return home</Link></p>
  </main>;
}
