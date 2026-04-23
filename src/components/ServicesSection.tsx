import { Home, Building, Landmark, Droplets, ShieldCheck, Wrench } from "lucide-react";

const services = [
  { icon: Home, title: "Maisons & Villas Modernes", desc: "Construction de maisons individuelles et villas contemporaines, adaptées au climat et au terrain béninois." },
  { icon: Building, title: "Bâtiments Administratifs & Scolaires", desc: "Réalisation de bâtiments publics, bureaux, écoles et centres hospitaliers aux normes." },
  { icon: Landmark, title: "Travaux Publics & Génie Civil", desc: "Routes, ponts, ouvrages d'art et infrastructures de génie civil à Cotonou et dans tout le Bénin." },
  { icon: Droplets, title: "Aménagement & Assainissement", desc: "Viabilisation de parcelles, réseaux d'assainissement et aménagements urbains." },
  { icon: ShieldCheck, title: "Suivi HSE sur Chantiers", desc: "Hygiène, Sécurité et Environnement intégrés à chaque projet pour des chantiers sûrs et responsables." },
  { icon: Wrench, title: "Rénovation & Extension", desc: "Modernisation et agrandissement de bâtiments existants avec des finitions haut de gamme." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-transparent">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Nos Services</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Des solutions BTP complètes à Cotonou</h2>
        <p className="mt-3 text-muted-foreground">
          De la construction neuve à la rénovation, HENA BTP couvre tous vos besoins en bâtiment et travaux publics.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group rounded-none bg-card p-6 sm:p-8 hover-lift relative w-full max-w-[95vw] mx-auto"
            style={{ animationDelay: `${i * 100}ms`, boxShadow: "var(--card-shadow)", minHeight: "520px" }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center group-hover:text-accent-foreground transition-colors" style={{ backgroundColor: "hsl(24 100% 50% / 0.1)", color: "hsl(24 100% 50%)" }}>
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            
            {/* Plus Button */}
            <div className="absolute bottom-6 right-6">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-none border border-slate-300 bg-slate-200 text-[#0d2142] text-xl font-bold transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                type="button"
                aria-label="Plus"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
