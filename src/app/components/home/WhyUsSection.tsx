import React from "react";
import { Shield, Clock, CreditCard, Car, Award, HeartHandshake } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { motion } from "motion/react";

const TEAL = "#3AB4B1";

const reasons = [
  {
    icon: Clock,
    title: "Disponible 24h/24",
    desc: "TACO TAXI Chaignes dessert Pacy-sur-Eure jour et nuit, week-ends et jours fériés compris. Jamais de frais de réservation.",
    accent: TEAL,
  },
  {
    icon: Shield,
    title: "Taxi Conventionné CPAM",
    desc: "Agréé Sécurité Sociale pour le transport sanitaire. Prise en charge directe, tiers payant sans avance de frais.",
    accent: "#D4AF37",
  },
  {
    icon: CreditCard,
    title: "Tarifs Transparents",
    desc: "Compteur homologué, devis gratuit pour les longues distances. Paiement CB accepté. Aucune mauvaise surprise.",
    accent: TEAL,
  },
  {
    icon: Car,
    title: "Véhicules Confortables",
    desc: "Flotte récente, climatisée, entretenue régulièrement. Coffre spacieux pour vos bagages et équipements médicaux.",
    accent: "#D4AF37",
  },
  {
    icon: Award,
    title: "Chauffeur Professionnel",
    desc: "Chauffeur expérimenté, courtois et connaissant parfaitement Chaignes, Pacy-sur-Eure, Vernon, Évreux et toute la vallée de l'Eure.",
    accent: TEAL,
  },
  {
    icon: HeartHandshake,
    title: "Service Humain",
    desc: "Aide aux personnes à mobilité réduite, accompagnement patient. Nous prenons soin de chaque passager comme d'un proche.",
    accent: "#D4AF37",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Pourquoi choisir TACO TAXI ?"
          subtitle="Un service de taxi de confiance, professionnel et adapté à tous vos besoins dans l'Eure"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center"
                style={{ background: `${accent}18` }}
              >
                <Icon className="w-5 h-5" style={{ color: accent }} />
              </div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-base font-bold mb-1 text-navy-dark"
                >
                  {title}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-body)" }}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}