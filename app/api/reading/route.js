import OpenAI from "openai";
import { buildReadingPrompt } from "../../../lib/prompts";

function fallbackReading(body) {
  const name = body.name?.trim() || "Dear visitor";
  const category = body.category || "general";
  const sign = body.zodiacSign || "your sign";

  return `Main Energy\n${name}, your ${sign} energy shows a phase of reflection, personal clarity, and stronger direction. Around ${category.toLowerCase()}, there is a sense that you are trying to understand what feels right, what needs patience, and what deserves your focus.\n\nWhat This Means\nThis reading points toward a need to slow down and look at the situation with a clear mind. You may be receiving small signs through timing, repeated thoughts, dreams, or changes in someone’s behavior. The energy is not asking you to rush. It is asking you to notice patterns and trust what feels steady.\n\nNear Future\nIn the coming days, you may feel more certain about one choice that has been sitting in your mind. Communication can improve, and your own confidence can become stronger when you stop forcing answers.\n\nGuidance\nStay calm, protect your peace, and move one step at a time. This free reading is for reflection and entertainment, not a guaranteed prediction.`;
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ reading: fallbackReading(body), mode: "demo" });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = buildReadingPrompt(body);

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      input: prompt
    });

    return Response.json({ reading: response.output_text, mode: "ai" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Reading could not be generated right now." }, { status: 500 });
  }
}
