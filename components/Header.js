import Link from "next/link";

const navItems = [
  ["Horoscope", "/horoscope"],
  ["Free Reading", "/free-reading"],
  ["Palmistry", "/palmistry"],
  ["Kundli", "/kundli"],
  ["Compatibility", "/compatibility"],
  ["Tarot", "/tarot"],
  ["Games", "/games"]
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Zodiacexperts home">
          <span className="brand-mark">✦</span>
          <span>Zodiacexperts</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
        <Link href="/free-reading" className="header-cta">Start Reading</Link>
      </div>
    </header>
  );
}
