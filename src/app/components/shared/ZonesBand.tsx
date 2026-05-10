import React from "react";
import { Link } from "react-router";
import { MapPin, Train, Building2 } from "lucide-react";
import { ZONES, GARES, HOPITAUX } from "@/lib/seoData";

export default function ZonesBand() {
  return (
    <section className="bg-navy py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Zones */}
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-gold" />
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-white font-semibold text-lg"
          >
            Zones desservies — Vallée de l'Eure
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {ZONES.map((zone) => (
            <Link
              key={zone.slug}
              to={`/${zone.slug}`}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/40 text-white/80 hover:text-gold text-xs px-3 py-1.5 rounded-full transition-all"
            >
              <MapPin className="w-3 h-3" />
              Taxi {zone.name}
            </Link>
          ))}
        </div>

        {/* Gares */}
        <div className="flex items-center gap-2 mb-4">
          <Train className="w-5 h-5 text-gold" />
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-white font-semibold text-lg"
          >
            Transferts Gares SNCF
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {GARES.map((gare) => (
            <Link
              key={gare.slug}
              to={`/${gare.slug}`}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/40 text-white/80 hover:text-gold text-xs px-3 py-1.5 rounded-full transition-all"
            >
              <Train className="w-3 h-3" />
              {gare.name}
            </Link>
          ))}
        </div>

        {/* Hôpitaux */}
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-gold" />
          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-white font-semibold text-lg"
          >
            Transport Médical — Hôpitaux
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {HOPITAUX.map((hop) => (
            <Link
              key={hop.slug}
              to={`/${hop.slug}`}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/40 text-white/80 hover:text-gold text-xs px-3 py-1.5 rounded-full transition-all"
            >
              <Building2 className="w-3 h-3" />
              {hop.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
