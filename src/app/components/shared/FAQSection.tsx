import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Questions fréquentes" }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title={title} />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span
                  style={{ fontFamily: "var(--font-body)" }}
                  className="font-semibold text-sm text-navy-dark pr-4"
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p
                    style={{ fontFamily: "var(--font-body)" }}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
