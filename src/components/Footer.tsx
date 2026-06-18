import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-henabtp.png";

const Footer = () => (
  <footer
    className="bg-primary text-primary-foreground"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    {/* Hidden schema fields for crawlers */}
    <meta itemProp="name" content="HENA BTP, Groupe HSE" />
    <meta itemProp="url" content="https://henabtp.com" />
    <meta itemProp="image" content="https://henabtp.com/logo.png" />
    <meta itemProp="priceRange" content="$$" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="space-y-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3" aria-label="Accueil HENA BTP Cotonou">
            <img src={logo} alt="Logo HENA BTP Groupe HSE - Entreprise de construction à Cotonou Bénin" className="h-12 w-12 object-contain" />
            <div className="leading-tight">
              <span className="block text-sm font-bold tracking-wide text-primary-foreground">HENA BTP</span>
              <span className="block text-[10px] font-medium tracking-widest uppercase text-primary-foreground/60">Groupe HSE</span>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Entreprise de Bâtiment et Travaux Publics à Cotonou, Bénin. Construction de villas, génie civil, suivi HSE — au service du Bénin et de l'Afrique de l'Ouest.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/profile.php?id=61567980180924"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HENA BTP Cotonou sur Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/henabtp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HENA BTP Cotonou sur Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services BTP localisés */}
        <nav aria-label="Services BTP au Bénin">
          <h4 className="text-sm font-semibold mb-4">Services BTP au Bénin</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services#construction" className="hover:text-accent transition-colors">Construction de Villas à Cotonou</Link></li>
            <li><Link to="/services#construction" className="hover:text-accent transition-colors">Construction de Maisons Modernes à Abomey-Calavi</Link></li>
            <li><Link to="/services#genie-civil" className="hover:text-accent transition-colors">Génie Civil et Voiries au Bénin</Link></li>
            <li><Link to="/services#etude" className="hover:text-accent transition-colors">Étude et Suivi de Chantiers à Cotonou</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Aménagement & Assainissement Urbain</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Suivi HSE de Chantiers au Bénin</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">Rénovation et Extension de Bâtiments</Link></li>
          </ul>
        </nav>

        {/* Zones d'intervention */}
        <nav aria-label="Zones d'intervention">
          <h4 className="text-sm font-semibold mb-4">Zones d'intervention</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/realisations" className="hover:text-accent transition-colors">BTP à Cotonou</Link></li>
            <li><Link to="/realisations" className="hover:text-accent transition-colors">Construction à Abomey-Calavi</Link></li>
            <li><Link to="/realisations" className="hover:text-accent transition-colors">Travaux Publics au Bénin</Link></li>
            <li><Link to="/realisations" className="hover:text-accent transition-colors">Projets à Porto-Novo</Link></li>
            <li><Link to="/realisations" className="hover:text-accent transition-colors">BTP Afrique de l'Ouest</Link></li>
          </ul>
        </nav>

        {/* Navigation */}
        <nav aria-label="Navigation principale">
          <h4 className="text-sm font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "Accueil", href: "/" },
              { label: "Nos services BTP", href: "/services" },
              { label: "Nos réalisations", href: "/realisations" },
              { label: "À propos – Groupe HSE", href: "/a-propos" },
              { label: "Pourquoi nous choisir", href: "/pourquoi" },
              { label: "FAQ BTP Bénin", href: "/faq" },
              { label: "Témoignages clients", href: "/temoignages" },
              { label: "Blog construction", href: "/blog" },
              { label: "Demander un devis", href: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact / NAP */}
        <address
          className="not-italic"
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
        >
          <h4 className="text-sm font-semibold mb-4">Contact – HENA BTP Godomey</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-primary-foreground">HENA BTP, Groupe HSE</span>
                <span itemProp="streetAddress">Von en face de la Pharmacie Houénoussou Gare, dans la von de la Paroisse Notre-Dame de Charité de Godomey</span>,{" "}
                <span itemProp="addressLocality">Abomey-Calavi</span>,{" "}
                <span itemProp="addressRegion">Atlantique</span>,{" "}
                <span itemProp="addressCountry">Bénin</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href="tel:+2290155496155"
                className="hover:text-accent transition-colors select-all"
                itemProp="telephone"
              >
                +229 01 55 49 61 55
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a
                href="mailto:info@henabtp.com"
                className="hover:text-accent transition-colors select-all"
                itemProp="email"
              >
                info@henabtp.com
              </a>
            </li>
            <li className="text-xs text-primary-foreground/60 pt-1">
              Horaires : Lun – Sam, 08:00 – 18:00 (GMT+1)
            </li>
          </ul>
        </address>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} HENA BTP, Groupe HSE — Entreprise de BTP à Cotonou, Bénin. Tous droits réservés.</p>
        <p>Construction · Génie civil · Suivi HSE · Bénin & Afrique de l'Ouest</p>
      </div>
    </div>
  </footer>
);

export default Footer;
