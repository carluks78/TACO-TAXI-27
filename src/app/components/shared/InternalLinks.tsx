import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface InternalLinksProps {
  links: { to: string; label: string }[];
  title?: string;
}

export default function InternalLinks({ links, title = "Voir aussi" }: InternalLinksProps) {
  return (
    <section className="py-10 px-4 lg:px-8 bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="text-gold text-xs font-semibold uppercase tracking-widest mb-4"
        >
          {title}
        </p>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ fontFamily: "var(--font-body)" }}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-gold/20 border border-white/20 hover:border-gold/40 text-white/80 hover:text-gold text-sm px-4 py-2 rounded-full transition-all"
            >
              {link.label}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
