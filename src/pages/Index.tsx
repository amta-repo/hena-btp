import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, FileText, ArrowRight, Home, Building, Landmark, Droplets, ShieldCheck, Wrench, MapPin, Clock, Lightbulb, X, CheckCircle, Users, Award, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import heroImg from "@/assets/hero-construction.jpg";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import roadImg from "@/assets/project-road.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "HENA BTP, Groupe HSE",
  description: "Entreprise de Bâtiment et Travaux Publics à Cotonou, Bénin. Construction, génie civil et suivi HSE au Bénin et en Afrique de l'Ouest.",
  url: "https://henabtp.com",
  telephone: "+2290155496155",
  email: "henafinancebtp@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
  geo: { "@type": "GeoCoordinates", latitude: 6.4073475, longitude: 2.3279387 },
  areaServed: ["Bénin", "Afrique de l'Ouest"],
};

const services = [
  {
    icon: Home,
    title: "Construction clé en main",
    desc: "Maisons individuelles et villas contemporaines.",
    details: [
      "Plans architecturaux sur mesure",
      "Fondations solides adaptées au sol béninois",
      "Finitions haut de gamme",
      "Installation électrique et plomberie aux normes",
      "Livraison clé en main avec garantie décennale",
    ],
  },
  {
    icon: Building,
    title: "Étude et suivi de chantiers",
    desc: "Accompagnement de la conception à la livraison.",
    details: [
      "Études de faisabilité technique et financière",
      "Conception architecturale fonctionnelle",
      "Suivi de chantier en temps réel",
      "Contrôle qualité à chaque étape",
      "Conformité aux normes HSE",
    ],
  },
  {
    icon: Landmark,
    title: "Génie civil et voiries",
    desc: "Routes, ponts et infrastructures de génie civil.",
    details: [
      "Construction et réhabilitation de routes",
      "Ouvrages d'art : ponts, dalots, caniveaux",
      "Terrassement et VRD",
      "Études géotechniques préalables",
      "Suivi topographique de précision",
    ],
  },
  {
    icon: Droplets,
    title: "Aménagement & Assainissement",
    desc: "Viabilisation de parcelles et réseaux d'assainissement.",
    details: [
      "Aménagement de parcelles",
      "Réseaux d'assainissement",
      "Drainage et gestion des eaux",
      "Voirie et réseaux divers (VRD)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Suivi HSE sur Chantiers",
    desc: "Hygiène, Sécurité et Environnement intégrés.",
    details: [
      "Audit de sécurité avant démarrage",
      "Formation des ouvriers",
      "Inspections régulières",
      "Rapports HSE hebdomadaires",
    ],
  },
  {
    icon: Wrench,
    title: "Rénovation & Extension",
    desc: "Modernisation et agrandissement de bâtiments.",
    details: [
      "Modernisation de bâtiments",
      "Réhabilitation complète",
      "Extension et surélévation",
      "Mise aux normes techniques",
    ],
  },
];

const featuredProjects = [
  { img: villaImg, title: "Villa Moderne – Cotonou", cat: "Villas", alt: "Villa moderne HENA BTP Cotonou" },
  { img: officeImg, title: "Immeuble de Bureaux", cat: "Bâtiments", alt: "Bâtiment administratif HENA BTP" },
  { img: roadImg, title: "Route Nationale – Bénin", cat: "Travaux Publics", alt: "Travaux publics HENA BTP" },
];

const whyUsReasons = [
  { icon: MapPin, title: "Expertise locale", desc: "Connaissance du terrain et des réglementations béninoises." },
  { icon: ShieldCheck, title: "Engagement HSE", desc: "Sécurité et environnement au cœur de chaque projet." },
  { icon: Clock, title: "Respect des délais", desc: "Engagement contractuel sur les délais et le budget." },
  { icon: Lightbulb, title: "Solutions adaptées", desc: "Constructions pensées pour le Bénin." },
  { icon: Users, title: "Équipe qualifiée", desc: "Ingénieurs et techniciens expérimentés." },
  { icon: Award, title: "Qualité premium", desc: "Matériaux de première qualité." },
  { icon: Target, title: "Suivi rigoureux", desc: "Chef de projet dédié et rapports réguliers." },
  { icon: Heart, title: "Satisfaction garantie", desc: "Service après-vente réactif et garantie décennale." },
];

const Index = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>HENA BTP Cotonou | Construction Maison & Travaux Publics Bénin - Groupe HSE</title>
        <meta name="description" content="HENA BTP, Groupe HSE : entreprise de BTP à Cotonou, Bénin. Construction de maisons modernes, villas, bâtiments publics, travaux de génie civil. Devis gratuit." />
        <meta name="keywords" content="HENA BTP Cotonou, construction maison Bénin, travaux publics Cotonou, BTP Bénin, génie civil Bénin, HENA BTP, Groupe HSE" />
        <link rel="canonical" href="https://henabtp.com" />
        <meta property="og:title" content="HENA BTP - Construction & Travaux Publics à Cotonou, Bénin" />
        <meta property="og:description" content="Votre partenaire BTP de confiance au Bénin et en Afrique de l'Ouest." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://henabtp.com" />
        <meta property="og:locale" content="fr_BJ" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Chantier de construction moderne HENA BTP à Cotonou, Bénin" width={1920} height={1080} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary/75" />
          </div>
          <div className="container relative z-10 mx-auto py-32 sm:py-40">
            <div className="max-w-3xl space-y-6 animate-fade-in-up">
              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground">
                🏗️ BTP — Bénin &amp; Afrique de l'Ouest
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
                <span className="text-gradient">Votre partenaire BTP</span> de confiance au Bénin
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
                Construction moderne, qualité premium, respect des normes HSE — De la conception à la livraison.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-primary-foreground/70 text-sm sm:text-base">
                "La seule façon de faire du bon travail, c'est d'aimer ce que vous faites."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 shadow-lg"
                >
                  <FileText className="h-4 w-4" />
                  Demander un devis gratuit
                </Link>
                <a
                  href="https://wa.me/2290155496155?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20web%20et%20je%20souhaite%20discuter%20de%20mon%20projet%20de%20construction."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Nous contacter sur WhatsApp
                </a>
              </div>
            </div>
          </div>
          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
              <AnimatedCounter end={10} suffix="+" label="Années d'expérience" duration={2000} />
              <AnimatedCounter end={150} suffix="+" label="Projets réalisés" duration={2500} />
              <AnimatedCounter end={100} suffix="%" label="Clients satisfaits" duration={2000} />
              <AnimatedCounter end={0} label="Normes respectées" isText text="HSE" />
            </div>
          </div>
        </section>

        {/* Services preview with modals */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Services</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Des solutions BTP complètes</h2>
              <p className="mt-3 text-muted-foreground">
                De la construction neuve à la rénovation, HENA BTP couvre tous vos besoins.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <div key={s.title} className="group rounded-xl bg-card p-6 sm:p-8 hover-lift cursor-pointer" style={{ boxShadow: "var(--card-shadow)" }} onClick={() => setOpenService(i)}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                    En savoir plus <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                Voir tous nos services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {openService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm p-4" onClick={() => setOpenService(null)}>
            <div className="relative w-full max-w-lg rounded-2xl bg-card p-6 sm:p-8 animate-scale-in" style={{ boxShadow: "var(--card-shadow)" }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setOpenService(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  {(() => { const Icon = services[openService].icon; return <Icon className="h-6 w-6" />; })()}
                </div>
                <h3 className="text-xl font-bold text-foreground">{services[openService].title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{services[openService].desc}</p>
              <ul className="space-y-3 mb-6">
                {services[openService].details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" onClick={() => setOpenService(null)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                  <FileText className="h-4 w-4" /> Demander un devis
                </Link>
                <Link to="/services" onClick={() => setOpenService(null)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                  Tous les services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Featured projects */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Réalisations</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Des projets qui parlent d'eux-mêmes</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((p, i) => (
                <div key={i} className="group overflow-hidden rounded-xl hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.alt} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="bg-card p-4">
                    <span className="text-xs font-medium text-accent">{p.cat}</span>
                    <h3 className="mt-1 text-sm font-semibold text-foreground">{p.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                Voir toutes nos réalisations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Why us */}
        <section className="bg-primary section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Pourquoi HENA BTP ?</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">La confiance bâtie sur l'excellence</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyUsReasons.map((r) => (
                <div key={r.title} className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center hover-lift">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/a-propos" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                En savoir plus sur nous <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent section-padding">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Prêt à construire votre projet ?</h2>
            <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
              Contactez HENA BTP dès aujourd'hui pour un devis gratuit et personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
                Demander un devis gratuit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/a-propos" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent-foreground/30 px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
