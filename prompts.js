export function buildReadingPrompt({ name, birthDate, gender, category, question, zodiacSign }) {
  return `
You are writing a free AI horoscope and spiritual insight reading for a website visitor.

Visitor details:
Name: ${name || "Not provided"}
Date of birth: ${birthDate || "Not provided"}
Gender: ${gender || "Not provided"}
Zodiac sign: ${zodiacSign || "Not provided"}
Reading category: ${category || "General"}
Question: ${question || "No specific question"}

Write the reading in clear, natural English.
Rules:
- Keep it spiritual, helpful, and gentle.
- Do not claim certainty about real-world outcomes.
- Do not give medical, legal, or financial instructions.
- Mention this is for reflection and entertainment.
- Structure with: Main Energy, What This Means, Near Future, Guidance.
- 350 to 500 words.
`;
}

export function buildPalmPrompt({ name, birthDate, handType }) {
  return `
You are writing a free AI palmistry-style reading from an uploaded hand image.

Visitor details:
Name: ${name || "Not provided"}
Date of birth: ${birthDate || "Not provided"}
Hand type: ${handType || "Not provided"}

Analyze the visible palm image only as an entertainment/spiritual reading. Do not identify the person. Do not make medical claims.

Return a reading with these sections:
- Overall Palm Energy
- Life Line Impression
- Heart Line Impression
- Head Line Impression
- Career and Direction
- Love and Relationships
- Personal Guidance

Use clear, warm English. 350 to 500 words.
`;
}
