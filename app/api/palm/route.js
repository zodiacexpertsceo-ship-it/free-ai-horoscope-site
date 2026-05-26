import OpenAI from "openai";
import { buildPalmPrompt } from "../../../lib/prompts";

function fallbackPalmReading({ name }) {
  const visitor = name?.trim() || "Dear visitor";
  return `Overall Palm Energy\n${visitor}, your palm reading shows a thoughtful and sensitive energy. This suggests someone who observes deeply, carries strong inner feelings, and often needs clarity before making important choices.\n\nLife Line Impression\nThe life path energy points toward resilience and gradual growth. You may go through changes that make you stronger with time.\n\nHeart Line Impression\nIn love, your energy shows loyalty, care, and a desire for honest emotional connection. You may give a lot when you trust someone.\n\nHead Line Impression\nYour mind appears active and intuitive. You may think deeply before taking action, and at times you may overanalyze situations.\n\nCareer and Direction\nYour best path comes through patience, learning, and steady progress rather than sudden decisions.\n\nPersonal Guidance\nTrust your instincts, but also give yourself time to see facts clearly. This reading is for reflection and entertainment only.`;
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const birthDate = formData.get("birthDate")?.toString() || "";
    const handType = formData.get("handType")?.toString() || "";
    const image = formData.get("image");

    if (!image || typeof image === "string") {
      return Response.json({ error: "Please upload a palm image." }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({ reading: fallbackPalmReading({ name }), mode: "demo" });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const mime = image.type || "image/jpeg";
    const dataUrl = `data:${mime};base64,${base64}`;

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = buildPalmPrompt({ name, birthDate, handType });

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.5",
      input: [
        {
          role: "user",
          content: [
            { type: "input_text", text: prompt },
            { type: "input_image", image_url: dataUrl }
          ]
        }
      ]
    });

    return Response.json({ reading: response.output_text, mode: "ai" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Palm reading could not be generated right now." }, { status: 500 });
  }
}
