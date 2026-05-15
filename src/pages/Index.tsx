import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, FileText, ArrowRight, Home, Building, Landmark, Droplets, ShieldCheck, Wrench, MapPin, Clock, Lightbulb, X, CheckCircle, Users, Award, Target, Heart, Zap, Handshake, TrendingUp, HardHat, Hammer, Ruler, Compass, Construction } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import whyHeroVideo from "@/assets/why-henabtp.mp4";
import heroVideo from "@/assets/why-henabtp.mp4";
import ctaBgImg from "@/assets/CTA-background.jpg";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import roadImg from "@/assets/project-road.jpg";
import constructionImg from "@/assets/service-construction-cle-en-main.jpg";
import etudeImg from "@/assets/service-etude-suivi-chantiers.jpg";
import genieImg from "@/assets/service-genie-civil.jpg";
import amenagementImg from "@/assets/service-amenagement-assainissement.jpg";
import hseImg from "@/assets/service-suivi-hse-chantiers.jpg";
import renovationImg from "@/assets/service-renovation-extension.jpg";

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

const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "HENA BTP – Construction & Travaux Publics au Bénin",
  description: "Découvrez HENA BTP, Groupe HSE : entreprise de Bâtiment et Travaux Publics à Cotonou, Bénin. Construction de villas, bâtiments, génie civil et suivi HSE.",
  thumbnailUrl: ["https://henabtp.com/og-image.jpg"],
  uploadDate: "2024-01-01T00:00:00+00:00",
  contentUrl: "https://henabtp.com/why-henabtp.mp4",
  embedUrl: "https://henabtp.com/",
  publisher: {
    "@type": "Organization",
    name: "HENA BTP, Groupe HSE",
    logo: { "@type": "ImageObject", url: "https://henabtp.com/logo.png" },
  },
  inLanguage: "fr",
  regionsAllowed: "BJ,CI,SN,TG,FR",
};

const services = [
  {
    icon: Home,
    title: "Construction clé en main",
    desc: "Maisons individuelles et villas contemporaines.",
    image: constructionImg,
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
    image: etudeImg,
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
    image: genieImg,
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
    image: amenagementImg,
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
    image: hseImg,
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
    image: renovationImg,
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

const heroTexts = [
  "Votre partenaire BTP de confiance au Bénin",
  "Construction moderne, qualité premium, respect des normes HSE",
  "De la conception à la livraison, nous réalisons vos projets",
];

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return n;
}

const Stat = ({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) => {
  const n = useCountUp(value, run);
  return (
    <div className="group text-center">
      <div className="font-sans text-5xl font-black text-gradient md:text-6xl lg:text-7xl">
        {n}{suffix}
      </div>
      <div className="mt-3 h-px w-12 bg-accent/40 mx-auto transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const statsData = [
  { value: 5, suffix: "+", label: "Années d'expérience" },
  { value: 150, suffix: "+", label: "Projets réalisés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
  { value: 100, suffix: "%", label: "Normes HSE" },
];

const Index = () => {
  const [currentText, setCurrentText] = useState(0);
  const [openService, setOpenService] = useState<number | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsRun, setStatsRun] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStatsRun(true)),
      { threshold: 0.3 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

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
        <script type="application/ld+json">{JSON.stringify(videoJsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex items-center overflow-hidden pt-32 pb-24 sm:pt-48 sm:pb-32 lg:pt-64 lg:pb-40">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Vidéo HENA BTP – Construction et Travaux Publics au Bénin"
              title="HENA BTP - BTP Cotonou Bénin"
              className="absolute inset-0 min-h-full min-w-full object-cover"
            >
              <source src={heroVideo} type="video/mp4" />
              <track kind="descriptions" srcLang="fr" label="Description" />
              Votre navigateur ne supporte pas la lecture vidéo. HENA BTP, entreprise de Bâtiment et Travaux Publics à Cotonou, Bénin.
            </video>
            <div className="absolute inset-0 bg-primary/75" />
          </div>

          <div className="container relative z-10 mx-auto">
            <div className="max-w-3xl space-y-5">

              <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-xs font-semibold text-accent-foreground">
                🏗️ BTP — Bénin & Afrique de l'Ouest
              </span>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
                {heroTexts[currentText]}
              </h1>

              <p className="max-w-xl text-sm sm:text-base text-white/80">
                Construction moderne, qualité premium, respect des normes HSE.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">

                {/* CTA 1 */}
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-105 transition"
                >
                  <FileText className="h-4 w-4" />
                  Demander un devis
                </Link>

                {/* CTA 2 */}
                <a
                  href="https://wa.me/2290155496155"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

              </div>

              {/* Trust Badges */}
              <div className="grid gap-2 sm:gap-4 grid-cols-3 pt-8 max-w-2xl">
                {/* Badge 1 */}
                <div className="flex flex-col items-center text-center p-2 sm:p-4 rounded-[3px] border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Zap className="h-3 w-3 sm:h-6 sm:w-6 text-accent mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-xs font-semibold text-white leading-tight">Réactivité Garantie</p>
                  <p className="hidden sm:block text-[10px] text-white/70 mt-1">Réponse rapide à vos demandes</p>
                </div>
                {/* Badge 2 */}
                <div className="flex flex-col items-center text-center p-2 sm:p-4 rounded-[3px] border border-white/20 bg-white/10 backdrop-blur-sm">
                  <Handshake className="h-3 w-3 sm:h-6 sm:w-6 text-accent mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-xs font-semibold text-white leading-tight">Partenariat de Confiance</p>
                  <p className="hidden sm:block text-[10px] text-white/70 mt-1">Relations durables garanties</p>
                </div>
                {/* Badge 3 */}
                <div className="flex flex-col items-center text-center p-2 sm:p-4 rounded-[3px] border border-white/20 bg-white/10 backdrop-blur-sm">
                  <TrendingUp className="h-3 w-3 sm:h-6 sm:w-6 text-accent mb-1 sm:mb-2" />
                  <p className="text-[9px] sm:text-xs font-semibold text-white leading-tight">Croissance Prouvée</p>
                  <p className="hidden sm:block text-[10px] text-white/70 mt-1">Succès en progression constante</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="relative overflow-hidden border-y border-border bg-primary py-20">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto relative grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {statsData.map((s) => (
              <Stat key={s.label} {...s} run={statsRun} />
            ))}
          </div>
        </section>

        {/* Services preview with modals */}
        <section className="section-padding overflow-hidden bg-secondary/40">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Services</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Des solutions BTP complètes</h2>
              <p className="mt-3 text-muted-foreground">
                De la construction neuve à la rénovation, HENA BTP couvre tous vos besoins.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group relative w-full overflow-hidden rounded-xl bg-card border border-border cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-accent/50"
                  style={{ minHeight: "340px" }}
                  onClick={() => setOpenService(i)}
                >
                  {/* Decorative graphics */}
                  <div
                    className="absolute inset-0 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/30 group-hover:scale-125" />
                  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/15" />

                  <div className="relative p-8 flex flex-col h-full">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/70 text-accent-foreground shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>

                    <button
                      type="button"
                      className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent transition-all duration-300 group-hover:gap-3"
                    >
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-none bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                Voir tous nos services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {openService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/60 backdrop-blur-sm p-4" onClick={() => setOpenService(null)}>
            <div
              className="relative w-full max-w-lg rounded-2xl bg-card overflow-hidden animate-scale-in"
              style={{ boxShadow: "var(--card-shadow)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpenService(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 bg-background/80 rounded-full p-1">
                <X className="h-5 w-5" />
              </button>

              {/* Graphic header (no image) */}
              <div className="relative h-32 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--accent-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent-foreground)) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/40 blur-2xl" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
                    {(() => { const Icon = services[openService].icon; return <Icon className="h-7 w-7" />; })()}
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground">{services[openService].title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
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
                  <Link to="/contact" onClick={() => setOpenService(null)} className="inline-flex items-center justify-center gap-2 rounded-none bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                    <FileText className="h-4 w-4" /> Demander un devis
                  </Link>
                  <Link to="/services" onClick={() => setOpenService(null)} className="inline-flex items-center justify-center gap-2 rounded-none border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                    Tous les services <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured projects */}
        <section className="section-padding bg-slate-100/50">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Réalisations</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Des projets qui parlent d'eux-mêmes</h2>
            </div>
            {/* <div className="grid gap-6 grid-cols-2 lg:grid-cols-3"> */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
              <Link to="/realisations" className="inline-flex items-center gap-2 rounded-none bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                Voir toutes nos réalisations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Team */}
        <TeamSection variant="home" />

        {/* Why us */}
        <section className="relative overflow-hidden min-h-[55vh] section-padding">
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 min-h-full min-w-full object-cover"
              aria-hidden="true"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            >
              <source src={whyHeroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/75" />
          </div>
          <div className="container relative z-10">
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
        <section className="relative overflow-hidden py-32 sm:py-48">
          <div className="absolute inset-0">
            <img src={ctaBgImg} alt="Arrière-plan CTA" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          <div className="container relative z-10 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-5xl">
              {/* Orange box on the left */}
              <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-0xl p-12 sm:p-30 shadow-lg text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Prêt à construire votre projet ?</h2>
                <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
                  Contactez HENA BTP dès aujourd'hui pour un devis gratuit et personnalisé.
                </p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-none bg-white px-8 py-3.5 text-sm font-semibold text-orange-600 transition-transform hover:scale-105 shadow-lg">
                  Demander un devis gratuit <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              {/* Empty space on the right for visual balance */}
              <div></div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Nos Partenaires & Clients</h2>
              <p className="mt-3 text-muted-foreground">Travaillant avec les meilleures entreprises et organisations</p>
            </div>
            <div className="grid gap-0 grid-cols-1 sm:grid-cols-2 items-center justify-items-center">
              <div className="text-center py-8 sm:py-12 px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-accent/30 w-full flex items-center justify-center">
                <h3 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter text-accent" style={{ WebkitTextStroke: "2px hsl(24 100% 50%)", color: "transparent", fontFamily: "'Georgia', serif, system-ui" }}>GRS GLORY</h3>
              </div>
              <div className="text-center py-8 sm:py-12 px-6 sm:px-8 w-full flex items-center justify-center">
                <h3 className="text-5xl sm:text-6xl font-extrabold uppercase tracking-wider text-accent" style={{ WebkitTextStroke: "1.5px hsl(24 100% 50%)", color: "transparent", fontFamily: "'Courier New', monospace" }}>TOP ELECTRIC ⚡</h3>
              </div>
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
