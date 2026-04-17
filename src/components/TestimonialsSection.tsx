import { useState, useEffect } from "react";
import { Star } from "lucide-react";

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

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section className="section-padding overflow-hidden bg-transparent" id="temoignages">
      <div className="container mx-auto mb-10 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">Témoignages</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Ce que disent nos clients</h2>
      </div>
      {isMobile ? (
        <div className="container mx-auto px-4">
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-xl bg-card p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4 text-center">"{testimonials[currentIndex].text}"</p>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative group">
          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] sm:w-[380px] rounded-xl bg-card p-6"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
