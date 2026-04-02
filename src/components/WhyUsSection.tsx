import { MapPin, ShieldCheck, Clock, Lightbulb } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Expertise locale à Cotonou", desc: "Une connaissance approfondie du terrain, des réglementations et des spécificités du BTP au Bénin." },
  { icon: ShieldCheck, title: "Engagement HSE fort", desc: "Hygiène, Sécurité et Environnement sont au cœur de chaque projet du Groupe HSE." },
  { icon: Clock, title: "Respect des délais et budget", desc: "Nous nous engageons sur des délais précis et un budget transparent, sans surprise." },
  { icon: Lightbulb, title: "Solutions adaptées", desc: "Des constructions pensées pour les parcelles béninoises, le climat tropical et vos besoins spécifiques." },
];

const WhyUsSection = () => (
  <section id="pourquoi" className="section-padding bg-primary">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Pourquoi HENA BTP ?</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary-foreground">La confiance bâtie sur l'excellence</h2>
        <p className="mt-3 text-primary-foreground/70">Ce qui nous distingue dans le secteur du BTP à Cotonou, Bénin.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 p-6 text-center hover-lift">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <r.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground">{r.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
