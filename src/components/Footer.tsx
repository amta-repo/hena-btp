import { Link } from "react-router-dom";
import logo from "@/assets/logo-henabtp.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="HENA BTP Groupe HSE logo" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <span className="block text-sm font-bold">HENA BTP</span>
              <span className="block text-[10px] tracking-widest text-primary-foreground/60 uppercase">Groupe HSE</span>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Votre partenaire de confiance en Bâtiment et Travaux Publics au Bénin et en Afrique de l'Ouest.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li><Link to="/services" className="hover:text-accent transition-colors">Construction clé en main</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Génie civil et voiries</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Étude et suivi de chantiers</Link></li>
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
              { label: "Témoignages", href: "/temoignages" },
              { label: "Blog", href: "/blog" },
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
              <a href="mailto:henafinancebtp@gmail.com" className="hover:text-accent transition-colors">henafinancebtp@gmail.com</a>
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
