import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const BlogPage = () => (
  <>
    <Helmet>
      <title>Blog BTP | HENA BTP Cotonou - Conseils Construction et Actualités</title>
      <meta name="description" content="Retrouvez les conseils, actualités et guides de construction de HENA BTP. Tout savoir sur le BTP au Bénin et en Afrique de l'Ouest." />
      <link rel="canonical" href="https://henabtp.com/blog" />
    </Helmet>
    <Navbar />
    <main>
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">Blog</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Actualités et Conseils BTP
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">Articles, guides et actualités du secteur de la construction au Bénin.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto text-center max-w-xl">
          <div className="rounded-xl bg-card p-10" style={{ boxShadow: "var(--card-shadow)" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Bientôt disponible</h2>
            <p className="text-muted-foreground mb-6">Notre blog est en cours de préparation. Nous partagerons bientôt des articles sur la construction, les normes HSE et les tendances du BTP en Afrique.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default BlogPage;
