import React from "react";
import { Link } from "react-router";
import { Phone, MapPin } from "lucide-react";
import { PHONE_LINK, PHONE } from "@/lib/seoData";

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg">
        <p className="text-gold text-7xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          404
        </p>
        <h1 className="text-2xl font-bold text-navy-dark mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          Page introuvable
        </h1>
        <p className="text-muted-foreground mb-8" style={{ fontFamily: "var(--font-body)" }}>
          La page que vous recherchez n'existe pas. Retournez à l'accueil ou contactez TACO TAXI.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            style={{ fontFamily: "var(--font-body)" }}
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-dark transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <a
            href={PHONE_LINK}
            style={{ fontFamily: "var(--font-body)" }}
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-dark font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
