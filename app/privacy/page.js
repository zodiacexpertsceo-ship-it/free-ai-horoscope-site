import PageHero from "@/components/PageHero";

export default function PrivacyPage() {
  return (
    <main>
      <PageHero label="Policy" title="Privacy Policy" text="This page explains what information visitors may enter and how the website should handle it." />
      <section className="section"><div className="container content-card"><h3>Visitor information</h3><p>Zodiacexperts may allow visitors to enter names, birth details, questions, and optional palm images for reading tools. Before final launch, connect this page to your real privacy process, storage rules, and contact email.</p><h3>Use of readings</h3><p>Readings are provided for personal guidance and entertainment. Visitors should not treat them as legal, financial, medical, or emergency advice.</p></div></section>
    </main>
  );
}
