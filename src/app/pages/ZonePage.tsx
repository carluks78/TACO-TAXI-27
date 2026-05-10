import React from "react";
import { Link, useLocation } from "react-router";
import { Phone, Clock, Shield, Car, MapPin } from "lucide-react";
import { PHONE, PHONE_LINK, ZONES, LIEUX, AIRPORTS } from "@/lib/seoData";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import TestimonialsSection from "../components/home/TestimonialsSection";

function getZoneData(slug: string) {
  const all = [...ZONES, ...LIEUX, ...AIRPORTS];
  return all.find((z) => z.slug === slug);
}

// Contenu spécifique pour Giverny (fort potentiel SEO tourisme)
const givernyContent = {
  extra: `Giverny est mondialement connue pour les jardins de Claude Monet, classés monument historique et gérés par la Fondation Claude Monet. Chaque année, des milliers de visiteurs du monde entier viennent admirer les jardins et le célèbre pont japonais. TACO TAXI Pacy-sur-Eure est le taxi local idéal pour découvrir Giverny depuis Vernon, Évreux ou toute la vallée de l'Eure.`,
};

export default function ZonePage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const zone = getZoneData(slug);
  const name =
    zone?.name ||
    slug
      .replace(/taxi-|transfert-/g, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

  const isGiverny = slug === "taxi-giverny";
  const isAirport =
    slug.includes("aeroport") || slug.includes("orly") || slug.includes("roissy");
  const isGare = slug.includes("gare");

  const faqs = [
    {
      q: `Comment réserver un taxi pour ${name} ?`,
      a: `Appelez TACO TAXI au ${PHONE} pour réserver votre taxi vers ${name}. Service disponible 24h/24, 7j/7. Nous vous prenons en charge à Pacy-sur-Eure ou dans toute la vallée de l'Eure.`,
    },
    {
      q: `Combien coûte un taxi Pacy-sur-Eure — ${name} ?`,
      a: `Le tarif dépend de la distance exacte. Nos courses sont au compteur homologué. Pour un devis précis, contactez-nous au ${PHONE}. Tarifs compétitifs, paiement CB accepté.`,
    },
    {
      q: `Le taxi vers ${name} est-il disponible le week-end ?`,
      a: `Oui, TACO TAXI dessert ${name} 7 jours sur 7, y compris les week-ends et jours fériés. Disponible de nuit comme de jour.`,
    },
    {
      q: `Peut-on réserver un aller-retour Pacy-sur-Eure — ${name} ?`,
      a: `Absolument. Nous proposons des allers-retours avec attente sur place si nécessaire. Idéal pour les rendez-vous médicaux, les visites touristiques ou les excursions.`,
    },
    {
      q: `Le taxi vers ${name} peut-il accueillir plusieurs passagers ?`,
      a: `Oui, nos véhicules accueillent confortablement jusqu'à 4 passagers avec leurs bagages. Contactez-nous pour les groupes plus importants.`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-4 h-4 text-gold" />
            <span
              style={{ fontFamily: "var(--font-body)" }}
              className="text-gold text-xs font-semibold"
            >
              {isAirport ? "Transfert Aéroport" : isGare ? "Transfert Gare" : "Zone desservie"}
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Taxi {name}
            <span className="text-gold">
              {" "}
              — {isAirport ? "Navette depuis Pacy-sur-Eure" : "Service depuis Pacy-sur-Eure"}
            </span>
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-white/80 text-lg max-w-3xl mb-8"
          >
            <strong>TACO TAXI</strong> assure vos trajets entre{" "}
            <strong>Pacy-sur-Eure</strong> et <strong>{name}</strong>. Service professionnel
            disponible 24h/24. Chauffeur ponctuel, véhicule confortable, tarifs transparents.
          </p>
          <a
            href={PHONE_LINK}
            style={{ fontFamily: "var(--font-body)" }}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors"
          >
            <Phone className="w-5 h-5" />
            Réserver : {PHONE}
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto">
        <article>
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold mb-4 text-navy-dark"
          >
            Taxi {name} depuis Pacy-sur-Eure : un trajet en toute sérénité
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            Vous recherchez un <strong>taxi pour {name}</strong> au départ de Pacy-sur-Eure ou de
            la vallée de l'Eure ? TACO TAXI vous propose un service de transport professionnel,
            fiable et confortable. Que ce soit pour un rendez-vous, une sortie, un trajet médical
            ou une excursion touristique, votre chauffeur vous conduit à {name} dans les meilleures
            conditions.
          </p>

          {isGiverny && (
            <div className="bg-gold/10 border border-gold/20 rounded-xl p-5 mb-6">
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="text-sm text-navy-dark leading-relaxed"
              >
                🌸 <strong>Giverny & Fondation Claude Monet</strong> — {givernyContent.extra}
              </p>
            </div>
          )}

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold mb-4 text-navy-dark"
          >
            Pourquoi choisir TACO TAXI pour {name} ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                icon: Clock,
                title: "Disponible 24h/24",
                desc: `Service de taxi vers ${name} jour et nuit, sans interruption`,
              },
              {
                icon: Shield,
                title: "Transport CPAM",
                desc: "Taxi conventionné pour vos déplacements médicaux",
              },
              {
                icon: Car,
                title: "Véhicule confortable",
                desc: "Berline récente, climatisée, coffre spacieux",
              },
              {
                icon: MapPin,
                title: "Connaissance locale",
                desc: `Votre chauffeur connaît parfaitement ${name} et ses environs`,
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-muted/50 rounded-lg p-4">
                <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-body)" }}
                    className="font-semibold text-sm text-navy-dark"
                  >
                    {title}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-xs text-muted-foreground"
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold mb-4 text-navy-dark"
          >
            Réserver votre taxi pour {name}
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            Pour réserver votre taxi vers {name}, appelez le <strong>{PHONE}</strong> ou envoyez
            un message WhatsApp. Nous confirmons rapidement et votre chauffeur vous prend en charge à
            l'adresse de votre choix. Voir aussi notre service de{" "}
            <Link
              to="/taxi-conventionne-cpam-pacy-sur-eure"
              className="text-gold hover:underline"
            >
              taxi conventionné CPAM
            </Link>{" "}
            et nos{" "}
            <Link to="/transfert-aeroport-roissy" className="text-gold hover:underline">
              navettes aéroport
            </Link>
            .
          </p>
        </article>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={faqs} title={`FAQ — Taxi ${name}`} />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-gare-vernon", label: "Taxi Gare Vernon" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné" },
          { to: "/contact", label: "Nous Contacter" },
        ]}
      />
    </>
  );
}