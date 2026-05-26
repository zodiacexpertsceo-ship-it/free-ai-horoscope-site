import PageHero from "@/components/PageHero";
import CompatibilityTool from "@/components/CompatibilityTool";

export default function CompatibilityPage() {
  return (
    <main>
      <PageHero label="Love match" title="Zodiac compatibility" text="Select two zodiac signs and receive a relationship-style compatibility message with attraction, timing, and communication guidance." />
      <section className="section"><div className="container"><CompatibilityTool /></div></section>
    </main>
  );
}
