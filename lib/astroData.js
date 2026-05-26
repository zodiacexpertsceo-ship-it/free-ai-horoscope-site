export const signs = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈', element: 'Fire' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉', element: 'Earth' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊', element: 'Air' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋', element: 'Water' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌', element: 'Fire' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍', element: 'Earth' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎', element: 'Air' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏', element: 'Water' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐', element: 'Fire' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑', element: 'Earth' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒', element: 'Air' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓', element: 'Water' }
];

export const dailyCopy = {
  Daily: 'Today brings a steady shift in your personal energy. Focus on clarity, patience, and one honest decision that can make the day easier.',
  Love: 'In love, the energy is asking for softer communication and less pressure. A small message, gentle tone, or honest pause can change the direction.',
  Career: 'Career energy points toward focus and practical progress. Avoid rushing. Finish one important task before starting something new.',
  Money: 'Money energy is stable when you avoid emotional spending. A careful choice today can protect your balance for the next few days.',
  Health: 'Your body needs a calmer rhythm today. Rest, hydration, and simple movement can help you feel more centered.',
  Weekly: 'This week supports gradual improvement. A delayed answer or slow situation can still move forward when handled with patience.',
  Monthly: 'This month highlights decisions, personal growth, and a stronger need for direction. The best progress comes from consistency.'
};

export const tarotCards = [
  { name: 'The Star', meaning: 'Hope, healing, and renewed direction.' },
  { name: 'The Moon', meaning: 'Hidden feelings, intuition, and unclear signs.' },
  { name: 'The Sun', meaning: 'Growth, warmth, confidence, and better days.' },
  { name: 'The Lovers', meaning: 'Connection, choice, attraction, and emotional truth.' },
  { name: 'The Hermit', meaning: 'Reflection, inner wisdom, and quiet answers.' },
  { name: 'Wheel of Fortune', meaning: 'A turning point, timing, and unexpected change.' },
  { name: 'Strength', meaning: 'Patience, inner control, and calm courage.' },
  { name: 'Justice', meaning: 'Truth, balance, fairness, and clear decisions.' }
];

export const houses = [
  'Self, body, personality, and first impression',
  'Money, family, speech, and personal values',
  'Communication, courage, siblings, and effort',
  'Home, mother, peace, property, and roots',
  'Love, creativity, children, education, and joy',
  'Health, service, discipline, and daily obstacles',
  'Marriage, partnership, contracts, and long-term bonds',
  'Transformation, secrets, depth, and shared resources',
  'Luck, faith, higher learning, and travel',
  'Career, status, ambition, and public life',
  'Gains, friends, networks, and long-term hopes',
  'Rest, isolation, expenses, healing, and spiritual release'
];

export function signFromDate(dateString) {
  if (!dateString) return 'Aries';
  const date = new Date(dateString);
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return 'Aries';
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return 'Taurus';
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return 'Gemini';
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return 'Cancer';
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return 'Leo';
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return 'Virgo';
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return 'Libra';
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return 'Scorpio';
  if ((m === 11 && d >= 22) || (m === 12 && d <= 21)) return 'Sagittarius';
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return 'Capricorn';
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return 'Aquarius';
  return 'Pisces';
}
