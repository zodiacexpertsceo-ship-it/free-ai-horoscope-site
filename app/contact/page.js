import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main>
      <PageHero label="Contact" title="Contact Zodiacexperts" text="Use this page for support, feedback, partnership requests, or general questions about the website." />
      <section className="section">
        <div className="container tool-layout">
          <div className="tool-card form-grid">
            <label>Name<input placeholder="Your name" /></label>
            <label>Email<input placeholder="Your email" /></label>
            <label>Message<textarea placeholder="Write your message" /></label>
            <button className="primary-btn">Send Message</button>
          </div>
          <div className="result-box"><h3>Support</h3><p>Add your business email here before final launch. You can also add WhatsApp, social links, and support timing.</p></div>
        </div>
      </section>
    </main>
  );
}
