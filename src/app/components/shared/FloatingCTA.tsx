import React from "react";
import { Phone } from "lucide-react";
import { PHONE_LINK, PHONE } from "@/lib/seoData";
import { motion } from "motion/react";

export default function FloatingCTA() {
  return (
    <motion.a
      href={PHONE_LINK}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gold text-navy-dark px-4 py-3 rounded-full shadow-2xl"
      title={`Appeler TACO TAXI : ${PHONE}`}
      aria-label={`Appeler TACO TAXI : ${PHONE}`}
    >
      <Phone className="w-5 h-5 flex-shrink-0" />
      <span style={{ fontFamily: "var(--font-body)" }} className="font-bold text-sm hidden sm:inline whitespace-nowrap">
        {PHONE}
      </span>
    </motion.a>
  );
}
