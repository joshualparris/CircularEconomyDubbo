import Link from "next/link";
import { logout } from "@/app/internal/logout/actions";

export function InternalNav({ role }) {
  return (
    <header className="internal-header">
      <div>
        <Link className="internal-brand" href="/internal">Volunteer & staff workspace</Link>
        <div className="role-line">Signed in as {role}</div>
      </div>
      <nav className="internal-nav" aria-label="Internal navigation">
        <Link href="/internal">Dashboard</Link>
        <Link href="/internal/research">Research</Link>
        <Link href="/internal/repair-first">Repair First</Link>
        <a href="https://dubbo-ewaste-app.vercel.app/repair-cafe-volunteers">Repair Café</a>
        <Link href="/internal/library-of-things">Library of Things</Link>
        <Link href="/internal/ewaste">E-waste</Link>
        <Link href="/internal/partners">Partners</Link>
        <Link href="/internal/fieldwork">Field validation</Link>
        <Link href="/internal/projects">Projects</Link>
      </nav>
      <form action={logout}>
        <button className="button button-quiet" type="submit">Sign out</button>
      </form>
    </header>
  );
}
