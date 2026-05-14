import React from "react";
import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;
  noIndex?: boolean;
}

const SITE_URL = "https://www.tacotaxi27.fr";
const DEFAULT_OG_IMAGE = "https://www.tacotaxi27.fr/taco-taxi-pacy-sur-eure-og.jpg";
const PHONE = "06 67 96 23 96";
const PHONE_E164 = "+33667962396";
const LAT = "49.0170";
const LNG = "1.3910";

export default function PageSEO({
  title,
  description,
  keywords = "taxi Pacy-sur-Eure, TACO TAXI, taxi Eure, transport médical CPAM, taxi conventionné, taxi Vernon, taxi Évreux, taxi Giverny",
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
  noIndex = false,
}: PageSEOProps) {
  const fullTitle = title.includes("TACO TAXI") ? title : `${title} | TACO TAXI Pacy-sur-Eure`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "TACO TAXI",
    alternateName: "TACO TAXI Pacy-sur-Eure",
    description: "Service de taxi professionnel à Pacy-sur-Eure (Eure 27120). Transport médical conventionné CPAM, transferts gares SNCF et aéroports, longue distance. Disponible 24h/24 7j/7.",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: "tacotaxi27@gmail.com",
    priceRange: "€€",
    image: DEFAULT_OG_IMAGE,
    logo: DEFAULT_OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pacy-sur-Eure",
      addressLocality: "Pacy-sur-Eure",
      postalCode: "27120",
      addressRegion: "Normandie",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LAT,
      longitude: LNG,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Pacy-sur-Eure" },
      { "@type": "City", name: "Vernon" },
      { "@type": "City", name: "Évreux" },
      { "@type": "City", name: "Giverny" },
      { "@type": "City", name: "Rouen" },
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Vallée de l'Eure" },
      { "@type": "AdministrativeArea", name: "Eure (27)" },
      { "@type": "AdministrativeArea", name: "Normandie" },
    ],
    hasMap: "https://g.page/r/CQDMv_pAsXR0EAE/review",
    sameAs: [
      "https://g.page/r/CQDMv_pAsXR0EAE/review",
    ],
    "aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "6",
  "bestRating": "5",
  "worstRating": "1"
},
    ...schema,
  };

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ── Language / Locale ── */}
      <html lang="fr" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="FR-27" />
      <meta name="geo.placename" content="Pacy-sur-Eure" />
      <meta name="geo.position" content={`${LAT};${LNG}`} />
      <meta name="ICBM" content={`${LAT}, ${LNG}`} />

      {/* ── Open Graph ── */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="TACO TAXI Pacy-sur-Eure" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── Business / Contact ── */}
      <meta name="author" content="TACO TAXI Pacy-sur-Eure" />
      <meta name="contact" content={PHONE} />

      {/* ── Structured Data (LocalBusiness) ── */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
