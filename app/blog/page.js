const articles = [
  {
    title: "How to Read Your Daily Horoscope Clearly",
    text: "A daily horoscope works best when you use it as reflection, not pressure. Notice the theme, compare it with your current situation, and take one calm step forward."
  },
  {
    title: "Palm Reading Basics for Beginners",
    text: "Palmistry usually looks at the life line, heart line, head line, palm shape, and finger balance. This website uses an AI-style interpretation for entertainment and self-reflection."
  },
  {
    title: "Love Compatibility and Zodiac Signs",
    text: "Compatibility is not only about zodiac signs. Communication, timing, effort, and honesty matter. Zodiac readings can help users reflect on patterns in a connection."
  }
];

export const metadata = { title: "Blog | FreeAura AI" };

export default function BlogPage() {
  return <main className="container page"><h1>Horoscope Blog</h1><p>Publish original articles here before applying for AdSense. This helps SEO and gives visitors more useful content.</p><div className="blog-list">{articles.map(article => <article className="article-card" key={article.title}><h3>{article.title}</h3><p>{article.text}</p></article>)}</div></main>;
}
