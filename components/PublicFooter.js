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
        <Link href="/repair-cafe">Repair Café Dubbo</Link>
        <Link href="/library-of-things">Library of Things idea</Link>
        <Link href="/login">Volunteer & staff sign in</Link>
      </div>
    </footer>
  );
}
