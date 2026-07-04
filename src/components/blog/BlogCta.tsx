import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const BlogCta = () => (
  <aside
    className="my-12 rounded-2xl border border-accent/20 bg-primary p-6 sm:p-8 text-primary-foreground"
    aria-label="Contacter HENA BTP"
  >
    <p className="text-xs font-semibold tracking-widest uppercase text-accent">HENA BTP · Groupe HSE</p>
    <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
      Un projet BTP à Cotonou ou Abomey-Calavi ?
    </h2>
    <p className="mt-3 text-primary-foreground/80 max-w-2xl">
      Nos ingénieurs civils et architectes DPLG vous répondent sous 24 h avec une
      estimation chiffrée. Devis gratuit et sans engagement.
    </p>
    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
      >
        Demander un devis gratuit
        <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href="https://wa.me/2290155496155"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp +229 01 55 49 61 55
      </a>
    </div>
  </aside>
);

export default BlogCta;
