import Link from "next/link";

export function PublicHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        <span className="mark" aria-hidden="true">↻</span>
        <span>Dubbo Circular Economy</span>
      </Link>
      <nav className="public-nav" aria-label="Main navigation">
        <Link href="/where-next">Where next?</Link>
        <Link href="/repair-cafe">Repair Café</Link>
        <Link href="/library-of-things">Library of Things</Link>
        <Link className="quiet-link" href="/login">Volunteer / staff</Link>
      </nav>
    </header>
  );
}
