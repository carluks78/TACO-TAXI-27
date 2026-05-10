import React, { useState } from "react";
import { TESTIMONIALS } from "@/lib/seoData";
import SectionTitle from "../shared/SectionTitle";
import TestimonialCard from "../shared/TestimonialCard";
import { ChevronDown } from "lucide-react";

const INITIAL_COUNT = 6;

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, INITIAL_COUNT);

  return (
    <section className="py-20 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Avis Clients — TACO TAXI"
          subtitle="Découvrez pourquoi nos clients de Pacy-sur-Eure, Vernon, Évreux et toute la vallée de l'Eure nous font confiance"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        {!showAll && TESTIMONIALS.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-navy-dark font-semibold text-sm px-6 py-2.5 rounded-full transition-all"
            >
              Voir tous les avis ({TESTIMONIALS.length})
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
