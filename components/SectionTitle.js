export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      {eyebrow && <div className="eyebrow">✦ {eyebrow}</div>}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
