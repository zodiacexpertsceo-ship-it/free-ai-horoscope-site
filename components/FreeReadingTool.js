"use client";

import { useState } from "react";
import { zodiacSigns } from "@/lib/data";
import { buildReading } from "@/lib/readings";

export default function FreeReadingTool() {
  const [form, setForm] = useState({ name: "", birthDate: "", sign: "Aries", topic: "Love", question: "" });
  const [reading, setReading] = useState("Fill the form and press the button to create your free reading.");

  function update(key, value) { setForm((old) => ({ ...old, [key]: value })); }
  function submit(e) {
    e.preventDefault();
    setReading(buildReading(form));
  }

  return (
    <div className="tool-layout">
      <form className="tool-card form-grid" onSubmit={submit}>
        <div className="form-row">
          <div><label>Name<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Enter your name" /></label></div>
          <div><label>Date of birth<input type="date" value={form.birthDate} onChange={(e) => update("birthDate", e.target.value)} /></label></div>
        </div>
        <div className="form-row">
          <div><label>Zodiac sign<select value={form.sign} onChange={(e) => update("sign", e.target.value)}>{zodiacSigns.map(s => <option key={s.name}>{s.name}</option>)}</select></label></div>
          <div><label>Reading topic<select value={form.topic} onChange={(e) => update("topic", e.target.value)}><option>Love</option><option>Career</option><option>Money</option><option>Health</option><option>General Life</option></select></label></div>
        </div>
        <label>Your question<textarea value={form.question} onChange={(e) => update("question", e.target.value)} placeholder="Write your question here" /></label>
        <button className="primary-btn" type="submit">Get Free Reading</button>
      </form>
      <div className="result-box">
        <h3>Your Reading</h3>
        <p>{reading}</p>
      </div>
    </div>
  );
}
