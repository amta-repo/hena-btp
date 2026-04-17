import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Target, Eye, Shield, Award, Users, Heart, Lightbulb, ArrowRight, CheckCircle, MapPin, ShieldCheck, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/project-office.jpg";
import dgImg from "@/assets/dg-henabtp.jpeg";

const values = [
  { icon: Award, title: "Excellence", desc: "Viser la qualité dans chaque détail." },
  { icon: Shield, title: "Intégrité", desc: "Être honnête, transparent et responsable." },
  { icon: Heart, title: "Engagement", desc: "Respecter nos délais et nos promesses." },
  { icon: Lightbulb, title: "Innovation", desc: "Proposer des solutions modernes et adaptées." },
  { icon: Users, title: "Proximité", desc: "Rester à l'écoute de nos clients à chaque étape." },
];

const objectives = [
  "Offrir des constructions solides, modernes et accessibles",
  "Devenir une référence incontournable du BTP au Bénin et en Afrique",
  "Accompagner nos clients de la conception à la réalisation",
  "Réduire les coûts inutiles sans compromettre la qualité",
  "Livrer chaque projet dans les délais convenus",
];

const whyUsReasons = [
  { icon: MapPin, title: "Expertise locale à Cotonou", desc: "Connaissance approfondie du terrain, des réglementations béninoises et des spécificités du BTP local." },
  { icon: ShieldCheck, title: "Engagement HSE fort", desc: "Normes d'Hygiène, Sécurité et Environnement intégrées à chaque étape. Zéro compromis sur la sécurité." },
  { icon: Clock, title: "Respect des délais et budget", desc: "Engagement contractuel sur des délais précis et un budget transparent." },
  { icon: Lightbulb, title: "Solutions sur mesure", desc: "Constructions pensées pour les parcelles béninoises, le climat tropical et vos besoins spécifiques." },
  { icon: Users, title: "Équipe qualifiée", desc: "Ingénieurs, architectes et techniciens formés aux dernières techniques et normes internationales." },
  { icon: Award, title: "Qualité premium", desc: "Matériaux de première qualité et techniques éprouvées pour des ouvrages durables." },
  { icon: Target, title: "Suivi rigoureux", desc: "Chef de projet dédié, rapports réguliers et communication transparente." },
  { icon: Heart, title: "Satisfaction garantie", desc: "Service après-vente réactif et garantie décennale sur tous nos ouvrages." },
];

const stats = [
  { num: "10+", label: "Années d'expérience" },
  { num: "150+", label: "Projets réalisés" },
  { num: "100%", label: "Clients satisfaits" },
  { num: "0", label: "Accidents sur chantier" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "HENA BTP, Groupe HSE",
    description: "Entreprise de BTP à Cotonou, Bénin spécialisée en construction, génie civil et suivi HSE.",
    url: "https://henabtp.com",
    address: { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" },
  },
};

const AProposPage = () => (
  <>
    <Helmet>
      <title>À Propos de HENA BTP | Entreprise BTP Cotonou, Bénin - Groupe HSE</title>
      <meta name="description" content="Découvrez HENA BTP, Groupe HSE : entreprise de BTP à Cotonou, Bénin. Notre histoire, nos valeurs, notre mission et notre engagement pour la qualité." />
      <link rel="canonical" href="https://henabtp.com/a-propos" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
            Bâtir avec vision, construire avec passion
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            Construire aujourd'hui, sécuriser demain.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">HENA BTP</strong> est née d'une ambition simple mais forte : transformer les idées en réalités durables.
                </p>
                <p>
                  Créée par des passionnés du bâtiment, l'entreprise s'est construite autour d'un constat : trop de projets souffrent de manque de rigueur, de transparence et de qualité.
                </p>
                <p>
                  Depuis ses débuts, HENA BTP s'engage à faire les choses autrement.
                </p>
                <p className="font-medium text-foreground">
                  Chaque chantier est une promesse. Chaque client est un partenaire. Et chaque réalisation est une signature.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
              <img src={heroImg} alt="Équipe HENA BTP sur un chantier de construction à Cotonou" loading="lazy" width={800} height={600} className="w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Mot du Directeur Général */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto">
          <div className="grid gap-10 lg:grid-cols-5 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="rounded-2xl overflow-hidden w-64 sm:w-72" style={{ boxShadow: "var(--card-shadow)" }}>
                <img src={dgImg} alt="Directeur Général de HENA BTP Groupe HSE" loading="lazy" width={400} height={500} className="w-full object-cover aspect-[3/4]" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Mot du Directeur Général</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  «&nbsp;Chez HENA BTP, nous croyons que chaque projet de construction est bien plus qu'un assemblage de béton et d'acier. C'est un rêve qui prend forme, un investissement dans l'avenir.
                </p>
                <p>
                  Notre engagement est simple : offrir à chaque client un ouvrage de qualité, livré dans les délais et au juste prix. Nous mettons un point d'honneur à la transparence, à la rigueur et à l'excellence dans tout ce que nous faisons.
                </p>
                <p>
                  En tant que Groupe HSE, la sécurité de nos équipes et la protection de l'environnement sont au cœur de notre démarche. Nous construisons pour aujourd'hui, mais surtout pour demain.
                </p>
                <p className="font-medium text-foreground">
                  Faites-nous confiance. Ensemble, bâtissons l'avenir.&nbsp;»
                </p>
              </div>
              <p className="mt-4 text-sm font-semibold text-accent">— Directeur Général, HENA BTP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Nos Valeurs</h2>
            <p className="mt-3 text-muted-foreground">
              Chez HENA BTP, nous ne construisons pas seulement des bâtiments — nous bâtissons la confiance.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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

      {/* Nos Objectifs */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Nos Objectifs</h2>
          <div className="space-y-4">
            {objectives.map((o) => (
              <div key={o} className="flex items-start gap-3 rounded-xl bg-card p-5" style={{ boxShadow: "var(--card-shadow)" }}>
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl bg-card p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notre Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bâtir des ouvrages durables, esthétiques et conformes aux normes internationales, tout en contribuant au développement des infrastructures au Bénin et en Afrique de l'Ouest.
            </p>
          </div>
          <div className="rounded-xl bg-card p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Notre Vision</h2>
            </div>
            <div className="text-muted-foreground leading-relaxed space-y-3">
              <p>Devenir un acteur majeur du bâtiment en Afrique, reconnu pour :</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>La qualité exceptionnelle de ses réalisations</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>Son professionnalisme irréprochable</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" /><span>Sa capacité à innover et s'adapter aux besoins modernes</span></li>
              </ul>
              <p className="font-medium text-foreground">Nous voulons bâtir plus que des murs : créer des espaces de vie, d'avenir et de confiance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Pourquoi HENA BTP ?</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-primary-foreground">La confiance bâtie sur l'excellence</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/10">
                <p className="text-3xl sm:text-4xl font-bold text-accent">{s.num}</p>
                <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUsReasons.map((r) => (
              <div key={r.title} className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center hover-lift">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-primary-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature CTA */}
      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">HENA BTP — Construire aujourd'hui, sécuriser demain.</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
            Confiez votre projet de construction à une équipe passionnée et expérimentée.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
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
