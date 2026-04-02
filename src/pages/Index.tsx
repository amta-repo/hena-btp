import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import RealisationsSection from "@/components/RealisationsSection";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  name: "HENA BTP, Groupe HSE",
  description: "Entreprise de Bâtiment et Travaux Publics à Cotonou, Bénin. Construction de maisons modernes, villas, bâtiments publics, génie civil et suivi HSE.",
  url: "https://henabtp.com",
  telephone: "+2290155496155",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4073475,
    longitude: 2.3279387,
  },
  areaServed: "Bénin",
  sameAs: [],
};

const Index = () => (
  <>
    <Helmet>
      <title>HENA BTP Cotonou | Construction Maison & Travaux Publics Bénin - Groupe HSE</title>
      <meta
        name="description"
        content="HENA BTP, Groupe HSE : entreprise de BTP à Cotonou, Bénin. Construction de maisons modernes, villas, bâtiments publics, travaux de génie civil. Devis gratuit."
      />
      <meta
        name="keywords"
        content="HENA BTP Cotonou, construction maison Bénin, travaux publics Cotonou, BTP Bénin, génie civil Bénin, construction moderne Bénin, HENA BTP, Groupe HSE"
      />
      <link rel="canonical" href="https://henabtp.com" />
      <meta property="og:title" content="HENA BTP - Construction & Travaux Publics à Cotonou, Bénin" />
      <meta property="og:description" content="Votre partenaire BTP de confiance au Bénin. Construction moderne, qualité premium, normes HSE." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_BJ" />
      <html lang="fr" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <RealisationsSection />
      <WhyUsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
