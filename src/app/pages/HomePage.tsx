import React from "react";
import { Link } from "react-router";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyUsSection from "../components/home/WhyUsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import PageSEO from "../components/seo/PageSEO";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Phone, Shield, Clock, MapPin, Train, Plane, Heart, Star, ArrowRight, CheckCircle2
} from "lucide-react";
import { PHONE, PHONE_LINK } from "@/lib/seoData";
import { IMGS } from "@/lib/zoneContent";

const GOOGLE_REVIEW_URL = "https://g.page/r/CQDMv_pAsXR0EAE/review";

// Google G Logo
const GoogleLogoFull = () => (
  <svg width="22" height="22" viewBox="0 0 48 48" className="flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const StarFill = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBC05">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// City cards data
const CITY_CARDS = [
  { name: "Vernon", slug: "taxi-vernon", img: IMGS.vernon, desc: "Gare SNCF, Paris en 1h, Giverny 5km" },
  { name: "Évreux", slug: "taxi-evreux", img: IMGS.normandie, desc: "Préfecture de l'Eure, CH Évreux, Gare" },
  { name: "Giverny", slug: "taxi-giverny", img: IMGS.giverny, desc: "Fondation Claude Monet, tourisme" },
  { name: "Rouen", slug: "taxi-rouen", img: IMGS.rouen, desc: "CHU Rouen, Capitale Normandie" },
  { name: "Paris", slug: "taxi-paris", img: IMGS.paris, desc: "Hôpitaux, Pro, Aéroports" },
  { name: "Gares SNCF", slug: "taxi-gare-vernon-giverny", img: IMGS.train, desc: "Vernon, Évreux, Mantes, Bréval, Bueil" },
];

// Teal color constant
const TEAL = "#3AB4B1";

const homeFaqs = [
  {
    q: "Qu'est-ce que TACO TAXI à Pacy-sur-Eure ?",
    a: "TACO TAXI est un service de taxi professionnel basé à Pacy-sur-Eure (Eure 27120, Normandie). Disponible 24h/24, 7j/7, nous assurons tous vos déplacements : courses locales, transport médical conventionné CPAM, transferts gares SNCF (Vernon, Évreux, Bueil, Bréval, Mantes-la-Jolie), navettes aéroports (Roissy CDG, Orly, Beauvais), et longues distances vers Paris, Rouen, Caen et toute la France.",
  },
  {
    q: "TACO TAXI est-il conventionné CPAM pour le transport médical ?",
    a: "Oui, TACO TAXI est agréé CPAM pour le transport sanitaire conventionné. Sur prescription médicale de votre médecin (formulaire CERFA de transport), vos trajets vers les hôpitaux, cliniques et centres de soins sont remboursés par la Sécurité Sociale. Tiers payant disponible, pas d'avance de frais dans la plupart des cas. Nous desservons l'hôpital de Vernon, le CH Évreux, le CHU Rouen, et les grands hôpitaux de Paris (Pompidou, Necker, Cochin, Gustave-Roussy).",
  },
  {
    q: "Quelle est la zone de desserte de TACO TAXI ?",
    a: "TACO TAXI dessert Pacy-sur-Eure (27120) et toutes les communes de la vallée de l'Eure sur un rayon de 15 à 30 km : Vernon, Évreux, Giverny, Ménilles, Douains, Breuilpont, Saint-Marcel, Jouy-sur-Eure, Bueil, Gasny, Croisy-sur-Eure, Houlbec-Cocherel, La Chapelle-Longueville, Fains, Aigleville, Fontaine-sous-Jouy, et bien d'autres. Nous assurons également les longues distances vers Paris, Rouen, Caen et toute la France.",
  },
  {
    q: "Comment réserver TACO TAXI à Pacy-sur-Eure ?",
    a: `Appelez le ${PHONE} (disponible 24h/24) ou envoyez un message WhatsApp. Réservation immédiate, pas de frais de réservation. Vous pouvez aussi réserver à l'avance pour les départs matinaux. Nous confirmons votre prise en charge en moins de 2 minutes.`,
  },
  {
    q: "Faites-vous les transferts vers Roissy CDG et Orly ?",
    a: "Oui, TACO TAXI assure vos navettes aéroport depuis Pacy-sur-Eure et toute la vallée de l'Eure vers Roissy Charles-de-Gaulle (CDG), Orly et Beauvais. Tarif fixe établi à l'avance, suivi de votre vol en temps réel, disponible 24h/24. Idéal pour les départs très matinaux (4h-5h) ou les arrivées tardives.",
  },
  {
    q: "Desservez-vous la gare de Vernon et les autres gares de la région ?",
    a: "Oui, TACO TAXI dessert la gare de Vernon-Giverny (la plus proche de Pacy), la gare d'Évreux-Normandie, la gare de Bueil, la gare de Bréval et la gare de Mantes-la-Jolie. Transfert ponctuel depuis votre domicile, suivi des horaires SNCF, disponible pour les premiers et derniers trains.",
  },
  {
    q: "Êtes-vous disponible la nuit, le week-end et les jours fériés ?",
    a: `Oui, TACO TAXI fonctionne sans interruption : 24 heures sur 24, 7 jours sur 7, week-ends et jours fériés compris. Aucun supplément de nuit. Un seul numéro : ${PHONE}.`,
  },
  {
    q: "TACO TAXI dessert-il Giverny et les jardins de Claude Monet ?",
    a: "Oui ! TACO TAXI conduit les touristes et visiteurs aux jardins de la Fondation Claude Monet à Giverny. Service depuis Pacy-sur-Eure, Vernon, Évreux ou Paris. Chauffeur local connaissant parfaitement la région. Attente sur place pendant la visite possible.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageSEO
  title="Taxi Pacy-sur-Eure 24h/24 | Taxi Conventionné CPAM | Gare Vernon | TACO TAXI"
  description="Besoin d’un taxi à Pacy-sur-Eure ? TACO TAXI disponible 24h/24 et 7j/7 à Chaignes, Vernon, Giverny, Évreux. Transport médical conventionné CPAM, gare, aéroport Roissy CDG, Orly, longue distance. Réservation au 06 67 96 23 96."
  keywords="taxi pacy-sur-eure, taxi pacy sur eure, taxi chaignes, taxi vernon, taxi giverny, taxi évreux, taxi conventionné cpam, taxi gare vernon, taxi aéroport roissy, taxi orly, taxi 27120, taco taxi"
  canonical="https://tacotaxi27.fr/"
  ogImage="https://www.tacotaxi27.fr/taco-taxi-pacy-sur-eure-og.png"
/>
      <HeroSection />

      {/* Stats bar */}
      <section className="bg-gold py-5 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "24h/24", label: "Disponibilité 7j/7" },
            { value: "5 ⭐", label: "Noté sur Google" },
            { value: "CPAM", label: "Taxi Agréé Sécu" },
            { value: "+30", label: "Communes Desservies" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark text-xl">{value}</p>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-navy-dark/70 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesOverview />

      {/* City grid section with real images */}
      <section className="py-16 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-bold text-navy-dark mb-3">
              Taxi partout dans la Vallée de l'Eure
            </h2>
            <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground max-w-2xl mx-auto">
              TACO TAXI dessert Pacy-sur-Eure et toute la région : Vernon, Évreux, Giverny, Rouen, Paris et bien d'autres communes de Normandie.
            </p>
            <div className="mt-3 h-1 w-16 bg-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITY_CARDS.map((city) => (
              <Link key={city.slug} to={`/${city.slug}`} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={city.img}
                    alt={`Taxi ${city.name} – TACO TAXI Pacy-sur-Eure`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-white font-bold text-lg mb-1">
                    Taxi {city.name}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-xs mb-2">{city.desc}</p>
                  <span style={{ fontFamily: "var(--font-body)" }} className="inline-flex items-center gap-1 text-gold text-xs font-semibold group-hover:gap-2 transition-all">
                    Réserver <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/taxi-pacy-sur-eure"
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Voir toutes les zones desservies
            </Link>
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-bold text-navy-dark mb-3">
              Tous vos besoins de transport couverts
            </h2>
            <div className="mt-3 h-1 w-16 bg-gold rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Train,
                title: "Transferts Gares SNCF",
                desc: "Vernon-Giverny, Évreux-Normandie, Bueil, Bréval, Mantes-la-Jolie. Disponible 24h/24 pour tous les trains.",
                slug: "/taxi-gare-vernon-giverny",
                img: IMGS.train,
              },
              {
                icon: Plane,
                title: "Navettes Aéroports",
                desc: "Roissy CDG, Orly, Beauvais. Tarif fixe, suivi vol, départ depuis Pacy-sur-Eure et toute la vallée.",
                slug: "/transfert-aeroport-roissy",
                img: IMGS.airport,
              },
              {
                icon: Heart,
                title: "Transport CPAM",
                desc: "Taxi conventionné agréé Sécurité Sociale. Tiers payant, sans avance de frais sur prescription médicale.",
                slug: "/taxi-conventionne-cpam-pacy-sur-eure",
                img: IMGS.hospital,
              },
              {
                icon: MapPin,
                title: "Longue Distance",
                desc: "Paris, Rouen, Caen, Le Havre et toute la France. Tarif fixe établi à l'avance. Véhicule confortable.",
                slug: "/taxi-longue-distance-pacy-sur-eure",
                img: IMGS.chauffeur,
              },
            ].map(({ icon: Icon, title, desc, slug, img }) => (
              <Link key={slug} to={slug} className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-36 overflow-hidden">
                  <ImageWithFallback src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <div className="w-9 h-9 bg-gold/15 rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark mb-2 text-base">{title}</h3>
                  <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground text-xs leading-relaxed mb-3">{desc}</p>
                  <span style={{ fontFamily: "var(--font-body)" }} className="text-gold text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA section */}
      <section className="py-14 px-4 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-5 py-2.5">
              <GoogleLogoFull />
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarFill key={i} />)}
              </div>
              <span style={{ fontFamily: "var(--font-body)" }} className="text-white font-bold text-sm">5/5</span>
            </div>
          </div>
          <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-3xl font-bold text-white mb-3">
            127+ clients nous font confiance
          </h2>
          <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 mb-6 max-w-xl mx-auto">
            TACO TAXI est noté 5/5 sur Google par ses clients. Votre satisfaction est notre priorité à chaque trajet depuis Pacy-sur-Eure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={PHONE_LINK}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5" />
              Réserver : {PHONE}
            </a>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-dark font-bold px-8 py-4 rounded-full transition-colors"
            >
              <GoogleLogoFull />
              Laisser un avis Google
            </a>
          </div>
          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: Shield, text: "CPAM Agréé" },
              { icon: Clock, text: "24h/24 7j/7" },
              { icon: CheckCircle2, text: "Tarif Transparent" },
              { icon: Star, text: "Satisfaction Garantie" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center gap-1.5 text-white/70">
                <Icon className="w-5 h-5 text-gold" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-xs text-center">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUsSection />
      <ZonesBand />
      <TestimonialsSection />

      {/* SEO text block */}
      <section className="py-14 px-4 lg:px-8 max-w-4xl mx-auto">
        <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-2xl font-bold text-navy-dark mb-4">
          TACO TAXI — Le taxi de référence à Pacy-sur-Eure et dans la Vallée de l'Eure
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          <p>
            <strong className="text-navy-dark">TACO TAXI</strong> est votre service de taxi professionnel basé à <strong className="text-navy-dark">Pacy-sur-Eure (27120)</strong> dans le département de l'Eure, en Normandie. Nous couvrons toute la <strong className="text-navy-dark">vallée de l'Eure</strong> avec un service disponible <strong className="text-navy-dark">24 heures sur 24, 7 jours sur 7</strong>, sans interruption. Que vous ayez besoin d'un <strong className="text-navy-dark">taxi pour la gare de Vernon</strong>, d'un <strong className="text-navy-dark">transport médical conventionné CPAM</strong>, d'une <strong className="text-navy-dark">navette aéroport vers Roissy CDG</strong> ou d'un <strong className="text-navy-dark">taxi longue distance vers Paris ou Rouen</strong>, TACO TAXI est le service qu'il vous faut.
          </p>
          <p>
            Notre <strong className="text-navy-dark">taxi à Pacy-sur-Eure</strong> dessert toutes les communes de la région : Vernon, Évreux, Giverny, Ménilles, Breuilpont, Saint-Marcel, Douains, Bueil, Jouy-sur-Eure, Houlbec-Cocherel, Croisy-sur-Eure, Gasny, La Chapelle-Longueville, Hardencourt-Cocherel, Fains, Aigleville, Fontaine-sous-Jouy et bien d'autres. Nous sommes également disponibles pour des trajets vers <strong className="text-navy-dark">Rouen</strong>, <strong className="text-navy-dark">Paris</strong>, <strong className="text-navy-dark">Caen</strong>, <strong className="text-navy-dark">Le Havre</strong> et toute la France.
          </p>
          <p>
            Notre service de <strong className="text-navy-dark">taxi conventionné CPAM</strong> est agréé par l'Assurance Maladie pour le <strong className="text-navy-dark">transport sanitaire</strong>. Sur prescription médicale de votre médecin, vos trajets vers les hôpitaux (CHU Rouen, CH Évreux, Hôpital de Vernon, Hôpital Pompidou Paris, Hôpital Necker, Hôpital Cochin, Institut Gustave-Roussy) sont pris en charge par la Sécurité Sociale avec <strong className="text-navy-dark">tiers payant disponible</strong>.
          </p>
          <p>
            Pour vos <strong className="text-navy-dark">transferts gares SNCF</strong>, TACO TAXI vous conduit à la <strong className="text-navy-dark">gare de Vernon-Giverny</strong> (Paris Saint-Lazare en 1h), la <strong className="text-navy-dark">gare d'Évreux-Normandie</strong> (Paris, Caen, Rouen), la <strong className="text-navy-dark">gare de Bueil</strong>, la <strong className="text-navy-dark">gare de Bréval</strong> et la <strong className="text-navy-dark">gare de Mantes-la-Jolie</strong> (Paris en 40 min). Ponctualité garantie, suivi des horaires en temps réel.
          </p>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} title="Questions fréquentes — TACO TAXI Pacy-sur-Eure" />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/taxi-gare-vernon-giverny", label: "Taxi Gare Vernon-Giverny" },
          { to: "/taxi-giverny", label: "Taxi Giverny Monet" },
          { to: "/taxi-evreux", label: "Taxi Évreux" },
          { to: "/taxi-rouen", label: "Taxi Rouen" },
          { to: "/transfert-aeroport-roissy", label: "Aéroport Roissy CDG" },
          { to: "/taxi-hopital-georges-pompidou", label: "Taxi Hôpital Pompidou" },
          { to: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}
