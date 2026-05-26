import PageHero from "@/components/PageHero";
import HoroscopeGrid from "@/components/HoroscopeGrid";

export default function HoroscopePage() {
  return (
    <main>
      <PageHero label="Daily horoscope" title="Choose your zodiac sign" text="Read a clear daily-style message for your sign, including love, career, money, health, and personal direction." />
      <section className="section"><div className="container"><HoroscopeGrid /></div></section>
    </main>
  );
}
