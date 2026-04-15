import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const faqCategories = [
  {
    title: "Construction & Prix",
    faqs: [
      {
        q: "Combien coûte la construction d'une maison au Bénin ?",
        a: "Le coût de construction varie selon la taille, les matériaux et les finitions. En moyenne, comptez entre 150 000 et 350 000 FCFA/m² pour une maison moderne à Cotonou. Une villa de 3 chambres (environ 120 m²) peut coûter entre 18 et 42 millions FCFA. Contactez-nous pour un devis personnalisé gratuit.",
      },
      {
        q: "Quels sont les prix indicatifs au m² selon le standing ?",
        a: "Construction simple : 100 000 à 140 000 FCFA/m². Standard moderne : 150 000 à 200 000 FCFA/m². Luxe : 200 000 à 250 000 FCFA/m². Haut standing : 250 000 à 350 000 FCFA/m². Ces prix sont indicatifs et varient selon la nature du sol, les matériaux, l'accessibilité et le niveau technique requis.",
      },
      {
        q: "Comment se répartissent les coûts de construction ?",
        a: "Voici la répartition indicative : Gros œuvre (40 à 60%), Charpente et toiture (10 à 20%), Menuiseries (5 à 10%), Second œuvre technique (10 à 20%), Finition et embellissement (10 à 25%), Étude, plan et suivi (3 à 8%).",
      },
      {
        q: "Quels sont les délais de construction d'une villa à Cotonou ?",
        a: "Les délais dépendent de la complexité du projet. Une villa standard de 3 chambres peut être livrée en 6 à 10 mois. Un bâtiment R+2 nécessite généralement 12 à 18 mois. Nous nous engageons contractuellement sur les délais.",
      },
      {
        q: "Proposez-vous des facilités de paiement ?",
        a: "Oui, nous proposons un échéancier de paiement adapté à l'avancement des travaux. Un acompte de 30% est demandé au démarrage, puis les versements sont échelonnés selon les étapes clés du chantier.",
      },
      {
        q: "Le prix inclut-il les finitions ?",
        a: "Oui, nos devis sont complets et incluent toutes les finitions : carrelage, peinture, menuiserie, électricité, plomberie, sanitaires. Nous proposons différents niveaux de finitions selon votre budget.",
      },
    ],
  },
  {
    title: "Normes & Sécurité HSE",
    faqs: [
      {
        q: "Quelles sont les normes HSE en BTP au Bénin ?",
        a: "Les normes HSE incluent le port d'EPI, la signalisation de chantier, la gestion des déchets, la prévention des risques d'accident et la protection de l'environnement. HENA BTP applique ces normes rigoureusement.",
      },
      {
        q: "Vos chantiers sont-ils assurés ?",
        a: "Oui, tous nos chantiers sont couverts par une assurance tous risques chantier (TRC) et une assurance responsabilité civile professionnelle. Nous offrons également une garantie décennale.",
      },
      {
        q: "Comment gérez-vous la sécurité sur les chantiers ?",
        a: "Chaque chantier dispose d'un responsable HSE dédié. Nous réalisons un audit de sécurité, formons les ouvriers, fournissons les EPI, et effectuons des inspections régulières.",
      },
    ],
  },
  {
    title: "Processus & Garanties",
    faqs: [
      {
        q: "Comment obtenir un devis gratuit ?",
        a: "Contactez-nous via le formulaire sur notre site, par téléphone au +229 01 55 49 61 55, ou directement sur WhatsApp. Nous répondons sous 24h avec un devis détaillé et gratuit.",
      },
      {
        q: "HENA BTP intervient-il en dehors de Cotonou ?",
        a: "Oui, nous intervenons dans tout le Bénin et en Afrique de l'Ouest : Cotonou, Abomey-Calavi, Porto-Novo, Parakou, Bohicon et toutes les autres villes.",
      },
      {
        q: "Quels types de bâtiments construisez-vous ?",
        a: "Maisons individuelles, villas de luxe, immeubles de bureaux, bâtiments scolaires, centres de santé, entrepôts, et travaux de génie civil (routes, ponts, assainissement).",
      },
      {
        q: "Quelle est la durée de la garantie sur vos constructions ?",
        a: "Garantie de parfait achèvement d'un an, garantie biennale de 2 ans sur les équipements, et garantie décennale de 10 ans sur la structure et le gros œuvre.",
      },
      {
        q: "Puis-je suivre l'avancement de mon chantier ?",
        a: "Absolument ! Rapports photo et vidéo hebdomadaires. Vous pouvez visiter le chantier à tout moment accompagné de notre chef de projet.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }))
  ),
};

const FaqPage = () => (
  <>
    <Helmet>
      <title>FAQ Construction Bénin | HENA BTP Cotonou - Prix, Délais, Normes HSE</title>
      <meta name="description" content="Réponses à vos questions sur la construction au Bénin : coûts au m², délais, normes HSE, garanties. FAQ complète par HENA BTP, expert BTP à Cotonou." />
      <link rel="canonical" href="https://henabtp.com/faq" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
            FAQ
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Questions fréquentes
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
            Tout ce que vous devez savoir sur la construction au Bénin avec HENA BTP.
          </p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">{cat.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`${cat.title}-${i}`}
                    className="rounded-xl bg-card border-none px-6"
                    style={{ boxShadow: "var(--card-shadow)" }}
                  >
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Vous avez d'autres questions ?</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/2290155496155?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20vos%20services%20BTP."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Poser une question sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default FaqPage;
