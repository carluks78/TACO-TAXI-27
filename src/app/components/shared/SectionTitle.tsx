import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        style={{ fontFamily: "var(--font-heading)" }}
        className="font-bold text-navy-dark mb-3 text-[24px]"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{ fontFamily: "var(--font-body)" }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gold rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
