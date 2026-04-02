import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Building2 className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold">HENA BTP</span>
              <span className="block text-[10px] tracking-widest text-primary-foreground/60 uppercase">Groupe HSE</span>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Votre partenaire de confiance en Bâtiment et Travaux Publics à Cotonou, Bénin.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services" className="hover:text-accent transition-colors">Construction de villas</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Bâtiments publics</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Travaux publics</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Suivi HSE</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Rénovation</Link></li>
          </ul>
        </div>

        {/* Liens */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Réalisations", href: "/realisations" },
              { label: "À propos", href: "/a-propos" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Cotonou, Bénin</li>
            <li>
              <a href="tel:+2290155496155" className="hover:text-accent transition-colors">+229 01 55 49 61 55</a>
            </li>
            <li>
              <a href="mailto:contact@henabtp.com" className="hover:text-accent transition-colors">contact@henabtp.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} HENA BTP, Groupe HSE. Tous droits réservés. — BTP Cotonou, Bénin
      </div>
    </div>
  </footer>
);

export default Footer;
