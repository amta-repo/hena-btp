import { useState } from "react";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import roadImg from "@/assets/project-road.jpg";
import schoolImg from "@/assets/project-school.jpg";
import renovationImg from "@/assets/project-renovation.jpg";

const categories = ["Tous", "Villas", "Bâtiments", "Travaux Publics", "Rénovation"];

const projects = [
  { img: villaImg, title: "Villa Moderne – Cotonou", cat: "Villas", alt: "Villa moderne construite par HENA BTP à Cotonou Bénin" },
  { img: officeImg, title: "Immeuble de Bureaux – Cotonou", cat: "Bâtiments", alt: "Bâtiment administratif construction HENA BTP Bénin" },
  { img: roadImg, title: "Route Nationale – Bénin", cat: "Travaux Publics", alt: "Travaux publics route génie civil HENA BTP Bénin" },
  { img: schoolImg, title: "École Primaire – Abomey-Calavi", cat: "Bâtiments", alt: "Construction école Bénin HENA BTP groupe HSE" },
  { img: renovationImg, title: "Rénovation Résidence – Cotonou", cat: "Rénovation", alt: "Rénovation bâtiment Cotonou HENA BTP" },
  { img: villaImg, title: "Villa Haut Standing – Fidjrossè", cat: "Villas", alt: "Construction villa haut standing Fidjrossè Cotonou" },
];

const RealisationsSection = () => {
  const [filter, setFilter] = useState("Tous");
  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="realisations" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Réalisations</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Des projets qui parlent d'eux-mêmes</h2>
        </div>

        {/* Filters */}
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

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <div key={i} className="group overflow-hidden rounded-xl hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
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
              <div className="bg-card p-4">
                <span className="text-xs font-medium text-accent">{p.cat}</span>
                <h3 className="mt-1 text-sm font-semibold text-foreground">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsSection;
