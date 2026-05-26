import './globals.css';

export const metadata = {
  title: 'Zodiac Experts - Free Horoscope & Spiritual Readings',
  description: 'Free horoscope, palm reading, tarot, kundli, compatibility, and spiritual insight tools.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="container navInner">
            <a className="logo" href="/"><span className="logoMark">✦</span><span>Zodiac Experts</span></a>
            <div className="menu">
              <a href="/horoscope">Horoscope</a>
              <a href="/free-reading">Free Reading</a>
              <a href="/palm-reading">Palmistry</a>
              <a href="/kundli">Kundli</a>
              <a href="/compatibility">Compatibility</a>
              <a href="/tarot">Tarot</a>
              <a href="/games">Games</a>
            </div>
            <a className="cta" href="/free-reading">Start Reading</a>
          </div>
        </nav>
        {children}
        <footer className="footer">
          <div className="container footerInner">
            <div><b>Zodiac Experts</b><br /><span className="small">Free horoscope, palmistry, tarot, kundli, and spiritual guidance tools.</span></div>
            <div className="menu" style={{display:'flex'}}><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
