import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Phone, Menu, X, ChevronDown, MapPin, Briefcase, Plane, Train, Building2, ExternalLink
} from "lucide-react";
import {
  PHONE, PHONE_LINK, COMPANY_NAME, ZONES, SERVICES, AIRPORTS, GARES, HOPITAUX
} from "@/lib/seoData";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../../imports/Taxi-pacy-sur-eure-gare-ae_roport-vsl-me_dical-cpam.png";

// ── Desktop dropdown (portal-free, z-[200]) ──────────────────────
function DesktopDropdown({
  label,
  icon: Icon,
  items,
}: {
  label: string;
  icon: React.ElementType;
  items: { slug: string; name: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        style={{ fontFamily: "var(--font-body)" }}
        className="flex items-center gap-1.5 text-white/90 hover:text-gold transition-colors text-sm font-medium py-2"
        aria-expanded={open}
        aria-haspopup="true"
      >
        <Icon className="w-4 h-4" />
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown panel — rendered in normal flow, z high enough */}
      <AnimatePresence>
        {open && (
          <motion.div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-navy-dark border border-white/10 rounded-xl shadow-2xl py-2 z-[200]"
            style={{ minWidth: "220px", maxHeight: "70vh", overflowY: "auto" }}
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "var(--font-body)" }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
              >
                <ExternalLink className="w-3 h-3 opacity-40 flex-shrink-0" />
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Mobile accordion item ─────────────────────────────────────────
function MobileAccordion({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: {
  label: string;
  items: { slug: string; name: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        style={{ fontFamily: "var(--font-body)" }}
        className="flex items-center justify-between w-full py-3 text-white/90 hover:text-gold text-sm"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-2 pl-3 space-y-0.5">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/${item.slug}`}
              onClick={onClose}
              style={{ fontFamily: "var(--font-body)" }}
              className="flex items-center gap-2 py-2 text-white/70 hover:text-gold text-sm transition-colors"
            >
              <ChevronDown className="w-3 h-3 -rotate-90 opacity-40" />
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Navbar ───────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const toggleSection = (key: string) =>
    setMobileSection((prev) => (prev === key ? null : key));

  const mobileSections = [
    { label: "Zones desservies", items: ZONES, key: "zones" },
    { label: "Nos Services", items: SERVICES, key: "services" },
    { label: "Aéroports", items: AIRPORTS, key: "airports" },
    { label: "Gares SNCF", items: GARES, key: "gares" },
    { label: "Hôpitaux", items: HOPITAUX, key: "hopitaux" },
  ];

  return (
    <>
      {/* ── Scrolling top bar ── */}
      <div className="overflow-hidden w-full" style={{ background: "#D4AF37", height: "34px" }}>
        <div className="animate-marquee h-full flex items-center text-xs font-medium" style={{ color: "#0B0B0B", width: "max-content" }}>
          {[0, 1].map((n) => (
            <span key={n} className="inline-flex items-center flex-shrink-0">
              <span style={{ fontFamily: "var(--font-body)" }} className="inline-flex items-center gap-1.5 font-semibold px-5">
                <Phone className="w-3 h-3" />
                Taxi Chaignes dessert Pacy-sur-Eure — Réservation 24h/24 7j/7 : {PHONE}
              </span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">✈️ Roissy CDG & Orly</span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">🚆 Gare Vernon · Évreux · Mantes-la-Jolie</span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">🏥 Transport CPAM · Conventionné Sécu</span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">⭐ Noté 5/5 par nos clients</span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">📍 Chaignes · Pacy-sur-Eure · Ménilles · Breuilpont · Vernon · Évreux</span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">🚖 Longue Distance Paris · Rouen · Caen · Le Havre</span>
              <span className="opacity-30 mx-1">•</span>
              <span style={{ fontFamily: "var(--font-body)" }} className="px-4">🌿 Taxi Giverny Jardins de Monet</span>
              <span className="opacity-30 mx-1">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main nav — BLACK header ── */}
      <nav className="sticky top-0 z-[100] border-b shadow-lg" style={{ background: "#0B0B0B", borderColor: "rgba(58,180,177,0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={logoImg}
                alt={`${COMPANY_NAME} — Taxi Pacy-sur-Eure Logo`}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden xl:flex items-center gap-3 2xl:gap-4">
              <Link
                to="/"
                style={{ fontFamily: "var(--font-body)" }}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${isActive("/") ? "text-gold" : "text-white/90 hover:text-gold"}`}
              >
                Accueil
              </Link>
              <Link
                to="/taxi-pacy-sur-eure"
                style={{ fontFamily: "var(--font-body)" }}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${isActive("/taxi-pacy-sur-eure") ? "text-gold" : "text-white/90 hover:text-gold"}`}
              >
                Taxi Pacy
              </Link>
              <Link
                to="/taxi-conventionne-cpam-pacy-sur-eure"
                style={{ fontFamily: "var(--font-body)" }}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${isActive("/taxi-conventionne-cpam-pacy-sur-eure") ? "text-gold" : "text-white/90 hover:text-gold"}`}
              >
                CPAM
              </Link>
              <DesktopDropdown label="Zones" icon={MapPin} items={ZONES} />
              <DesktopDropdown label="Services" icon={Briefcase} items={SERVICES} />
              <DesktopDropdown label="Aéroports" icon={Plane} items={AIRPORTS} />
              <DesktopDropdown label="Gares SNCF" icon={Train} items={GARES} />
              <DesktopDropdown label="Hôpitaux" icon={Building2} items={HOPITAUX} />
              <Link
                to="/contact"
                style={{ fontFamily: "var(--font-body)" }}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${isActive("/contact") ? "text-gold" : "text-white/90 hover:text-gold"}`}
              >
                Contact
              </Link>
            </div>

            {/* Right: CTA + hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={PHONE_LINK}
                style={{ fontFamily: "var(--font-body)" }}
                className="hidden sm:inline-flex items-center gap-1.5 bg-gold hover:bg-gold-light text-navy-dark font-semibold text-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Réserver</span>
                <span className="md:hidden">{PHONE}</span>
              </a>

              {/* Mobile: show phone number as link */}
              <a
                href={PHONE_LINK}
                className="sm:hidden inline-flex items-center gap-1 bg-gold text-navy-dark font-semibold text-xs px-3 py-2 rounded-full"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              <button
                className="xl:hidden text-white p-2 hover:text-gold transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden bg-navy-dark border-t border-white/10 overflow-y-auto"
              style={{ maxHeight: "calc(100dvh - 130px)" }}
            >
              <div className="px-4 py-3 space-y-0.5">

                {/* Direct links */}
                {[
                  { to: "/", label: "Accueil" },
                  { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy-sur-Eure" },
                  { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi Conventionné CPAM" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    style={{ fontFamily: "var(--font-body)" }}
                    className={`block py-3 text-sm border-b border-white/10 ${isActive(link.to) ? "text-gold" : "text-white/90 hover:text-gold"} transition-colors`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Accordions */}
                {mobileSections.map(({ label, items, key }) => (
                  <MobileAccordion
                    key={key}
                    label={label}
                    items={items}
                    isOpen={mobileSection === key}
                    onToggle={() => toggleSection(key)}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}

                {/* Contact link */}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "var(--font-body)" }}
                  className="block py-3 text-sm text-white/90 hover:text-gold border-b border-white/10 transition-colors"
                >
                  Contact
                </Link>

                {/* CTA */}
                <div className="pt-3 pb-2">
                  <a
                    href={PHONE_LINK}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="flex items-center justify-center gap-2 w-full bg-gold text-navy-dark font-bold py-3.5 rounded-full text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler {PHONE}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
