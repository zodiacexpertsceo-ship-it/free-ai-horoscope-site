import PageHero from "@/components/PageHero";
import FreeReadingTool from "@/components/FreeReadingTool";

export default function FreeReadingPage() {
  return (
    <main>
      <PageHero label="Personal guidance" title="Create your free reading" text="Enter your details, choose a topic, ask your question, and receive a clear spiritual-style reading on the same page." />
      <section className="section"><div className="container"><FreeReadingTool /></div></section>
    </main>
  );
}
