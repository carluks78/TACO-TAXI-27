import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ZonePage from "./pages/ZonePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import GarePage from "./pages/GarePage";
import HopitalPage from "./pages/HopitalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },

      // ─── Service pages ───────────────────────
      { path: "taxi-pacy-sur-eure", Component: ServicePage },
      { path: "taxi-conventionne-cpam-pacy-sur-eure", Component: ServicePage },
      { path: "taxi-gare-vernon", Component: ServicePage },
      { path: "transfert-aeroport-roissy", Component: ServicePage },
      { path: "transfert-aeroport-orly", Component: ServicePage },
      { path: "taxi-longue-distance-pacy-sur-eure", Component: ServicePage },

      // ─── Zones proches de Pacy (< 10 km) ────
      { path: "taxi-menilles", Component: ZonePage },
      { path: "taxi-breuilpont", Component: ZonePage },
      { path: "taxi-saint-marcel", Component: ZonePage },
      { path: "taxi-douains", Component: ZonePage },
      { path: "taxi-croisy-sur-eure", Component: ZonePage },
      { path: "taxi-la-chapelle-longueville", Component: ZonePage },
      { path: "taxi-hardencourt-cocherel", Component: ZonePage },
      { path: "taxi-houlbec-cocherel", Component: ZonePage },
      { path: "taxi-aigleville", Component: ZonePage },
      { path: "taxi-fains", Component: ZonePage },
      { path: "taxi-fontaine-sous-jouy", Component: ZonePage },
      { path: "taxi-garennes-sur-eure", Component: ZonePage },
      { path: "taxi-ailly", Component: ZonePage },
      { path: "taxi-prey", Component: ZonePage },

      // ─── Zones 10–15 km ─────────────────────
      { path: "taxi-vernon", Component: ZonePage },
      { path: "taxi-bueil", Component: ZonePage },
      { path: "taxi-jouy-sur-eure", Component: ZonePage },
      { path: "taxi-gasny", Component: ZonePage },
      { path: "taxi-ecos", Component: ZonePage },
      { path: "taxi-port-mort", Component: ZonePage },
      { path: "taxi-saint-pierre-la-garenne", Component: ZonePage },
      { path: "taxi-authevernes", Component: ZonePage },

      // ─── Zones 15–20 km ─────────────────────
      { path: "taxi-gaillon", Component: ZonePage },
      { path: "taxi-les-andelys", Component: ZonePage },
      { path: "taxi-louviers", Component: ZonePage },
      { path: "taxi-bonnieres-sur-seine", Component: ZonePage },
      { path: "taxi-evreux", Component: ZonePage },
      { path: "taxi-giverny", Component: ZonePage },

      // ─── Grandes villes ─────────────────────
      { path: "taxi-rouen", Component: ZonePage },
      { path: "taxi-paris", Component: ZonePage },

      // ─── Aéroports & transferts ──────────────
      { path: "transfert-aeroport-beauvais", Component: ZonePage },
      { path: "transfert-gare-saint-lazare", Component: ZonePage },

      // ─── Gares SNCF ──────────────────────────
      { path: "taxi-gare-vernon-giverny", Component: GarePage },
      { path: "taxi-gare-evreux-normandie", Component: GarePage },
      { path: "taxi-gare-bueil", Component: GarePage },
      { path: "taxi-gare-breval", Component: GarePage },
      { path: "taxi-gare-mantes-la-jolie", Component: GarePage },

      // ─── Hôpitaux ────────────────────────────
      { path: "taxi-hopital-evreux", Component: HopitalPage },
      { path: "taxi-chu-rouen", Component: HopitalPage },
      { path: "taxi-hopital-georges-pompidou", Component: HopitalPage },
      { path: "taxi-hopital-necker", Component: HopitalPage },
      { path: "taxi-hopital-cochin", Component: HopitalPage },
      { path: "taxi-institut-gustave-roussy", Component: HopitalPage },
      { path: "taxi-hopital-vernon", Component: HopitalPage },

      // ─── Contact ─────────────────────────────
      { path: "contact", Component: ContactPage },

      // ─── 404 ─────────────────────────────────
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
