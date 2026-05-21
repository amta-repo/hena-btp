import { Building2 } from "lucide-react";

const AboutSection = () => (
  <section id="apropos" aria-labelledby="apropos-heading" className="section-padding">
    <div className="container mx-auto">
      <div className="grid gap-12 lg:grid-cols-2 items-center">
        <article>
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">À propos</span>
          <h2 id="apropos-heading" className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">HENA BTP, Groupe HSE – Entreprise de BTP à Cotonou, Bénin</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Fondée à <strong className="text-foreground">Cotonou, au Bénin</strong>, <strong className="text-foreground">HENA BTP</strong> est une entreprise locale de Bâtiment et Travaux Publics enregistrée au registre du commerce béninois (RCCM). Nous sommes spécialisés dans la construction de villas modernes, de bâtiments publics et d'infrastructures de génie civil à Cotonou, Abomey-Calavi et dans tout le Bénin.
            </p>
            <p>
              Membre du <strong className="text-foreground">Groupe HSE</strong>, notre équipe d'ingénieurs civils, d'architectes DPLG et de techniciens supérieurs en BTP applique rigoureusement les normes <strong className="text-foreground">Eurocodes</strong>, le <strong className="text-foreground">DTU béninois</strong> et les exigences <strong className="text-foreground">HSE (Hygiène, Sécurité, Environnement)</strong> sur chaque chantier. Conformité réglementaire, garantie décennale et assurance responsabilité civile professionnelle sécurisent chaque ouvrage que nous livrons.
            </p>
            <p>
              Notre mission : bâtir au Bénin des ouvrages durables, esthétiques et conformes aux normes internationales, en valorisant les matériaux locaux et la main-d'œuvre béninoise — pour contribuer concrètement au développement des infrastructures au Bénin et en Afrique de l'Ouest.
            </p>
          </div>
        </article>


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
