import React from "react";
import { Link, useLocation } from "react-router";
import {
  Phone, Clock, Shield, Car, MapPin, CheckCircle2, Star,
  ArrowRight, ChevronRight, Train, Plane, Heart
} from "lucide-react";
import { PHONE, PHONE_LINK, ZONES } from "@/lib/seoData";
import { getZoneContent } from "@/lib/zoneContent";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import PageSEO from "../components/seo/PageSEO";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import TestimonialsSection from "../components/home/TestimonialsSection";

const GOOGLE_REVIEW_URL = "https://g.page/r/CQDMv_pAsXR0EAE/review";

const GStars = () => (
  <span className="inline-flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </span>
);

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" className="flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export default function ZonePage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const data = getZoneContent(slug);

  const namePlain = slug
    .replace(/^taxi-|^transfert-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const faqs = [
    {
      q: `Comment réserver un taxi pour ${namePlain} ?`,
      a: `Appelez TACO TAXI au ${PHONE} ou envoyez un message WhatsApp. Disponible 24h/24, 7j/7. Prise en charge à domicile depuis Pacy-sur-Eure et toute la vallée de l'Eure. Aucun frais de réservation.`,
    },
    {
      q: `Quel est le tarif d'un taxi Pacy-sur-Eure → ${namePlain} ?`,
      a: `Les courses locales sont au compteur homologué. Les longues distances ont un tarif fixe établi à l'avance. Appelez le ${PHONE} pour un devis gratuit immédiat. CB et espèces acceptés.`,
    },
    {
      q: `Le taxi pour ${namePlain} est-il disponible la nuit et le week-end ?`,
      a: `Oui, TACO TAXI est disponible 24h/24, 7j/7, nuits, week-ends et jours fériés compris. Aucun supplément de nuit caché. ${PHONE}.`,
    },
    {
      q: `Le taxi pour ${namePlain} est-il conventionné CPAM ?`,
      a: `Oui, TACO TAXI est agréé CPAM. Sur prescription médicale (formulaire S3138), vos trajets vers les hôpitaux sont remboursés par l'Assurance Maladie. Tiers payant disponible.`,
    },
    {
      q: `Peut-on réserver un aller-retour pour ${namePlain} avec attente ?`,
      a: `Absolument. Allers-retours avec attente sur place (consultations, visites, réunions). Prévenez-nous de la durée de votre rendez-vous lors de la réservation.`,
    },
    {
      q: `Depuis quelles communes desservez-vous ${namePlain} ?`,
      a: `Depuis Pacy-sur-Eure, Vernon, Évreux, Giverny, Ménilles, Breuilpont, Saint-Marcel, Douains, Jouy-sur-Eure, Bueil, Gasny, Croisy-sur-Eure, Garennes-sur-Eure et toutes les communes de la vallée de l'Eure dans un rayon de 20 km.`,
    },
    {
      q: `TACO TAXI dessert-il ${namePlain} pour les transferts aéroport ?`,
      a: `Oui. Depuis ${namePlain}, nous assurons les navettes vers Roissy CDG (tarif fixe), Orly et Beauvais. Suivi de vol en temps réel, départ possible dès 4h du matin, retour garanti après atterrissage.`,
    },
  ];

  return (
    <>
      <PageSEO
        title={data.metaTitle}
        description={data.metaDesc}
        keywords={data.metaKeywords}
        canonical={`/${slug}`}
        ogImage={data.image}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={data.image}
            alt={data.imageAlt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/50 text-xs mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Taxi {namePlain}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-3 py-1.5 mb-5">
            <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span style={{ fontFamily: "var(--font-body)" }} className="text-gold text-xs font-semibold">
              Zone desservie — {data.distance}
            </span>
          </div>

          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl"
          >
            {data.h1}
          </h1>

          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-white/85 text-base md:text-lg max-w-2xl mb-7 leading-relaxed"
          >
            {data.intro.slice(0, 240)}…
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={PHONE_LINK}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold text-sm sm:text-base px-6 py-3.5 rounded-full transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Réserver : {PHONE}
            </a>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-sm px-5 py-3.5 rounded-full transition-colors"
            >
              <GStars />
              <span>5/5 — Avis Google</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 sm:gap-5">
            {[
              { icon: Shield, text: "CPAM Agréé" },
              { icon: Clock, text: "24h/24 7j/7" },
              { icon: Star, text: "5/5 Google" },
              { icon: Car, text: "Tarif Fixe" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-white/70">
                <Icon className="w-4 h-4 text-gold" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-xs sm:text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gold py-4 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {[
            { value: "24h/24", label: "Disponibilité" },
            { value: "5 ⭐", label: "Note Google" },
            { value: "CPAM ✓", label: "Agréé Sécu" },
            { value: "Tarif Fixe", label: "Sans Surprise" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark text-base sm:text-lg">{value}</p>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-navy-dark/70 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Article column */}
          <article className="lg:col-span-2 space-y-10">

            {/* City photo */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-52 sm:h-64 object-cover"
              />
              <div className="bg-navy/5 border-t border-navy/10 px-4 py-2">
                <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-muted-foreground italic">
                  📍 {data.imageAlt}
                </p>
              </div>
            </div>

            {/* Full intro */}
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-xl sm:text-2xl font-bold text-navy-dark mb-3">
                {data.sections[0]?.title ?? `Taxi ${namePlain} — Service local 24h/24`}
              </h2>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {data.intro}
              </p>
            </div>

            {/* Content sections */}
            {data.sections.map((section, i) => (
              <div key={i}>
                <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-lg sm:text-xl font-bold text-navy-dark mb-3">
                  {section.title}
                </h2>
                <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {section.text}
                </p>
              </div>
            ))}

            {/* Services list */}
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-lg sm:text-xl font-bold text-navy-dark mb-4">
                Nos services de taxi pour {namePlain}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {data.servicesList.map((service) => (
                  <div key={service} className="flex items-start gap-2 bg-muted/50 rounded-lg p-3">
                    <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span style={{ fontFamily: "var(--font-body)" }} className="text-sm text-navy-dark">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why TACO TAXI */}
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-lg sm:text-xl font-bold text-navy-dark mb-4">
                Pourquoi choisir TACO TAXI pour {namePlain} ?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "24h/24 — 7j/7", desc: `Nuits, week-ends, jours fériés : votre taxi ${namePlain} est toujours disponible.` },
                  { icon: Shield, title: "Conventionné CPAM", desc: "Transport sanitaire remboursé Assurance Maladie sur prescription médicale. Tiers payant." },
                  { icon: Car, title: "Véhicule Premium", desc: "Berline récente et climatisée, propre et confortable, coffre spacieux pour vos bagages." },
                  { icon: MapPin, title: "Connaissance Locale", desc: "Chauffeur connaissant parfaitement la vallée de l'Eure et les routes normandes." },
                  { icon: Star, title: "Noté 5/5 Google", desc: "127+ avis clients positifs. Réservez en confiance — satisfaction garantie." },
                  { icon: Phone, title: "Réponse Immédiate", desc: `Un appel : ${PHONE}. Confirmation en moins de 2 min. WhatsApp disponible.` },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3 bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-border">
                    <div className="w-8 h-8 bg-gold/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "var(--font-body)" }} className="font-semibold text-sm text-navy-dark mb-0.5">{title}</h3>
                      <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO keywords block */}
            <div className="bg-navy/5 border border-navy/10 rounded-xl p-4">
              <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-navy-dark">Recherches associées :</strong> {data.keywordsBlock}
              </p>
            </div>

            {/* Google Review CTA */}
            <div className="bg-navy rounded-2xl p-5 sm:p-7">
              <div className="flex items-center gap-3 mb-3">
                <GoogleG />
                <GStars />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-white text-sm font-semibold">5/5 — 127 avis</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-lg sm:text-xl font-bold text-white mb-2">
                Réservez votre taxi {namePlain} maintenant
              </h3>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-white/70 text-sm mb-4">
                Disponible 24h/24 — Réponse immédiate — Tarif transparent
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_LINK}
                  style={{ fontFamily: "var(--font-body)" }}
                  className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold text-sm px-6 py-3 rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler {PHONE}
                </a>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-body)" }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-navy-dark font-semibold text-sm px-5 py-3 rounded-full transition-colors"
                >
                  <GoogleG />
                  Laisser un avis
                </a>
              </div>
            </div>

            {/* Internal links text */}
            <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground text-sm leading-relaxed">
              Découvrez aussi :{" "}
              <Link to="/taxi-conventionne-cpam-pacy-sur-eure" className="text-gold hover:underline">taxi conventionné CPAM</Link>,{" "}
              <Link to="/transfert-aeroport-roissy" className="text-gold hover:underline">navette Roissy CDG</Link>,{" "}
              <Link to="/taxi-gare-vernon-giverny" className="text-gold hover:underline">taxi gare Vernon-Giverny</Link>,{" "}
              <Link to="/taxi-longue-distance-pacy-sur-eure" className="text-gold hover:underline">longue distance</Link> et{" "}
              <Link to="/contact" className="text-gold hover:underline">nous contacter</Link>.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact card */}
            <div className="bg-navy rounded-2xl p-5 sticky top-20">
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-white font-bold text-base mb-3">
                Réserver votre taxi
              </h3>
              <a
                href={PHONE_LINK}
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold text-sm px-4 py-3 rounded-full transition-colors mb-3 justify-center"
              >
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <div className="space-y-2 text-white/70 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                {[
                  { icon: Clock, text: "Disponible 24h/24 7j/7" },
                  { icon: Shield, text: "Taxi conventionné CPAM" },
                  { icon: Car, text: "Tarif fixe grandes distances" },
                  { icon: MapPin, text: "Pacy-sur-Eure – Vallée Eure" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick services */}
            <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark text-base mb-3">
                Services rapides
              </h3>
              <div className="space-y-2">
                {[
                  { to: "/taxi-gare-vernon-giverny", icon: Train, label: "Gare Vernon-Giverny" },
                  { to: "/transfert-aeroport-roissy", icon: Plane, label: "Aéroport Roissy CDG" },
                  { to: "/transfert-aeroport-orly", icon: Plane, label: "Aéroport Paris Orly" },
                  { to: "/taxi-conventionne-cpam-pacy-sur-eure", icon: Heart, label: "Transport CPAM" },
                  { to: "/taxi-hopital-evreux", icon: Heart, label: "Hôpital Évreux" },
                  { to: "/taxi-chu-rouen", icon: Heart, label: "CHU Rouen" },
                ].map(({ to, icon: Icon, label }) => (
                  <Link
                    key={to}
                    to={to}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="flex items-center gap-2 text-xs text-navy-dark hover:text-gold transition-colors py-1.5 border-b border-border/50 last:border-0"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    {label}
                    <ArrowRight className="w-3 h-3 ml-auto opacity-40" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Nearby zones */}
            <div className="bg-muted/40 rounded-2xl p-5">
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark text-base mb-3">
                Communes voisines
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {ZONES.filter((z) => z.slug !== slug).slice(0, 12).map((zone) => (
                  <Link
                    key={zone.slug}
                    to={`/${zone.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-xs bg-white border border-border hover:border-gold hover:text-gold text-navy-dark px-2.5 py-1 rounded-full transition-colors shadow-sm"
                  >
                    {zone.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={faqs} title={`FAQ — Taxi ${namePlain}`} />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-gare-vernon-giverny", label: "Gare Vernon-Giverny" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi CPAM" },
          { to: "/transfert-aeroport-roissy", label: "Aéroport CDG" },
          { to: "/taxi-hopital-evreux", label: "Hôpital Évreux" },
          { to: "/taxi-giverny", label: "Taxi Giverny" },
          { to: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}
