import React from "react";
import { Link } from "react-router";
import { MapPin, Train, Building2 } from "lucide-react";
import { ZONES, GARES, HOPITAUX } from "@/lib/seoData";

const TEAL = "#3AB4B1";

export default function ZonesBand() {
  return (
    <section className="py-10 px-4 lg:px-8" style={{ background: "#0d2240" }}>
      <div className="max-w-7xl mx-auto">

        {/* Zones */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5" style={{ color: TEAL }} />
          <h2 style={{ fontFamily: "var(--font-heading)" }} className="text-white font-semibold text-lg">
            Taxi Chaignes dessert Pacy-sur-Eure — Zones desservies Vallée de l'Eure
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {ZONES.map((zone) => (
            <Link
              key={zone.slug}
              to={`/${zone.slug}`}
              style={{ fontFamily: "var(--font-body)", borderColor: `${TEAL}30` }}
              className="inline-flex items-center gap-1.5 text-white/70 text-xs px-3 py-1.5 rounded-full transition-all hover:text-white"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = `${TEAL}22`;
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `${TEAL}60`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = `${TEAL}30`;
              }}
            >
              <MapPin className="w-3 h-3" style={{ color: TEAL }} />
              Taxi {zone.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gares */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Train className="w-4 h-4" style={{ color: TEAL }} />
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-white font-semibold">
                Gares SNCF desservies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {GARES.map((g) => (
                <Link
                  key={g.slug}
                  to={`/${g.slug}`}
                  style={{ fontFamily: "var(--font-body)" }}
                  className="text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all"
                >
                  {g.name}
                </Link>
              ))}
            </div>
          </div>
          {/* Hôpitaux */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-gold" />
              <h3 style={{ fontFamily: "var(--font-heading)" }} className="text-white font-semibold">
                Hôpitaux &amp; Cliniques (CPAM)
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {HOPITAUX.map((h) => (
                <Link
                  key={h.slug}
                  to={`/${h.slug}`}
                  style={{ fontFamily: "var(--font-body)" }}
                  className="text-xs text-white/60 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all"
                >
                  {h.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}