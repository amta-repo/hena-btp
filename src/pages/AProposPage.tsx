import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Target, Eye, Shield, Award, Users, Heart, Lightbulb,
  ArrowRight, CheckCircle, MapPin, ShieldCheck, Clock, Plus
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import WhatsAppButton from "@/components/WhatsAppButton";

import whyHeroVideo from "@/assets/why-henabtp.mp4";
import heroImg from "@/assets/project-office.jpg";
import storyImg from "@/assets/Notre-Histoire-about.jpg";
import dgImg from "@/assets/dg-henabtp.jpeg";
import nosObjectifsImg from "@/assets/nos-objectifs.jpg";

/* ---------------- DATA ---------------- */

const values = [
  { icon: Award, title: "Excellence", desc: "Viser la qualité dans chaque détail." },
  { icon: Shield, title: "Intégrité", desc: "Être honnête, transparent et responsable." },
  { icon: Heart, title: "Engagement", desc: "Respecter nos délais et nos promesses." },
  { icon: Lightbulb, title: "Innovation", desc: "Proposer des solutions modernes et adaptées." },
  { icon: Users, title: "Proximité", desc: "Rester à l'écoute de nos clients à chaque étape." },
];

const objectives = [
  {
    title: "Offrir des constructions solides, modernes et accessibles",
    desc: "Nous nous engageons à concevoir et construire des bâtiments durables, intégrant les dernières technologies et normes architecturales, tout en restant accessibles financièrement à nos clients."
  },
  {
    title: "Devenir une référence incontournable du BTP en Afrique",
    desc: "Par notre excellence opérationnelle et notre innovation constante."
  },
  {
    title: "Accompagner nos clients de la conception à la réalisation",
    desc: "Un suivi intégral et personnalisé à chaque étape."
  },
  {
    title: "Réduire les coûts sans compromettre la qualité",
    desc: "Optimisation des processus et gestion rigoureuse."
  },
  {
    title: "Livrer chaque projet dans les délais convenus",
    desc: "Respect strict des calendriers."
  },
];

const whyUsReasons = [
  { icon: MapPin, title: "Expertise locale à Cotonou", desc: "Connaissance approfondie du terrain et des réglementations béninoises." },
  { icon: ShieldCheck, title: "Engagement HSE fort", desc: "Sécurité et environnement au cœur de chaque projet." },
  { icon: Clock, title: "Respect des délais et budget", desc: "Engagement sur délais et coûts." },
  { icon: Lightbulb, title: "Solutions sur mesure", desc: "Constructions adaptées au climat et aux besoins." },
  { icon: Users, title: "Équipe qualifiée", desc: "Experts formés aux normes internationales." },
  { icon: Award, title: "Qualité premium", desc: "Matériaux et techniques de haut niveau." },
  { icon: Target, title: "Suivi rigoureux", desc: "Chef de projet dédié." },
  { icon: Heart, title: "Satisfaction garantie", desc: "Service après-vente réactif." },
];

const stats = [
  { num: "10+", label: "Années d'expérience" },
  { num: "150+", label: "Projets réalisés" },
  { num: "100%", label: "Clients satisfaits" },
  { num: "0", label: "Accidents sur chantier" },
];

/* ---------------- PAGE ---------------- */

const AProposPage = () => {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [directorExpanded, setDirectorExpanded] = useState(false);
  const [expandedObjective, setExpandedObjective] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>À Propos | HENA BTP</title>
      </Helmet>

      <Navbar />

      <main>

        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <img src={heroImg} className="absolute inset-0 w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-black/70" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold text-white">
              Bâtir avec vision, construire avec passion
            </h1>
            <p className="mt-4 text-white/80">
              Construire aujourd'hui, sécuriser demain.
            </p>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch border-4 border-orange-500 rounded-2xl overflow-hidden bg-white/80 backdrop-blur shadow-sm">

              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>

                <p>HENA BTP est née d'une ambition simple : transformer les idées en réalités durables.</p>

                {storyExpanded && (
                  <p className="mt-4 text-muted-foreground">
                    Créée par des passionnés du bâtiment, l'entreprise s'est construite autour d'un constat : trop de projets souffrent de manque de rigueur, de transparence et de qualité.
                  </p>
                )}

                <button onClick={() => setStoryExpanded(!storyExpanded)} className="mt-6 text-accent self-start">
                  {storyExpanded ? "Afficher moins" : "Lire la suite"}
                </button>
              </div>

              <div className="relative">
                <img src={storyImg} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* DIRECTOR */}
        <section className="section-padding bg-secondary">
          <div className="grid lg:grid-cols-5 gap-10 container mx-auto">

            <img src={dgImg} className="lg:col-span-2 rounded-xl shadow-lg" />

            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-4">Mot de la Directrice Générale</h2>

              <p>Chaque projet est un rêve qui prend forme.</p>

              {directorExpanded && (
                <p className="mt-4 text-muted-foreground">
                  Nous construisons pour aujourd'hui et demain avec exigence.
                </p>
              )}

              <button onClick={() => setDirectorExpanded(!directorExpanded)} className="mt-4 text-accent">
                {directorExpanded ? "Afficher moins" : "Lire la suite"}
              </button>
            </div>

          </div>
        </section>

        {/* VALUES */}
        <section className="section-padding">
          <h2 className="text-3xl font-bold text-center mb-10">Nos Valeurs</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 container mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
                <v.icon className="mx-auto mb-3 text-accent" />
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="section-padding bg-slate-100">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Nos Objectifs</h2>

            {objectives.map((obj, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm mb-4">
                <button
                  onClick={() => setExpandedObjective(expandedObjective === i ? null : i)}
                  className="flex justify-between w-full"
                >
                  {obj.title}
                  <Plus className={`${expandedObjective === i ? "rotate-45" : ""}`} />
                </button>

                {expandedObjective === i && (
                  <p className="mt-3 text-muted-foreground">{obj.desc}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="section-padding">
          <div className="grid grid-cols-2 sm:grid-cols-4 container mx-auto bg-background/95 backdrop-blur-md border-t border-border divide-x divide-border rounded-xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="p-6 text-center">
                <p className="text-3xl font-bold text-accent">{s.num}</p>
                <p className="text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="relative section-padding">
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover" src={whyHeroVideo} />
          <div className="absolute inset-0 bg-primary/85" />

          <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 container mx-auto">
            {whyUsReasons.map((r) => (
              <div key={r.title} className="bg-white/10 backdrop-blur p-6 rounded-xl text-center">
                <r.icon className="mx-auto mb-3 text-accent" />
                <h3 className="text-white font-semibold">{r.title}</h3>
                <p className="text-white/70 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <TeamSection variant="about" />

        {/* CTA */}
        <section className="py-24 bg-orange-500 text-center">
          <h2 className="text-3xl font-bold text-white">
            Prêt à lancer votre projet ?
          </h2>

          <Link to="/contact" className="mt-6 inline-block bg-white text-orange-600 px-6 py-3 font-semibold">
            Contact
          </Link>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AProposPage;