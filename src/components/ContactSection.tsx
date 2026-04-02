import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Bonjour, je m'appelle ${form.name}. ${form.message}`);
    window.open(`https://wa.me/2290155496155?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">Contact</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">Parlons de votre projet</h2>
          <p className="mt-3 text-muted-foreground">
            Contactez HENA BTP à Cotonou pour un devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 rounded-xl bg-card p-6 sm:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nom complet</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Votre nom"
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
              <label className="block text-sm font-medium text-foreground mb-1.5">Votre message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Décrivez votre projet de construction..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" />
              Envoyer via WhatsApp
            </button>
          </form>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Adresse", value: "Cotonou, Bénin" },
                { icon: Phone, label: "Téléphone / WhatsApp", value: "+229 01 55 49 61 55", href: "tel:+2290155496155" },
                { icon: Mail, label: "Email", value: "contact@henabtp.com", href: "mailto:contact@henabtp.com" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-xl bg-card p-4" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-xl" style={{ boxShadow: "var(--card-shadow)" }}>
              <iframe
                title="Localisation HENA BTP Cotonou Bénin"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d2.3279387!3d6.4073475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnMjYuNSJOIDLCsDE5JzQwLjYiRQ!5e0!3m2!1sfr!2sbj!4v1700000000000"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
