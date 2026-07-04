import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogArticleRenderer from "@/components/blog/BlogArticleRenderer";
import BlogCta from "@/components/blog/BlogCta";
import NotFound from "@/pages/NotFound";
import {
  getPostBySlug,
  getRelatedPosts,
  blogAuthor,
  type BlogPost,
} from "@/data/blogPosts";

const buildJsonLd = (post: BlogPost) => {
  const canonical = `/blog/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.metaDescription,
    inLanguage: "fr-BJ",
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: blogAuthor },
    publisher: {
      "@type": "Organization",
      name: blogAuthor,
      logo: { "@type": "ImageObject", url: "/favicon.png" },
    },
    mainEntityOfPage: canonical,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
    about: {
      "@type": "LocalBusiness",
      name: "HENA BTP, Groupe HSE",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Von en face de la Pharmacie Houénoussou Gare, Godomey",
        addressLocality: "Abomey-Calavi",
        addressCountry: "BJ",
      },
    },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };
  return { articleLd, faqLd, breadcrumbLd, canonical };
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const { articleLd, faqLd, breadcrumbLd, canonical } = buildJsonLd(post);
  const related = getRelatedPosts(post);
  const headings = post.content.filter((b) => b.type === "h2") as Array<{
    type: "h2";
    id: string;
    text: string;
  }>;

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content="fr_BJ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="keywords" content={[post.primaryKeyword, ...post.secondaryKeywords].join(", ")} />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <header className="bg-primary pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div className="container mx-auto max-w-4xl">
            <nav aria-label="Fil d'Ariane" className="mb-4 text-xs text-primary-foreground/70">
              <Link to="/" className="hover:text-accent">Accueil</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-foreground/90">{post.title}</span>
            </nav>
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent">
              {post.heroEyebrow}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
              {post.h1}
            </h1>
            <p className="mt-4 text-primary-foreground/80 max-w-3xl">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-primary-foreground/70">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{new Date(post.updatedAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readingTime} de lecture</span>
              <span className="inline-flex items-center gap-1.5"><Tag className="h-3.5 w-3.5" />{post.category}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />Cotonou · Abomey-Calavi · Bénin</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto max-w-4xl py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_240px]">
            <article>
              {/* TOC (mobile) */}
              {headings.length > 0 && (
                <nav aria-label="Sommaire" className="lg:hidden mb-8 rounded-xl bg-secondary/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Sommaire</p>
                  <ol className="space-y-1.5 text-sm list-decimal pl-5">
                    {headings.map((h) => (
                      <li key={h.id}><a href={`#${h.id}`} className="text-foreground hover:text-accent">{h.text}</a></li>
                    ))}
                  </ol>
                </nav>
              )}

              <BlogArticleRenderer post={post} />
              <BlogCta />

              {/* FAQ */}
              <section aria-labelledby="faq-heading" className="mt-12">
                <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-foreground">Questions fréquentes</h2>
                <div className="mt-6 space-y-4">
                  {post.faq.map((f, i) => (
                    <details key={i} className="group rounded-xl border border-border bg-card p-5">
                      <summary className="cursor-pointer list-none font-semibold text-foreground flex items-start justify-between gap-4">
                        <span>{f.q}</span>
                        <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                      </summary>
                      <p className="mt-3 text-foreground/85 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Internal links */}
              <section className="mt-12">
                <h2 className="text-xl font-bold text-foreground mb-4">Aller plus loin</h2>
                <ul className="space-y-2">
                  {post.internalLinks.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-accent hover:underline font-medium">→ {l.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            </article>

            {/* Sidebar TOC (desktop) */}
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-xl bg-secondary/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Sommaire</p>
                  <ol className="space-y-2 text-sm list-decimal pl-5">
                    {headings.map((h) => (
                      <li key={h.id}><a href={`#${h.id}`} className="text-foreground/80 hover:text-accent">{h.text}</a></li>
                    ))}
                  </ol>
                </div>
              </aside>
            )}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16 border-t border-border pt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Articles liés</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group block rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">{r.category}</p>
                    <h3 className="mt-2 font-bold text-foreground group-hover:text-accent transition-colors">{r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{r.excerpt}</p>
                    <p className="mt-3 text-xs text-muted-foreground">{r.readingTime} · {r.category}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
              <ArrowLeft className="h-4 w-4" /> Retour au blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPostPage;
