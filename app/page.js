import { signs } from '@/lib/astroData';

const features = [
  ['Daily Horoscope', 'Daily, love, career, money, health, weekly, and monthly reading sections.'],
  ['Palmistry Reading', 'Guided hand-reading flow with palm upload, hand type, and personal details.'],
  ['Kundli Builder', 'Birth details form with name, gender, date, time, place, and language.'],
  ['Love Compatibility', 'Zodiac match tool for love, timing, attraction, and communication.'],
  ['Tarot Reading', 'Card of the day and three-card reading flow.'],
  ['Spiritual Games', 'Magic answer ball, luck meter, fortune cookie, and name match tools.']
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="kicker">✦ Free spiritual guidance platform</span>
            <h1>Free Horoscope, Palm Reading, Kundli, Tarot & Love Match</h1>
            <p className="lead">A professional astrology-style website where visitors can check their daily horoscope, generate personal readings, upload palm details, create a kundli-style report, and explore compatibility without paying.</p>
            <div className="actions">
              <a className="cta" href="/free-reading">Get Free Reading</a>
              <a className="cta light" href="/horoscope">Choose Zodiac Sign</a>
              <a className="cta light" href="/palm-reading">Palm Reading</a>
            </div>
          </div>
          <div className="mysticCard">
            <h2>Today’s Energy</h2>
            <p>Your day carries a message of clarity, timing, and personal direction. Choose your sign, ask your question, or start a palmistry reading to receive a detailed spiritual-style result.</p>
            <div className="statGrid">
              <div className="stat"><b>12</b><span>Signs</span></div>
              <div className="stat"><b>7</b><span>Reading Types</span></div>
              <div className="stat"><b>Free</b><span>Access</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionTitle"><span className="kicker">Main sections</span><h2>Built like a full astrology portal</h2><p>Clean pages, real forms, useful reading flows, and no visible ad placeholders or unnecessary “AI” wording on the front-end.</p></div>
          <div className="grid grid3">
            {features.map(([title, text], i) => <div className="feature" key={title}><div className="featureIcon">{['☉','✋','☽','♡','☾','✦'][i]}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionTitle"><span className="kicker">Zodiac signs</span><h2>Choose your sign</h2><p>Each sign can lead visitors toward daily horoscope, love, career, health, money, and monthly guidance pages.</p></div>
          <div className="signGrid">
            {signs.map(s => <a className="signCard" href={`/horoscope?sign=${s.name}`} key={s.name}><div className="signSymbol">{s.symbol}</div><h3>{s.name}</h3><p>{s.dates}</p></a>)}
          </div>
        </div>
      </section>
    </main>
  );
}
