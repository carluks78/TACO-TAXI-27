import React from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Star, Train, Building2, Plane, Heart } from "lucide-react";
import {
  PHONE,
  PHONE_LINK,
  EMAIL,
  COMPANY_NAME,
  ZONES,
  SERVICES,
  AIRPORTS,
  GARES,
  HOPITAUX,
  WHATSAPP_NUMBER,
} from "@/lib/seoData";

const TEAL = "#3AB4B1";
const GOLD = "#D4AF37";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── All cities for the SEO keywords band ────────────────────────
const ALL_CITIES_SEO = [
  // Communes proches
  { slug: "taxi-menilles", name: "Ménilles" },
  { slug: "taxi-breuilpont", name: "Breuilpont" },
  { slug: "taxi-saint-marcel", name: "Saint-Marcel" },
  { slug: "taxi-douains", name: "Douains" },
  { slug: "taxi-croisy-sur-eure", name: "Croisy-sur-Eure" },
  { slug: "taxi-la-chapelle-longueville", name: "La Chapelle-Longueville" },
  { slug: "taxi-hardencourt-cocherel", name: "Hardencourt-Cocherel" },
  { slug: "taxi-houlbec-cocherel", name: "Houlbec-Cocherel" },
  { slug: "taxi-aigleville", name: "Aigleville" },
  { slug: "taxi-fains", name: "Fains" },
  { slug: "taxi-fontaine-sous-jouy", name: "Fontaine-sous-Jouy" },
  { slug: "taxi-garennes-sur-eure", name: "Garennes-sur-Eure" },
  { slug: "taxi-ailly", name: "Ailly" },
  { slug: "taxi-prey", name: "Prey" },
  // 10-15 km
  { slug: "taxi-vernon", name: "Vernon" },
  { slug: "taxi-bueil", name: "Bueil" },
  { slug: "taxi-jouy-sur-eure", name: "Jouy-sur-Eure" },
  { slug: "taxi-gasny", name: "Gasny" },
  { slug: "taxi-ecos", name: "Écos" },
  { slug: "taxi-port-mort", name: "Port-Mort" },
  { slug: "taxi-saint-pierre-la-garenne", name: "Saint-Pierre-la-Garenne" },
  { slug: "taxi-authevernes", name: "Authevernes" },
  // 15-20 km
  { slug: "taxi-gaillon", name: "Gaillon" },
  { slug: "taxi-les-andelys", name: "Les Andelys" },
  { slug: "taxi-louviers", name: "Louviers" },
  { slug: "taxi-bonnieres-sur-seine", name: "Bonnières-sur-Seine" },
  { slug: "taxi-evreux", name: "Évreux" },
  { slug: "taxi-giverny", name: "Giverny" },
  // Grandes villes
  { slug: "taxi-rouen", name: "Rouen" },
  { slug: "taxi-paris", name: "Paris" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0B0B0B", color: "rgba(255,255,255,0.75)" }}>

      {/* ══ CTA Band ══ */}
      <div style={{ background: GOLD }} className="py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3
              style={{ fontFamily: "var(--font-heading)", color: "#0B0B0B" }}
              className="text-xl font-bold"
            >
              Taxi Chaignes dessert Pacy-sur-Eure &amp; la Vallée de l'Eure
            </h3>
            <p
              style={{ fontFamily: "var(--font-body)", color: "rgba(11,11,11,0.75)" }}
              className="text-sm"
            >
              Disponible 24h/24, 7j/7 — Réservation immédiate par téléphone ou WhatsApp
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_LINK}
              style={{ fontFamily: "var(--font-body)", background: "#0B0B0B" }}
              className="text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour TACO TAXI, je souhaite réserver un taxi. ")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)" }}
              className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#20B358] transition-colors inline-flex items-center gap-2"
            >
              {WA_ICON}
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══ Main Footer ══ */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

          {/* ── Info Company ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Teal accent bar */}
            <div className="w-10 h-1 rounded-full mb-4" style={{ background: TEAL }} />
            <h4
              style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }}
              className="text-lg font-bold mb-2"
            >
              {COMPANY_NAME}
            </h4>
            <p
              style={{ fontFamily: "var(--font-body)", color: TEAL }}
              className="text-xs font-semibold mb-3"
            >
              Taxi Chaignes dessert Pacy-sur-Eure
            </p>
            <p
              style={{ fontFamily: "var(--font-body)" }}
              className="text-sm leading-relaxed mb-4 text-white/60"
            >
              Service de taxi professionnel basé à Chaignes (Eure 27120). Transport
              conventionné CPAM, gares SNCF, aéroports. Disponible 24h/24 dans
              toute la Vallée de l'Eure et Normandie.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={PHONE_LINK}
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                <span className="text-white/80">{PHONE}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                <span className="text-white/80">{EMAIL}</span>
              </a>
              <p style={{ fontFamily: "var(--font-body)" }} className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                Chaignes — Pacy-sur-Eure, Eure (27)
              </p>
              <p style={{ fontFamily: "var(--font-body)" }} className="flex items-center gap-2 text-white/60">
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                Disponible 24h/24, 7j/7
              </p>
            </div>
            {/* Stars */}
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5" style={{ fill: GOLD, color: GOLD }} />
              ))}
              <span style={{ fontFamily: "var(--font-body)", color: GOLD }} className="ml-1 text-xs font-semibold">
                5/5 Google
              </span>
            </div>
          </div>

          {/* ── Services ── */}
          <div>
            <div className="w-8 h-1 rounded-full mb-4" style={{ background: TEAL }} />
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3">
              Nos Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: TEAL }} className="opacity-70">›</span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Airports */}
            <div className="w-8 h-1 rounded-full mt-6 mb-4" style={{ background: GOLD }} />
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3 flex items-center gap-2">
              <Plane className="w-3.5 h-3.5" style={{ color: GOLD }} />
              Aéroports
            </h4>
            <ul className="space-y-2">
              {AIRPORTS.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/${a.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: GOLD }} className="opacity-70">›</span>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Zones proches ── */}
          <div>
            <div className="w-8 h-1 rounded-full mb-4" style={{ background: TEAL }} />
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3">
              Zones Desservies
            </h4>
            <ul className="space-y-1.5">
              {ZONES.slice(0, 16).map((z) => (
                <li key={z.slug}>
                  <Link
                    to={`/${z.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: TEAL }} className="opacity-70">›</span>
                    Taxi {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Zones longues ── */}
          <div>
            <div className="w-8 h-1 rounded-full mb-4" style={{ background: TEAL }} />
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3">
              Plus de zones
            </h4>
            <ul className="space-y-1.5">
              {ZONES.slice(16).map((z) => (
                <li key={z.slug}>
                  <Link
                    to={`/${z.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: TEAL }} className="opacity-70">›</span>
                    Taxi {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Gares & Hôpitaux ── */}
          <div>
            <div className="w-8 h-1 rounded-full mb-4" style={{ background: TEAL }} />
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3 flex items-center gap-2">
              <Train className="w-3.5 h-3.5" style={{ color: TEAL }} />
              Gares SNCF
            </h4>
            <ul className="space-y-1.5 mb-5">
              {GARES.map((g) => (
                <li key={g.slug}>
                  <Link
                    to={`/${g.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: TEAL }} className="opacity-70">›</span>
                    {g.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="w-8 h-1 rounded-full mb-4" style={{ background: GOLD }} />
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5" style={{ color: GOLD }} />
              Hôpitaux
            </h4>
            <ul className="space-y-1.5 mb-5">
              {HOPITAUX.map((h) => (
                <li key={h.slug}>
                  <Link
                    to={`/${h.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: GOLD }} className="opacity-70">›</span>
                    {h.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 style={{ fontFamily: "var(--font-heading)", color: "#FFFFFF" }} className="text-base font-bold mb-3">
              Pages
            </h4>
            <ul className="space-y-1.5">
              {[
                { to: "/", label: "Accueil" },
                { to: "/contact", label: "Nous contacter" },
                { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi CPAM" },
              ].map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span style={{ color: TEAL }} className="opacity-70">›</span>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ══ SEO Keywords Band — All Cities ══ */}
        <div
          className="rounded-xl px-4 py-5 mb-8"
          style={{ background: "#141414", border: "1px solid rgba(58,180,177,0.15)" }}
        >
          <h5
            style={{ fontFamily: "var(--font-body)", color: TEAL }}
            className="text-xs font-bold uppercase tracking-widest mb-3"
          >
            <Heart className="w-3 h-3 inline mr-1.5" style={{ fill: TEAL }} />
            Taxi Chaignes dessert Pacy-sur-Eure — Zones et villes desservies
          </h5>
          <div className="flex flex-wrap gap-x-1 gap-y-1.5">
            {ALL_CITIES_SEO.map((city, i) => (
              <React.Fragment key={city.slug}>
                <Link
                  to={`/${city.slug}`}
                  style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)" }}
                  className="text-xs hover:text-white transition-colors"
                >
                  Taxi {city.name}
                </Link>
                {i < ALL_CITIES_SEO.length - 1 && (
                  <span className="text-xs" style={{ color: "rgba(58,180,177,0.3)" }}>·</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-xs text-white/30 mt-3 leading-relaxed"
          >
            TACO TAXI — Taxi Chaignes (27120) dessert Pacy-sur-Eure, Ménilles, Breuilpont, Vernon, Giverny, Évreux, Gaillon, Les Andelys, Louviers, Bonnières-sur-Seine, Rouen, Paris et toute la Vallée de l'Eure (Normandie). Transport médical conventionné CPAM · Navettes Roissy CDG · Orly · Gare Vernon-Giverny · Évreux-Normandie · Mantes-la-Jolie · Disponible 24h/24 7j/7 · Taxi conventionné Sécurité Sociale · ☎ {PHONE}
          </p>
        </div>

        {/* ══ Bottom Bar ══ */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 items-center text-white/40">
            <p style={{ fontFamily: "var(--font-body)" }}>
              © {new Date().getFullYear()} {COMPANY_NAME}
            </p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p style={{ fontFamily: "var(--font-body)" }}>
              <span style={{ color: TEAL }}>Taxi Chaignes</span> dessert Pacy-sur-Eure · Vallée de l'Eure · Normandie
            </p>
            <span className="hidden sm:inline text-white/20">•</span>
            <p style={{ fontFamily: "var(--font-body)" }}>Tous droits réservés.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3" style={{ fill: GOLD, color: GOLD }} />
              ))}
            </div>
            <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
              Noté 5/5 · 127+ avis Google
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
