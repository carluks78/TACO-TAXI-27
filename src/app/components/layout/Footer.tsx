import React from "react";
import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Star, Train, Building2 } from "lucide-react";
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

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      {/* CTA Band */}
      <div className="bg-gold py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-navy-dark text-xl font-bold"
            >
              Besoin d'un taxi à Pacy-sur-Eure ?
            </h3>
            <p
              style={{ fontFamily: "var(--font-body)" }}
              className="text-navy-dark/80 text-sm"
            >
              Disponible 24h/24, 7j/7 — Réservation immédiate par téléphone ou WhatsApp
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={PHONE_LINK}
              style={{ fontFamily: "var(--font-body)" }}
              className="bg-navy text-white font-semibold px-8 py-3 rounded-full hover:bg-navy-dark transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour TACO TAXI, je souhaite réserver un taxi. ")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)" }}
              className="bg-[#25D366] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#20B358] transition-colors inline-flex items-center gap-2"
            >
              {WA_ICON}
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Info */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-4"
            >
              {COMPANY_NAME}
            </h4>
            <p
              style={{ fontFamily: "var(--font-body)" }}
              className="text-sm leading-relaxed mb-4"
            >
              Votre service de taxi professionnel à Pacy-sur-Eure et dans toute la vallée de l'Eure
              (Normandie). Transport conventionné CPAM, transferts aéroport et gare Vernon.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={PHONE_LINK}
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold" />
                {EMAIL}
              </a>
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-gold" />
                Pacy-sur-Eure, Eure (27)
              </p>
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2"
              >
                <Clock className="w-4 h-4 text-gold" />
                24h/24, 7j/7
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-4"
            >
              Nos Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-4"
            >
              Zones Desservies
            </h4>
            <ul className="space-y-2 text-sm">
              {ZONES.slice(0, 10).map((z) => (
                <li key={z.slug}>
                  <Link
                    to={`/${z.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="hover:text-gold transition-colors"
                  >
                    Taxi {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gares & Hôpitaux */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-3 flex items-center gap-2"
            >
              <Train className="w-4 h-4 text-gold" />
              Gares SNCF
            </h4>
            <ul className="space-y-2 text-sm mb-6">
              {GARES.map((g) => (
                <li key={g.slug}>
                  <Link
                    to={`/${g.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="hover:text-gold transition-colors"
                  >
                    {g.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-3 flex items-center gap-2"
            >
              <Building2 className="w-4 h-4 text-gold" />
              Hôpitaux
            </h4>
            <ul className="space-y-2 text-sm">
              {HOPITAUX.map((h) => (
                <li key={h.slug}>
                  <Link
                    to={`/${h.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="hover:text-gold transition-colors"
                  >
                    {h.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aéroports */}
          <div>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-4"
            >
              Transferts Aéroport
            </h4>
            <ul className="space-y-2 text-sm">
              {AIRPORTS.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/${a.slug}`}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="hover:text-gold transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-white text-lg font-semibold mb-3 mt-6"
            >
              Pages
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/contact"
                  style={{ fontFamily: "var(--font-body)" }}
                  className="hover:text-gold transition-colors"
                >
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{ fontFamily: "var(--font-body)" }}
                  className="hover:text-gold transition-colors"
                >
                  Accueil
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} {COMPANY_NAME} — Taxi Pacy-sur-Eure, Vallée de l'Eure,
            Normandie. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
            <span style={{ fontFamily: "var(--font-body)" }} className="ml-1">
              Noté 5/5 par nos clients
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}