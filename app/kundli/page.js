import PageHero from "@/components/PageHero";
import KundliTool from "@/components/KundliTool";

export default function KundliPage() {
  return (
    <main>
      <PageHero label="Birth report" title="Kundli-style report" text="Enter name, gender, birth date, birth time, and birth place to create a structured birth-report style result." />
      <section className="section"><div className="container"><KundliTool /></div></section>
    </main>
  );
}
