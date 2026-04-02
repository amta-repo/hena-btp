import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Bonjour, je m'appelle ${form.name}. Service: ${form.service}. ${form.message}`);
    window.open(`https://wa.me/2290155496155?text=${msg}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Contactez HENA BTP Cotonou | Devis Gratuit Construction Bénin</title>
        <meta name="description" content="Contactez HENA BTP à Cotonou pour un devis gratuit. Téléphone, WhatsApp, email ou formulaire. Construction de maisons, travaux publics au Bénin." />
      </Helmet>

      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20">
          <div className="container mx-auto text-center">
            <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-foreground mb-4">
              Contact
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
              Parlons de votre projet
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/70">
              Contactez HENA BTP à Cotonou pour un devis gratuit et sans engagement.
            </p>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, title: "Téléphone", value: "+229 01 55 49 61 55", href: "tel:+2290155496155", desc: "Appelez-nous directement" },
              { icon: MessageCircle, title: "WhatsApp", value: "+229 01 55 49 61 55", href: "https://wa.me/2290155496155", desc: "Réponse rapide garantie" },
              { icon: Mail, title: "Email", value: "contact@henabtp.com", href: "mailto:contact@henabtp.com", desc: "Envoyez-nous un email" },
              { icon: Clock, title: "Horaires", value: "Lun - Sam : 8h - 18h", href: null, desc: "Disponibles 6j/7" },
            ].map((c) => (
              <div key={c.title} className="rounded-xl bg-card p-6 text-center hover-lift" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block mt-1 text-sm font-medium text-accent hover:underline">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-foreground">{c.value}</p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form + Map */}
        <section className="section-padding">
          <div className="container mx-auto grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Demander un devis gratuit</h2>
              <p className="text-muted-foreground mb-6">Remplissez le formulaire et nous vous répondons sous 24h.</p>

              <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-card p-6 sm:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+229 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service souhaité</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="Construction villa">Construction de villa</option>
                      <option value="Bâtiment public">Bâtiment administratif/scolaire</option>
                      <option value="Travaux publics">Travaux publics & Génie civil</option>
                      <option value="Aménagement">Aménagement & Assainissement</option>
                      <option value="HSE">Suivi HSE</option>
                      <option value="Rénovation">Rénovation & Extension</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Décrivez votre projet *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Décrivez votre projet : type de construction, surface souhaitée, localisation de la parcelle, budget estimé..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  Envoyer via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, votre message sera envoyé directement sur notre WhatsApp pour une réponse rapide.
                </p>
              </form>
            </div>

            {/* Map + Address */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Notre emplacement</h2>
                <p className="text-muted-foreground mb-6">Rendez-nous visite à nos bureaux de Cotonou.</p>
              </div>

              <div className="rounded-xl bg-card p-5" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">HENA BTP, Groupe HSE</h3>
                    <p className="text-sm text-muted-foreground mt-1">Cotonou, Bénin</p>
                    <p className="text-sm text-muted-foreground">Tél : <a href="tel:+2290155496155" className="text-accent hover:underline">+229 01 55 49 61 55</a></p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl" style={{ boxShadow: "var(--card-shadow)" }}>
                <iframe
                  title="Localisation HENA BTP Cotonou Bénin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d2.3279387!3d6.4073475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMjYuNSJOIDLCsDE5JzQwLjYiRQ!5e0!3m2!1sfr!2sbj!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href="https://wa.me/2290155496155?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20web%20et%20je%20souhaite%20discuter%20de%20mon%20projet%20de%20construction."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl p-5 transition-colors hover:opacity-90"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="h-8 w-8 text-primary-foreground shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">Préférez WhatsApp ?</p>
                  <p className="text-xs text-primary-foreground/80">Cliquez ici pour nous écrire directement. Réponse sous 1h.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;
