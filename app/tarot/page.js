import PageHero from "@/components/PageHero";
import TarotTool from "@/components/TarotTool";

export default function TarotPage() {
  return (
    <main>
      <PageHero label="Tarot guidance" title="Ask a question" text="Write a question about love, work, timing, or personal direction and receive a calm tarot-style guidance message." />
      <section className="section"><div className="container"><TarotTool /></div></section>
    </main>
  );
}
