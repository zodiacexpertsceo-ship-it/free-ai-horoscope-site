import PageHero from "@/components/PageHero";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <main>
      <PageHero label="Articles" title="Astrology blog" text="Helpful spiritual and astrology articles for horoscope, palmistry, love, and personal growth topics." />
      <section className="section"><div className="container cards-grid">{blogPosts.map(post => <div className="article-card" key={post.title}><span className="badge">{post.tag}</span><h3>{post.title}</h3><p>{post.excerpt}</p></div>)}</div></section>
    </main>
  );
}
