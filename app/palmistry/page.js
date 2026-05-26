import PageHero from "@/components/PageHero";
import PalmistryTool from "@/components/PalmistryTool";

export default function PalmistryPage() {
  return (
    <main>
      <PageHero label="Palmistry" title="Free palm reading" text="Use the palmistry form to choose hand type, focus area, and upload a palm image for a clean palm reading flow." />
      <section className="section"><div className="container"><PalmistryTool /></div></section>
    </main>
  );
}
