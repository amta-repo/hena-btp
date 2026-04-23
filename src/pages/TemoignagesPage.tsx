import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const testimonials = [
  { text: "HENA BTP a respecté les délais et le budget. Très professionnel du début à la fin.", name: "Rachid A.", role: "Particulier" },
  { text: "Nous avons apprécié la transparence et le suivi régulier du chantier.", name: "Fatou D.", role: "Promoteur immobilier" },
  { text: "Le rendu final dépasse nos attentes. Une équipe sérieuse et compétente.", name: "Jean-Paul K.", role: "Chef d'entreprise" },
  { text: "Bonne communication et excellente qualité d'exécution.", name: "Amina S.", role: "Particulier" },
  { text: "Projet livré sans stress. Je recommande fortement.", name: "Patrick M.", role: "Investisseur" },
  { text: "Des solutions intelligentes pour réduire les coûts sans perdre en qualité.", name: "Claudine B.", role: "ONG" },
  { text: "Entreprise fiable avec un vrai sens du détail.", name: "Ibrahim T.", role: "Architecte" },
  { text: "Très satisfait du respect des normes et de la sécurité sur le chantier.", name: "Solange H.", role: "Institution publique" },
  { text: "Accompagnement complet et conseils pertinents.", name: "Koffi E.", role: "Particulier" },
  { text: "Une équipe engagée qui tient ses promesses.", name: "Nadège L.", role: "Promoteur immobilier" },
];

const TemoignagesPage = () => (
  <>
    <Helmet>
      <title>Témoignages Clients | HENA BTP Cotonou - Avis et Retours d'Expérience</title>
      <meta name="description" content="Découvrez les avis de nos clients satisfaits. HENA BTP, Groupe HSE : qualité, respect des délais et professionnalisme à Cotonou, Bénin." />
      <link rel="canonical" href="https://henabtp.com/temoignages" />
    </Helmet>
    <Navbar />
    <main>
      <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto text-center">
          <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">Témoignages</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Ce que disent nos clients
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">La satisfaction de nos clients est notre plus grande récompense.</p>
        </div>
      </section>

      <section className="section-padding bg-[rgba(128,128,128,0.6)]">
        <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-none bg-card p-6 hover-lift" style={{ boxShadow: "var(--card-shadow)", minHeight: "340px" }}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"{t.text}"</p>
              <p className="text-sm font-semibold" style={{ color: "#0d2142" }}>{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent section-padding">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-accent-foreground">Rejoignez nos clients satisfaits</h2>
          <p className="mt-3 text-accent-foreground/80 max-w-lg mx-auto">Confiez votre projet à HENA BTP et bénéficiez d'un accompagnement professionnel.</p>
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

export default TemoignagesPage;
