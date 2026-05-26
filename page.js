"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Hand, Heart, Sparkles, Wand2, User, Gift, ShieldCheck, Moon, Stars, Eye, Compass } from "lucide-react";

const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const dailyText = {
  Aries: "Today supports bold choices, but your best result comes from calm timing and clear action.",
  Taurus: "Today asks you to choose peace, stability, and steady progress over pressure.",
  Gemini: "Today highlights communication, new thoughts, and a message that may bring clarity.",
  Cancer: "Today strengthens your intuition. Listen to your inner feeling before you react.",
  Leo: "Today brings attention to confidence, love, and self-worth. Choose what respects you.",
  Virgo: "Today supports planning and careful decisions. One practical step can clear confusion.",
  Libra: "Today focuses on balance in love, choices, and communication with someone important.",
  Scorpio: "Today carries deep energy. Something hidden may become easier for you to sense.",
  Sagittarius: "Today supports hope, movement, and a wider view of your future direction.",
  Capricorn: "Today favors discipline and patience. Slow progress still creates a strong result.",
  Aquarius: "Today brings fresh ideas and personal independence. Trust your original thinking.",
  Pisces: "Today strengthens dreams and intuition. Give yourself space before deciding."
};

function AdBox({ label }) {
  return <div className="adbox"><Gift size={22} /> <br />{label} — future Google AdSense or sponsor placement</div>;
}

function Feature({ icon: Icon, title, text }) {
  return <div className="feature"><div className="feature-icon"><Icon size={23} /></div><h3>{title}</h3><p>{text}</p></div>;
}

function SectionHead({ eyebrow, title, text }) {
  return <div className="section-head"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2><p>{text}</p></div>;
}

export default function HomePage() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("Love");
  const [zodiacSign, setZodiacSign] = useState("Aries");
  const [question, setQuestion] = useState("");
  const [reading, setReading] = useState("Fill the form and click the button. Your free AI reading will appear here.");
  const [readingMode, setReadingMode] = useState("");
  const [loading, setLoading] = useState(false);

  const [partnerSign, setPartnerSign] = useState("Libra");
  const [palmImage, setPalmImage] = useState(null);
  const [handType, setHandType] = useState("Right hand");
  const [palmReading, setPalmReading] = useState("Upload a clear palm photo and click the button. Your free palm reading will appear here.");
  const [palmMode, setPalmMode] = useState("");
  const [palmLoading, setPalmLoading] = useState(false);

  const compatibility = useMemo(() => {
    return `${zodiacSign} and ${partnerSign} show attraction, learning, and timing energy. This connection can grow when both sides communicate clearly and avoid silent assumptions.`;
  }, [zodiacSign, partnerSign]);

  async function generateReading(event) {
    event.preventDefault();
    setLoading(true);
    setReadingMode("");
    setReading("Generating your free reading...");

    try {
      const response = await fetch("/api/reading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, birthDate, gender, category, question, zodiacSign })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Reading failed");
      setReading(data.reading);
      setReadingMode(data.mode === "ai" ? "Live AI mode" : "Demo mode: add API key for real AI");
    } catch (error) {
      setReading(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  async function generatePalmReading(event) {
    event.preventDefault();
    if (!palmImage) {
      setPalmReading("Please upload a palm image first.");
      return;
    }
    setPalmLoading(true);
    setPalmMode("");
    setPalmReading("Generating your palm reading...");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("birthDate", birthDate);
      formData.append("handType", handType);
      formData.append("image", palmImage);

      const response = await fetch("/api/palm", { method: "POST", body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Palm reading failed");
      setPalmReading(data.reading);
      setPalmMode(data.mode === "ai" ? "Live AI vision mode" : "Demo mode: add API key for real image analysis");
    } catch (error) {
      setPalmReading(`Error: ${error.message}`);
    } finally {
      setPalmLoading(false);
    }
  }

  return <>
    <header className="nav">
      <div className="container nav-inner">
        <a className="logo" href="#home"><span className="logo-mark"><Moon size={22} /></span> FreeAura AI</a>
        <nav className="nav-links"><a href="#features">Features</a><a href="#reading">AI Reading</a><a href="#palm">Palm Reading</a><a href="#dashboard">Dashboard</a><a href="/blog">Blog</a></nav>
        <a className="btn" href="#reading">Start Free</a>
      </div>
    </header>

    <main id="home">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge"><ShieldCheck size={16} /> Fully Free Spiritual Readings</span>
            <h1>Free AI Horoscope, Palm Reading, and Personal Insight Website</h1>
            <p className="lead">Visitors enter their name, date of birth, zodiac sign, and question. The backend sends those details to AI, then the reading appears instantly on the result screen.</p>
            <div className="hero-actions"><a className="btn" href="#reading">Get Free Reading</a><a className="btn secondary" href="#palm">Try Palm Reading</a></div>
            <div className="stats"><div className="stat"><strong>Free</strong><span>No user payment</span></div><div className="stat"><strong>AI</strong><span>Reading engine</span></div><div className="stat"><strong>Ads</strong><span>Future earning</span></div></div>
          </div>
          <div className="preview-card">
            <div className="preview-inner">
              <Stars size={40} />
              <h2>Today’s Energy</h2>
              <p>Your current path shows clarity, patience, and stronger self-understanding. The next step becomes easier when you stop forcing the answer and read the signs calmly.</p>
              <div className="preview-pills"><div className="preview-pill"><strong>Love</strong><br />Improving slowly</div><div className="preview-pill"><strong>Focus</strong><br />Clear decision</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <AdBox label="Top homepage ad space" />
          <SectionHead eyebrow="Features" title="A free website that can still earn from traffic" text="Keep readings free. Build traffic through horoscope tools, palm reading, compatibility, blog articles, and social media." />
          <div className="grid-4"><Feature icon={CalendarDays} title="Daily Horoscope" text="Users choose zodiac sign and receive daily spiritual guidance." /><Feature icon={Hand} title="Palm Reading" text="Users upload a hand image for palmistry-style interpretation." /><Feature icon={Heart} title="Compatibility" text="Users compare two signs for love and connection energy." /><Feature icon={Wand2} title="Question Reading" text="Users ask about love, career, future, or personal direction." /><Feature icon={User} title="Personal Form" text="Name and date of birth create a more personal result." /><Feature icon={Eye} title="Energy Insight" text="AI gives soft spiritual guidance for reflection." /><Feature icon={Compass} title="Dashboard" text="Users can later save readings and return daily." /><Feature icon={Gift} title="Ad Revenue" text="Earn later through AdSense, sponsors, and affiliates." /></div>
        </div>
      </section>

      <section id="reading" className="section">
        <div className="container">
          <SectionHead eyebrow="Free AI Reading" title="Client enters details, AI creates the reading" text="This is the real flow: form details go to the API route, the API calls AI, and the result appears on this page." />
          <div className="form-grid">
            <form className="panel form" onSubmit={generateReading}>
              <h3>Reading Form</h3>
              <label>Name<input value={name} onChange={e => setName(e.target.value)} placeholder="Example: Sarah" /></label>
              <label>Date of birth<input type="date" value={birthDate} onChange={e => setBirthDate(e.target.value)} /></label>
              <label>Gender<select value={gender} onChange={e => setGender(e.target.value)}><option value="">Prefer not to say</option><option>Female</option><option>Male</option><option>Other</option></select></label>
              <label>Zodiac sign<select value={zodiacSign} onChange={e => setZodiacSign(e.target.value)}>{zodiacSigns.map(sign => <option key={sign}>{sign}</option>)}</select></label>
              <label>Reading type<select value={category} onChange={e => setCategory(e.target.value)}><option>Love</option><option>Career</option><option>General</option><option>Future</option><option>Personal Growth</option></select></label>
              <label>Your question<textarea value={question} onChange={e => setQuestion(e.target.value)} placeholder="Example: What is coming for me in love?" /></label>
              <button className="btn" disabled={loading}>{loading ? "Generating..." : "Get My Free Reading"}</button>
              <p className="notice">This is for entertainment and self-reflection only.</p>
            </form>
            <div className="result"><h3>{zodiacSign} Daily Energy</h3><p>{dailyText[zodiacSign]}</p><hr /><h3>Your Free Reading</h3><p>{reading}</p>{readingMode && <span className="mode">{readingMode}</span>}</div>
          </div>
        </div>
      </section>

      <section id="palm" className="section">
        <div className="container">
          <SectionHead eyebrow="Free Palm Reading" title="Client uploads a palm photo" text="With an API key, the backend can send the uploaded image to an AI vision model and return a palmistry-style reading." />
          <div className="form-grid">
            <form className="panel form" onSubmit={generatePalmReading}>
              <h3>Palm Upload Form</h3>
              <label>Hand type<select value={handType} onChange={e => setHandType(e.target.value)}><option>Right hand</option><option>Left hand</option></select></label>
              <label>Upload palm image<input type="file" accept="image/*" onChange={e => setPalmImage(e.target.files?.[0] || null)} /></label>
              <button className="btn" disabled={palmLoading}>{palmLoading ? "Generating..." : "Get Free Palm Reading"}</button>
              <p className="notice">Use a clear palm photo in good lighting. Do not upload private documents or sensitive images.</p>
            </form>
            <div className="result"><h3>Your Palm Reading</h3><p>{palmReading}</p>{palmMode && <span className="mode">{palmMode}</span>}</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="panel"><h3><Heart size={20} /> Love Compatibility</h3><div className="grid-2"><label>Your sign<select value={zodiacSign} onChange={e => setZodiacSign(e.target.value)}>{zodiacSigns.map(sign => <option key={sign}>{sign}</option>)}</select></label><label>Partner sign<select value={partnerSign} onChange={e => setPartnerSign(e.target.value)}>{zodiacSigns.map(sign => <option key={sign}>{sign}</option>)}</select></label></div><p style={{marginTop: 16}}>{compatibility}</p></div>
          <div className="panel"><h3><Sparkles size={20} /> Tarot-Style Guidance</h3><p>Ask a question in the main reading form. The AI reading section can answer love, career, general life, and future-style questions in a clear spiritual tone.</p></div>
        </div>
      </section>

      <section id="dashboard" className="section">
        <div className="container">
          <SectionHead eyebrow="Dashboard" title="Client account area for the future" text="This starter includes the visual dashboard. A database can later save each user's readings and daily visits." />
          <div className="dashboard"><div className="dark-card"><h3>Guest Dashboard</h3><p>Free plan active</p><div className="mini-cards"><div className="mini-card"><strong>0</strong><br />Saved readings</div><div className="mini-card"><strong>Free</strong><br />Plan</div></div></div><div className="grid-2"><div className="panel"><h3>Recent Horoscope</h3><p>No saved reading yet.</p></div><div className="panel"><h3>Recent Palm Reading</h3><p>No saved palm result yet.</p></div><AdBox label="Dashboard ad space" /><div className="panel"><h3>Email Growth</h3><p>Add newsletter signup to bring visitors back daily.</p></div></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Earning Plan" title="How it earns while staying free" text="Use AdSense after the site has original content and good navigation. Google says AdSense sites need high-quality original content, good user experience, and access to the site's HTML source for ad code." />
          <div className="grid-4"><Feature icon={Gift} title="AdSense" text="Place ads on reading pages, result pages, and blog posts after approval." /><Feature icon={Sparkles} title="SEO Blog" text="Publish horoscope and astrology articles to bring Google traffic." /><Feature icon={Heart} title="Affiliate Links" text="Promote spiritual products, books, apps, and courses." /><Feature icon={User} title="Live Advisors Later" text="Keep AI free, then add optional human chat later." /></div>
        </div>
      </section>
    </main>

    <footer className="footer"><div className="container footer-inner"><span>© 2026 FreeAura AI. Free AI horoscope and spiritual insight platform.</span><span><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></span></div></footer>
  </>;
}
