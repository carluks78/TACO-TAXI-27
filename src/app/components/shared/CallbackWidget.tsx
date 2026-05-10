import React, { useState } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CallbackWidget() {
  const [open, setOpen] = useState(false);

  const handleSMS = () => {
    const phone = "+33667962396";

    const message = encodeURIComponent(
      "Bonjour, je souhaite être rappelé par TACO TAXI 27."
    );

    window.location.href = `sms:${phone}?body=${message}`;
  };

  return (
    <div className="fixed bottom-24 left-4 z-40 flex flex-col items-start">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-white rounded-2xl shadow-2xl border border-border w-72 overflow-hidden"
          >
            <div className="bg-navy px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    Être rappelé
                  </p>
                  <p className="text-white/70 text-xs">
                    Réponse en moins de 5 min
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Cliquez ci-dessous pour envoyer une demande de rappel.
              </p>

              <button
                onClick={handleSMS}
                className="w-full bg-gold text-navy-dark text-sm font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gold-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                Envoyer la demande
              </button>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                Vous serez rappelé rapidement
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-navy rounded-full shadow-xl flex items-center gap-2 px-4 h-12 text-white"
        aria-label="Me faire rappeler"
        title="Me faire rappeler"
      >
        <Phone className="w-5 h-5" />
        <span className="text-sm font-medium">
          Me faire rappeler
        </span>
      </motion.button>
    </div>
  );
}
