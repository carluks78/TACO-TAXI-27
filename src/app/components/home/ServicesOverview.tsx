import React from "react";
import { Link } from "react-router";
import { Train, Heart, Car, Route, Plane, Clock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/seoData";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "motion/react";

const iconMap: Record<string, React.ElementType> = {
  Train,
  Heart,
  Car,
  Route,
  Plane,
  Clock,
};

export default function ServicesOverview() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Nos Services de Taxi — Pacy-sur-Eure"
          subtitle="Un service complet de transport professionnel disponible 24h/24 dans toute la vallée de l'Eure et au-delà"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/${service.slug}`}
                  className="group block bg-card rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all h-full"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="text-lg font-bold mb-2 group-hover:text-gold transition-colors text-navy-dark"
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-muted-foreground leading-relaxed mb-4"
                  >
                    {service.description}
                  </p>
                  <span
                    style={{ fontFamily: "var(--font-body)" }}
                    className="inline-flex items-center gap-1 text-gold text-sm font-semibold"
                  >
                    En savoir plus{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
