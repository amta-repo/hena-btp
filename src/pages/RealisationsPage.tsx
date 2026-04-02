import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import roadImg from "@/assets/project-road.jpg";
import schoolImg from "@/assets/project-school.jpg";
import renovationImg from "@/assets/project-renovation.jpg";

const categories = ["Tous", "Villas", "Bâtiments", "Travaux Publics", "Rénovation"];

const projects = [
  { img: villaImg, title: "Villa Moderne – Cotonou", cat: "Villas", alt: "Villa moderne construite par HENA BTP à Cotonou Bénin", desc: "Villa haut standing de 4 chambres avec piscine, finitions premium, livrée en 8 mois." },
  { img: officeImg, title: "Immeuble de Bureaux – Cotonou", cat: "Bâtiments", alt: "Bâtiment administratif construction HENA BTP Bénin", desc: "Immeuble R+3 de bureaux avec parking souterrain et espaces de coworking modernes." },
  { img: roadImg, title: "Route Nationale – Bénin", cat: "Travaux Publics", alt: "Travaux publics route génie civil HENA BTP Bénin", desc: "Réhabilitation de 12 km de route nationale avec ouvrages de drainage et signalisation." },
  { img: schoolImg, title: "École Primaire – Abomey-Calavi", cat: "Bâtiments", alt: "Construction école Bénin HENA BTP groupe HSE", desc: "Complexe scolaire de 12 salles de classe avec cantine, aire de jeux et clôture." },
  { img: renovationImg, title: "Rénovation Résidence – Cotonou", cat: "Rénovation", alt: "Rénovation bâtiment Cotonou HENA BTP", desc: "Rénovation complète d'une résidence R+2 : façade, toiture, électricité et plomberie." },
  { img: villaImg, title: "Villa Haut Standing – Fidjrossè", cat: "Villas", alt: "Construction villa haut standing Fidjrossè Cotonou", desc: "Villa de luxe avec architecture contemporaine, jardin paysager et système domotique." },
];

const RealisationsPage = () => {
  const [filter, setFilter] = useState("Tous");
  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      <Helmet>
        <title>Nos Réalisations | HENA BTP Cotonou - Projets Construction Bénin</title>
        <meta name="description" content="Découvrez les réalisations de HENA BTP à Cotonou : villas modernes, bâtiments publics, routes et rénovations au Bénin. Portfolio de projets BTP." />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="container mx-auto text-center">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
              Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
              Nos réalisations parlent d'elles-mêmes
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
              Chaque projet est un témoignage de notre savoir-faire et de notre engagement qualité.
            </p>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    filter === c ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-accent/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <div key={i} className="group overflow-hidden rounded-xl hover-lift bg-card" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-accent">{p.cat}</span>
                    <h3 className="mt-1 text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary section-padding">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Votre projet peut être le prochain</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Contactez-nous pour discuter de votre projet de construction au Bénin.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Démarrer mon projet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default RealisationsPage;
