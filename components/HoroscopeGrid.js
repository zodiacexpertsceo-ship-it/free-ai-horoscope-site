import { zodiacSigns } from "@/lib/data";

export default function HoroscopeGrid() {
  return (
    <div className="sign-grid">
      {zodiacSigns.map((sign) => (
        <div className="sign-card" key={sign.name}>
          <strong>{sign.name}</strong>
          <span>{sign.dates} · {sign.element}</span>
          <p>{sign.tone}</p>
        </div>
      ))}
    </div>
  );
}
