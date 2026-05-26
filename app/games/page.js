import PageHero from "@/components/PageHero";

export default function GamesPage() {
  return (
    <main>
      <PageHero label="Spiritual games" title="Free zodiac games" text="Simple engagement tools for visitors who want quick spiritual-style entertainment and daily return value." />
      <section className="section">
        <div className="container cards-grid">
          <div className="content-card"><h3>Lucky Number</h3><p>Your lucky number today is 7. Focus on patience, reflection, and steady choices.</p></div>
          <div className="content-card"><h3>Lucky Color</h3><p>Your lucky color today is royal purple. It supports intuition, confidence, and protection.</p></div>
          <div className="content-card"><h3>Daily Message</h3><p>A small sign can guide a bigger decision. Stay observant and avoid rushing the outcome.</p></div>
        </div>
      </section>
    </main>
  );
}
