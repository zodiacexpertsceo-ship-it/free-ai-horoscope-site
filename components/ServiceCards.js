import Link from "next/link";
import { services } from "@/lib/data";

const icons = ["☉", "✦", "✋", "◈", "♡", "☾"];

export default function ServiceCards() {
  return (
    <div className="cards-grid">
      {services.map((service, index) => (
        <Link href={service.href} className="service-card" key={service.href}>
          <span className="icon">{icons[index]}</span>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <span className="card-link">Open section →</span>
        </Link>
      ))}
    </div>
  );
}
