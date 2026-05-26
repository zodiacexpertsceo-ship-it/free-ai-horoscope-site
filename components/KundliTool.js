"use client";

import { useState } from "react";
import { buildKundli } from "@/lib/readings";

export default function KundliTool() {
  const [form, setForm] = useState({ name: "", gender: "Male", birthDate: "", birthTime: "", birthPlace: "" });
  const [result, setResult] = useState("Enter birth details to create a kundli-style report.");
  function update(key, value) { setForm((old) => ({ ...old, [key]: value })); }
  function submit(e) { e.preventDefault(); setResult(buildKundli(form)); }
  return (
    <div className="tool-layout">
      <form className="tool-card form-grid" onSubmit={submit}>
        <div className="form-row">
          <div><label>Name<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full name" /></label></div>
          <div><label>Gender<select value={form.gender} onChange={(e) => update("gender", e.target.value)}><option>Male</option><option>Female</option><option>Prefer not to say</option></select></label></div>
        </div>
        <div className="form-row">
          <div><label>Birth date<input type="date" value={form.birthDate} onChange={(e) => update("birthDate", e.target.value)} /></label></div>
          <div><label>Birth time<input type="time" value={form.birthTime} onChange={(e) => update("birthTime", e.target.value)} /></label></div>
        </div>
        <label>Birth place<input value={form.birthPlace} onChange={(e) => update("birthPlace", e.target.value)} placeholder="City, country" /></label>
        <button className="primary-btn" type="submit">Create Report</button>
      </form>
      <div className="result-box">
        <h3>Kundli-Style Report</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
