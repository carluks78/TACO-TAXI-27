import { PHONE } from "./seoData";

interface ContentBlock {
  title: string;
  text: string;
}

interface FAQ {
  q: string;
  a: string;
}

export interface ServiceData {
  h1: string;
  sub: string;
  intro: string;
  content: ContentBlock[];
  faqs: FAQ[];
}

export const serviceContent: Record<string, ServiceData> = {
  "taxi-pacy-sur-eure": {
    h1: "Taxi Pacy-sur-Eure — TACO TAXI",
    sub: "Service local 24h/24 dans la vallée de l'Eure",
    intro:
      "TACO TAXI est votre service de taxi à Pacy-sur-Eure (27120) disponible 24 heures sur 24, 7 jours sur 7. Courses en ville, gare de Vernon, aéroport, transport médical conventionné CPAM : nous couvrons tous vos besoins de déplacement dans l'Eure.",
    content: [
      {
        title: "Votre taxi local à Pacy-sur-Eure",
        text: "Pacy-sur-Eure, commune de l'Eure en Normandie, est desservie en permanence par TACO TAXI. Que vous soyez résident ou visiteur, notre chauffeur professionnel vous prend en charge à votre domicile et vous conduit à destination rapidement et en toute sécurité. Nous connaissons parfaitement les communes de la vallée de l'Eure : Vernon, Évreux, Giverny, Ménilles, Douains, Breuilpont, Saint-Marcel…",
      },
      {
        title: "Tous vos déplacements couverts",
        text: "TACO TAXI à Pacy-sur-Eure assure : les courses quotidiennes, les transferts vers la gare SNCF de Vernon (connexion Paris Saint-Lazare en 1h), les navettes vers les aéroports de Roissy CDG et Orly, le transport médical conventionné CPAM, et les longues distances vers Paris, Rouen, Caen et toute la France. Un seul numéro suffit : " + PHONE,
      },
    ],
    faqs: [
      {
        q: "Quelle est la zone de desserte de TACO TAXI à Pacy-sur-Eure ?",
        a: "TACO TAXI dessert Pacy-sur-Eure (27120) et toutes les communes voisines dans un rayon de 15 à 30 km : Vernon, Évreux, Giverny, Ménilles, Douains, Breuilpont, Saint-Marcel, Jouy-sur-Eure, Bueil, Gasny et bien d'autres. Nous assurons aussi les longues distances vers Paris, Rouen, Caen.",
      },
      {
        q: "Comment réserver TACO TAXI à Pacy-sur-Eure ?",
        a: `Appelez le ${PHONE} ou envoyez un message WhatsApp. Nous sommes disponibles 24h/24, 7j/7, sans frais de réservation.`,
      },
      {
        q: "TACO TAXI est-il disponible la nuit et le week-end ?",
        a: "Oui, TACO TAXI fonctionne sans interruption : nuits, week-ends, jours fériés. Votre taxi Pacy-sur-Eure est toujours disponible.",
      },
      {
        q: "Quels sont les tarifs du taxi à Pacy-sur-Eure ?",
        a: "Les tarifs sont au compteur homologué pour les courses locales. Devis gratuit pour les longues distances. Paiement CB et espèces acceptés.",
      },
      {
        q: "Le taxi Pacy-sur-Eure est-il conventionné CPAM ?",
        a: "Oui, TACO TAXI est agréé CPAM. Sur prescription médicale, vos transports vers les établissements de santé sont pris en charge par la Sécurité Sociale. Tiers payant disponible.",
      },
    ],
  },

  "taxi-conventionne-cpam-pacy-sur-eure": {
    h1: "Taxi Conventionné CPAM Pacy-sur-Eure",
    sub: "Transport sanitaire agréé Sécurité Sociale",
    intro:
      "TACO TAXI est agréé CPAM pour le transport sanitaire conventionné à Pacy-sur-Eure et dans tout l'Eure. Nous assurons vos trajets médicaux vers les hôpitaux, cliniques et centres de soins avec prise en charge par la Sécurité Sociale.",
    content: [
      {
        title: "Comment fonctionne le taxi conventionné CPAM ?",
        text: "Le taxi conventionné est un service de transport remboursé par l'Assurance Maladie. Sur prescription médicale de transport (bon de transport CERFA), votre trajet vers un établissement de santé est remboursé à 65% ou 100% selon votre situation. TACO TAXI gère directement les formalités avec la CPAM de l'Eure.",
      },
      {
        title: "Vers quels établissements desservons-nous ?",
        text: "Nous desservons tous les établissements de santé de l'Eure et de la région : Hôpital de Vernon, Centre Hospitalier d'Évreux, cliniques, centres de dialyse, cabinet de kinésithérapie, centres de chimiothérapie, laboratoires d'analyses. Nous assurons aussi les transports vers les hôpitaux de Paris et Rouen.",
      },
      {
        title: "Nos engagements transport CPAM",
        text: "Nous garantissons un service humain et attentionné : aide à la montée et descente du véhicule, attente sur place si nécessaire, ponctualité absolue pour vos rendez-vous médicaux. Nos chauffeurs sont formés à l'accompagnement des personnes fragiles ou à mobilité réduite.",
      },
    ],
    faqs: [
      {
        q: "Comment obtenir un bon de transport pour le taxi conventionné ?",
        a: "Votre médecin traitant ou spécialiste vous délivre une prescription médicale de transport (imprimé CERFA). Ce document est nécessaire pour bénéficier de la prise en charge par la CPAM.",
      },
      {
        q: "Le taxi conventionné CPAM est-il gratuit ?",
        a: "Le transport est pris en charge à 65% par la Sécurité Sociale. Votre mutuelle peut couvrir le reste. Certains patients bénéficient d'une prise en charge à 100% (ALD, AT, maternité, etc.).",
      },
      {
        q: "Faut-il avancer les frais du taxi CPAM ?",
        a: "Non, dans la majorité des cas, nous pratiquons le tiers payant. Vous n'avez rien à avancer, la facturation est gérée directement avec la CPAM de l'Eure.",
      },
      {
        q: "Peut-on réserver un taxi conventionné pour des séances régulières ?",
        a: "Oui, nous organisons les transports récurrents (dialyse, chimiothérapie, rééducation) avec des horaires fixes. Vous n'avez pas besoin de nous rappeler à chaque fois.",
      },
      {
        q: "Taxi conventionné CPAM ou transport médical : quelle différence ?",
        a: "Le taxi conventionné est un taxi agréé CPAM pouvant effectuer des transports sanitaires remboursables. TACO TAXI est agréé pour ces transports dans l'Eure (département 27).",
      },
    ],
  },

  "taxi-gare-vernon": {
    h1: "Taxi Gare de Vernon",
    sub: "Transfert 24h/24 depuis Pacy-sur-Eure",
    intro:
      "Service de taxi entre Pacy-sur-Eure et la gare SNCF de Vernon disponible 24h/24. Prise en charge à domicile ou à la gare. Liaison Paris Saint-Lazare en 1h. Ponctualité garantie.",
    content: [
      {
        title: "La gare de Vernon, votre connexion vers Paris",
        text: "La gare SNCF de Vernon (Seine) est la gare la plus proche de Pacy-sur-Eure, à environ 12 km. Elle offre une connexion directe vers Paris Saint-Lazare en moins d'une heure. TACO TAXI vous conduit depuis Pacy-sur-Eure et toute la vallée de l'Eure jusqu'à la gare de Vernon, ou vous récupère à votre descente du train.",
      },
      {
        title: "Un service ponctuel adapté aux horaires SNCF",
        text: "Nous suivons les horaires des trains SNCF et nous adaptons aux retards éventuels. Notre connaissance des itinéraires locaux nous permet d'anticiper votre arrivée. Que ce soit pour un TER, un Intercités ou un Transilien, votre taxi est là, même en cas de modification de dernière minute.",
      },
    ],
    faqs: [
      {
        q: "Combien de temps pour aller de Pacy-sur-Eure à la gare de Vernon ?",
        a: "Le trajet entre Pacy-sur-Eure et la gare de Vernon prend environ 15 à 20 minutes selon le trafic. TACO TAXI vous conseille de réserver 30 minutes avant votre train.",
      },
      {
        q: "Le taxi gare Vernon est-il disponible tôt le matin ?",
        a: "Oui, TACO TAXI est disponible 24h/24. Même pour un train à 5h du matin, votre chauffeur sera présent.",
      },
      {
        q: "Peut-on réserver un taxi Vernon gare pour le retour ?",
        a: "Absolument. Réservez votre taxi retour depuis la gare de Vernon à l'avance. Nous vous attendons à la sortie avec votre prénom sur un panneau.",
      },
      {
        q: "Depuis quelles communes desservez-vous la gare de Vernon ?",
        a: "Depuis Pacy-sur-Eure, Ménilles, Douains, Jouy-sur-Eure, Breuilpont, Houlbec-Cocherel, Croisy-sur-Eure, Bueil et toutes les communes de la vallée de l'Eure.",
      },
      {
        q: "Le taxi vers la gare de Vernon accepte-t-il les bagages ?",
        a: "Oui, nos véhicules disposent de coffres spacieux. Signalez-nous si vous avez des valises ou équipements volumineux à l'avance.",
      },
    ],
  },

  "transfert-aeroport-roissy": {
    h1: "Transfert Aéroport Roissy CDG",
    sub: "Depuis Pacy-sur-Eure & Vallée de l'Eure",
    intro:
      "TACO TAXI assure vos transferts entre Pacy-sur-Eure et l'aéroport Paris Charles-de-Gaulle (Roissy CDG). Tarif fixe, véhicule confortable, chauffeur ponctuel. Départs 24h/24.",
    content: [
      {
        title: "Navette Pacy-sur-Eure — Aéroport CDG",
        text: "L'aéroport de Paris Charles-de-Gaulle (Roissy) est à environ 90 km de Pacy-sur-Eure, soit 1h15 à 1h30 de trajet. TACO TAXI vous propose un service de navette aéroport avec devis fixe à l'avance, sans mauvaise surprise. Idéal pour vos départs professionnels ou vacances.",
      },
      {
        title: "Un service premium pour vos vols",
        text: "Véhicule récent et propre, chauffeur en tenue professionnelle, suivi de votre vol en temps réel pour adapter l'heure de prise en charge. Nous vous déposons directement au terminal de votre compagnie. Pour les arrivées, nous vous attendons à la sortie bagages avec votre prénom.",
      },
    ],
    faqs: [
      {
        q: "Quel est le tarif pour Pacy-sur-Eure → Roissy CDG ?",
        a: "Contactez-nous pour un devis gratuit au " + PHONE + ". Le tarif est fixé à l'avance et ne change pas même en cas de retard ou de circulation difficile.",
      },
      {
        q: "À quelle heure partir de Pacy-sur-Eure pour Roissy ?",
        a: "Nous recommandons de prévoir 2h30 à 3h avant l'heure d'embarquement. Notre chauffeur vous conseille sur l'heure idéale selon votre vol.",
      },
      {
        q: "Le taxi pour Roissy est-il disponible la nuit ?",
        a: "Oui, TACO TAXI est disponible 24h/24 pour les transferts vers Roissy CDG. Nombreux clients partent dès 4h-5h du matin.",
      },
      {
        q: "Peut-on aller de Roissy CDG vers Pacy-sur-Eure ?",
        a: "Absolument. Nous assurons aussi le retour depuis Roissy CDG vers Pacy-sur-Eure et toute la vallée de l'Eure.",
      },
    ],
  },

  "transfert-aeroport-orly": {
    h1: "Transfert Aéroport Paris Orly",
    sub: "Depuis Pacy-sur-Eure & Vallée de l'Eure",
    intro:
      "TACO TAXI assure vos transferts entre Pacy-sur-Eure et l'aéroport de Paris Orly. Tarif fixe garanti, véhicule confortable, départ 24h/24 depuis toute la vallée de l'Eure.",
    content: [
      {
        title: "Navette Pacy-sur-Eure — Aéroport d'Orly",
        text: "L'aéroport de Paris Orly est à environ 110 km de Pacy-sur-Eure. TACO TAXI vous propose une navette confortable avec un tarif établi à l'avance. Pas de compteur, pas de surprise : vous connaissez le prix avant de partir.",
      },
      {
        title: "Service ponctuel et confortable",
        text: "Nous suivons l'actualité de votre vol pour adapter l'heure de départ en cas de retard ou d'avance. À l'arrivée, votre chauffeur vous attend à la sortie bagages. Service disponible pour Orly Ouest et Orly Sud (Terminal 4).",
      },
    ],
    faqs: [
      {
        q: "Combien de temps dure le trajet Pacy-sur-Eure → Orly ?",
        a: "Comptez environ 1h30 à 2h selon la circulation. Le trajet est plus long que vers Roissy. TACO TAXI adapte l'horaire de départ selon votre vol.",
      },
      {
        q: "Le transfert Orly est-il disponible le week-end ?",
        a: "Oui, 7j/7, 24h/24, y compris les jours fériés.",
      },
      {
        q: "Peut-on réserver le retour Orly → Pacy-sur-Eure ?",
        a: "Oui, nous assurons les retours depuis Orly vers toute la vallée de l'Eure. Réservez à l'avance pour garantir votre prise en charge à l'atterrissage.",
      },
    ],
  },

  "taxi-longue-distance-pacy-sur-eure": {
    h1: "Taxi Longue Distance — Pacy-sur-Eure",
    sub: "Paris, Rouen, Caen et toute la France",
    intro:
      "TACO TAXI assure vos longues distances depuis Pacy-sur-Eure et la vallée de l'Eure vers Paris, Rouen, Caen et toutes les grandes villes françaises. Confort premium, tarif fixe, chauffeur expérimenté.",
    content: [
      {
        title: "Vos longues distances avec TACO TAXI",
        text: "Pour vos déplacements professionnels ou personnels, TACO TAXI vous propose des courses longue distance au départ de Pacy-sur-Eure. Destinations fréquentes : Paris (90 km), Rouen (70 km), Caen (120 km), Le Havre (130 km), Amiens, Lyon, Marseille et bien d'autres. Devis gratuit sur demande.",
      },
      {
        title: "Confort et fiabilité pour vos longs trajets",
        text: "Véhicule spacieux et climatisé, sièges confortables, pas d'arrêt intempestif. Votre chauffeur connaît les itinéraires optimaux. Idéal pour les rendez-vous d'affaires, consultations médicales spécialisées ou déplacements familiaux.",
      },
    ],
    faqs: [
      {
        q: "Quelles sont les destinations longue distance depuis Pacy-sur-Eure ?",
        a: "Nous pouvons vous conduire partout en France : Paris, Rouen, Caen, Le Havre, Évreux, Amiens, Rennes et au-delà. Contactez-nous pour un devis gratuit.",
      },
      {
        q: "Les tarifs longue distance sont-ils fixes ?",
        a: "Oui, le tarif est convenu à l'avance et ne change pas. Pas de mauvaise surprise liée au trafic.",
      },
      {
        q: "Peut-on aller et revenir le même jour ?",
        a: "Oui, nous proposons des allers-retours avec attente sur place si nécessaire (réunion, consultation médicale, etc.).",
      },
    ],
  },
};

export function getDefaultServiceContent(name: string): ServiceData {
  return {
    h1: name,
    sub: "Service professionnel 24h/24",
    intro: `TACO TAXI Pacy-sur-Eure propose un service de ${name.toLowerCase()} professionnel et fiable. Disponible 24 heures sur 24, 7 jours sur 7, pour tous vos besoins de transport dans l'Eure et la vallée de l'Eure.`,
    content: [
      {
        title: "Un service adapté à vos besoins",
        text: `Notre service de ${name.toLowerCase()} est conçu pour répondre à toutes vos attentes. Chauffeur professionnel, véhicule confortable et climatisé, ponctualité garantie. Réservez par téléphone ou WhatsApp au ${PHONE}.`,
      },
    ],
    faqs: [
      {
        q: `Comment réserver ${name} ?`,
        a: `Appelez le ${PHONE} ou envoyez un message WhatsApp. Disponible 24h/24, 7j/7.`,
      },
      {
        q: "Quels sont les tarifs ?",
        a: "Tarifs au compteur homologué pour les courses locales. Devis gratuit pour les longues distances.",
      },
      {
        q: "Le service est-il disponible le week-end ?",
        a: "Oui, 7 jours sur 7, y compris jours fériés.",
      },
    ],
  };
}
