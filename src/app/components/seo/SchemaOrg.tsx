import React from "react";
import { PHONE, EMAIL, COMPANY_FULL, SITE_URL } from "@/lib/seoData";

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": SITE_URL,
        name: COMPANY_FULL,
        description:
          "Service de taxi professionnel à Chaignes dessert Pacy sur Eure et toute la vallée de l'Eure (Normandie). Taxi conventionné CPAM, transport médical, transferts gares SNCF (Vernon, Évreux, Bueil, Bréval, Mantes-la-Jolie), aéroports (Roissy CDG, Orly, Beauvais), hôpitaux Paris (Pompidou, Necker, Cochin, Gustave-Roussy) et CHU Rouen. Disponible 24h/24 7j/7.",
        url: SITE_URL,
        telephone: PHONE,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pacy-sur-Eure",
          addressRegion: "Normandie",
          postalCode: "27120",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.995,
          longitude: 1.3872,
        },
        areaServed: [
          { "@type": "City", name: "Pacy-sur-Eure" },
          { "@type": "City", name: "Vernon" },
          { "@type": "City", name: "Évreux" },
          { "@type": "City", name: "Giverny" },
          { "@type": "City", name: "Ménilles" },
          { "@type": "City", name: "Breuilpont" },
          { "@type": "City", name: "Saint-Marcel" },
          { "@type": "City", name: "Douains" },
          { "@type": "City", name: "Bueil" },
          { "@type": "City", name: "Jouy-sur-Eure" },
          { "@type": "City", name: "Gasny" },
          { "@type": "City", name: "Chaignes" },
          { "@type": "City", name: "Rouen" },
          { "@type": "City", name: "Paris" },
          { "@type": "City", name: "Mantes-la-Jolie" },
          { "@type": "City", name: "Villejuif" },
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        priceRange: "€€",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "127",
          bestRating: "5",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services TACO TAXI",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taxi conventionné CPAM" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert gare Vernon-Giverny" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert aéroport Roissy CDG" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport médical Paris" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taxi longue distance" } },
          ],
        },
        sameAs: [],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
