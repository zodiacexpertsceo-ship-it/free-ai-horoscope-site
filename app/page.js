import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ServiceCards from "@/components/ServiceCards";
import HoroscopeGrid from "@/components/HoroscopeGrid";
import CTA from "@/components/CTA";
import { blogPosts } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">✦ Premium free astrology portal</div>
            <h1>Free Horoscope, Palmistry, Kundli, Tarot & Love Match</h1>
            <p>Zodiacexperts is a clean spiritual reading website where visitors can check daily horoscopes, create personal readings, explore palmistry, generate kundli-style reports, and test love compatibility without paying.</p>
            <div className="hero-actions">
              <Link href="/free-reading" className="primary-btn">Get Free Reading</Link>
              <Link href="/horoscope" className="secondary-btn">Choose Zodiac Sign</Link>
              <Link href="/palmistry" className="secondary-btn">Palmistry Reading</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-card"><strong>12</strong><span>Zodiac signs</span></div>
              <div className="stat-card"><strong>7</strong><span>Reading tools</span></div>
              <div className="stat-card"><strong>Free</strong><span>Access</span></div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="cosmic-card">
              <h2>Today’s Energy</h2>
              <p>Your day carries a message of clarity, timing, and personal direction. Choose your sign, ask your question, or begin a palmistry reading to receive a detailed spiritual-style result.</p>
              <div className="moon-orbit">
                <div className="moon-item"><strong>Love</strong><span>Open communication</span></div>
                <div className="moon-item"><strong>Career</strong><span>Steady progress</span></div>
                <div className="moon-item"><strong>Money</strong><span>Careful planning</span></div>
                <div className="moon-item"><strong>Health</strong><span>Balance and rest</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Main sections" title="Built like a full astrology portal" text="Clean pages, real forms, useful reading flows, and a stronger professional brand look for Zodiacexperts." />
          <ServiceCards />
        </div>
      </section>

      <section className="section dark-band">
        <div className="container">
          <SectionTitle eyebrow="Daily signs" title="Explore all zodiac signs" text="Give visitors an easy sign grid so they can quickly open their daily direction and return again." />
          <HoroscopeGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Editorial" title="Spiritual guidance content" text="A blog section helps the site look complete and gives visitors more reasons to stay." />
          <div className="cards-grid">
            {blogPosts.map((post) => (
              <div className="article-card" key={post.title}>
                <span className="badge">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href="/blog" className="card-link">Read more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
