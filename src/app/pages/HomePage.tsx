import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyUsSection from "../components/home/WhyUsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";

const homeFaqs = [
  {
    q: "Qu'est-ce que TACO TAXI Chaignes dessert Pacy-sur-Eure ?",
    a: "TACO TAXI est un service de taxi professionnel basé à Chaignes (Eure, Normandie). Nous assurons tous vos déplacements locaux, médicaux, aéroport et longue distance 24h/24.",
  },
  {
    q: "Faites-vous les transports conventionnés CPAM ?",
    a: "Oui, TACO TAXI est agréé CPAM pour le transport sanitaire. Sur prescription médicale, vos trajets vers les établissements de santé sont pris en charge par la Sécurité Sociale. Tiers payant disponible.",
  },
  {
    q: "Desservez-vous Vernon et Évreux ?",
    a: "Oui, TACO TAXI dessert Vernon, Évreux, Giverny et toutes les communes de la vallée de l'Eure. Nous couvrons aussi les longues distances vers Paris, Rouen et au-delà.",
  },
  {
    q: "Faites-vous les transferts vers Roissy CDG et Orly ?",
    a: "Oui, nous assurons les navettes aéroport depuis Pacy-sur-Eure vers Roissy Charles-de-Gaulle et Orly. Tarif fixe établi à l'avance, disponible 24h/24.",
  },
  {
    q: "Êtes-vous disponible la nuit et le week-end ?",
    a: "Oui, TACO TAXI fonctionne 24h/24, 7j/7, nuits, week-ends et jours fériés compris. Un seul numéro : 06 67 96 23 96.",
  },
  {
    q: "Comment réserver TACO TAXI ?",
    a: "Appelez le 06 67 96 23 96 ou envoyez un message WhatsApp. Réservation immédiate, aucun frais de réservation.",
  },
  {
    q: "Desservez-vous Giverny et les jardins de Claude Monet ?",
    a: "Oui ! TACO TAXI conduit les touristes aux jardins de Giverny depuis Pacy-sur-Eure, Vernon et toute la vallée de l'Eure. Un chauffeur local connaissant parfaitement la région.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyUsSection />
      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={homeFaqs} title="Questions fréquentes — TACO TAXI Chaignes" />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/taxi-gare-vernon", label: "Taxi Gare Vernon" },
          { to: "/taxi-giverny", label: "Taxi Giverny" },
          { to: "/taxi-evreux", label: "Taxi Évreux" },
          { to: "/transfert-aeroport-roissy", label: "Aéroport Roissy CDG" },
          { to: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}
