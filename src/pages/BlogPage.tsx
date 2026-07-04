import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  const pillar = blogPosts[0];
  const others = blogPosts.slice(1);

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog HENA BTP — BTP au Bénin",
    inLanguage: "fr-BJ",
    publisher: { "@type": "Organization", name: "HENA BTP, Groupe HSE" },
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.h1,
      url: `/blog/${p.slug}`,
      datePublished: p.publishedAt,
      dateModified: p.updatedAt,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Blog BTP au Bénin | HENA BTP Cotonou — Guides, prix, conseils</title>
        <meta
          name="description"
          content="Guides et conseils BTP au Bénin : prix de construction à Cotonou, entreprises, métiers, ouvrir une société BTP. L'expertise HENA BTP, Groupe HSE."
        />
        <link rel="canonical" href="/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog BTP au Bénin — HENA BTP Cotonou" />
        <meta property="og:description" content="Guides et conseils BTP à Cotonou et Abomey-Calavi." />
        <meta property="og:url" content="/blog" />
        <script type="application/ld+json">{JSON.stringify(blogLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="container mx-auto text-center max-w-3xl">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent mb-4">
              Blog HENA BTP
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
              Guides et conseils sur le BTP au Bénin
            </h1>
            <p className="mt-4 text-primary-foreground/80">
              Prix de construction, réglementation, entreprises, métiers : toutes les
              ressources pour réussir un projet BTP à Cotonou, Abomey-Calavi et partout au Bénin.
            </p>
          </div>
        </section>

        {/* Pillar highlight */}
        <section className="section-padding">
          <div className="container mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Guide pilier
            </p>
            <Link
              to={`/blog/${pillar.slug}`}
              className="group block rounded-2xl bg-card p-8 sm:p-10 transition-shadow hover:shadow-xl"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                {pillar.h1}
              </h2>
              <p className="mt-4 text-foreground/80 max-w-3xl">{pillar.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {pillar.readingTime}
                </span>
                <span>{pillar.category}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Lire le guide complet <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-16 sm:pb-24">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Tous les articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl bg-card p-6 transition-shadow hover:shadow-lg"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-accent">
                      Lire <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold">Un projet BTP au Bénin ?</h2>
            <p className="mt-3 text-primary-foreground/80">
              Discutons de votre construction, rénovation ou projet de génie civil à
              Cotonou ou Abomey-Calavi.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Demander un devis gratuit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPage;
