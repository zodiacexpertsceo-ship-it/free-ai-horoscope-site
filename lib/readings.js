export function buildReading({ name, sign, topic, question }) {
  const visitor = name?.trim() || "Dear visitor";
  const selectedSign = sign || "your sign";
  const selectedTopic = topic || "general life";
  const hasQuestion = question?.trim();

  return `${visitor}, your ${selectedSign} energy around ${selectedTopic} shows a need for calm focus, better timing, and clearer personal direction. The strongest message here is to stop rushing the answer and start noticing what feels consistent. ${hasQuestion ? "Your question shows that this matter has been on your mind for a reason, and the result points toward gradual clarity rather than a sudden turn." : "The coming days support reflection, practical choices, and a softer approach with yourself."} A good step now is to choose one clear action, keep your standards steady, and allow the situation to reveal more through actions, not only words.`;
}

export function buildCompatibility(signOne, signTwo) {
  if (!signOne || !signTwo) return "Choose both signs to see the compatibility message.";
  return `${signOne} and ${signTwo} create a connection that can feel magnetic when both people are honest about expectations. The attraction is strongest when communication stays direct and neither side tests the other through silence. This match can work well when patience, loyalty, and respect are stronger than pride.`;
}

export function buildPalmReading({ hand, focus }) {
  const chosenHand = hand || "dominant hand";
  const chosenFocus = focus || "life direction";
  return `Your ${chosenHand} reading around ${chosenFocus} points toward a person who carries strong inner awareness and learns through experience. The heart energy shows loyalty, but also a need for trust before fully opening. The life path message suggests steady progress, not rushed success. You are guided to protect your peace, make practical choices, and let your next chapter grow through patience and confidence.`;
}

export function buildKundli({ name, birthDate, birthTime, birthPlace }) {
  const visitor = name?.trim() || "Dear visitor";
  const dateLine = birthDate ? ` Birth date focus: ${birthDate}.` : "";
  const timeLine = birthTime ? ` Birth time focus: ${birthTime}.` : "";
  const placeLine = birthPlace ? ` Birth place focus: ${birthPlace}.` : "";
  return `${visitor}, your kundli-style report shows a life path connected with growth through discipline, relationships, self-awareness, and important timing cycles.${dateLine}${timeLine}${placeLine} The strongest themes are personal responsibility, emotional maturity, career direction, and building a stable future. This report suggests that your best progress comes when you avoid scattered decisions and follow a clear long-term plan.`;
}

export function buildTarot(question) {
  const q = question?.trim();
  return q
    ? `The guidance around your question shows a pause before movement. The answer is not closed, but it needs patience, honest observation, and less pressure. What is meant to continue will become clearer through repeated effort and consistent action. For now, choose calm communication and avoid forcing a result before the timing is ready.`
    : "Write your question first to receive guidance.";
}
