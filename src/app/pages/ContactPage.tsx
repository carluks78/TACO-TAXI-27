import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Check } from "lucide-react";
import { PHONE, PHONE_LINK, EMAIL, WHATSAPP_NUMBER, COMPANY_NAME } from "@/lib/seoData";
import SectionTitle from "../components/shared/SectionTitle";
import InternalLinks from "../components/shared/InternalLinks";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `📋 Nouvelle demande de taxi\nNom : ${form.name}\nTél : ${form.phone}\nMessage : ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Contactez <span className="text-gold">TACO TAXI</span>
          </h1>
          <p
            style={{ fontFamily: "var(--font-body)" }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Réservation immédiate par téléphone ou WhatsApp. Disponible 24h/24, 7j/7 à
            Pacy-sur-Eure et dans toute la vallée de l'Eure.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle title="Nos coordonnées" centered={false} />
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Téléphone (appel immédiat)",
                    value: PHONE,
                    href: PHONE_LINK,
                  },
                  {
                    icon: MessageCircle,
                    label: "WhatsApp (réservation rapide)",
                    value: PHONE,
                    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour TACO TAXI, je souhaite réserver.")}`,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: EMAIL,
                    href: `mailto:${EMAIL}`,
                  },
                  {
                    icon: MapPin,
                    label: "Zone d'intervention",
                    value: "Pacy-sur-Eure (27120) & Vallée de l'Eure",
                    href: null,
                  },
                  {
                    icon: Clock,
                    label: "Disponibilité",
                    value: "24h/24 — 7j/7 — Jours fériés inclus",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p
                        style={{ fontFamily: "var(--font-body)" }}
                        className="text-xs text-muted-foreground mb-0.5"
                      >
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          style={{ fontFamily: "var(--font-body)" }}
                          className="font-semibold text-navy-dark hover:text-gold transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p
                          style={{ fontFamily: "var(--font-body)" }}
                          className="font-semibold text-navy-dark"
                        >
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-8 p-6 bg-navy rounded-xl">
                <p
                  style={{ fontFamily: "var(--font-heading)" }}
                  className="text-white font-semibold mb-4"
                >
                  Réservation rapide
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={PHONE_LINK}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="flex items-center justify-center gap-2 bg-gold text-navy-dark font-bold py-3 rounded-full hover:bg-gold-light transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler maintenant : {PHONE}
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour TACO TAXI, je souhaite réserver un taxi. ")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-body)" }}
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 rounded-full hover:bg-[#20B358] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp réservation
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionTitle title="Envoyer un message" centered={false} />
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      style={{ fontFamily: "var(--font-body)" }}
                      className="block text-sm font-medium text-navy-dark mb-1.5"
                    >
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jean Dupont"
                      style={{ fontFamily: "var(--font-body)" }}
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-gold bg-white"
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "var(--font-body)" }}
                      className="block text-sm font-medium text-navy-dark mb-1.5"
                    >
                      Votre téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="06 XX XX XX XX"
                      style={{ fontFamily: "var(--font-body)" }}
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-gold bg-white"
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "var(--font-body)" }}
                      className="block text-sm font-medium text-navy-dark mb-1.5"
                    >
                      Votre message / demande *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Ex : Taxi Pacy-sur-Eure → Gare Vernon, le 15 juin à 8h00"
                      style={{ fontFamily: "var(--font-body)" }}
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-gold resize-none bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ fontFamily: "var(--font-body)" }}
                    className="w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-4 rounded-full hover:bg-navy-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Envoyer via WhatsApp
                  </button>
                  <p
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-xs text-muted-foreground text-center"
                  >
                    Votre message sera envoyé via WhatsApp. Réponse garantie sous 5 min.
                  </p>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3
                    style={{ fontFamily: "var(--font-heading)" }}
                    className="text-xl font-bold text-navy-dark mb-2"
                  >
                    Message envoyé !
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-muted-foreground text-sm mb-6"
                  >
                    {COMPANY_NAME} vous répondra dans les 5 minutes.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-gold hover:underline text-sm"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <InternalLinks
        links={[
          { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
          { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
          { to: "/taxi-gare-vernon", label: "Taxi Gare Vernon" },
          { to: "/taxi-giverny", label: "Taxi Giverny" },
          { to: "/transfert-aeroport-roissy", label: "Aéroport Roissy CDG" },
        ]}
      />
    </>
  );
}
