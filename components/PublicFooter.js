import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Dubbo Circular Economy</strong>
        <p>Repair, reuse, share and recycle in that order when it makes sense.</p>
      </div>
      <div className="footer-links">
        <Link href="/where-next">Resident guide</Link>
        <a href="https://dubbo-ewaste-app.vercel.app/repair-cafe-dubbo">Repair Café Dubbo</a>
        <Link href="/library-of-things">Library of Things idea</Link>
        <Link href="/login">Circular economy research sign in</Link>
      </div>
    </footer>
  );
}
