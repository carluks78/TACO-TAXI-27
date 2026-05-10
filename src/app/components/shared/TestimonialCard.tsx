import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

export default function TestimonialCard({ name, city, rating, text, date }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      {/* Text */}
      <p
        style={{ fontFamily: "var(--font-body)" }}
        className="text-sm text-foreground leading-relaxed mb-4 italic"
      >
        "{text}"
      </p>
      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p style={{ fontFamily: "var(--font-body)" }} className="font-semibold text-sm text-navy-dark">
            {name}
          </p>
          <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-muted-foreground">
            {city}
          </p>
        </div>
        <span style={{ fontFamily: "var(--font-body)" }} className="text-xs text-muted-foreground">
          {date}
        </span>
      </div>
    </div>
  );
}
