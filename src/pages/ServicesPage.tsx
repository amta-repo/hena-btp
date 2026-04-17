import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Building, Landmark, Wrench, ArrowRight, CheckCircle, FileText, MessageCircle, Users, Target, Clock, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import roadImg from "@/assets/project-road.jpg";
import serviceHeader from "@/assets/service-header.jpg";

const services = [
  {
    icon: Home,
    title: "Construction clé en main",
    desc: "Construction de maisons individuelles et villas contemporaines, adaptées au climat et au terrain béninois.",
    details: [
      "Plans architecturaux sur mesure",
      "Fondations solides adaptées au sol béninois",
      "Finitions haut de gamme (carrelage, peinture, menuiserie)",
      "Installation électrique et plomberie aux normes",
      "Espaces extérieurs : terrasses, jardins, clôtures",
      "Livraison clé en main avec garantie décennale",
    ],
    image: villaImg,
    imageAlt: "Villa moderne construite par HENA BTP à Cotonou Bénin",
  },
  {
    icon: Landmark,
    title: "Génie civil et voiries",
    desc: "Routes, ponts, ouvrages d'art et infrastructures de génie civil à Cotonou et dans tout le Bénin.",
    details: [
      "Construction et réhabilitation de routes",
      "Ouvrages d'art : ponts, dalots, caniveaux",
      "Terrassement et VRD (Voirie et Réseaux Divers)",
      "Travaux d'enrochement et protection de berges",
      "Études géotechniques préalables",
      "Suivi topographique de précision",
    ],
    image: roadImg,
    imageAlt: "Travaux publics route génie civil HENA BTP Bénin",
  },
  {
    icon: Building,
    title: "Étude et suivi de chantiers",
    desc: "Accompagnement complet depuis les études de faisabilité jusqu'au suivi de l'exécution des travaux.",
    details: [
      "Études de faisabilité technique et financière",
      "Conception architecturale fonctionnelle",
      "Suivi de chantier en temps réel",
      "Contrôle qualité à chaque étape",
      "Rapports d'avancement réguliers",
      "Conformité aux normes HSE",
    ],
    image: officeImg,
    imageAlt: "Bâtiment administratif construction HENA BTP Bénin",
  },
];

const renovationItems = [
  "Modernisation de bâtiments",
  "Réhabilitation complète",
  "Extension et surélévation",
  "Mise aux normes techniques",
];

const engagements = [
  { icon: CheckCircle, title: "Qualité technique", desc: "Respect des normes et des bonnes pratiques" },
  { icon: Target, title: "Transparence financière", desc: "Devis détaillés et coûts maîtrisés" },
  { icon: Clock, title: "Respect des délais", desc: "Planification rigoureuse" },
  { icon: Lightbulb, title: "Innovation", desc: "Techniques modernes adaptées à l'Afrique" },
];

const clients = [
  "Particuliers",
  "Promoteurs immobiliers",
  "Entreprises privées",
  "Institutions publiques",
  "ONG et organisations internationales",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "HENA BTP, Groupe HSE",
    url: "https://henabtp.com",
  },
  serviceType: ["Construction", "Génie civil", "Rénovation", "Suivi HSE"],
  areaServed: { "@type": "Place", name: "Bénin, Afrique de l'Ouest" },
};

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Nos Services BTP | HENA BTP Cotonou - Construction & Génie Civil Bénin</title>
      <meta name="description" content="Services BTP de HENA BTP à Cotonou : construction clé en main, génie civil, étude et suivi de chantiers, rénovation. Devis gratuit au Bénin." />
      <link rel="canonical" href="https://henabtp.com/services" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <img src={serviceHeader} alt="Services HENA BTP" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container relative z-10 mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
            Nos Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Solutions BTP complètes au Bénin
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            Construction, génie civil et suivi de chantiers — tous vos besoins BTP couverts.
          </p>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Nos Engagements</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagements.map((e) => (
              <div key={e.title} className="text-center rounded-xl bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{e.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">HENA BTP intervient auprès de</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span key={c} className="rounded-full bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid gap-10 lg:grid-cols-2 items-center`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105">
                    <FileText className="h-4 w-4" /> Demander un devis
                  </Link>
                  <a href="https://wa.me/2290155496155?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20BTP." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <img src={s.image} alt={s.imageAlt} loading="lazy" width={800} height={600} className="w-full rounded-2xl object-cover aspect-[4/3]" style={{ boxShadow: "var(--card-shadow)" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rénovation */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Wrench className="h-6 w-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Rénovation et réhabilitation</h2>
          </div>
          <p className="text-muted-foreground mb-6">Nous intervenons sur tous types de projets de rénovation :</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {renovationItems.map((r) => (
              <div key={r} className="flex items-start gap-3 rounded-xl bg-card p-4" style={{ boxShadow: "var(--card-shadow)" }}>
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Prêt à démarrer votre projet ?</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
            Contactez HENA BTP dès aujourd'hui pour un devis gratuit et personnalisé.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            Demander un devis gratuit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default ServicesPage;
