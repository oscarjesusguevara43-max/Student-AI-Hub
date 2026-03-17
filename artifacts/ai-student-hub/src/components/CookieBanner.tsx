import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookie_consent");
    if (!hasAccepted) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
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
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 220 }}
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            padding: "16px",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              backgroundColor: "#1e1e1e",
              border: "1px solid #333",
              borderRadius: "16px",
              padding: "20px 24px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
              boxShadow: "0 -4px 40px rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                flex: 1,
                minWidth: "200px",
                color: "#a1a1aa",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              🍪 Usamos cookies para mejorar tu experiencia y mostrar publicidad relevante.
              Al continuar, aceptas nuestra{" "}
              <a href="#" style={{ color: "#818cf8", textDecoration: "underline" }}>
                política de privacidad
              </a>
              .
            </p>

            <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
              <button
                onClick={() => setIsVisible(false)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #333",
                  color: "#a1a1aa",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
              >
                Más Info
              </button>
              <button
                onClick={handleAccept}
                style={{
                  padding: "10px 22px",
                  borderRadius: "8px",
                  backgroundColor: "#6366f1",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#4f46e5")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#6366f1")}
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
