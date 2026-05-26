import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand"><span className="brand-mark small">✦</span> Zodiacexperts</div>
          <p>Free astrology guidance, horoscope, palmistry, kundli-style reports, compatibility, and tarot-style insight in one clean portal.</p>
        </div>
        <div>
          <h4>Readings</h4>
          <Link href="/horoscope">Horoscope</Link>
          <Link href="/palmistry">Palmistry</Link>
          <Link href="/kundli">Kundli</Link>
          <Link href="/tarot">Tarot</Link>
        </div>
        <div>
          <h4>Website</h4>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <div className="footer-bottom">© 2026 Zodiacexperts. All readings are for personal guidance and entertainment.</div>
    </footer>
  );
}
