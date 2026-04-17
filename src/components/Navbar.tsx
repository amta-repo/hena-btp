import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-henabtp.png";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services", dropdown: [
    { href: "/services#construction", label: "Construction clé en main" },
    { href: "/services#genie-civil", label: "Génie civil et voiries" },
    { href: "/services#etude", label: "Étude et suivi de chantiers" },
  ] },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/50 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="HENA BTP Groupe HSE logo" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <span className={`block text-sm font-bold tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-gradient'}`}>HENA BTP</span>
            <span className={`block text-[10px] font-medium tracking-widest uppercase transition-colors ${scrolled ? 'text-muted-foreground' : 'text-white'}`}>Groupe HSE</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href} className="relative">
              {l.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={l.href}
                    className={`text-sm font-medium transition-colors ${scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-yellow-300'}`}
                  >
                    {l.label}
                  </Link>
                  {dropdownOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50">
                      {l.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            to={sub.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  to={l.href}
                  className={`text-sm font-medium transition-colors ${scrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-yellow-300'}`}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
        >
          Demander un devis
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/20 bg-white/80 backdrop-blur-md animate-fade-in">
          <ul className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors text-foreground hover:bg-accent/10"
                >
                  {l.label}
                </Link>
                {l.dropdown && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {l.dropdown.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          to={sub.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground"
              >
                Demander un devis
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
