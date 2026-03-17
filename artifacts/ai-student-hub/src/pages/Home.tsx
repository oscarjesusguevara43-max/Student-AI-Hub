import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Presentation,
  PenTool,
  CalendarClock,
  Download,
  Zap,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolCard, type ToolProps } from "@/components/ToolCard";
import { CookieBanner } from "@/components/CookieBanner";

const TOOLS: ToolProps[] = [
  {
    id: 1,
    name: "Perplexity AI",
    tagline: "Investigación Real",
    description:
      "Como ChatGPT pero con fuentes reales de internet. Ideal para bibliografías y trabajos que requieran citas exactas.",
    url: "https://perplexity.ai",
    icon: <Search size={22} />,
  },
  {
    id: 2,
    name: "Humata.ai",
    tagline: "Resumidor de PDFs",
    description:
      "Sube un PDF de 50 páginas y hazle preguntas. Te responde en segundos.",
    url: "https://humata.ai",
    icon: <FileText size={22} />,
  },
  {
    id: 3,
    name: "Gamma",
    tagline: "Presentaciones con IA",
    description:
      "Crea presentaciones completas y atractivas con un solo prompt. Dile adiós al PowerPoint.",
    url: "https://gamma.app",
    icon: <Presentation size={22} />,
  },
  {
    id: 4,
    name: "DeepL Write",
    tagline: "Corrector Pro",
    description:
      "No solo corrige ortografía, mejora el tono de tus ensayos para que parezcan de nivel universitario.",
    url: "https://deepl.com/write",
    icon: <PenTool size={22} />,
  },
  {
    id: 5,
    name: "Reclaim AI",
    tagline: "Gestión de Tiempo",
    description:
      "Organiza tu calendario de estudios automáticamente para que tengas tiempo de salir.",
    url: "https://reclaim.ai",
    icon: <CalendarClock size={22} />,
  },
];

export default function Home() {
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#ffffff" }}>

      {/* ─── HEADER ─────────────────────────────────────────────── */}
      <header
        style={{
          padding: "20px 0",
          borderBottom: "1px solid #2a2a2a",
          position: "sticky",
          top: 0,
          backgroundColor: "rgba(18,18,18,0.92)",
          zIndex: 1000,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="site-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: 800, fontSize: "1.2rem", textDecoration: "none", color: "#ffffff" }}>
            <img
              src="/brain_logo.png"
              alt="AI Student Hub"
              style={{ width: "40px", height: "40px", borderRadius: "10px", objectFit: "cover" }}
            />
            AI Student Hub
          </a>

          <a
            href="#download"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "#6366f1",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#4f46e5")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#6366f1")}
          >
            <Download size={14} />
            Guía Gratis
          </a>
        </div>
      </header>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          padding: "60px 0 40px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="site-container">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}
          >
            <img
              src="/hero_exams.png"
              alt="Exámenes con calificación perfecta de 100"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "24px",
                boxShadow: "0 8px 40px rgba(99,102,241,0.35)",
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            style={{
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: "20px",
              maxWidth: "800px",
              marginInline: "auto",
            }}
            className="hero-h1"
          >
            Pasa tus materias en{" "}
            <span style={{ color: "#6366f1" }}>tiempo récord 🚀</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            style={{
              color: "#a1a1aa",
              fontSize: "1.1rem",
              maxWidth: "550px",
              margin: "0 auto 40px",
            }}
          >
            Las herramientas de IA que tus profes{" "}
            <strong style={{ color: "#ffffff" }}>no quieren que conozcas</strong>.
            Haz tareas de horas en segundos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href="#tools"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "16px 30px",
                borderRadius: "12px",
                backgroundColor: "#6366f1",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "1.1rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
                transition: "background-color 0.2s, transform 0.2s",
                minHeight: "56px",
                width: "100%",
                maxWidth: "380px",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#4f46e5";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#6366f1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Ver las herramientas
              <ChevronDown size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ────────────────────────────────────────── */}
      <main>
        <div className="site-container">

          {/* AD SLOT 1 */}
          <div style={{ margin: "30px 0" }}>
            <AdPlaceholder type="banner" />
          </div>

          {/* TOOLS SECTION */}
          <section id="tools" style={{ padding: "60px 0", scrollMarginTop: "80px" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <p style={{ color: "#6366f1", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <Sparkles size={14} />
                Seleccionadas para estudiantes universitarios
              </p>
              <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-1px", margin: 0 }}>
                Las 5 IAs que necesitas conocer
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {TOOLS.slice(0, 3).map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} index={i} />
              ))}

              {/* AD SLOT 2 */}
              <div style={{ margin: "14px 0" }}>
                <AdPlaceholder type="native" />
              </div>

              {TOOLS.slice(3).map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} index={i + 3} />
              ))}
            </div>
          </section>

          {/* AD SLOT 3 */}
          <div style={{ margin: "0 0 30px" }}>
            <AdPlaceholder type="banner" />
          </div>

          {/* DOWNLOAD SECTION */}
          <section
            id="download"
            style={{
              padding: "60px 0",
              textAlign: "center",
              scrollMarginTop: "80px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1e1e1e",
                border: "1px solid #2a2a2a",
                borderRadius: "20px",
                padding: "48px 32px",
                maxWidth: "680px",
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at top, rgba(99,102,241,0.12) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "20px" }}>🎁</span>

                <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.5px", marginBottom: "12px" }}>
                  ¡Bonus exclusivo para estudiantes!
                </h2>

                <p style={{ fontSize: "1.15rem", fontWeight: 600, color: "#818cf8", marginBottom: "12px" }}>
                  Descarga mi lista secreta de +50 Prompts<br />para sacar 10 en exámenes
                </p>

                <p style={{ color: "#a1a1aa", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 36px" }}>
                  Prompts probados para ChatGPT, Perplexity, DeepL y más.
                  Usado por más de 10,000 estudiantes.
                </p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <a
                    href="https://drive.google.com/file/d/1R0ApEtTxNG7Jm0lJV7un3S3nBfGRHLd9/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      padding: "18px 36px",
                      minHeight: "60px",
                      borderRadius: "12px",
                      backgroundColor: "#6366f1",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(99,102,241,0.4)",
                      transition: "background-color 0.2s, transform 0.2s",
                      width: "100%",
                      maxWidth: "380px",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#4f46e5";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#6366f1";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <Download size={22} />
                    DESCARGAR GUÍA PDF GRATIS
                  </a>
                </div>

                <p style={{ color: "#a1a1aa", fontSize: "0.8rem", marginTop: "16px" }}>
                  🔒 100% Gratis · Sin spam
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid #2a2a2a",
          padding: "48px 0",
          marginTop: "20px",
        }}
      >
        <div className="site-container" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <Zap size={16} fill="#6366f1" color="#6366f1" />
            <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>AI Student Hub</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 28px", marginBottom: "20px" }}>
            {["Política de Privacidad", "Términos de Uso", "Contacto"].map(link => (
              <a key={link} href="#" style={{ color: "#a1a1aa", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#6366f1")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#a1a1aa")}
              >
                {link}
              </a>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} AI Student Hub · Hecho para estudiantes, por estudiantes.
          </p>
        </div>
      </footer>

      <CookieBanner />

      {/* Responsive hero font size */}
      <style>{`
        .hero-h1 { font-size: 2.8rem; }
        @media (min-width: 768px) {
          .hero-h1 { font-size: 3.5rem; }
          .site-container { padding: 0 40px; }
        }
        @media (min-width: 1024px) {
          .hero-h1 { font-size: 4rem; }
        }
      `}</style>
    </div>
  );
}
