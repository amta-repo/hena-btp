import { Building2 } from "lucide-react";

const AboutSection = () => (
  <section id="apropos" className="section-padding">
    <div className="container mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">À propos</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">HENA BTP, Groupe HSE</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Fondée à Cotonou, au Bénin, <strong className="text-foreground">HENA BTP</strong> est une entreprise de Bâtiment et Travaux Publics spécialisée dans la construction de maisons modernes, de bâtiments publics et d'infrastructures de génie civil.
            </p>
            <p>
              Membre du <strong className="text-foreground">Groupe HSE</strong>, nous plaçons l'Hygiène, la Sécurité et l'Environnement au centre de chaque projet. Notre équipe d'ingénieurs, d'architectes et de techniciens qualifiés accompagne nos clients de la conception à la livraison.
            </p>
            <p>
              Notre mission : bâtir des ouvrages durables, esthétiques et conformes aux normes internationales, tout en contribuant au développement des infrastructures au Bénin.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-secondary flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
                <Building2 className="h-10 w-10 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">HENA BTP</p>
                <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Groupe HSE</p>
              </div>
              <p className="text-sm text-muted-foreground">Cotonou, Bénin</p>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-2xl bg-accent/20" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-xl bg-primary/20" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
