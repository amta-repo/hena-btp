import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Building2, Target, Eye, Shield, Users, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/hero-construction.jpg";

const values = [
  { icon: Shield, title: "Sécurité", desc: "La sécurité de nos équipes et de vos biens est notre priorité absolue sur chaque chantier." },
  { icon: Award, title: "Qualité", desc: "Nous visons l'excellence dans chaque détail, des fondations aux finitions." },
  { icon: Users, title: "Collaboration", desc: "Nous travaillons main dans la main avec nos clients pour réaliser leur vision." },
  { icon: Target, title: "Innovation", desc: "Nous adoptons les techniques modernes pour des constructions durables et performantes." },
];

const timeline = [
  { year: "Fondation", desc: "Création de HENA BTP à Cotonou, Bénin, avec pour mission de bâtir des ouvrages de qualité." },
  { year: "Croissance", desc: "Expansion des activités dans la construction de villas, bâtiments publics et travaux de génie civil." },
  { year: "Groupe HSE", desc: "Intégration au Groupe HSE, renforçant notre engagement en Hygiène, Sécurité et Environnement." },
  { year: "Aujourd'hui", desc: "Plus de 150 projets réalisés, une équipe de professionnels qualifiés et une réputation d'excellence au Bénin." },
];

const AProposPage = () => (
  <>
    <Helmet>
      <title>À Propos de HENA BTP | Entreprise BTP Cotonou, Bénin - Groupe HSE</title>
      <meta name="description" content="Découvrez HENA BTP, Groupe HSE : entreprise de BTP à Cotonou, Bénin. Notre histoire, nos valeurs, notre mission et notre engagement pour la qualité." />
    </Helmet>

    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
            À propos
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            HENA BTP, Groupe HSE
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            Bâtir l'avenir du Bénin, un projet à la fois.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Notre histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée à Cotonou, au Bénin, <strong className="text-foreground">HENA BTP</strong> est née de la volonté de proposer des services de construction de qualité internationale, adaptés aux réalités du marché béninois.
                </p>
                <p>
                  Membre du <strong className="text-foreground">Groupe HSE</strong>, nous plaçons l'Hygiène, la Sécurité et l'Environnement au cœur de chaque projet. Cette philosophie nous distingue et garantit des chantiers sûrs, propres et respectueux de l'environnement.
                </p>
                <p>
                  Notre équipe d'ingénieurs, d'architectes et de techniciens qualifiés accompagne nos clients de la conception à la livraison, en passant par le suivi de chantier et le contrôle qualité.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={heroImg} alt="Équipe HENA BTP sur un chantier de construction à Cotonou" loading="lazy" width={800} height={600} className="w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl bg-card p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notre Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bâtir des ouvrages durables, esthétiques et conformes aux normes internationales, tout en contribuant au développement des infrastructures au Bénin. Nous voulons être le partenaire BTP de référence pour chaque famille et entreprise béninoise.
            </p>
          </div>
          <div className="rounded-xl bg-card p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notre Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Devenir l'entreprise de BTP de référence au Bénin et en Afrique de l'Ouest, reconnue pour la qualité de ses réalisations, le respect des normes HSE et son impact positif sur le développement urbain.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Nos valeurs</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-center mb-10">Notre parcours</h2>
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-primary-foreground/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-semibold text-primary-foreground">{t.year}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary mb-6">
            <Building2 className="h-10 w-10 text-primary-foreground" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Travaillons ensemble</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Confiez votre projet de construction à une équipe passionnée et expérimentée.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
          >
            Nous contacter
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default AProposPage;
