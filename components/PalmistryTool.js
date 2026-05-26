"use client";

import { useState } from "react";
import { buildPalmReading } from "@/lib/readings";

export default function PalmistryTool() {
  const [form, setForm] = useState({ hand: "Right hand", focus: "Love and relationships", imageName: "" });
  const [result, setResult] = useState("Choose your palm reading details and press the button to see your result.");
  function update(key, value) { setForm((old) => ({ ...old, [key]: value })); }
  function submit(e) { e.preventDefault(); setResult(buildPalmReading(form)); }
  return (
    <div className="tool-layout">
      <form className="tool-card form-grid" onSubmit={submit}>
        <div className="form-row">
          <div><label>Hand<select value={form.hand} onChange={(e) => update("hand", e.target.value)}><option>Right hand</option><option>Left hand</option><option>Dominant hand</option></select></label></div>
          <div><label>Focus<select value={form.focus} onChange={(e) => update("focus", e.target.value)}><option>Love and relationships</option><option>Career and money</option><option>Life path</option><option>Personal growth</option></select></label></div>
        </div>
        <label>Upload palm photo<input type="file" accept="image/*" onChange={(e) => update("imageName", e.target.files?.[0]?.name || "")} /></label>
        <p>{form.imageName ? `Selected file: ${form.imageName}` : "Use a clear palm photo in good light."}</p>
        <button className="primary-btn" type="submit">Read My Palm</button>
      </form>
      <div className="result-box">
        <h3>Palmistry Result</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
