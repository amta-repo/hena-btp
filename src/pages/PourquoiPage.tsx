import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, ShieldCheck, Clock, Lightbulb, Users, Award, Target, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const reasons = [
  { icon: MapPin, title: "Expertise locale à Cotonou", desc: "Une connaissance approfondie du terrain, des réglementations béninoises et des spécificités du BTP local. Nous savons adapter chaque projet au contexte de Cotonou et du Bénin." },
  { icon: ShieldCheck, title: "Engagement HSE fort", desc: "En tant que membre du Groupe HSE, nous intégrons les normes d'Hygiène, Sécurité et Environnement à chaque étape. Zéro compromis sur la sécurité de nos équipes et de vos biens." },
  { icon: Clock, title: "Respect des délais et budget", desc: "Nous nous engageons contractuellement sur des délais précis et un budget transparent. Chaque projet est planifié avec rigueur pour éviter les dépassements." },
  { icon: Lightbulb, title: "Solutions sur mesure", desc: "Des constructions pensées pour les parcelles béninoises, le climat tropical et vos besoins spécifiques. Chaque projet est unique et traité comme tel." },
  { icon: Users, title: "Équipe qualifiée", desc: "Ingénieurs, architectes et techniciens expérimentés, formés aux dernières techniques de construction et aux normes internationales." },
  { icon: Award, title: "Qualité premium", desc: "Nous utilisons des matériaux de première qualité et des techniques de construction éprouvées pour des ouvrages durables et esthétiques." },
  { icon: Target, title: "Suivi rigoureux", desc: "Un chef de projet dédié, des rapports d'avancement réguliers et une communication transparente tout au long de votre projet." },
  { icon: Heart, title: "Satisfaction garantie", desc: "Notre priorité est votre satisfaction. Nous assurons un service après-vente réactif et une garantie décennale sur tous nos ouvrages." },
];

const stats = [
  { num: "10+", label: "Années d'expérience dans le BTP au Bénin" },
  { num: "150+", label: "Projets réalisés avec succès" },
  { num: "100%", label: "Taux de satisfaction client" },
  { num: "0", label: "Accidents sur nos chantiers HSE" },
];

const PourquoiPage = () => (
  <>
    <Helmet>
      <title>Pourquoi HENA BTP | Votre meilleur choix BTP à Cotonou, Bénin</title>
      <meta name="description" content="Découvrez pourquoi HENA BTP est le partenaire idéal pour vos projets de construction à Cotonou. Expertise locale, normes HSE, qualité premium et respect des délais." />
    </Helmet>

    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
            Pourquoi nous choisir
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            La confiance bâtie sur l'excellence
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            Ce qui distingue HENA BTP dans le secteur du BTP à Cotonou et au Bénin.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-xl bg-card" style={{ boxShadow: "var(--card-shadow)" }}>
              <p className="text-3xl sm:text-4xl font-bold text-accent">{s.num}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">8 raisons de nous faire confiance</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Convaincu ? Lancez votre projet avec nous</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">
            Rejoignez nos clients satisfaits et bénéficiez de notre expertise BTP à Cotonou.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default PourquoiPage;
