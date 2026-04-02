import { MessageCircle, FileText } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Chantier de construction moderne HENA BTP à Cotonou, Bénin" width={1920} height={1080} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/75" />
    </div>

    <div className="container relative z-10 mx-auto py-32 sm:py-40">
      <div className="max-w-3xl space-y-6 animate-fade-in-up">
        <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground">
          🏗️ Bâtiment &amp; Travaux Publics — Cotonou, Bénin
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-primary-foreground">
          HENA BTP, GROUPE HSE –{" "}
          <span className="text-gradient">Votre partenaire de confiance</span>{" "}
          en BTP au Bénin
        </h1>

        <p className="max-w-xl text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
          Construction moderne, qualité premium, respect des normes HSE — De la conception à la livraison.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 shadow-lg"
          >
            <FileText className="h-4 w-4" />
            Demander un devis gratuit
          </a>
          <a
            href="https://wa.me/2290155496155?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20web%20et%20je%20souhaite%20discuter%20de%20mon%20projet%20de%20construction."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
          >
            <MessageCircle className="h-4 w-4" />
            Nous contacter sur WhatsApp
          </a>
        </div>
      </div>
    </div>

    {/* Stats bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
        {[
          { num: "10+", label: "Années d'expérience" },
          { num: "150+", label: "Projets réalisés" },
          { num: "100%", label: "Clients satisfaits" },
          { num: "HSE", label: "Normes respectées" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-4 sm:py-5 text-center">
            <p className="text-xl sm:text-2xl font-bold text-accent">{s.num}</p>
            <p className="text-xs sm:text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
