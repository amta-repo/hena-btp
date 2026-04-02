import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Combien coûte la construction d'une maison au Bénin ?",
    a: "Le coût de construction varie selon la taille, les matériaux et les finitions. En moyenne, comptez entre 150 000 et 350 000 FCFA/m² pour une maison moderne à Cotonou. Contactez-nous pour un devis personnalisé gratuit.",
  },
  {
    q: "Quelles sont les normes HSE en BTP au Bénin ?",
    a: "Les normes HSE (Hygiène, Sécurité, Environnement) incluent le port d'EPI, la signalisation de chantier, la gestion des déchets et la prévention des risques. HENA BTP, Groupe HSE, applique ces normes rigoureusement sur chaque chantier.",
  },
  {
    q: "Quels sont les délais de construction d'une villa à Cotonou ?",
    a: "Les délais dépendent de la complexité du projet. Une villa standard de 3 chambres peut être livrée en 6 à 10 mois. Nous nous engageons contractuellement sur les délais.",
  },
  {
    q: "HENA BTP intervient-il en dehors de Cotonou ?",
    a: "Oui, nous intervenons dans tout le Bénin : Cotonou, Abomey-Calavi, Porto-Novo, Parakou, et toutes les autres villes et communes du pays.",
  },
  {
    q: "Comment obtenir un devis gratuit ?",
    a: "Contactez-nous via le formulaire sur notre site, par téléphone au +229 01 55 49 61 55, ou directement sur WhatsApp. Nous vous répondons sous 24h.",
  },
  {
    q: "Quels types de bâtiments construisez-vous ?",
    a: "Nous construisons des maisons individuelles, villas, immeubles de bureaux, bâtiments scolaires, centres de santé, entrepôts, et réalisons des travaux de génie civil (routes, ponts, assainissement).",
  },
];

const FaqSection = () => (
  <section id="faq" className="section-padding bg-secondary">
    <div className="container mx-auto max-w-3xl">
      <div className="text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">FAQ</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Questions fréquentes</h2>
        <p className="mt-3 text-muted-foreground">Tout ce que vous devez savoir sur la construction au Bénin avec HENA BTP.</p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card border-none px-6" style={{ boxShadow: "var(--card-shadow)" }}>
            <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
