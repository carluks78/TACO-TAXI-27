import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const GOOGLE_REVIEW_URL = "https://g.page/r/CQDMv_pAsXR0EAE/review";

// Real Google "G" logo SVG
const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" className="flex-shrink-0">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

export default function GoogleReviewButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-[5.5rem] right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="mb-2 bg-white rounded-xl shadow-2xl border border-border p-4 w-64"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <GoogleLogo />
                <div>
                  <p style={{ fontFamily: "var(--font-body)" }} className="font-semibold text-sm text-gray-900">
                    TACO TAXI
                  </p>
                  <Stars />
                </div>
              </div>
              <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p style={{ fontFamily: "var(--font-body)" }} className="text-xs text-gray-600 mb-3">
              Votre avis compte énormément ! Aidez-nous à aider d'autres personnes. ⭐
            </p>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)" }}
              className="flex items-center justify-center gap-2 bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-colors w-full"
            >
              <GoogleLogo />
              Laisser un avis Google
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center gap-2 bg-white border-2 border-[#4285F4] shadow-xl rounded-full px-3 py-2"
        title="Laisser un avis Google"
        aria-label="Laisser un avis Google"
      >
        <GoogleLogo />
        <Stars />
        <span style={{ fontFamily: "var(--font-body)" }} className="text-xs font-bold text-gray-700 hidden sm:inline">
          Avis Google
        </span>
      </motion.a>
    </div>
  );
}
