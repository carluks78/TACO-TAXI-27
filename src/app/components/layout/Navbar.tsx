import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X, ChevronDown, MapPin, Briefcase, Plane, Train, Building2 } from "lucide-react";
import { PHONE, PHONE_LINK, COMPANY_NAME, ZONES, SERVICES, AIRPORTS, GARES, HOPITAUX } from "@/lib/seoData";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../../imports/Taxi-pacy-sur-eure-gare-ae_roport-vsl-me_dical-cpam.png";

function DropdownMenu({
  label,
  icon: Icon,
  items,
  onClose,
}: {
  label: string;
  icon: React.ElementType;
  items: { slug: string; name: string }[];
  onClose?: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        style={{ fontFamily: "var(--font-body)" }}
        className="flex items-center gap-1.5 text-white/90 hover:text-gold transition-colors text-sm font-medium py-2"
      >
        <Icon className="w-4 h-4" />
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 bg-navy-dark border border-white/10 rounded-lg shadow-2xl min-w-[220px] py-2 z-50 max-h-64 overflow-y-auto"
          >
            {items.map((item) => (
              <Link
                key={item.slug}
                to={`/${item.slug}`}
                onClick={() => {
                  setOpen(false);
                  onClose?.();
                }}
                style={{ fontFamily: "var(--font-body)" }}
                className="block px-4 py-2 text-sm text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/taxi-pacy-sur-eure", label: "Taxi Pacy" },
    { to: "/taxi-conventionne-cpam-pacy-sur-eure", label: "Taxi CPAM" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-gold text-navy-dark text-xs py-1.5 px-4 text-center">
        <a
          href={PHONE_LINK}
          style={{ fontFamily: "var(--font-body)" }}
          className="inline-flex items-center gap-1.5 font-semibold hover:underline"
        >
          <Phone className="w-3 h-3" />
          Réservation immédiate : {PHONE} — Disponible 24h/24 7j/7
        </a>
      </div>

      {/* Main nav */}
      <nav className="bg-navy sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src={logoImg}
                alt="TACO TAXI Pacy-sur-Eure – Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ fontFamily: "var(--font-body)" }}
                  className={`text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive(link.to) ? "text-gold" : "text-white/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <DropdownMenu label="Zones" icon={MapPin} items={ZONES} />
              <DropdownMenu label="Services" icon={Briefcase} items={SERVICES} />
              <DropdownMenu label="Aéroports" icon={Plane} items={AIRPORTS} />
              <DropdownMenu label="Gares" icon={Train} items={GARES} />
              <DropdownMenu label="Hôpitaux" icon={Building2} items={HOPITAUX} />
              <Link
                to="/contact"
                style={{ fontFamily: "var(--font-body)" }}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive("/contact") ? "text-gold" : "text-white/90 hover:text-gold"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={PHONE_LINK}
                style={{ fontFamily: "var(--font-body)" }}
                className="hidden sm:inline-flex bg-gold hover:bg-gold-light text-navy-dark font-semibold text-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap"
              >
                Réserver
              </a>
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-navy-dark border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    style={{ fontFamily: "var(--font-body)" }}
                    className="block py-2.5 text-white/90 hover:text-gold text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
                {[
                  { label: "Zones desservies", items: ZONES, key: "zones" },
                  { label: "Services", items: SERVICES, key: "services" },
                  { label: "Aéroports", items: AIRPORTS, key: "airports" },
                  { label: "Gares SNCF", items: GARES, key: "gares" },
                  { label: "Hôpitaux", items: HOPITAUX, key: "hopitaux" },
                ].map(({ label, items, key }) => (
                  <div key={key}>
                    <button
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === key ? null : key)
                      }
                      style={{ fontFamily: "var(--font-body)" }}
                      className="flex items-center justify-between w-full py-2.5 text-white/90 hover:text-gold text-sm"
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileDropdown === key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDropdown === key && (
                      <div className="pl-4 space-y-1 pb-2">
                        {items.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/${item.slug}`}
                            onClick={() => setMobileOpen(false)}
                            style={{ fontFamily: "var(--font-body)" }}
                            className="block py-1.5 text-white/60 hover:text-gold text-sm"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: "var(--font-body)" }}
                  className="block py-2.5 text-white/90 hover:text-gold text-sm"
                >
                  Contact
                </Link>
                <a
                  href={PHONE_LINK}
                  style={{ fontFamily: "var(--font-body)" }}
                  className="block w-full text-center bg-gold text-navy-dark font-semibold py-3 rounded-full mt-4"
                >
                  Réserver maintenant
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
