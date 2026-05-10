import React from "react";
import { Link, useLocation } from "react-router";
import { Phone, Car, Train, Heart, Route, Plane, Clock } from "lucide-react";
import { PHONE, PHONE_LINK, SERVICES } from "@/lib/seoData";
import { serviceContent, getDefaultServiceContent } from "@/lib/serviceContent";
import ZonesBand from "../components/shared/ZonesBand";
import FAQSection from "../components/shared/FAQSection";
import InternalLinks from "../components/shared/InternalLinks";
import TestimonialsSection from "../components/home/TestimonialsSection";

const iconMap: Record<string, React.ElementType> = { Car, Train, Heart, Route, Plane, Clock };

export default function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/") ? location.pathname.slice(1) : location.pathname;
  const service = SERVICES.find((s) => s.slug === slug);
  const name =
    service?.name ||
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
  const data = serviceContent[slug] || getDefaultServiceContent(name);
  const Icon = service ? iconMap[service.icon] || Car : Car;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Icon className="w-4 h-4 text-gold" />
            <span
              style={{ fontFamily: "var(--font-body)" }}
              className="text-gold text-xs font-semibold"
            >
              TACO TAXI — Service Pacy-sur-Eure
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {data.h1}
            <span className="text-gold block mt-1 text-2xl md:text-3xl">{data.sub}</span>
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-white/80 text-lg max-w-3xl mb-8"
          >
            {data.intro}
          </p>
          <a
            href={PHONE_LINK}
            style={{ fontFamily: "var(--font-body)" }}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold px-8 py-4 rounded-full transition-colors"
          >
            <Phone className="w-5 h-5" />
            Réserver : {PHONE}
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 lg:px-8 max-w-4xl mx-auto">
        <article>
          {data.content.map((block, i) => (
            <div key={i} className="mb-8">
              <h2
                style={{ fontFamily: "var(--font-heading)" }}
                className="text-2xl font-bold mb-4 text-navy-dark"
              >
                {block.title}
              </h2>
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="text-muted-foreground leading-relaxed"
              >
                {block.text}
              </p>
            </div>
          ))}
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            Découvrez aussi nos autres services :{" "}
            <Link to="/taxi-gare-vernon" className="text-gold hover:underline">
              taxi gare de Vernon
            </Link>
            ,{" "}
            <Link to="/transfert-aeroport-roissy" className="text-gold hover:underline">
              transfert aéroport Roissy CDG
            </Link>
            ,{" "}
            <Link to="/taxi-pacy-sur-eure" className="text-gold hover:underline">
              taxi Pacy-sur-Eure
            </Link>{" "}
            pour tous vos déplacements dans l'Eure.
          </p>
        </article>
      </section>

      <ZonesBand />
      <TestimonialsSection />
      <FAQSection faqs={data.faqs} title={`FAQ — ${data.h1}`} />
      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-gare-vernon", label: "Taxi Gare Vernon" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/contact", label: "Nous Contacter" },
        ]}
      />
    </>
  );
}