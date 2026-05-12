import React from "react";
import { Link, useLocation } from "react-router";
import { Phone, Clock, Shield, Car, MapPin, CheckCircle2, Heart, AlertCircle, Star } from "lucide-react";
import { PHONE, PHONE_LINK } from "@/lib/seoData";
import { IMGS } from "@/lib/zoneContent";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import TestimonialsSection from "../components/home/TestimonialsSection";

interface HopitalInfo {
  h1: string;
  sub: string;
  name: string;
  ville: string;
  distance: string;
  adresse: string;
  specialites: string[];
  intro: string;
  description: string;
  cpam: boolean;
  avantages: string[];
  requetes: string[];
}

const HOPITAL_DATA: Record<string, HopitalInfo> = {
  "taxi-hopital-evreux": {
    h1: "Taxi Centre Hospitalier d'Évreux",
    sub: "Transport médical conventionné CPAM — Pacy-sur-Eure vers Évreux",
    name: "Centre Hospitalier d'Évreux",
    ville: "Évreux",
    adresse: "2 Rue Léon Schwartzenberg, 27000 Évreux",
    distance: "30 km de Pacy-sur-Eure (environ 30 min)",
    specialites: [
      "Urgences 24h/24",
      "Cardiologie, Neurologie",
      "Chimiothérapie, Dialyse",
      "Maternité, Pédiatrie",
      "Radiologie, Scanner, IRM",
      "Consultations spécialisées",
    ],
    intro: `Le Centre Hospitalier d'Évreux est l'hôpital de référence de l'Eure. TACO TAXI assure vos transferts médicaux conventionnés CPAM depuis Pacy-sur-Eure et toute la vallée de l'Eure vers l'hôpital d'Évreux. Prise en charge directe Sécurité Sociale pour les patients avec prescription médicale.`,
    description: `À 30 km de Pacy-sur-Eure, le CH d'Évreux est le premier hôpital de référence pour les habitants de la vallée de l'Eure. TACO TAXI est votre partenaire de confiance pour tous vos rendez-vous médicaux, séances de chimiothérapie, dialyse, consultations spécialisées ou hospitalisations. Notre taxi conventionné CPAM vous permet d'être pris en charge par la Sécurité Sociale sur prescription de votre médecin. Le tiers payant est géré directement — vous n'avancez aucun frais.`,
    cpam: true,
    avantages: [
      "Taxi conventionné CPAM — tiers payant direct, sans avance de frais",
      "Prise en charge à domicile depuis Pacy et toute la vallée",
      "Disponible pour dialyse, chimiothérapie, rééducation",
      "Attente sur place si nécessaire (consultations)",
      "Retour domicile après hospitalisation",
      "Chauffeur attentionné, conduite douce pour les patients fragilisés",
    ],
    requetes: [
      "Taxi conventionné Pacy-sur-Eure vers hôpital Évreux",
      "Transport CPAM Pacy vers CH Évreux",
      "Taxi médical Évreux depuis vallée de l'Eure",
    ],
  },
  "taxi-chu-rouen": {
    h1: "Taxi CHU de Rouen — Hôpital Charles-Nicolle",
    sub: "Transport médical CPAM — Pacy-sur-Eure vers Rouen",
    name: "CHU de Rouen (Hôpital Charles-Nicolle)",
    ville: "Rouen",
    adresse: "1 Rue de Germont, 76000 Rouen",
    distance: "65 km de Pacy-sur-Eure (environ 55 min)",
    specialites: [
      "Cancérologie, Oncologie",
      "Cardiologie interventionnelle",
      "Neurochirurgie, Neurologie",
      "Hépatologie, Gastro-entérologie",
      "Urgences générales et spécialisées",
      "Transplantations, Chirurgie complexe",
    ],
    intro: `Le CHU de Rouen est le plus grand centre hospitalier de Normandie, référence pour les soins complexes, la cancérologie et la chirurgie spécialisée. TACO TAXI assure vos transferts médicaux conventionnés CPAM depuis Pacy-sur-Eure vers le CHU Rouen, avec taxi conventionné pour les patients bénéficiant d'une prescription médicale de transport.`,
    description: `Situé à environ 65 km de Pacy-sur-Eure, le CHU de Rouen accueille des patients de toute la Normandie pour des soins hautement spécialisés. Les habitants de Pacy-sur-Eure, Vernon, Évreux et la vallée de l'Eure y viennent régulièrement pour des séances de chimiothérapie, dialyse, consultations d'oncologie ou hospitalisations. TACO TAXI est votre taxi conventionné CPAM de référence pour ces trajets. Avec une prescription médicale, votre transport est pris en charge par l'Assurance Maladie. Chauffeur expérimenté, véhicule confortable, ponctualité assurée.`,
    cpam: true,
    avantages: [
      "Taxi conventionné CPAM — prise en charge Assurance Maladie",
      "Expérience des trajets longs pour patients fragilisés",
      "Conduite douce, climatisation, confort optimal",
      "Ponctualité pour les horaires de chimiothérapie et dialyse",
      "Attente sur place si nécessaire",
      "Retour à domicile assuré après traitement",
    ],
    requetes: [
      "Taxi conventionné Pacy-sur-Eure vers CHU Rouen",
      "Transport CPAM Pacy vers hôpital Rouen",
      "Taxi médical vallée de l'Eure vers CHU Rouen",
    ],
  },
  "taxi-hopital-georges-pompidou": {
    h1: "Taxi Hôpital Européen Georges-Pompidou (Paris)",
    sub: "Transport médical CPAM — Pacy-sur-Eure vers Paris 15e",
    name: "Hôpital Européen Georges-Pompidou",
    ville: "Paris 15e",
    adresse: "20 Rue Leblanc, 75015 Paris",
    distance: "90 km de Pacy-sur-Eure (environ 1h15–1h45 selon trafic)",
    specialites: [
      "Cardiologie & Chirurgie cardiaque",
      "Oncologie, Cancérologie",
      "Radiologie interventionnelle",
      "Chirurgie vasculaire",
      "Gynécologie-Obstétrique",
      "Hématologie",
    ],
    intro: `L'Hôpital Européen Georges-Pompidou (HEGP) est l'un des hôpitaux les plus modernes de Paris, spécialisé notamment en cardiologie et en cancérologie. TACO TAXI assure vos transferts médicaux conventionnés CPAM depuis Pacy-sur-Eure et toute la vallée de l'Eure vers l'HEGP à Paris 15e.`,
    description: `Les patients de Pacy-sur-Eure et de la vallée de l'Eure se rendent régulièrement à l'Hôpital Européen Georges-Pompidou pour des consultations spécialisées ou des traitements de pointe en cardiologie, oncologie et chirurgie. TACO TAXI vous propose un taxi médical conventionné CPAM, avec prise en charge de l'Assurance Maladie sur prescription médicale. Votre chauffeur est habitué aux trajets longue distance vers Paris, connaît les accès aux urgences et aux entrées hospitalières. Partez l'esprit tranquille, nous gérons tout.`,
    cpam: true,
    avantages: [
      "Taxi médical Paris conventionné CPAM depuis Pacy-sur-Eure",
      "Trajets longue distance confortables vers Paris 15e",
      "Chauffeur connaissant les accès à l'HEGP",
      "Véhicule climatisé, conduite douce pour patients fragilisés",
      "Départ à l'heure convenue, ponctualité garantie",
      "Retour domicile après consultation ou hospitalisation",
    ],
    requetes: [
      "Taxi médical Pacy-sur-Eure vers Hôpital Pompidou Paris",
      "Transport CPAM Pacy vers HEGP Paris 15e",
      "Taxi conventionné vallée de l'Eure vers Paris",
    ],
  },
  "taxi-hopital-necker": {
    h1: "Taxi Hôpital Necker-Enfants Malades (Paris)",
    sub: "Transport médical CPAM — Pacy-sur-Eure vers Paris 15e",
    name: "Hôpital Necker-Enfants Malades",
    ville: "Paris 15e",
    adresse: "149 Rue de Sèvres, 75015 Paris",
    distance: "95 km de Pacy-sur-Eure (environ 1h20–1h50 selon trafic)",
    specialites: [
      "Pédiatrie et maladies rares de l'enfant",
      "Néphro-urologie pédiatrique",
      "Chirurgie cardiaque pédiatrique",
      "Immunologie et greffes",
      "Neurochirurgie pédiatrique",
      "Maladies métaboliques",
    ],
    intro: `L'hôpital Necker-Enfants Malades est la référence nationale pour les maladies rares et la pédiatrie. Des familles de toute la Normandie et de la vallée de l'Eure s'y rendent pour des soins spécialisés. TACO TAXI assure votre transport conventionné CPAM depuis Pacy-sur-Eure vers Necker, avec une attention particulière pour les familles avec enfants malades.`,
    description: `Quand votre enfant nécessite des soins spécialisés à l'hôpital Necker, le trajet depuis Pacy-sur-Eure peut sembler stressant. TACO TAXI est là pour simplifier ce voyage. Nous assurons un transport médical conventionné CPAM confortable et ponctuel. Notre chauffeur est sensibilisé aux besoins des familles en situation difficile. Le véhicule est propre, climatisé, et adapté aux déplacements avec enfants et équipements médicaux. Sur prescription médicale, le transport est pris en charge par l'Assurance Maladie.`,
    cpam: true,
    avantages: [
      "Transport adapté aux familles avec enfants malades",
      "Taxi conventionné CPAM — tiers payant Assurance Maladie",
      "Chauffeur bienveillant et patient",
      "Véhicule propre, climatisé, adaptable",
      "Ponctualité pour les rendez-vous à heure fixe",
      "Service de retour disponible 24h/24",
    ],
    requetes: [
      "Taxi médical Pacy-sur-Eure vers Necker Paris",
      "Transport CPAM Pacy vers Hôpital Necker enfants",
      "Taxi conventionné vallée de l'Eure vers Paris 15e",
    ],
  },
  "taxi-hopital-cochin": {
    h1: "Taxi Hôpital Cochin (Paris)",
    sub: "Transport médical CPAM — Pacy-sur-Eure vers Paris 14e",
    name: "Hôpital Cochin",
    ville: "Paris 14e",
    adresse: "27 Rue du Faubourg Saint-Jacques, 75014 Paris",
    distance: "95 km de Pacy-sur-Eure (environ 1h20–1h50 selon trafic)",
    specialites: [
      "Gynécologie-Obstétrique, Maternité",
      "Endocrinologie, Diabétologie",
      "Rhumatologie",
      "Gastro-entérologie, Hépatologie",
      "Pneumologie",
      "Médecine interne et maladies rares",
    ],
    intro: `L'hôpital Cochin est une référence parisienne en gynécologie, endocrinologie et maladies rares. TACO TAXI assure vos transferts médicaux conventionnés CPAM depuis Pacy-sur-Eure et toute la vallée de l'Eure vers l'hôpital Cochin à Paris 14e.`,
    description: `Reconnu pour son excellence en gynécologie-obstétrique, endocrinologie et gastro-entérologie, l'hôpital Cochin attire des patients de toute la Normandie. TACO TAXI vous propose un taxi médical conventionné CPAM depuis Pacy-sur-Eure, avec prise en charge par l'Assurance Maladie sur prescription médicale. Trajet d'environ 1h30 depuis Pacy, dans un véhicule confortable. Notre chauffeur connaît les accès à l'hôpital Cochin et vous dépose directement au bon bâtiment.`,
    cpam: true,
    avantages: [
      "Taxi conventionné CPAM vers Paris 14e",
      "Connaissance des accès à l'hôpital Cochin",
      "Trajet confortable ~1h30 depuis Pacy-sur-Eure",
      "Disponible tôt le matin pour les consultations à 8h",
      "Attente sur place si besoin",
      "Retour domicile garanti après consultation",
    ],
    requetes: [
      "Taxi médical Pacy-sur-Eure vers Hôpital Cochin Paris",
      "Transport CPAM Pacy vers Cochin Paris 14e",
      "Taxi conventionné Normandie vers Hôpital Cochin",
    ],
  },
  "taxi-institut-gustave-roussy": {
    h1: "Taxi Institut Gustave-Roussy (Villejuif)",
    sub: "Transport médical CPAM — Pacy-sur-Eure vers Villejuif",
    name: "Institut Gustave-Roussy",
    ville: "Villejuif (Val-de-Marne)",
    adresse: "114 Rue Édouard Vaillant, 94805 Villejuif",
    distance: "100 km de Pacy-sur-Eure (environ 1h20–1h50)",
    specialites: [
      "Oncologie — 1er centre anti-cancer d'Europe",
      "Cancérologie toutes spécialités",
      "Radiothérapie, Chimiothérapie",
      "Immunothérapie, Thérapies ciblées",
      "Essais cliniques innovants",
      "Chirurgie oncologique",
    ],
    intro: `L'Institut Gustave-Roussy à Villejuif est le premier centre de lutte contre le cancer en Europe. Les patients de Pacy-sur-Eure et de toute la vallée de l'Eure s'y rendent pour des traitements oncologiques de pointe. TACO TAXI assure vos trajets médicaux conventionnés CPAM vers Gustave-Roussy, avec douceur, ponctualité et respect.`,
    description: `Chaque semaine, des patients de Pacy-sur-Eure, Vernon, Évreux et la vallée de l'Eure se rendent à l'Institut Gustave-Roussy pour des séances de chimiothérapie, radiothérapie, immunothérapie ou consultations d'oncologie. Ces trajets répétés peuvent être épuisants. TACO TAXI est votre taxi médical conventionné CPAM de confiance : conduite douce, chauffeur attentif, véhicule confortable et climatisé. Sur prescription médicale, votre transport est intégralement pris en charge par l'Assurance Maladie. Nous nous adaptons à vos horaires et vous récupérons après votre séance.`,
    cpam: true,
    avantages: [
      "Spécialisé dans les trajets répétés vers Gustave-Roussy",
      "Taxi conventionné CPAM — Assurance Maladie, tiers payant",
      "Conduite douce et respectueuse pour patients en traitement",
      "Connaissance de l'IGR et de ses accès",
      "Disponible pour chimiothérapie, radio, consultations",
      "Adaptation aux imprévus médicaux (retards de traitement)",
    ],
    requetes: [
      "Taxi CPAM Pacy-sur-Eure vers Gustave-Roussy Villejuif",
      "Transport médical Pacy vers Institut Gustave-Roussy",
      "Taxi conventionné vallée de l'Eure vers IGR Villejuif",
    ],
  },
  "taxi-hopital-vernon": {
    h1: "Taxi Hôpital de Vernon",
    sub: "Transport médical — Pacy-sur-Eure vers Vernon",
    name: "Centre Hospitalier de Vernon",
    ville: "Vernon",
    adresse: "Rue Jean Revel, 27200 Vernon",
    distance: "10–12 km de Pacy-sur-Eure",
    specialites: [
      "Médecine générale et spécialisée",
      "Chirurgie ambulatoire",
      "Maternité",
      "Urgences",
      "Rééducation fonctionnelle",
    ],
    intro: `Le Centre Hospitalier de Vernon est l'hôpital de proximité pour les habitants de Pacy-sur-Eure et de la vallée de l'Eure. TACO TAXI assure vos transferts vers l'hôpital de Vernon 24h/24, avec taxi conventionné CPAM pour les patients avec prescription médicale.`,
    description: `À seulement 10–12 km de Pacy-sur-Eure, l'hôpital de Vernon est le premier recours pour les soins médicaux locaux. TACO TAXI vous y conduit rapidement et confortablement, que ce soit pour des urgences, des consultations, des hospitalisations ou des retours à domicile. Notre service de taxi conventionné CPAM permet une prise en charge par l'Assurance Maladie sur prescription médicale.`,
    cpam: true,
    avantages: [
      "Proximité — 10–12 km de Pacy-sur-Eure",
      "Taxi conventionné CPAM disponible",
      "Disponible 24h/24 pour les urgences",
      "Retour domicile après hospitalisation",
      "Tarif très compétitif pour ce court trajet",
      "Chauffeur connaissant parfaitement les accès à l'hôpital",
    ],
    requetes: [
      "Taxi Pacy-sur-Eure vers hôpital Vernon",
      "Transport CPAM Pacy vers hôpital Vernon",
      "Taxi médical Vernon depuis Pacy",
    ],
  },
};

function getHopitalData(slug: string): HopitalInfo {
  return (
    HOPITAL_DATA[slug] || {
      h1: "Taxi Transport Médical",
      sub: "Transport conventionné CPAM depuis Pacy-sur-Eure",
      name: "Hôpital",
      ville: "la destination",
      adresse: "",
      distance: "depuis Pacy-sur-Eure",
      specialites: [],
      intro: "TACO TAXI assure vos transferts médicaux conventionnés CPAM depuis Pacy-sur-Eure.",
      description: "Service de transport médical professionnel, ponctuel et confortable.",
      cpam: true,
      avantages: ["Taxi conventionné CPAM", "Disponible 24h/24", "Chauffeur attentionné"],
      requetes: [],
    }
  );
}

export default function HopitalPage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const data = getHopitalData(slug);

  const faqs = [
    {
      q: `Comment réserver un taxi médical pour ${data.name} ?`,
      a: `Appelez TACO TAXI au ${PHONE}. Notre taxi conventionné CPAM assure vos transferts vers ${data.name} avec prise en charge de l'Assurance Maladie sur prescription médicale. Disponible 24h/24.`,
    },
    {
      q: `Le transport vers ${data.name} est-il remboursé par la CPAM ?`,
      a: `Oui, si vous avez une prescription médicale de transport (formulaire S3138), notre taxi conventionné prend en charge directement avec l'Assurance Maladie. Vous n'avancez généralement aucun frais (tiers payant).`,
    },
    {
      q: `Peut-on réserver un aller-retour avec attente sur place ?`,
      a: `Absolument. Nous pouvons attendre pendant votre consultation si la durée est connue. Pour les longues hospitalisations, nous planifions le retour séparément. Contactez-nous au ${PHONE}.`,
    },
    {
      q: `Le taxi peut-il me conduire très tôt le matin pour ${data.name} ?`,
      a: `Oui, TACO TAXI est disponible dès 4h du matin. Réservez la veille pour garantir votre prise en charge. Votre chauffeur sera ponctuel pour vous permettre d'arriver à l'heure à votre rendez-vous.`,
    },
    {
      q: `Quelles villes sont desservies pour le transport vers ${data.name} ?`,
      a: `Nous desservons Pacy-sur-Eure, Vernon, Évreux, Giverny, Breuilpont, Ménilles, Saint-Marcel, Jouy-sur-Eure, Bueil, Douains et toutes les communes de la vallée de l'Eure.`,
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
      {/* Hero */}
      <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={IMGS.hospital} alt="Transport médical CPAM depuis Pacy-sur-Eure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy-dark/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Heart className="w-4 h-4 text-gold" />
            <span style={{ fontFamily: "var(--font-body)" }} className="text-gold text-xs font-semibold">
              TACO TAXI — Transport Médical Conventionné CPAM
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-heading)" }} className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-3xl">
            {data.h1}
            <span className="text-gold block mt-1 text-2xl md:text-3xl">{data.sub}</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)" }} className="text-white/80 text-lg max-w-3xl mb-4">
            {data.intro}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-4 h-4 text-gold" />
              <span style={{ fontFamily: "var(--font-body)" }} className="text-sm">{data.distance}</span>
            </div>
            {data.adresse && (
              <div className="flex items-center gap-2 text-white/60">
                <AlertCircle className="w-4 h-4 text-gold" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-sm">{data.adresse}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a href={PHONE_LINK} style={{ fontFamily: "var(--font-body)" }} className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors">
              <Phone className="w-5 h-5" />Réserver : {PHONE}
            </a>
            {data.cpam && (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-4 rounded-full">
                <Shield className="w-5 h-5 text-gold" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-white font-semibold text-sm">Conventionné CPAM — Tiers Payant</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-4">
            {[{ icon: Shield, text: "CPAM Agréé" }, { icon: Clock, text: "24h/24 7j/7" }, { icon: Star, text: "5/5 Google" }, { icon: Car, text: "Conduite Douce" }].map(({ icon: Icon, text }) => (
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
          {[{ value: "24h/24", label: "Disponibilité" }, { value: "5⭐", label: "Avis Google" }, { value: "CPAM", label: "Agréé Sécu" }, { value: "Tiers Payant", label: "Sans Avance" }].map(({ value, label }) => (
            <div key={label}>
              <p style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark text-lg">{value}</p>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-navy-dark/70 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CPAM info banner */}
      {data.cpam && (
        <section className="bg-gold/10 border-y border-gold/20 py-6 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Shield className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)" }} className="font-bold text-navy-dark mb-1">
                Transport médical remboursé par l'Assurance Maladie
              </h2>
              <p style={{ fontFamily: "var(--font-body)" }} className="text-sm text-muted-foreground">
                Avec une <strong>prescription médicale de transport</strong> (formulaire S3138), votre trajet vers {data.name} est pris en charge par la CPAM.
                TACO TAXI est <strong>taxi conventionné agréé</strong> — vous n'avancez généralement aucun frais grâce au tiers payant.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Spécialités */}
      <section className="py-12 px-4 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-xl font-bold mb-4 text-navy-dark"
          >
            🏥 Spécialités médicales — {data.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.specialites.map((sp) => (
              <div key={sp} className="flex items-start gap-2 bg-white rounded-lg p-3 shadow-sm">
                <Heart className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-sm text-navy-dark">
                  {sp}
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
            Taxi médical Pacy-sur-Eure → {data.name} : confort et sérénité
          </h2>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            {data.description}
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-2xl font-bold mb-4 text-navy-dark"
          >
            Pourquoi choisir TACO TAXI pour {data.name} ?
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
              { icon: Clock, title: "24h/24 — 7j/7", desc: "Pour vos traitements répétés, hospitalisations et urgences" },
              { icon: Shield, title: "CPAM Agréé", desc: "Tiers payant direct, sans avance de frais avec prescription" },
              { icon: Car, title: "Confort médical", desc: "Conduite douce, véhicule propre, accès facilité" },
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
            <Link to="/taxi-conventionne-cpam-pacy-sur-eure" className="text-gold hover:underline">
              taxi conventionné CPAM Pacy-sur-Eure
            </Link>
            ,{" "}
            <Link to="/transfert-aeroport-roissy" className="text-gold hover:underline">
              transfert aéroport Roissy CDG
            </Link>
            ,{" "}
            <Link to="/taxi-gare-vernon-giverny" className="text-gold hover:underline">
              taxi gare de Vernon-Giverny
            </Link>{" "}
            et{" "}
            <Link to="/taxi-longue-distance-pacy-sur-eure" className="text-gold hover:underline">
              taxi longue distance
            </Link>
            .
          </p>
        </article>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={faqs} title={`FAQ — ${data.h1}`} />
      <InternalLinks
        links={[
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-gare-vernon-giverny", label: "Taxi Gare Vernon-Giverny" },
          { to: "/taxi-chu-rouen", label: "Taxi CHU Rouen" },
          { to: "/contact", label: "Nous Contacter" },
        ]}
      />
    </>
  );
}