import { useEffect } from "react";

export function CookieBanner() {
  useEffect(() => {
    if (!localStorage.getItem("cookies-aceptadas")) {
      alert("Usamos cookies para mejorar tu experiencia y mostrarte anuncios relevantes.");
      localStorage.setItem("cookies-aceptadas", "true");
    }
  }, []);

  return null;
}
