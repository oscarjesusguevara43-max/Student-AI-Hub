import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookie_consent");
    if (!hasAccepted) {
      // Small delay so it doesn't pop up instantly on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="glass-panel rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 border-primary/20 shadow-2xl shadow-primary/10">
              <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full items-center justify-center text-primary">
                <Cookie className="w-6 h-6" />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-sm font-bold text-foreground mb-1 flex items-center justify-center md:justify-start gap-2">
                  <Cookie className="w-4 h-4 md:hidden text-primary" />
                  Aviso de Privacidad
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Usamos cookies para mejorar tu experiencia y mostrar publicidad relevante. Al continuar, aceptas nuestra política de privacidad.
                </p>
              </div>
              
              <div className="flex flex-shrink-0 gap-3 w-full md:w-auto mt-2 md:mt-0">
                <button 
                  onClick={() => setIsVisible(false)}
                  className="flex-1 md:flex-none px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
                >
                  Más Info
                </button>
                <button 
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground shadow-md hover:shadow-lg hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Aceptar
                </button>
              </div>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:bg-muted rounded-full transition-colors md:hidden"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
