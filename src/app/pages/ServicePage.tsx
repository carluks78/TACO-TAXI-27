import React from "react";
import { Link, useLocation } from "react-router";
import { Phone, Car, Train, Heart, Route, Plane, Clock } from "lucide-react";
import { PHONE, PHONE_LINK, SERVICES } from "@/lib/seoData";
import { serviceContent, getDefaultServiceContent } from "@/lib/serviceContent";
import { IMGS } from "@/lib/zoneContent";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import PageSEO from "../components/seo/PageSEO";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import TestimonialsSection from "../components/home/TestimonialsSection";

const iconMap: Record<string, React.ElementType> = { Car, Train, Heart, Route, Plane, Clock };

const SERVICE_SEO: Record<string, { title: string; desc: string; keywords: string; img: string }> = {
  "taxi-pacy-sur-eure": {
    title: "Taxi Pacy-sur-Eure 24h/24 — TACO TAXI | Courses, CPAM, Gare",
    desc: "Taxi local à Pacy-sur-Eure (27120). Courses quotidiennes, transport médical CPAM, gare Vernon, aéroport CDG. Chauffeur professionnel 24h/24 7j/7. ☎ 06 67 96 23 96.",
    keywords: "taxi Pacy-sur-Eure, taxi local Pacy, taxi Pacy 24h, courses taxi Pacy, taxi Pacy médecin, taxi Pacy gare Vernon, taxi Pacy aéroport CDG",
    img: IMGS.taxi,
  },
  "taxi-conventionne-cpam-pacy-sur-eure": {
    title: "Taxi Conventionné CPAM Pacy-sur-Eure — Transport Sanitaire Agréé",
    desc: "Taxi conventionné CPAM à Pacy-sur-Eure. Transport sanitaire remboursé Assurance Maladie. Tiers payant, sans avance de frais. Dialyse, chimiothérapie, consultations. ☎ 06 67 96 23 96.",
    keywords: "taxi conventionné CPAM Pacy-sur-Eure, transport sanitaire Pacy, taxi médical CPAM Eure, tiers payant taxi Pacy, taxi chimiothérapie Évreux, taxi dialyse conventionné",
    img: IMGS.hospital,
  },
  "taxi-gare-vernon": {
    title: "Taxi Gare Vernon-Giverny | TACO TAXI Chaignes/Pacy-sur-Eure 24h/24",
    desc: "Taxi gare de Vernon-Giverny depuis Pacy-sur-Eure. Paris Saint-Lazare en 1h. Disponible 24h/24, suivi horaires SNCF. ☎ 06 67 96 23 96.",
    keywords: "taxi gare Vernon, taxi Vernon gare SNCF, taxi Pacy gare Vernon, transfert gare Vernon 24h, taxi train Vernon Paris Saint-Lazare",
    img: IMGS.train,
  },
  "transfert-aeroport-roissy": {
    title: "Navette Aéroport Roissy CDG depuis Pacy-sur-Eure | TACO TAXI",
    desc: "Transfert aéroport Paris Charles-de-Gaulle (Roissy CDG) depuis Pacy-sur-Eure. Tarif fixe garanti, suivi vol, véhicule propre. Disponible 24h/24. ☎ 06 67 96 23 96.",
    keywords: "navette Roissy CDG Pacy-sur-Eure, taxi aéroport CDG Pacy, transfert Roissy depuis Eure, taxi Roissy Normandie tarif fixe, navette CDG vallée Eure 24h",
    img: IMGS.airportCDG,
  },
  "transfert-aeroport-orly": {
    title: "Navette Aéroport Paris Orly depuis Pacy-sur-Eure | TACO TAXI",
    desc: "Transfert aéroport d'Orly depuis Pacy-sur-Eure. Terminal 1, 2, 3, 4. Tarif fixe, suivi vol. Disponible 24h/24 7j/7. ☎ 06 67 96 23 96.",
    keywords: "navette Orly Pacy-sur-Eure, taxi aéroport Orly Pacy, transfert Orly depuis Normandie, taxi Orly vallée Eure tarif fixe",
    img: IMGS.airportOrly,
  },
  "taxi-longue-distance-pacy-sur-eure": {
    title: "Taxi Longue Distance Pacy-sur-Eure — Paris, Rouen, Caen | TACO TAXI",
    desc: "Taxi longue distance depuis Pacy-sur-Eure vers Paris, Rouen, Caen, Le Havre. Tarif fixe garanti, véhicule premium. ☎ 06 67 96 23 96.",
    keywords: "taxi longue distance Pacy-sur-Eure, taxi Pacy Paris tarif fixe, taxi Pacy Rouen, taxi Normandie Paris, taxi grande distance Eure, chauffeur longue distance Normandie",
    img: IMGS.chauffeur,
  },
};

export default function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const service = SERVICES.find((s) => s.slug === slug);
  const name = service?.name || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const data = serviceContent[slug] || getDefaultServiceContent(name);
  const Icon = service ? iconMap[service.icon] || Car : Car;
  const seo = SERVICE_SEO[slug];
  const heroImg = seo?.img ?? IMGS.taxi;

  return (
    <>
      {seo && (
        <PageSEO
          title={seo.title}
          description={seo.desc}
          keywords={seo.keywords}
          canonical={`/${slug}`}
          ogImage={seo.img}
        />
      )}

      {/* Hero with real image */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt={data.h1} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/50" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Icon className="w-4 h-4 text-gold" />
            <span style={{ fontFamily: "var(--font-body)" }} className="text-gold text-xs font-semibold">
              TACO TAXI — Service Pacy-sur-Eure
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 max-w-3xl"
          >
            {data.h1}
          </h1>
          <p style={{ fontFamily: "var(--font-body)" }} className="text-gold text-base sm:text-lg mb-4">
            {data.sub}
          </p>
          <p style={{ fontFamily: "var(--font-body)" }} className="text-white/80 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_LINK}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Réserver : {PHONE}
            </a>
            <div className="inline-flex items-center justify-center gap-1.5 bg-white/10 border border-white/20 px-5 py-3.5 rounded-full">
              <Clock className="w-4 h-4 text-gold" />
              <span style={{ fontFamily: "var(--font-body)" }} className="text-white text-sm font-semibold">Disponible 24h/24 7j/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {data.content.map((block, i) => (
            <div key={i}>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-xl sm:text-2xl font-bold text-navy-dark mb-3">
                {block.title}
              </h2>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={data.faqs} title={`FAQ — ${data.h1}`} />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/taxi-gare-vernon-giverny", label: "Taxi Gare Vernon" },
          { to: "/transfert-aeroport-roissy", label: "Aéroport Roissy CDG" },
          { to: "/taxi-giverny", label: "Taxi Giverny" },
          { to: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}