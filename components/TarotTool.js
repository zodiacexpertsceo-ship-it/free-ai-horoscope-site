"use client";

import { useState } from "react";
import { buildTarot } from "@/lib/readings";

export default function TarotTool() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("Write your question and choose a card to receive guidance.");
  function submit(e) { e.preventDefault(); setResult(buildTarot(question)); }
  return (
    <div className="tool-layout">
      <form className="tool-card form-grid" onSubmit={submit}>
        <label>Your question<textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask about love, work, timing, or personal direction" /></label>
        <div className="badge-list">
          <span className="badge">The Star</span><span className="badge">The Moon</span><span className="badge">The Lovers</span><span className="badge">The Sun</span>
        </div>
        <button className="primary-btn" type="submit">Reveal Guidance</button>
      </form>
      <div className="result-box">
        <h3>Tarot-Style Guidance</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
