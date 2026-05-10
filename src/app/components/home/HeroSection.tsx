import React from "react";
import { Phone, Shield, Clock, Star } from "lucide-react";
import { PHONE_LINK, PHONE, WHATSAPP_NUMBER } from "@/lib/seoData";
import { motion } from "motion/react";
import heroImg from "../../../imports/taxi-pacy-sur-eure-vernon-evreux-bueil-breuilpont-fains-jouy-sur-eure-gare-ae_roport-me_dical-longue-distance-cpam-evreux-vernon-mantes-la-jolie-rouen-paris-hopital.png";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="TACO TAXI – Taxi professionnel Pacy-sur-Eure, Vallée de l'Eure, Normandie – Gare, Aéroport, Médical, CPAM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
            <span
              style={{ fontFamily: "var(--font-body)" }}
              className="text-gold text-xs font-semibold"
            >
              Service noté 5/5 — Disponible 24h/24 7j/7
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Taxi Pacy-sur-Eure - réservation depuis chaigne 24h/24
            <span className="text-gold block mt-2">TACO TAXI</span>
          </h1>

          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Votre <strong>taxi à Pacy-sur-Eure</strong> disponible jour et nuit dans toute la{" "}
            <strong>vallée de l'Eure</strong>. Transferts <strong>gare Vernon</strong>,{" "}
            <strong>aéroport Roissy & Orly</strong>,{" "}
            <strong>taxi conventionné CPAM</strong>, transport médical assis et longue distance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={PHONE_LINK}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy-dark font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Appeler : {PHONE}
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour TACO TAXI, je souhaite réserver un taxi. ")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20B358] text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg"
            >
              {WA_ICON}
              WhatsApp réservation
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, text: "CPAM Agréé" },
              { icon: Clock, text: "24h/24 7j/7" },
              { icon: Star, text: "5/5 Avis clients" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/70">
                <Icon className="w-4 h-4 text-gold" />
                <span style={{ fontFamily: "var(--font-body)" }} className="text-sm">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
