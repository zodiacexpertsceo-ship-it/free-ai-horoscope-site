"use client";

import { useState } from "react";
import { zodiacSigns } from "@/lib/data";
import { buildCompatibility } from "@/lib/readings";

export default function CompatibilityTool() {
  const [one, setOne] = useState("Aries");
  const [two, setTwo] = useState("Libra");
  const [result, setResult] = useState(buildCompatibility("Aries", "Libra"));
  function submit(e) { e.preventDefault(); setResult(buildCompatibility(one, two)); }
  return (
    <div className="tool-layout">
      <form className="tool-card form-grid" onSubmit={submit}>
        <div className="form-row">
          <div><label>Your sign<select value={one} onChange={(e) => setOne(e.target.value)}>{zodiacSigns.map(s => <option key={s.name}>{s.name}</option>)}</select></label></div>
          <div><label>Partner sign<select value={two} onChange={(e) => setTwo(e.target.value)}>{zodiacSigns.map(s => <option key={s.name}>{s.name}</option>)}</select></label></div>
        </div>
        <button className="primary-btn" type="submit">Check Match</button>
      </form>
      <div className="result-box">
        <h3>Love Match Result</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
