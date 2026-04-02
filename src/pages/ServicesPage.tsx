import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Building, Landmark, Droplets, ShieldCheck, Wrench, ArrowRight, CheckCircle, FileText, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import roadImg from "@/assets/project-road.jpg";

const services = [
  {
    icon: Home,
    title: "Maisons & Villas Modernes",
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
    icon: Building,
    title: "Bâtiments Administratifs & Scolaires",
    desc: "Réalisation de bâtiments publics, bureaux, écoles et centres hospitaliers aux normes internationales.",
    details: [
      "Conception architecturale fonctionnelle",
      "Structures en béton armé de haute résistance",
      "Accessibilité PMR intégrée",
      "Systèmes de ventilation et climatisation",
      "Conformité aux normes de sécurité incendie",
      "Aménagement intérieur sur mesure",
    ],
    image: officeImg,
    imageAlt: "Bâtiment administratif construction HENA BTP Bénin",
  },
  {
    icon: Landmark,
    title: "Travaux Publics & Génie Civil",
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
    icon: Droplets,
    title: "Aménagement & Assainissement",
    desc: "Viabilisation de parcelles, réseaux d'assainissement et aménagements urbains pour un cadre de vie sain.",
    details: [
      "Viabilisation complète de parcelles",
      "Réseaux d'eau potable et eaux usées",
      "Drainage et gestion des eaux pluviales",
      "Fosses septiques et stations d'épuration",
      "Aménagement paysager et espaces verts",
      "Éclairage public et voiries internes",
    ],
    image: null,
    imageAlt: "",
  },
  {
    icon: ShieldCheck,
    title: "Suivi HSE sur Chantiers",
    desc: "Hygiène, Sécurité et Environnement intégrés à chaque projet pour des chantiers sûrs et responsables.",
    details: [
      "Audit HSE avant démarrage des travaux",
      "Plan de prévention des risques",
      "Formation des ouvriers aux gestes de sécurité",
      "Fourniture et contrôle des EPI",
      "Gestion environnementale des déchets de chantier",
      "Rapports HSE réguliers et documentation",
    ],
    image: null,
    imageAlt: "",
  },
  {
    icon: Wrench,
    title: "Rénovation & Extension",
    desc: "Modernisation et agrandissement de bâtiments existants avec des finitions haut de gamme.",
    details: [
      "Diagnostic structural avant intervention",
      "Rénovation de façades et toitures",
      "Extension de bâtiments existants",
      "Mise aux normes électriques et plomberie",
      "Ravalement et traitement d'humidité",
      "Aménagement de combles et surélévation",
    ],
    image: null,
    imageAlt: "",
  },
];

const ServicesPage = () => (
  <>
    <Helmet>
      <title>Nos Services BTP | HENA BTP Cotonou - Construction & Génie Civil Bénin</title>
      <meta name="description" content="Découvrez les services BTP de HENA BTP à Cotonou : construction de villas, bâtiments publics, travaux publics, assainissement, suivi HSE et rénovation au Bénin." />
    </Helmet>

    <Navbar />
    <main>
      {/* Hero banner */}
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
            Nos Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Des solutions BTP complètes pour vos projets à Cotonou
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            De la construction neuve à la rénovation, HENA BTP couvre tous vos besoins en bâtiment et travaux publics au Bénin.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className={`grid gap-10 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
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
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
                  >
                    <FileText className="h-4 w-4" />
                    Demander un devis
                  </Link>
                  <a
                    href="https://wa.me/2290155496155?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services%20BTP."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full rounded-2xl object-cover aspect-[4/3]"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  />
                ) : (
                  <div className="w-full rounded-2xl bg-secondary aspect-[4/3] flex items-center justify-center">
                    <s.icon className="h-20 w-20 text-accent/30" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Prêt à démarrer votre projet ?</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
            Contactez HENA BTP dès aujourd'hui pour un devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default ServicesPage;
