import { PHONE } from "./seoData";

export interface ZoneData {
  h1: string;
  metaTitle: string;
  metaDesc: string;
  metaKeywords: string;
  image: string;
  imageAlt: string;
  intro: string;
  distance: string;
  sections: { title: string; text: string }[];
  servicesList: string[];
  keywordsBlock: string;
}

// ── Curated Unsplash images (geolocalized as close as possible) ──
export const IMGS = {
  // ── Villes / Lieux ──
  vernon:       "https://images.unsplash.com/photo-1764004052532-f2f5b1bdc39d?w=1200&q=85",
  giverny:      "https://images.unsplash.com/photo-1660067251702-89c6a53da8fd?w=1200&q=85",
  rouen:        "https://images.unsplash.com/photo-1643193839079-e6ee352d9043?w=1200&q=85",
  paris:        "https://images.unsplash.com/photo-1715793626048-026bf173be46?w=1200&q=85",
  normandie:    "https://images.unsplash.com/photo-1700491581259-f79b1c6d8ec7?w=1200&q=85",
  village:      "https://images.unsplash.com/photo-1764145029676-19266f511ca0?w=1200&q=85",
  eureRiver:    "https://images.unsplash.com/photo-1706688952416-0f12ab8b82e3?w=1200&q=85",
  gaillon:      "https://images.unsplash.com/photo-1705591932567-bde615fa30c2?w=1200&q=85",
  seine:        "https://images.unsplash.com/photo-1602778166153-d7fa8cdb7467?w=1200&q=85",
  valleeEure:   "https://images.unsplash.com/photo-1560153540-2298b4cf874b?w=1200&q=85",
  // ── Aéroports — images réelles géolocalisées ──
  airport:      "https://images.unsplash.com/photo-1777367155493-ceb66334ce92?w=1200&q=85",
  airportCDG:   "https://images.unsplash.com/photo-1777367155493-ceb66334ce92?w=1200&q=85",
  airportOrly:  "https://images.unsplash.com/photo-1775476795095-f955f20cec57?w=1200&q=85",
  airportNight: "https://images.unsplash.com/photo-1767053853571-fbc0f931855e?w=1200&q=85",
  airportLounge:"https://images.unsplash.com/photo-1672310708154-771583101dbb?w=1200&q=85",
  orly:         "https://images.unsplash.com/photo-1775476795095-f955f20cec57?w=1200&q=85",
  // ── Gares — images réelles France ──
  train:        "https://images.unsplash.com/photo-1677919324762-7d80a33616a2?w=1200&q=85",
  // ── Médical / Taxi ──
  hospital:     "https://images.unsplash.com/photo-1767966769495-dbb5e14cab5f?w=1200&q=85",
  taxi:         "https://images.unsplash.com/photo-1607767074006-6d108dbe66c3?w=1200&q=85",
  chauffeur:    "https://images.unsplash.com/photo-1533382716971-8c02309057ba?w=1200&q=85",
};

// ── Specific zone content ──────────────────────────────────────────
const ZONE_CONTENT: Record<string, ZoneData> = {

  // ════════════════════════════════
  //  GRANDES VILLES
  // ════════════════════════════════

  "taxi-vernon": {
    h1: "Taxi Vernon — TACO TAXI depuis Pacy-sur-Eure",
    metaTitle: "Taxi Vernon 24h/24 | TACO TAXI Pacy-sur-Eure – Gare, CPAM, Aéroport",
    metaDesc: "Taxi Vernon disponible 24h/24 depuis Pacy-sur-Eure (12 km). Transfert gare Vernon-Giverny, hôpital, Roissy CDG. Taxi conventionné CPAM. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Vernon, taxi Vernon 24h, taxi gare Vernon, taxi Vernon Paris, taxi Vernon Pacy, transport médical Vernon CPAM, taxi Vernon Giverny, navette aéroport Vernon CDG, taxi Vernon Évreux, chauffeur Vernon Eure",
    image: IMGS.vernon,
    imageAlt: "Vernon – Bords de Seine, Normandie, Eure (27)",
    distance: "12 km de Pacy-sur-Eure (15–20 min)",
    intro: `TACO TAXI dessert Vernon (Eure 27200) 24h/24, 7j/7. Deuxième ville de l'Eure avec 25 000 habitants, Vernon est le principal pôle économique et ferroviaire de la vallée de la Seine. La gare de Vernon-Giverny relie directement Paris Saint-Lazare en moins d'une heure. Notre taxi local vous y conduit depuis Pacy-sur-Eure et toutes les communes environnantes, pour vos courses du quotidien, vos rendez-vous médicaux conventionnés CPAM, vos transferts vers Paris ou les aéroports.`,
    sections: [
      {
        title: "Taxi Vernon — votre service de confiance dans la Vallée de la Seine",
        text: `Vernon est une ville chargée d'histoire, avec ses maisons à colombages médiévales, son musée municipal et sa proximité immédiate avec les célèbres jardins de Claude Monet à Giverny (5 km). La ville est traversée par la Seine et bénéficie d'une position stratégique entre Paris (90 km) et Rouen (65 km). TACO TAXI vous y conduit depuis Pacy-sur-Eure (12 km, 15 à 20 minutes) et depuis toutes les communes voisines : Ménilles, Douains, Breuilpont, Saint-Marcel, Jouy-sur-Eure, Croisy-sur-Eure, Houlbec-Cocherel, Gasny, La Chapelle-Longueville, Garennes-sur-Eure et bien d'autres. Notre chauffeur connaît parfaitement Vernon, ses rues, ses parkings et ses accès hospitaliers.`,
      },
      {
        title: "Transfert taxi Vernon Gare SNCF — Paris en 1 heure",
        text: `La gare de Vernon-Giverny est la porte d'entrée ferroviaire sur Paris Saint-Lazare (55 à 65 minutes). Elle accueille les lignes J (Transilien) et des Intercités. Pour les navetteurs de Pacy-sur-Eure et des villages environnants, un taxi vers la gare de Vernon est souvent la solution la plus rapide et la plus confortable. TACO TAXI assure vos transferts dès 4h30 du matin pour les premiers trains, et jusqu'après minuit pour les dernières liaisons. Nous suivons les horaires SNCF en temps réel afin d'adapter notre prise en charge en cas de retard. Pour les arrivées, votre chauffeur vous attend avec votre prénom en pancarte à la sortie des quais.`,
      },
      {
        title: "Taxi médical Vernon — Transport CPAM vers l'hôpital",
        text: `Le Centre Hospitalier de Vernon assure les soins de proximité pour toute la vallée. TACO TAXI est agréé CPAM pour le transport sanitaire conventionné. Sur prescription médicale de transport (formulaire S3138), vos trajets vers l'hôpital de Vernon, les laboratoires d'analyses, les cabinets spécialisés ou les centres de kinésithérapie peuvent être remboursés par la Sécurité Sociale. Le tiers payant est disponible : vous n'avancez généralement aucun frais. Nos chauffeurs sont formés à l'accompagnement des patients fragiles et veillent à une conduite douce et respectueuse. Nous assurons également les transports vers le CHU Rouen, le CH Évreux et les grands hôpitaux parisiens.`,
      },
      {
        title: "Navette aéroport Vernon — Roissy CDG et Orly",
        text: `Depuis Vernon, l'aéroport Paris Charles-de-Gaulle (Roissy CDG) est à environ 95 km (1h15 à 1h30). L'aéroport d'Orly est à 110 km. TACO TAXI propose des navettes aéroport avec tarif fixe établi à l'avance. Votre vol est suivi en temps réel pour adapter l'heure de départ. Nous vous déposons directement à votre terminal. Pour les arrivées, nous vous attendons à la sortie bagages. Service premium disponible 24h/24, 365 jours par an. Idéal pour les départs professionnels ou les vacances en famille avec bagages.`,
      },
      {
        title: "Taxi Vernon touristique — Giverny, Château Gaillard et Vallée de la Seine",
        text: `Vernon est aussi une destination touristique importante en Normandie. La ville sert de base pour visiter les célèbres jardins de Claude Monet à Giverny (5 km), le Musée des Impressionnismes, le vieux Vernon avec ses colombages médiévaux, les falaises de la Seine et les panoramas de la vallée. TACO TAXI organise vos excursions touristiques avec attente sur place. Des tours complets Vernon + Giverny en une journée sont possibles depuis Paris ou les hôtels de la région. Notre chauffeur local vous partagera ses conseils de passionné de la région.`,
      },
    ],
    servicesList: [
      "Taxi Vernon → Paris gare ou domicile",
      "Transfert gare Vernon-Giverny (toutes heures)",
      "Taxi médical CPAM Vernon conventionné",
      "Navette aéroport Roissy CDG depuis Vernon",
      "Navette aéroport Orly depuis Vernon",
      "Taxi Vernon → Évreux (préfecture Eure)",
      "Excursion touristique Vernon + Giverny",
      "Taxi nocturne Vernon disponible 24h/24",
      "Retour domicile après hospitalisation",
      "Longue distance Vernon → Rouen, Caen, Le Havre",
    ],
    keywordsBlock: "taxi Vernon, taxi Vernon 24h, taxi gare Vernon SNCF, taxi Vernon Paris, taxi Vernon Pacy-sur-Eure, transport médical Vernon CPAM, chauffeur Vernon Eure, taxi Vernon Giverny, navette aéroport CDG Vernon, taxi Vernon Évreux, taxi Vernon nuit week-end",
  },

  "taxi-evreux": {
    h1: "Taxi Évreux — Préfecture de l'Eure | TACO TAXI",
    metaTitle: "Taxi Évreux 24h/24 | TACO TAXI Pacy-sur-Eure – Transport CPAM, Gare",
    metaDesc: "Taxi Évreux depuis Pacy-sur-Eure (30 km). Transport médical CPAM vers CH Évreux, gare SNCF, aéroport. Taxi conventionné Assurance Maladie. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Évreux, taxi Pacy Évreux, transport CPAM Évreux, taxi hôpital Évreux, taxi gare Évreux-Normandie, taxi Évreux Paris, chauffeur Évreux 27, taxi conventionné Évreux, transport médical Évreux, taxi Évreux 24h 7j7",
    image: IMGS.normandie,
    imageAlt: "Évreux – Préfecture de l'Eure, Normandie",
    distance: "30 km de Pacy-sur-Eure (25–35 min)",
    intro: `Évreux est la préfecture du département de l'Eure, avec plus de 50 000 habitants. Ville administrative et hospitalière incontournable de Normandie, elle concentre le Centre Hospitalier de référence, la gare SNCF Évreux-Normandie, les tribunaux, la CPAM et de nombreux services spécialisés. TACO TAXI dessert Évreux depuis Pacy-sur-Eure (30 km, environ 30 minutes) 24h/24, 7j/7, avec taxi conventionné CPAM pour le transport médical, et service premium pour vos déplacements professionnels et personnels.`,
    sections: [
      {
        title: "Taxi Pacy-sur-Eure → Évreux : le trajet essentiel de l'Eure",
        text: `Pacy-sur-Eure et Évreux sont liées par la RN13, axe principal de l'Eure. Pour les habitants de Pacy et des communes environnantes (Ménilles, Breuilpont, Garennes-sur-Eure, Jouy-sur-Eure, Ailly, Prey…), Évreux est la destination administrative, judiciaire et médicale de référence. TACO TAXI assure ce trajet quotidiennement, avec des départs tôt le matin (à partir de 5h) pour vos rendez-vous à l'ouverture des services publics. Notre connaissance parfaite des rues ébroïciennes garantit un trajet direct et sans détour.`,
      },
      {
        title: "Transport médical CPAM Pacy → Centre Hospitalier d'Évreux",
        text: `Le Centre Hospitalier d'Évreux est le plus grand hôpital du département de l'Eure. Il accueille des patients pour des consultations spécialisées, des urgences, des hospitalisations, des séances de chimiothérapie, de dialyse et de radiothérapie. TACO TAXI est agréé CPAM pour le transport sanitaire conventionné. Sur prescription médicale S3138, votre trajet Pacy → CH Évreux est remboursé à 65% (voire 100% si ALD, accident du travail, maternité…). Tiers payant : vous ne payez rien, la CPAM régle directement TACO TAXI. Pour les séances répétées (dialyse 3 fois/semaine, chimio régulière…), nous organisons des plannings stables et fiables.`,
      },
      {
        title: "Taxi gare d'Évreux-Normandie — Trains Paris, Caen, Rouen",
        text: `La gare SNCF d'Évreux-Normandie propose des liaisons directes vers Paris Saint-Lazare (1h10–1h20), Caen (1h), Rouen (1h) et d'autres destinations normandes. Pour les résidents de Pacy-sur-Eure, la gare d'Évreux est une alternative à la gare de Vernon. TACO TAXI vous y conduit depuis Pacy et toutes les communes de la vallée. Disponible pour les premiers trains (dès 5h) et les derniers trains (après minuit). Suivi horaires SNCF en temps réel, adaptation en cas de retard.`,
      },
      {
        title: "Taxi Évreux pour vos démarches administratives",
        text: `Préfecture de l'Eure, sous-préfecture, tribunal judiciaire, CPAM, Pôle emploi, services fiscaux, URSSAF, CAF, MSA : TACO TAXI vous conduit à toutes vos adresses ébroïciennes pour vos démarches administratives et professionnelles. Service ponctuel et discret, idéal pour les rendez-vous en mairie ou en préfecture. Nous assurons aussi les transferts depuis Évreux vers les aéroports de Roissy CDG (150 km) et d'Orly (155 km) avec tarif fixe établi à l'avance.`,
      },
    ],
    servicesList: [
      "Taxi Pacy-sur-Eure → Évreux 24h/24",
      "Transport CPAM vers CH Évreux (conventionné)",
      "Taxi gare Évreux-Normandie départ/arrivée",
      "Taxi Évreux → Paris longue distance",
      "Navette Évreux → Roissy CDG ou Orly",
      "Démarches administratives préfecture Eure",
      "Taxi Évreux vers cliniques et spécialistes",
      "Transport dialyse/chimiothérapie Évreux",
      "Retour domicile après hospitalisation Évreux",
      "Taxi nocturne et week-end Évreux",
    ],
    keywordsBlock: "taxi Évreux, taxi Pacy Évreux, transport CPAM Évreux, taxi hôpital Évreux, taxi gare Évreux SNCF, taxi Évreux Paris, chauffeur Évreux Eure, taxi conventionné Évreux, transport médical Évreux 24h, taxi Évreux nuit",
  },

  "taxi-giverny": {
    h1: "Taxi Giverny — Jardins Claude Monet | TACO TAXI",
    metaTitle: "Taxi Giverny | Fondation Claude Monet – TACO TAXI Pacy-sur-Eure 06 67 96 23 96",
    metaDesc: "Taxi Giverny pour les jardins de Monet. TACO TAXI depuis Pacy-sur-Eure (10 km), Vernon (5 km), Paris. Excursions, groupes, transfert gare. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Giverny, taxi jardins Monet, Fondation Claude Monet taxi, taxi Giverny Vernon, excursion Giverny Paris taxi, transfert gare Vernon Giverny, taxi touristique Giverny, taxi Giverny depuis Paris, visite Giverny nymphéas, taxi Giverny groupe",
    image: IMGS.giverny,
    imageAlt: "Giverny — Jardins de la Fondation Claude Monet, nymphéas et pont japonais",
    distance: "10 km de Pacy-sur-Eure (12–15 min)",
    intro: `Giverny est l'un des villages les plus célèbres au monde, résidence et source d'inspiration du peintre Claude Monet de 1883 jusqu'à sa mort en 1926. La Fondation Claude Monet ouvre ses jardins chaque année du 1er avril au 1er novembre et accueille plus de 600 000 visiteurs internationaux. TACO TAXI est votre taxi local pour rejoindre Giverny depuis Pacy-sur-Eure (10 km), Vernon (5 km), Évreux ou directement depuis Paris. Chauffeur passionné par la région, attente sur place possible, excursions organisées.`,
    sections: [
      {
        title: "Taxi Giverny depuis Pacy-sur-Eure et Vernon — La Fondation Claude Monet",
        text: `Les jardins de Claude Monet à Giverny sont classés au titre des Monuments Historiques et constituent l'un des sites touristiques les plus visités de France. Le jardin normand avec ses plates-bandes fleuries, les allées de fleurs printanières et le célèbre jardin d'eau avec le pont japonais et les nymphéas sont immortalisés dans des centaines de toiles de l'artiste. TACO TAXI vous y conduit depuis Pacy-sur-Eure (10 km, 12 minutes) et depuis Vernon (5 km, 7 minutes). Nous proposons l'attente sur place (la visite dure généralement 1h30 à 2h30) et le retour à votre hôtel, gare ou domicile.`,
      },
      {
        title: "Excursion Giverny depuis Paris — Un jour magique en Normandie",
        text: `Beaucoup de touristes visitent Giverny lors d'une excursion d'une journée depuis Paris. TACO TAXI peut organiser votre transfert Paris → Giverny (90 km, environ 1h15) directement jusqu'à l'entrée de la Fondation Claude Monet. Après votre visite, un déjeuner dans l'un des restaurants de Giverny ou Vernon, puis le retour à Paris en soirée. Service disponible du mardi au dimanche (la Fondation est fermée le lundi). Pour les groupes jusqu'à 6 personnes, notre berline spacieuse est idéale. Devis personnalisé sur demande au ${PHONE}.`,
      },
      {
        title: "Taxi Giverny depuis la gare de Vernon",
        text: `La gare de Vernon-Giverny est la porte d'arrivée pour la plupart des visiteurs qui viennent de Paris en train (55 minutes). Depuis la gare, il reste 5 km jusqu'au village de Giverny. Les navettes Hirondelles existent en saison mais pas toujours disponibles aux bonnes heures. TACO TAXI assure des transferts directs gare de Vernon → Giverny, toute la journée, sans attente. Votre chauffeur est disponible dès votre descente de train pour vous conduire directement aux jardins. Réservez à l'avance par téléphone ou WhatsApp.`,
      },
      {
        title: "Giverny : au-delà des jardins de Monet",
        text: `Outre la Fondation Claude Monet, Giverny abrite le Musée des Impressionnismes Giverny, dédié à la peinture impressionniste américaine et internationale. Le village lui-même mérite une promenade : maisons normandes fleuries, ruelles pittoresques, église Sainte-Radegonde où Monet est enterré. Les coteaux surplombant la vallée de la Seine offrent des panoramas superbes sur le méandre de la Seine. TACO TAXI peut vous organiser une visite combinée Fondation Monet + Musée des Impressionnismes + village dans la même journée, avec un planning adapté à vos souhaits.`,
      },
    ],
    servicesList: [
      "Taxi Giverny depuis Pacy-sur-Eure (10 km)",
      "Taxi Giverny depuis Vernon (5 km)",
      "Excursion Paris → Giverny (jardins Monet)",
      "Transfert gare Vernon → Fondation Claude Monet",
      "Taxi Giverny avec attente visite (1h30–3h)",
      "Taxi Giverny → Musée des Impressionnismes",
      "Visite combinée Vernon + Giverny",
      "Taxi Giverny pour groupes (jusqu'à 6 pers.)",
      "Transfert hôtel Vernon/Évreux → Giverny",
      "Taxi retour Giverny → Paris, gare, aéroport",
    ],
    keywordsBlock: "taxi Giverny, taxi jardins Monet, Fondation Claude Monet taxi, excursion Giverny Paris, taxi Giverny Vernon gare, taxi touristique Giverny Normandie, taxi groupe Giverny, transfert gare Vernon Giverny, visite Monet nymphéas taxi, Giverny pont japonais taxi",
  },

  "taxi-rouen": {
    h1: "Taxi Rouen depuis Pacy-sur-Eure — CHU, Gare, Tourisme",
    metaTitle: "Taxi Rouen | TACO TAXI Pacy-sur-Eure – CHU, Transport CPAM, Longue Distance",
    metaDesc: "Taxi Rouen depuis Pacy-sur-Eure (65 km). Transport médical CPAM vers CHU Rouen, gare SNCF, longue distance. Taxi conventionné Sécurité Sociale. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Rouen, taxi Pacy Rouen, taxi médical Rouen, CPAM Rouen taxi, taxi CHU Rouen Charles-Nicolle, taxi conventionné Rouen, transport médical Pacy Rouen, taxi gare Rouen, taxi Rouen longue distance, taxi Eure Rouen 24h",
    image: IMGS.rouen,
    imageAlt: "Rouen — Cathédrale Notre-Dame, Capitale de la Normandie",
    distance: "65 km de Pacy-sur-Eure (55–65 min)",
    intro: `Rouen, capitale de la Normandie et chef-lieu de Seine-Maritime, est une destination incontournable pour les habitants de la vallée de l'Eure. Ville d'art et d'histoire exceptionnelle, elle concentre aussi le CHU Charles-Nicolle (le plus grand hôpital de Normandie), la gare SNCF Rouen-Rive-Droite, les universités et de nombreux services spécialisés. TACO TAXI dessert Rouen depuis Pacy-sur-Eure 24h/24, 7j/7, avec taxi conventionné CPAM pour le transport médical au CHU.`,
    sections: [
      {
        title: "Taxi médical Pacy → CHU Rouen : transport CPAM conventionné",
        text: `Le CHU de Rouen (Centre Hospitalier Universitaire Charles-Nicolle) est le centre de référence pour les soins complexes en Normandie : cancérologie, neurochirurgie, cardiologie interventionnelle, maladies rares, greffes d'organes. Des patients de toute l'Eure s'y rendent pour des traitements que les hôpitaux locaux ne peuvent pas assurer. TACO TAXI est votre taxi médical conventionné CPAM pour ces trajets longue distance. Sur prescription médicale, votre transport vers le CHU Rouen est remboursé par l'Assurance Maladie. Tiers payant direct — vous n'avancez aucun frais. Nous adaptons nos horaires aux créneaux de vos séances.`,
      },
      {
        title: "Taxi Rouen professionnel — Réunions et déplacements d'affaires",
        text: `Rouen est un carrefour économique normand avec de nombreuses entreprises industrielles, sièges sociaux et centres d'affaires. TACO TAXI vous conduit à Rouen pour vos réunions, rendez-vous clients, formations ou salons professionnels. Berline confortable, chauffeur en tenue professionnelle, ponctualité assurée. Pour les déplacements réguliers, nous proposons des abonnements avec facturation mensuelle. Idéal pour les cadres et dirigeants de la vallée de l'Eure.`,
      },
      {
        title: "Taxi Rouen touristique — La ville aux cent clochers",
        text: `Rouen est l'une des villes médiévales les plus riches de France : cathédrale Notre-Dame peinte vingt fois par Monet, le Gros-Horloge, la place du Vieux-Marché, les ruelles à colombages du Vieux-Rouen, le musée des Beaux-Arts, l'abbatiale Saint-Ouen. TACO TAXI vous y conduit pour une journée de tourisme depuis Pacy-sur-Eure, avec retour programmé. Excellent programme pour profiter de Rouen sans chercher à se garer dans le centre historique.`,
      },
      {
        title: "Taxi Rouen gare et correspondances ferroviaires",
        text: `La gare SNCF de Rouen-Rive-Droite est une gare d'échanges importante : liaisons vers Paris Saint-Lazare (1h15), Caen (1h20), Le Havre (1h05), Amiens, Lille. TACO TAXI vous y conduit depuis Pacy-sur-Eure pour vos correspondances ferroviaires, ou vous récupère à votre arrivée en gare de Rouen. Service disponible 24h/24, suivi horaires SNCF en temps réel.`,
      },
    ],
    servicesList: [
      "Taxi Pacy-sur-Eure → CHU Rouen (CPAM)",
      "Transport chimiothérapie/dialyse CHU Rouen",
      "Taxi gare de Rouen-Rive-Droite",
      "Taxi Rouen pour rendez-vous professionnels",
      "Taxi touristique Rouen cathédrale, vieux-marché",
      "Longue distance Pacy → Rouen (65 km)",
      "Retour domicile après hospitalisation Rouen",
      "Taxi nocturne Rouen 24h/24",
      "Taxi Rouen → Aéroport Roissy CDG",
      "Taxi Rouen weekend et jours fériés",
    ],
    keywordsBlock: "taxi Rouen, taxi Pacy Rouen, taxi médical Rouen, CPAM Rouen conventionné, taxi CHU Rouen Charles-Nicolle, transport médical Pacy Rouen CPAM, taxi gare Rouen SNCF, taxi Rouen longue distance, taxi Eure Rouen 24h, chauffeur Rouen Normandie",
  },

  "taxi-paris": {
    h1: "Taxi Paris depuis Pacy-sur-Eure — Médical, Pro, Aéroports",
    metaTitle: "Taxi Paris | TACO TAXI Pacy-sur-Eure – Transport CPAM Hôpitaux Parisiens",
    metaDesc: "Taxi Paris depuis Pacy-sur-Eure (90 km). Transport CPAM hôpitaux parisiens (Pompidou, Necker, Cochin, Gustave-Roussy). Tarif fixe garanti. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Paris Pacy-sur-Eure, taxi médical Paris depuis Eure, transport CPAM Paris hôpitaux, taxi Pompidou Paris, taxi Necker Paris, taxi Cochin Paris, taxi Gustave-Roussy, taxi longue distance Paris Normandie, chauffeur Pacy Paris pro",
    image: IMGS.paris,
    imageAlt: "Paris — Tour Eiffel et Boulevard Haussmann, Île-de-France",
    distance: "90 km de Pacy-sur-Eure (1h15–1h45 selon trafic)",
    intro: `Paris est la destination longue distance la plus demandée par les clients de TACO TAXI. Que ce soit pour des soins médicaux spécialisés dans les grands hôpitaux parisiens, des déplacements professionnels, des connexions avec les aéroports ou des visites personnelles, TACO TAXI vous conduit depuis Pacy-sur-Eure jusqu'à n'importe quelle adresse parisienne. Tarif fixe établi à l'avance, confort premium, disponible 24h/24.`,
    sections: [
      {
        title: "Taxi médical Paris — Transport CPAM vers les hôpitaux parisiens",
        text: `Les patients de la vallée de l'Eure se rendent régulièrement dans les grands hôpitaux parisiens pour des consultations ultra-spécialisées ou des traitements de pointe. TACO TAXI est votre taxi médical conventionné CPAM pour ces trajets : Hôpital Européen Georges-Pompidou (Paris 15e, cardiologie, oncologie), Hôpital Necker-Enfants Malades (Paris 15e, pédiatrie, maladies rares), Hôpital Cochin (Paris 14e, gynécologie, rhumatologie), Hôpital Lariboisière (Paris 10e), Hôpital Bichat (Paris 18e), Pitié-Salpêtrière (Paris 13e), Institut Gustave-Roussy (Villejuif, oncologie). Sur prescription médicale, ces transports peuvent être remboursés par l'Assurance Maladie.`,
      },
      {
        title: "Taxi Paris professionnel depuis la vallée de l'Eure",
        text: `Pour vos déplacements d'affaires à Paris (réunions, salons, conférences au Palais des Congrès, formations), TACO TAXI vous propose un service premium. Départ depuis votre domicile à Pacy-sur-Eure ou toute commune de la vallée, avec chauffeur en tenue professionnelle, véhicule climatisé et récent. Vous pouvez travailler, téléphoner ou vous reposer pendant le trajet sans contrainte. Facturation disponible pour vos notes de frais. Retour Paris → Pacy sur réservation.`,
      },
      {
        title: "Réservation taxi Paris depuis Pacy-sur-Eure",
        text: `Pour réserver votre taxi vers Paris, appelez le ${PHONE} ou envoyez un message WhatsApp. Nous vous confirmons le rendez-vous, l'heure de prise en charge et le tarif fixe en quelques minutes. Pour les départs matinaux (5h-6h) ou les retours tardifs, réservez la veille pour garantir la disponibilité du véhicule. Pour les transports médicaux CPAM, prévenez-nous à l'avance de votre prescription afin de préparer le dossier. Tarif fixe Paris établi à l'avance, sans surprise liée aux embouteillages.`,
      },
    ],
    servicesList: [
      "Taxi Pacy → Paris (tarif fixe garanti)",
      "Transport CPAM vers hôpitaux parisiens",
      "Taxi vers Hôpital Pompidou, Necker, Cochin",
      "Taxi vers Institut Gustave-Roussy Villejuif",
      "Taxi Paris pour rendez-vous professionnels",
      "Navette Pacy → Roissy CDG (via A13)",
      "Taxi Paris nocturne 24h/24",
      "Aller-retour Paris avec attente",
      "Taxi Paris pour salons et événements pro",
      "Retour domicile après hospitalisation Paris",
    ],
    keywordsBlock: "taxi Paris Pacy-sur-Eure, taxi médical Paris Eure CPAM, transport Paris hôpitaux, taxi Pompidou Paris, taxi Necker Cochin Paris, taxi Gustave-Roussy, chauffeur Pacy Paris professionnel, taxi longue distance Paris Normandie 24h",
  },

  // ════════════════════════════════
  //  COMMUNES PROCHES (< 10 km)
  // ════════════════════════════════

  "taxi-menilles": {
    h1: "Taxi Ménilles (27120) — TACO TAXI Pacy-sur-Eure",
    metaTitle: "Taxi Ménilles 27120 | TACO TAXI – Transport 24h/24, CPAM, Gare Vernon",
    metaDesc: "Taxi Ménilles (27120) disponible 24h/24. Transport CPAM conventionné, gare Vernon (7 km), aéroport CDG. Votre taxi local proche de Pacy-sur-Eure. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Ménilles, taxi Ménilles 27120, taxi Ménilles Pacy, transport CPAM Ménilles, taxi Ménilles gare Vernon, taxi Ménilles 24h, chauffeur Ménilles Eure, taxi Ménilles nuit week-end",
    image: IMGS.eureRiver,
    imageAlt: "Ménilles — Vallée de l'Eure, Normandie (27120)",
    distance: "3 km de Pacy-sur-Eure (5 min)",
    intro: `Ménilles est un village de 630 habitants situé à seulement 3 km de Pacy-sur-Eure, en bordure de l'Eure. Commune calme et verdoyante, Ménilles fait partie de la communauté de communes du Pays du Neubourg et de la Plaine d'Évreux. Les habitants de Ménilles ont besoin d'un taxi fiable pour rejoindre Vernon (7 km), Évreux (28 km), la gare SNCF ou les établissements médicaux. TACO TAXI est votre service de taxi local basé à Pacy-sur-Eure, disponible 24h/24, 7j/7 pour tous vos déplacements depuis Ménilles.`,
    sections: [
      {
        title: "Votre taxi Ménilles — Un service de proximité quotidien",
        text: `Vivre à Ménilles sans voiture peut s'avérer difficile en l'absence de transports en commun fréquents. TACO TAXI est la solution pratique et abordable pour les résidents de Ménilles qui ont besoin de se déplacer vers Vernon pour faire leurs courses, vers Pacy-sur-Eure pour des démarches, ou vers Évreux pour des rendez-vous médicaux ou administratifs. Notre service est disponible tous les jours, à toute heure, sans rendez-vous préalable (bien qu'une réservation soit conseillée pour les trajets urgents ou tôt le matin). Appelez directement le ${PHONE}.`,
      },
      {
        title: "Taxi médical CPAM depuis Ménilles — Transport vers les hôpitaux",
        text: `Les habitants de Ménilles qui nécessitent des soins médicaux réguliers peuvent bénéficier du taxi conventionné CPAM de TACO TAXI. Sur prescription médicale de votre médecin traitant (formulaire S3138), vos trajets vers le Centre Hospitalier d'Évreux, l'hôpital de Vernon, les cliniques ou les centres de dialyse/chimiothérapie sont pris en charge par la Sécurité Sociale. TACO TAXI gère directement la facturation avec la CPAM de l'Eure — le tiers payant s'applique dans la grande majorité des cas. Pas d'avance de frais.`,
      },
      {
        title: "Taxi Ménilles → Gare Vernon et Aéroports",
        text: `La gare de Vernon-Giverny est à seulement 7 km de Ménilles. TACO TAXI vous y conduit pour prendre le Transilien ou l'Intercités vers Paris Saint-Lazare (55 minutes de Vernon). Pour les voyages en avion, nous assurons les navettes depuis Ménilles vers Roissy CDG (95 km) et Orly (115 km) avec tarif fixe. Départ possible dès 4h du matin pour les vols matinaux.`,
      },
      {
        title: "Zones couvertes depuis Ménilles",
        text: `Depuis Ménilles, TACO TAXI dessert toutes les destinations locales (Pacy-sur-Eure 3 km, Vernon 7 km, Douains 4 km, Breuilpont 5 km, Jouy-sur-Eure 9 km) ainsi que les destinations régionales (Évreux 28 km, Rouen 70 km, Paris 95 km). Nous couvrons aussi les transferts vers tous les aéroports d'Île-de-France et les gares SNCF du réseau normand. Chaque trajet est facturé au compteur homologué ou à prix fixe pour les longues distances.`,
      },
    ],
    servicesList: [
      "Taxi Ménilles → Pacy-sur-Eure (3 km)",
      "Taxi Ménilles → Vernon (7 km) gare incluse",
      "Transport CPAM Ménilles conventionné",
      "Taxi Ménilles → Évreux hôpital 24h/24",
      "Navette aéroport Roissy CDG depuis Ménilles",
      "Taxi Ménilles → Paris longue distance",
      "Courses locales Ménilles et communes voisines",
      "Taxi nocturnene et week-end Ménilles",
      "Retour domicile après hospitalisation",
      "Taxi Ménilles pour personnes à mobilité réduite",
    ],
    keywordsBlock: "taxi Ménilles 27120, taxi Ménilles Pacy-sur-Eure, transport CPAM Ménilles, taxi Ménilles gare Vernon, chauffeur Ménilles Eure, taxi Ménilles 24h, taxi Ménilles Paris CDG, transport médical Ménilles conventionné",
  },

  "taxi-breuilpont": {
    h1: "Taxi Breuilpont (27640) — TACO TAXI Pacy-sur-Eure",
    metaTitle: "Taxi Breuilpont 27640 | TACO TAXI – Transport CPAM, Vernon, 24h/24",
    metaDesc: "Taxi Breuilpont (27640) disponible 24h/24. Transport CPAM, gare Vernon, aéroport CDG. Votre taxi à 6 km de Pacy-sur-Eure. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Breuilpont, taxi Breuilpont 27640, taxi Breuilpont Pacy, transport CPAM Breuilpont, taxi Breuilpont Vernon, taxi Breuilpont 24h, chauffeur Breuilpont Eure",
    image: IMGS.normandie,
    imageAlt: "Breuilpont — Village de l'Eure, Normandie (27640)",
    distance: "6 km de Pacy-sur-Eure (8 min)",
    intro: `Breuilpont est un village de la communauté de communes de la vallée de l'Eure, situé à 6 km de Pacy-sur-Eure et à 10 km de Vernon. Commune résidentielle et agricole de l'Eure, Breuilpont dispose de peu de transports en commun. TACO TAXI assure la liaison avec Vernon, Évreux, Paris et les aéroports depuis Breuilpont, 24h/24 et 7j/7.`,
    sections: [
      {
        title: "Taxi Breuilpont — Mobilité quotidienne dans la vallée de l'Eure",
        text: `Les habitants de Breuilpont ont régulièrement besoin d'un taxi pour leurs achats à Vernon ou Pacy-sur-Eure, leurs rendez-vous médicaux à Évreux, leurs trains à la gare de Vernon ou leurs vols depuis Roissy CDG. TACO TAXI est le service de taxi de référence à Breuilpont, avec des chauffeurs locaux qui connaissent les routes de l'Eure et les horaires des trains. Disponible 24h/24, 7j/7, pour les urgences médicales comme pour les courses planifiées.`,
      },
      {
        title: "Transport médical CPAM depuis Breuilpont",
        text: `TACO TAXI est agréé CPAM pour le transport sanitaire conventionné depuis Breuilpont. Sur prescription médicale, vos trajets vers les établissements de santé (CH Évreux, hôpital Vernon, CHU Rouen, hôpitaux parisiens) sont remboursés par l'Assurance Maladie. Tiers payant disponible — vous n'avancez rien dans la plupart des cas. Pour les soins répétés (dialyse, chimiothérapie, rééducation), nous organisons un planning régulier avec des horaires fixes adaptés à vos séances.`,
      },
      {
        title: "Taxi Breuilpont vers Vernon, Évreux et Paris",
        text: `Depuis Breuilpont, les distances sont courtes pour les destinations régionales : Vernon (10 km, 12 min), Pacy-sur-Eure (6 km, 8 min), Évreux (32 km, 30 min). Pour Paris, comptez 95 km et environ 1h20 de trajet. TACO TAXI propose des tarifs fixes pour tous ces trajets, établis à l'avance et sans surprise. Réservation simple au ${PHONE} ou par WhatsApp.`,
      },
    ],
    servicesList: [
      "Taxi Breuilpont → Vernon (10 km)",
      "Taxi Breuilpont → Pacy-sur-Eure (6 km)",
      "Transport CPAM Breuilpont conventionné",
      "Taxi Breuilpont → Évreux 24h/24",
      "Navette Breuilpont → Roissy CDG",
      "Taxi gare Vernon depuis Breuilpont",
      "Longue distance Breuilpont → Paris",
      "Taxi nocturnene Breuilpont 24h/24",
      "Taxi Breuilpont Giverny tourisme",
      "Retour domicile après soins",
    ],
    keywordsBlock: "taxi Breuilpont 27640, taxi Breuilpont Pacy, transport CPAM Breuilpont, taxi Breuilpont Vernon, chauffeur Breuilpont Eure, taxi Breuilpont 24h nuit week-end",
  },

  "taxi-garennes-sur-eure": {
    h1: "Taxi Garennes-sur-Eure (27780) — TACO TAXI",
    metaTitle: "Taxi Garennes-sur-Eure 27780 | TACO TAXI 24h/24 – Transport CPAM",
    metaDesc: "Taxi Garennes-sur-Eure (27780) 24h/24. À 5 km de Pacy-sur-Eure. Transport CPAM, hôpital Évreux, gare Vernon. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Garennes-sur-Eure, taxi Garennes Eure, taxi Garennes Pacy, transport CPAM Garennes, taxi Garennes 27780, chauffeur Garennes Eure 24h",
    image: IMGS.eureRiver,
    imageAlt: "Garennes-sur-Eure — Bords de l'Eure, Normandie (27780)",
    distance: "5 km de Pacy-sur-Eure (7 min)",
    intro: `Garennes-sur-Eure est une commune de l'Eure (27780) située à seulement 5 km de Pacy-sur-Eure en direction d'Évreux. Avec ses hameaux et sa position en vallée de l'Eure, Garennes-sur-Eure bénéficie du service de taxi TACO TAXI disponible 24h/24. Nous desservons Vernon (15 km), Évreux (25 km), la gare SNCF et les aéroports d'Île-de-France.`,
    sections: [
      {
        title: "Votre taxi à Garennes-sur-Eure",
        text: `Garennes-sur-Eure est une commune résidentielle tranquille, composée de plusieurs hameaux et villages regroupés. Les habitants ont besoin d'un accès fiable aux services de la région : supermarchés et commerces de Pacy-sur-Eure ou Vernon, médecins et hôpitaux d'Évreux, gare SNCF de Vernon pour Paris. TACO TAXI est disponible immédiatement au ${PHONE}, 24h/24, 7j/7. Notre connaissance des routes locales de l'Eure nous permet d'être chez vous rapidement.`,
      },
      {
        title: "Transport médical CPAM Garennes-sur-Eure",
        text: `Les résidents de Garennes-sur-Eure nécessitant des soins réguliers peuvent compter sur TACO TAXI, taxi conventionné CPAM agréé. Sur prescription médicale de transport, vos trajets vers le CH Évreux (25 km), l'hôpital de Vernon (15 km), les centres de dialyse ou les cliniques normandes sont remboursés par la Sécurité Sociale. Tiers payant disponible — pas d'avance de frais dans la grande majorité des cas.`,
      },
    ],
    servicesList: [
      "Taxi Garennes-sur-Eure → Pacy (5 km)",
      "Taxi Garennes → Évreux CH et gare",
      "Transport CPAM Garennes conventionné",
      "Taxi Garennes → Vernon (15 km)",
      "Navette aéroport CDG depuis Garennes",
      "Taxi nocturnene Garennes 24h/24",
    ],
    keywordsBlock: "taxi Garennes-sur-Eure 27780, taxi Garennes Pacy, transport CPAM Garennes-sur-Eure, taxi Garennes Évreux, chauffeur Garennes Eure 24h",
  },

  "taxi-douains": {
    h1: "Taxi Douains (27120) — TACO TAXI Pacy-sur-Eure",
    metaTitle: "Taxi Douains 27120 | TACO TAXI – Transport 24h/24, CPAM, Aéroport",
    metaDesc: "Taxi Douains (27120) disponible 24h/24. À 4 km de Pacy-sur-Eure. Transport CPAM, gare Vernon, Roissy CDG. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Douains, taxi Douains 27120, taxi Douains Pacy, transport CPAM Douains, taxi Douains Paris, chauffeur Douains Eure 24h",
    image: IMGS.village,
    imageAlt: "Douains — Village de l'Eure, Normandie (27120)",
    distance: "4 km de Pacy-sur-Eure (6 min)",
    intro: `Douains est un paisible village de l'Eure (27120) situé à 4 km de Pacy-sur-Eure, au cœur de la vallée de l'Eure. Connu pour son château (Château de Brécourt, hôtel de luxe), Douains est une commune résidentielle bénéficiant du service de taxi TACO TAXI 24h/24, 7j/7.`,
    sections: [
      {
        title: "Taxi Douains — Service local de confiance",
        text: `Les habitants et visiteurs de Douains peuvent bénéficier du service de taxi TACO TAXI pour tous leurs déplacements : courses à Vernon ou Pacy-sur-Eure, transferts gare, rendez-vous médicaux avec taxi CPAM, ou navettes vers Roissy CDG et Orly. Notre chauffeur connaît parfaitement les routes entre Douains et toutes les destinations de la vallée de l'Eure. Réservation au ${PHONE} ou par WhatsApp.`,
      },
      {
        title: "Transport médical CPAM depuis Douains",
        text: `TACO TAXI est votre taxi conventionné CPAM depuis Douains. Sur prescription médicale, vos trajets vers les hôpitaux de la région (Vernon 10 km, Évreux 30 km, Rouen 70 km) sont pris en charge par l'Assurance Maladie. Tiers payant direct, pas d'avance de frais. Nous assurons également les transports vers les spécialistes parisiens (Necker, Pompidou, Gustave-Roussy) avec remboursement CPAM sur prescription.`,
      },
    ],
    servicesList: [
      "Taxi Douains → Pacy-sur-Eure (4 km)",
      "Taxi Douains → Vernon (10 km)",
      "Transport CPAM Douains conventionné",
      "Taxi Douains → Évreux 24h/24",
      "Navette Douains → Roissy CDG",
      "Taxi nocturnene Douains 24h/24",
    ],
    keywordsBlock: "taxi Douains 27120, taxi Douains Pacy-sur-Eure, transport CPAM Douains, taxi Douains Vernon, chauffeur Douains Eure, taxi Douains nuit week-end",
  },

  // ════════════════════════════════
  //  COMMUNES 15–20 KM
  // ════════════════════════════════

  "taxi-gaillon": {
    h1: "Taxi Gaillon (27600) — TACO TAXI depuis Pacy-sur-Eure",
    metaTitle: "Taxi Gaillon 27600 | TACO TAXI – Transport 24h/24, CPAM, Gare",
    metaDesc: "Taxi Gaillon (27600) depuis Pacy-sur-Eure (15 km). Transport CPAM, gare de Gaillon-Aubevoye, aéroport CDG. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Gaillon, taxi Gaillon 27600, taxi Gaillon Pacy, transport CPAM Gaillon, taxi Gaillon gare SNCF, taxi Gaillon Évreux, chauffeur Gaillon Eure 24h",
    image: IMGS.gaillon,
    imageAlt: "Gaillon — Château Renaissance, Eure (27600)",
    distance: "15 km de Pacy-sur-Eure (18–20 min)",
    intro: `Gaillon est une ville de 7 000 habitants dans l'Eure (27600), connue pour son Château de Gaillon, l'un des premiers châteaux Renaissance de France. Situé à 15 km de Pacy-sur-Eure et à 20 km d'Évreux, Gaillon dispose d'une gare SNCF (Gaillon-Aubevoye) sur la ligne Paris-Rouen. TACO TAXI vous y dessert depuis Pacy-sur-Eure 24h/24.`,
    sections: [
      {
        title: "Taxi Gaillon — Service 24h/24 depuis Pacy-sur-Eure",
        text: `Gaillon est une ville active de l'Eure avec des commerces, services publics, un établissement scolaire et une activité économique soutenue. Les habitants de Gaillon et ses environs (Aubevoye, Saint-Pierre-la-Garenne, Tosny) peuvent faire appel à TACO TAXI pour leurs déplacements : courses à Vernon ou Évreux, transport médical CPAM, transfert gare, navette aéroport. Notre service de taxi dessert Gaillon depuis Pacy-sur-Eure (15 km) et depuis Vernon (15 km).`,
      },
      {
        title: "Taxi Gaillon Gare SNCF — Gaillon-Aubevoye vers Paris",
        text: `La gare de Gaillon-Aubevoye est sur la ligne Rouen-Paris Saint-Lazare. Les trains Intercités permettent de rejoindre Paris en environ 1h20. TACO TAXI assure les transferts depuis votre domicile à Gaillon ou dans les communes voisines jusqu'à la gare de Gaillon-Aubevoye, mais aussi vers la gare de Vernon-Giverny (15 km, Transilien ligne J) ou la gare d'Évreux-Normandie (20 km).`,
      },
      {
        title: "Transport médical CPAM Gaillon et Château Gaillard",
        text: `TACO TAXI dessert également Gaillon pour le transport médical conventionné CPAM. Sur prescription médicale, vos trajets vers le CH Évreux (20 km), l'hôpital de Vernon (15 km), ou les établissements parisiens sont pris en charge par la Sécurité Sociale. Tiers payant disponible. Nous desservons aussi Les Andelys (Château Gaillard, 8 km de Gaillon) pour les habitants des deux secteurs.`,
      },
    ],
    servicesList: [
      "Taxi Gaillon → Pacy-sur-Eure (15 km)",
      "Taxi Gaillon → Évreux (20 km)",
      "Taxi Gaillon gare SNCF Gaillon-Aubevoye",
      "Transport CPAM Gaillon conventionné",
      "Taxi Gaillon → Vernon (15 km)",
      "Navette Gaillon → Roissy CDG",
      "Taxi Gaillon → Les Andelys (8 km)",
      "Taxi nocturne Gaillon 24h/24",
    ],
    keywordsBlock: "taxi Gaillon 27600, taxi Gaillon Pacy, transport CPAM Gaillon, taxi gare Gaillon-Aubevoye SNCF, taxi Gaillon Évreux, chauffeur Gaillon Eure, taxi Gaillon Les Andelys, taxi Gaillon 24h",
  },

  "taxi-les-andelys": {
    h1: "Taxi Les Andelys (27700) — TACO TAXI depuis Pacy-sur-Eure",
    metaTitle: "Taxi Les Andelys 27700 | TACO TAXI – Château Gaillard, Transport CPAM",
    metaDesc: "Taxi Les Andelys (27700) depuis Pacy-sur-Eure (20 km). Château Gaillard, transport CPAM, aéroport CDG. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Les Andelys, taxi Les Andelys 27700, taxi Andelys Château Gaillard, transport CPAM Les Andelys, taxi Andelys Rouen, taxi Andelys Paris, chauffeur Andelys Eure 24h",
    image: IMGS.seine,
    imageAlt: "Les Andelys — Château Gaillard et Seine, Eure (27700)",
    distance: "20 km de Pacy-sur-Eure (22–25 min)",
    intro: `Les Andelys est une ville de 8 000 habitants dans l'Eure (27700), dominée par le spectaculaire Château Gaillard, forteresse médiévale construite par Richard Cœur de Lion au XIIe siècle. Située sur la rive droite de la Seine, Les Andelys est à 20 km de Pacy-sur-Eure et 25 km de Rouen. TACO TAXI vous y dessert depuis Pacy-sur-Eure et toute la vallée de l'Eure.`,
    sections: [
      {
        title: "Taxi Les Andelys — Château Gaillard et Vallée de la Seine",
        text: `Les Andelys attire de nombreux visiteurs grâce au Château Gaillard, classé Monument Historique, offrant une vue spectaculaire sur les méandres de la Seine. La ville comprend deux entités : Grand-Andely (centre commercial et administratif) et Petit-Andely (au bord de la Seine). TACO TAXI vous conduit aux Andelys depuis Pacy-sur-Eure (20 km), Vernon (20 km) ou Évreux (35 km). Nous proposons aussi les visites touristiques avec attente sur place.`,
      },
      {
        title: "Transport médical CPAM aux Andelys",
        text: `TACO TAXI assure le transport médical conventionné CPAM depuis Les Andelys vers les établissements de santé régionaux. Les Andelys dispose d'un Hôpital Local, mais pour les soins spécialisés, les patients se rendent à Rouen (CHU Charles-Nicolle, 25 km) ou à Évreux (CH, 35 km). Sur prescription médicale, ces transports sont remboursés par la Sécurité Sociale, avec tiers payant géré par TACO TAXI.`,
      },
    ],
    servicesList: [
      "Taxi Les Andelys → Pacy-sur-Eure (20 km)",
      "Taxi Les Andelys → Rouen CHU (25 km)",
      "Taxi touristique Château Gaillard",
      "Transport CPAM Les Andelys conventionné",
      "Navette Les Andelys → Roissy CDG",
      "Taxi Les Andelys → Évreux (35 km)",
      "Taxi nocturne Andelys 24h/24",
    ],
    keywordsBlock: "taxi Les Andelys 27700, taxi Andelys Pacy-sur-Eure, taxi Château Gaillard Les Andelys, transport CPAM Andelys, taxi Andelys Rouen, chauffeur Andelys Eure 24h, taxi Andelys Seine tourisme",
  },

  "taxi-louviers": {
    h1: "Taxi Louviers (27400) — TACO TAXI depuis Pacy-sur-Eure",
    metaTitle: "Taxi Louviers 27400 | TACO TAXI – Transport CPAM, 24h/24, Aéroport",
    metaDesc: "Taxi Louviers (27400) depuis Pacy-sur-Eure (18 km). Transport CPAM, hôpital, aéroport CDG. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Louviers, taxi Louviers 27400, taxi Louviers Pacy, transport CPAM Louviers, taxi Louviers Évreux, taxi Louviers Paris, chauffeur Louviers Eure 24h",
    image: IMGS.eureRiver,
    imageAlt: "Louviers — Bords de l'Eure, Normandie (27400)",
    distance: "18 km de Pacy-sur-Eure (20–25 min)",
    intro: `Louviers est une ville de 18 000 habitants dans l'Eure (27400), sur les bords de l'Eure et de la forêt de Bord. Sous-préfecture de l'Eure, elle possède plusieurs services publics, des cliniques, un hôpital local et des commerces importants. Située à 18 km de Pacy-sur-Eure et à 18 km de Rouen, Louviers est desservie par TACO TAXI 24h/24, 7j/7.`,
    sections: [
      {
        title: "Taxi Louviers — sous-préfecture de l'Eure et bassin économique",
        text: `Louviers est une ville dynamique de l'Eure avec une zone industrielle et commerciale importante. Elle accueille la sous-préfecture, des services d'état, des lycées et un tissu économique actif. TACO TAXI vous y conduit depuis Pacy-sur-Eure (18 km) pour vos démarches administratives, vos rendez-vous professionnels ou vos soins médicaux. Notre service est disponible 24h/24, y compris les nuits et les week-ends.`,
      },
      {
        title: "Transport médical CPAM Louviers",
        text: `TACO TAXI assure le transport médical conventionné CPAM depuis et vers Louviers. Les patients de la vallée de l'Eure se rendent régulièrement à Louviers pour des consultations ou à Rouen (CHU, 18 km de Louviers) pour des soins spécialisés. Sur prescription médicale, ces transports sont remboursés par l'Assurance Maladie. Tiers payant disponible, sans avance de frais.`,
      },
    ],
    servicesList: [
      "Taxi Louviers → Pacy-sur-Eure (18 km)",
      "Taxi Louviers → Rouen CHU (18 km)",
      "Transport CPAM Louviers conventionné",
      "Taxi Louviers → Évreux préfecture",
      "Navette Louviers → Roissy CDG",
      "Taxi nocturnene Louviers 24h/24",
    ],
    keywordsBlock: "taxi Louviers 27400, taxi Louviers Pacy-sur-Eure, transport CPAM Louviers, taxi Louviers Rouen, taxi Louviers Évreux, chauffeur Louviers Eure 24h week-end",
  },

  "taxi-bonnieres-sur-seine": {
    h1: "Taxi Bonnières-sur-Seine (78270) — TACO TAXI",
    metaTitle: "Taxi Bonnières-sur-Seine 78270 | TACO TAXI – Gare, 24h/24, CPAM",
    metaDesc: "Taxi Bonnières-sur-Seine (78270) depuis Pacy-sur-Eure (18 km). Gare SNCF Paris-Mantes, transport CPAM, aéroport. ☎ 06 67 96 23 96.",
    metaKeywords: "taxi Bonnières-sur-Seine, taxi Bonnières 78270, taxi Bonnières gare SNCF, taxi Bonnières Paris, transport CPAM Bonnières, chauffeur Bonnières-sur-Seine 24h",
    image: IMGS.seine,
    imageAlt: "Bonnières-sur-Seine — Bords de Seine, Yvelines (78270)",
    distance: "18 km de Pacy-sur-Eure (20 min)",
    intro: `Bonnières-sur-Seine est une commune des Yvelines (78270) sur la rive droite de la Seine, à 18 km de Pacy-sur-Eure. Sa gare SNCF sur la ligne Paris-Rouen permet de rejoindre Paris en 50 minutes. TACO TAXI vous dessert depuis Bonnières vers Paris, l'aéroport ou les établissements médicaux.`,
    sections: [
      {
        title: "Taxi Bonnières-sur-Seine — Gare et connexions Paris",
        text: `La gare de Bonnières-sur-Seine est sur la ligne Intercités Paris-Rouen, avec des départs directs vers Paris Saint-Lazare (45-55 minutes). TACO TAXI vous conduit depuis votre domicile à Bonnières ou dans les communes voisines (Freneuse, La Falaise, Rosny-sur-Seine) jusqu'à la gare, ou directement à Paris. Pour les navetteurs qui préfèrent un service porte-à-porte, notre taxi est une alternative confortable aux transports en commun.`,
      },
      {
        title: "Transport médical CPAM depuis Bonnières-sur-Seine",
        text: `Les habitants de Bonnières nécessitant des soins spécialisés peuvent faire appel à TACO TAXI pour un transport médical conventionné CPAM. Que ce soit vers l'hôpital de Vernon (18 km), le CHU Rouen (50 km), ou les grands hôpitaux parisiens (50-70 km), TACO TAXI gère le dossier CPAM avec tiers payant si vous avez une prescription médicale de transport.`,
      },
    ],
    servicesList: [
      "Taxi Bonnières-sur-Seine → Paris (50 km)",
      "Taxi Bonnières → gare SNCF locale",
      "Transport CPAM Bonnières conventionné",
      "Navette Bonnières → Roissy CDG",
      "Taxi Bonnières → Vernon (18 km)",
      "Taxi nocturne Bonnières 24h/24",
    ],
    keywordsBlock: "taxi Bonnières-sur-Seine 78270, taxi Bonnières Paris, taxi Bonnières gare SNCF, transport CPAM Bonnières, chauffeur Bonnières Seine 24h, taxi Bonnières Pacy-sur-Eure",
  },
};

// ── Generic builder for zones without specific content ─────────────
function buildGenericZone(slug: string): ZoneData {
  const name = slug
    .replace(/^taxi-|^transfert-/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Assign image by proximity/type
  const img =
    slug.includes("port") || slug.includes("seine") ? IMGS.seine
    : slug.includes("gare") || slug.includes("train") ? IMGS.train
    : slug.includes("aero") || slug.includes("orly") ? IMGS.orly
    : slug.includes("hopital") || slug.includes("chu") ? IMGS.hospital
    : slug.includes("ecos") || slug.includes("jouy") || slug.includes("croisy") ? IMGS.eureRiver
    : slug.includes("saint-pierre") || slug.includes("authev") ? IMGS.seine
    : slug.includes("prey") || slug.includes("ailly") || slug.includes("fains") ? IMGS.village
    : IMGS.normandie;

  return {
    h1: `Taxi ${name} — TACO TAXI Pacy-sur-Eure`,
    metaTitle: `Taxi ${name} | TACO TAXI – Réservation 24h/24 depuis Pacy-sur-Eure`,
    metaDesc: `Taxi ${name} disponible 24h/24 depuis Pacy-sur-Eure. Transport conventionné CPAM, gares SNCF, aéroports. Taxi professionnel vallée de l'Eure. ☎ 06 67 96 23 96.`,
    metaKeywords: `taxi ${name}, taxi ${name} Pacy-sur-Eure, transport ${name} CPAM, chauffeur ${name} Eure, taxi ${name} 24h, taxi ${name} Paris, taxi ${name} médical, taxi ${name} gare Vernon`,
    image: img,
    imageAlt: `${name} — Vallée de l'Eure, Normandie`,
    distance: "Proche de Pacy-sur-Eure",
    intro: `TACO TAXI dessert ${name} depuis Pacy-sur-Eure 24h/24, 7j/7. Service de taxi professionnel pour vos courses quotidiennes, transferts médicaux conventionnés CPAM, navettes gare SNCF (Vernon-Giverny, Évreux-Normandie) et aéroports (Roissy CDG, Orly). Chauffeur local disponible, réservation immédiate au ${PHONE}.`,
    sections: [
      {
        title: `Votre taxi ${name} — Service de proximité 24h/24`,
        text: `${name} fait partie de la zone de desserte de TACO TAXI dans la vallée de l'Eure (Normandie, département 27). Notre service de taxi vous conduit depuis ${name} vers toutes vos destinations : Vernon, Pacy-sur-Eure, Évreux, Giverny, Rouen, Paris et les aéroports d'Île-de-France. Chauffeur professionnel titulaire de la carte professionnelle VTC/Taxi, véhicule récent climatisé, ponctualité garantie. Pour les courses locales, le tarif est au compteur homologué. Pour les longues distances, le prix est établi à l'avance. Réservez au ${PHONE} ou via WhatsApp.`,
      },
      {
        title: `Transport médical CPAM depuis ${name} — Conventionné Sécurité Sociale`,
        text: `TACO TAXI est agréé CPAM pour le transport sanitaire conventionné. Les habitants de ${name} nécessitant des soins réguliers (dialyse, chimiothérapie, rééducation, consultations spécialisées) peuvent bénéficier de la prise en charge de l'Assurance Maladie. Sur prescription médicale de votre médecin traitant (formulaire S3138), vos trajets vers les hôpitaux sont remboursés à 65% ou 100% selon votre situation médicale. Tiers payant disponible : vous ne payez rien dans la plupart des cas. TACO TAXI gère directement la facturation CPAM.`,
      },
      {
        title: `Taxi ${name} vers Paris, Roissy CDG, Vernon et Évreux`,
        text: `Depuis ${name}, TACO TAXI vous conduit vers toutes vos destinations importantes : la gare de Vernon-Giverny pour Paris Saint-Lazare (en 1 heure), l'aéroport Roissy CDG (1h15–1h30), l'aéroport d'Orly (1h45–2h), Évreux pour vos démarches administratives ou médicales, Rouen (CHU Charles-Nicolle, Cathédrale, Gare), et Paris pour vos rendez-vous professionnels ou médicaux. Tarifs fixes pour les longues distances, compteur pour les courses locales. Pas de frais cachés, pas de majoration non prévue.`,
      },
      {
        title: `Réservation facile depuis ${name}`,
        text: `Réserver votre taxi depuis ${name} est simple : appelez le ${PHONE} 24h/24, ou envoyez un message WhatsApp au même numéro. Vous recevez la confirmation de votre trajet, l'heure de prise en charge et le tarif en moins de 2 minutes. Pour les rendez-vous médicaux récurrents, organisez un calendrier régulier avec TACO TAXI — pas besoin de rappeler à chaque séance. Paiement en espèces ou par carte bancaire à la fin du trajet. Pour les courses CPAM, aucun paiement n'est demandé au patient avec le tiers payant.`,
      },
    ],
    servicesList: [
      `Taxi ${name} → Pacy-sur-Eure`,
      `Taxi ${name} → Vernon et gare SNCF`,
      `Transport CPAM ${name} conventionné`,
      `Taxi ${name} → Évreux 24h/24`,
      `Navette ${name} → Roissy CDG`,
      `Taxi ${name} → Paris longue distance`,
      `Courses locales ${name} et communes voisines`,
      `Taxi ${name} → CHU Rouen`,
      `Taxi nocturne et week-end ${name}`,
      `Retour domicile après hospitalisation`,
    ],
    keywordsBlock: `taxi ${name}, taxi ${name} Pacy-sur-Eure, transport ${name} CPAM, chauffeur ${name} Eure, taxi ${name} 24h, taxi ${name} Paris, taxi ${name} médical, taxi ${name} gare Vernon, taxi ${name} nuit week-end`,
  };
}

export function getZoneContent(slug: string): ZoneData {
  return ZONE_CONTENT[slug] ?? buildGenericZone(slug);
}
