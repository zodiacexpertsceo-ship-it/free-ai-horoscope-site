export default function PageHero({ label, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow">✦ {label}</div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
