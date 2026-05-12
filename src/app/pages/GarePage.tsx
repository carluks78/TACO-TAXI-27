import React from "react";
import { Link, useLocation } from "react-router";
import { Phone, Clock, Shield, Car, Train, MapPin, CheckCircle2, Star } from "lucide-react";
import { PHONE, PHONE_LINK } from "@/lib/seoData";
import { IMGS } from "@/lib/zoneContent";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import PageSEO from "../components/seo/PageSEO";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import TestimonialsSection from "../components/home/TestimonialsSection";

interface GareInfo {
  h1: string;
  sub: string;
  city: string;
  intro: string;
  distance: string;
  lignes: string[];
  description: string;
  avantages: string[];
  conseil: string;
  nomGare: string;
}

const GARE_DATA: Record<string, GareInfo> = {
  "taxi-gare-vernon-giverny": {
    h1: "Taxi Gare de Vernon-Giverny",
    sub: "Transfert depuis Pacy-sur-Eure & Vallée de l'Eure",
    city: "Vernon-Giverny",
    distance: "10–12 km de Pacy-sur-Eure",
    lignes: [
      "Paris Saint-Lazare (ligne J) — 1h de trajet",
      "Rouen / Le Havre (axe Normandie)",
      "Mantes-la-Jolie, Épône-Mézières",
    ],
    intro: `La gare de Vernon-Giverny est la gare SNCF principale la plus proche de Pacy-sur-Eure, à seulement 10–12 km. Elle dessert directement Paris Saint-Lazare en 1 heure et offre des connexions vers Rouen et Le Havre. TACO TAXI assure vos transferts vers cette gare 24h/24, 7j/7, pour ne jamais rater votre train.`,
    description: `Que vous partiez tôt le matin ou que vous arriviez tard le soir, TACO TAXI est votre partenaire de confiance pour tous vos trajets entre Pacy-sur-Eure et la gare de Vernon-Giverny. Chauffeur ponctuel, véhicule confortable et climatisé, tarifs transparents au compteur homologué. Idéal pour les travailleurs qui font la navette vers Paris Saint-Lazare, les touristes qui visitent les jardins de Monet à Giverny, et les voyageurs en direction de la Normandie. Réservez à l'avance ou appelez-nous directement pour une prise en charge immédiate.`,
    avantages: [
      "Prise en charge à domicile à Pacy-sur-Eure et alentours",
      "Suivi des horaires de train en temps réel",
      "Disponible dès 4h du matin pour les premiers trains",
      "Bagages nombreux acceptés",
      "Tarifs groupes et allers-retours",
      "Aucun supplément pour les horaires décalés",
    ],
    conseil: "Gare idéale pour rejoindre Paris Saint-Lazare en 1h — première gare SNCF proche de Pacy-sur-Eure.",
    nomGare: "Vernon-Giverny",
  },
  "taxi-gare-evreux-normandie": {
    h1: "Taxi Gare d'Évreux-Normandie",
    sub: "Transfert depuis Pacy-sur-Eure, Vernon et la Vallée de l'Eure",
    city: "Évreux-Normandie",
    distance: "30 km de Pacy-sur-Eure",
    lignes: [
      "Paris Saint-Lazare — 1h15 en direct",
      "Caen et la Normandie intérieure",
      "Rouen, Le Mans, Cherbourg",
    ],
    intro: `La gare d'Évreux-Normandie est un hub ferroviaire majeur de la région, avec des liaisons directes vers Paris Saint-Lazare, Caen et toute la Normandie. TACO TAXI vous conduit depuis Pacy-sur-Eure jusqu'à la gare d'Évreux en toute ponctualité, que vous partiez à l'aube ou arriviez à minuit.`,
    description: `Depuis Pacy-sur-Eure, la gare d'Évreux est accessible en 25–35 minutes en taxi selon le trafic. TACO TAXI propose un service de transfert professionnel, ponctuel et confortable. Très utilisée pour les trajets domicile–Paris Saint-Lazare, Pacy–Caen, ou les connexions vers l'intérieur de la Normandie. Notre taxi conventionné CPAM peut également vous conduire à Évreux pour vos rendez-vous médicaux à l'hôpital ou dans les cliniques de la ville. Prise en charge à domicile, assistance bagages, suivi des horaires en temps réel.`,
    avantages: [
      "Trajets vers Paris Saint-Lazare, Caen, Rouen depuis Évreux",
      "Taxi conventionné CPAM disponible pour l'hôpital d'Évreux",
      "Prise en charge depuis tout Pacy, Vernon, Breuilpont, Jouy-sur-Eure",
      "Retour gare → domicile disponible 24h/24",
      "WiFi à bord sur demande",
      "Véhicule spacieux pour familles et bagages volumineux",
    ],
    conseil: "Gare stratégique pour Paris et la Normandie — taxi conventionné CPAM disponible.",
    nomGare: "Évreux-Normandie",
  },
  "taxi-gare-bueil": {
    h1: "Taxi Gare de Bueil",
    sub: "Transfert SNCF — Ligne Paris Saint-Lazare",
    city: "Bueil",
    distance: "15 km de Pacy-sur-Eure",
    lignes: [
      "Paris Saint-Lazare (ligne J)",
      "Vernon, Mantes-la-Jolie",
      "Arrêt local pratique pour les habitants de Bueil",
    ],
    intro: `La gare de Bueil est une petite gare locale de la ligne J vers Paris Saint-Lazare, pratique pour les habitants de Bueil et des communes voisines comme Pacy-sur-Eure, Jouy-sur-Eure ou Breuilpont. TACO TAXI assure vos transferts vers cette gare avec ponctualité et professionnalisme.`,
    description: `Bien que plus petite que les gares de Vernon ou Évreux, la gare de Bueil offre des connexions régulières vers Paris Saint-Lazare. C'est une option pratique pour certains horaires ou certaines localités proches. TACO TAXI vous propose un trajet confortable depuis votre domicile jusqu'au quai, avec un chauffeur qui connaît parfaitement la vallée de l'Eure. Idéal pour éviter le stress des correspondances ou des voitures garées en gare.`,
    avantages: [
      "Gare locale pratique pour les habitants de Bueil et alentours",
      "Connexion directe ligne J vers Paris Saint-Lazare",
      "Trajet court depuis Pacy-sur-Eure (~15 min)",
      "Disponible tôt le matin et tard le soir",
      "Pas de problème de parking — déposé directement à la gare",
      "Retours domicile possibles à toute heure",
    ],
    conseil: "Gare locale pour certains horaires — TACO TAXI vous y conduit rapidement depuis Pacy.",
    nomGare: "Bueil",
  },
  "taxi-gare-breval": {
    h1: "Taxi Gare de Bréval",
    sub: "Transfert SNCF — Connexion Paris depuis les Yvelines",
    city: "Bréval",
    distance: "20–25 km de Pacy-sur-Eure",
    lignes: [
      "Paris Saint-Lazare (ligne J)",
      "Mantes-la-Jolie, Versailles",
      "Très utilisée pour les trajets domicile–Paris",
    ],
    intro: `La gare de Bréval est située côté Yvelines et représente une excellente option pour les trajets vers Paris Saint-Lazare, notamment pour les habitants de la vallée de l'Eure qui souhaitent prendre des trains plus fréquents ou plus rapides. TACO TAXI vous y conduit depuis Pacy-sur-Eure et toute la région.`,
    description: `La gare de Bréval bénéficie de nombreuses liaisons vers Paris Saint-Lazare via Mantes-la-Jolie. C'est une option très appréciée des travailleurs qui font la navette Paris-Normandie. TACO TAXI vous propose un transfert confortable depuis Pacy-sur-Eure (environ 25 minutes), Vernon, Giverny, ou toute la vallée de l'Eure. Service disponible 24h/24 pour les premiers et derniers trains. Tarifs compétitifs, paiement CB accepté.`,
    avantages: [
      "Nombreuses liaisons vers Paris Saint-Lazare",
      "Idéale pour les navetteurs Normandie–Paris",
      "Trajet depuis Pacy en ~25 minutes",
      "Prise en charge depuis toute la vallée de l'Eure",
      "Service disponible pour premier et dernier train",
      "Tarifs aller-retour disponibles",
    ],
    conseil: "Gare côté Yvelines avec liaisons fréquentes vers Paris — idéale pour les navetteurs.",
    nomGare: "Bréval",
  },
  "taxi-gare-mantes-la-jolie": {
    h1: "Taxi Gare de Mantes-la-Jolie",
    sub: "Hub SNCF stratégique — Paris & Grandes Lignes",
    city: "Mantes-la-Jolie",
    distance: "35–40 km de Pacy-sur-Eure",
    lignes: [
      "Paris Saint-Lazare — 40 min (TER rapide)",
      "Rouen, Caen, Le Havre (Grandes Lignes Normandie)",
      "Versailles, Pontoise, Cergy",
      "Correspondances TGV via Paris",
    ],
    intro: `La gare de Mantes-la-Jolie est une gare stratégique majeure pour les voyageurs de la vallée de l'Eure souhaitant rejoindre Paris rapidement ou prendre des grandes lignes Normandie. TACO TAXI assure des transferts premium depuis Pacy-sur-Eure vers Mantes-la-Jolie, 24h/24.`,
    description: `Avec ses nombreuses lignes et ses trains rapides vers Paris Saint-Lazare (40 minutes), la gare de Mantes-la-Jolie est particulièrement prisée pour les voyages professionnels et les correspondances vers les grandes destinations. Depuis Pacy-sur-Eure, comptez environ 40 minutes en taxi. TACO TAXI vous propose un service de transport de qualité, avec chauffeur professionnel, véhicule confortable et suivi des horaires SNCF. Réservez en avance pour les heures de pointe ou appelez-nous à tout moment.`,
    avantages: [
      "Paris Saint-Lazare en 40 min depuis Mantes — connexion rapide",
      "Grandes Lignes Normandie : Rouen, Caen, Le Havre",
      "Idéale pour les voyages professionnels avec correspondances",
      "Véhicule haut-de-gamme pour les déplacements pro",
      "Disponible de nuit pour les trains tardifs",
      "Service partagé possible pour groupes",
    ],
    conseil: "Gare stratégique pour Paris et Grandes Lignes — la plus connectée de la région.",
    nomGare: "Mantes-la-Jolie",
  },
};

function getGareData(slug: string): GareInfo {
  return (
    GARE_DATA[slug] || {
      h1: `Taxi Gare SNCF`,
      sub: "Transfert depuis Pacy-sur-Eure",
      city: "la gare",
      distance: "depuis Pacy-sur-Eure",
      lignes: ["Paris Saint-Lazare", "Normandie"],
      intro: `TACO TAXI assure vos transferts vers cette gare SNCF depuis Pacy-sur-Eure, 24h/24.`,
      description: `Service professionnel, ponctuel et confortable pour tous vos transferts gare.`,
      avantages: [
        "Prise en charge à domicile",
        "Disponible 24h/24",
        "Tarifs compétitifs",
        "Chauffeur professionnel",
      ],
      conseil: "Réservez à l'avance pour garantir votre place.",
      nomGare: "SNCF",
    }
  );
}

export default function GarePage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const data = getGareData(slug);

  const faqs = [
    {
      q: `Comment réserver un taxi pour la ${data.city} ?`,
      a: `Appelez TACO TAXI au ${PHONE} pour réserver votre transfert vers la gare ${data.city}. Disponible 24h/24, 7j/7. Prise en charge à domicile depuis Pacy-sur-Eure et toute la vallée de l'Eure.`,
    },
    {
      q: `Combien coûte un taxi Pacy-sur-Eure vers la gare ${data.city} ?`,
      a: `Le tarif est calculé au compteur homologué. Distance de ${data.distance}. Appelez le ${PHONE} pour un devis précis ou une réservation immédiate. Paiement CB et espèces acceptés.`,
    },
    {
      q: `Le taxi est-il disponible pour le premier train du matin ?`,
      a: `Absolument. TACO TAXI est disponible dès 4h du matin pour les premiers trains. Réservez la veille pour garantir votre place. Votre chauffeur sera ponctuel, quelle que soit l'heure.`,
    },
    {
      q: `Peut-on réserver un retour depuis la gare ${data.city} ?`,
      a: `Oui, nous assurons les retours depuis la gare vers votre domicile. Appelez en arrivant en gare ou réservez à l'avance. Service disponible 24h/24, même pour le dernier train.`,
    },
    {
      q: `Le taxi peut-il transporter des valises volumineuses ?`,
      a: `Oui, nos véhicules disposent d'un coffre spacieux pour vos valises et bagages. Pour les groupes ou volumes importants, prévenez-nous lors de la réservation.`,
    },
  ];

  const GOOGLE_REVIEW_URL = "https://g.page/r/CQDMv_pAsXR0EAE/review";

  const GoogleStars = () => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <>
      <PageSEO
        title={`Taxi ${data.nomGare} — TACO TAXI Pacy-sur-Eure 24h/24`}
        description={`Taxi ${data.nomGare} depuis Pacy-sur-Eure et vallée de l'Eure. ${data.distance}. Disponible 24h/24 7j/7. Transport CPAM. ☎ 06 67 96 23 96.`}
        keywords={`taxi ${data.nomGare}, transfert ${data.nomGare}, taxi gare ${data.city}, taxi ${data.city} SNCF, taxi Pacy ${data.city} gare`}
        canonical={`/${slug}`}
        ogImage={IMGS.train}
      />

      {/* Hero */}
      <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={IMGS.train} alt="Gare SNCF transfert taxi depuis Pacy-sur-Eure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Train className="w-4 h-4 text-gold" />
            <span style={{ fontFamily: "var(--font-body)" }} className="text-gold text-xs font-semibold">
              TACO TAXI — Transfert Gare SNCF depuis Pacy-sur-Eure
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            {data.h1}
            <span className="text-gold block mt-1 text-2xl md:text-3xl">{data.sub}</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)" }} className="text-white/80 text-lg max-w-3xl mb-4">
            {data.intro}
          </p>
          <div className="flex items-center gap-2 text-white/60 mb-8">
            <MapPin className="w-4 h-4 text-gold" />
            <span style={{ fontFamily: "var(--font-body)" }} className="text-sm">{data.distance}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href={PHONE_LINK} style={{ fontFamily: "var(--font-body)" }} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors">
              <Phone className="w-5 h-5" />Réserver : {PHONE}
            </a>
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)" }} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-4 rounded-full transition-colors">
              <GoogleStars /><span className="text-sm">5/5 Google</span>
            </a>
          </div>
          <div className="flex flex-wrap gap-4">
            {[{ icon: Shield, text: "CPAM Agréé" }, { icon: Clock, text: "24h/24 7j/7" }, { icon: Star, text: "5/5 Clients" }, { icon: Car, text: "Tarif Fixe" }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-white/70">
                <Icon className="w-4 h-4 text-gold" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gold py-4 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{ value: "24h/24", label: "Disponibilité" }, { value: "5⭐", label: "Avis Google" }, { value: "CPAM", label: "Agréé Sécu" }, { value: "Tarif Fixe", label: "Sans Surprise" }].map(({ value, label }) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark text-lg">{value}</p>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-navy-dark/70 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lignes desservies */}
      <section className="py-12 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-xl font-bold mb-4 text-navy-dark"
          >
            🚆 Lignes SNCF depuis la gare {data.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.lignes.map((ligne) => (
              <div key={ligne} className="flex items-start gap-2 bg-white rounded-lg p-3 shadow-sm">
                <Train className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-sm text-navy-dark">
                  {ligne}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto">
        <article>
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold mb-4 text-navy-dark"
          >
            Votre taxi pour la gare {data.city} — Ponctualité garantie
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            {data.description}
          </p>

          {/* Conseil SEO */}
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 mb-8">
            <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-navy-dark">
              💡 <strong>Bon à savoir :</strong> {data.conseil}
            </p>
          </div>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold mb-4 text-navy-dark"
          >
            Pourquoi choisir TACO TAXI pour la gare {data.city} ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {data.avantages.map((av) => (
              <div key={av} className="flex items-start gap-2 bg-muted/50 rounded-lg p-3">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-sm text-navy-dark">
                  {av}
                </span>
              </div>
            ))}
          </div>

          {/* Trust grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Clock, title: "24h/24 — 7j/7", desc: "Disponible pour tous les trains, du premier au dernier" },
              { icon: Shield, title: "CPAM Agréé", desc: "Transport médical conventionné pour vos soins" },
              { icon: Car, title: "Véhicule premium", desc: "Berline confortable, climatisée, coffre spacieux" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3 bg-navy/5 rounded-xl p-4">
                <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 style={{ fontFamily: "var(--font-body)" }} className="font-semibold text-sm text-navy-dark">
                    {title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: "var(--font-body)" }} className="text-muted-foreground leading-relaxed mb-4">
            Découvrez aussi nos autres services :{" "}
            <Link to="/transfert-aeroport-roissy" className="text-gold hover:underline">
              transfert aéroport Roissy CDG
            </Link>
            ,{" "}
            <Link to="/taxi-conventionne-cpam-pacy-sur-eure" className="text-gold hover:underline">
              taxi conventionné CPAM
            </Link>
            ,{" "}
            <Link to="/taxi-longue-distance-pacy-sur-eure" className="text-gold hover:underline">
              taxi longue distance
            </Link>{" "}
            vers Paris, Rouen, Caen.
          </p>
        </article>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={faqs} title={`FAQ — ${data.h1}`} />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-gare-vernon", label: "Taxi Gare Vernon" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/transfert-aeroport-roissy", label: "Aéroport Roissy CDG" },
          { to: "/contact", label: "Nous Contacter" },
        ]}
      />
    </>
  );
}