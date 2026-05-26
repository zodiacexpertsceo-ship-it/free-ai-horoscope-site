import Link from "next/link";

export default function CTA() {
  return (
    <section className="section dark-band">
      <div className="container split-grid">
        <div>
          <div className="eyebrow">✦ Start free</div>
          <h2 style={{fontSize: "clamp(34px,5vw,56px)", letterSpacing: "-.06em", lineHeight: 1, marginTop: 18}}>Create your personal reading in seconds.</h2>
        </div>
        <div>
          <p className="muted" style={{lineHeight: 1.8}}>Visitors can enter their details, choose a topic, ask a question, and receive a clear spiritual-style result. The design is made for a full astrology portal, not a basic one-page website.</p>
          <div className="hero-actions">
            <Link href="/free-reading" className="primary-btn">Start Reading</Link>
            <Link href="/horoscope" className="secondary-btn">View Horoscope</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
