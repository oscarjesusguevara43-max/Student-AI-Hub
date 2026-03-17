import { motion } from "framer-motion";
import { 
  ChevronDown, 
  Search, 
  FileText, 
  Presentation, 
  PenTool, 
  CalendarClock,
  Download,
  Sparkles,
  Zap,
  GraduationCap
} from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ToolCard, type ToolProps } from "@/components/ToolCard";
import { CookieBanner } from "@/components/CookieBanner";

const TOOLS: ToolProps[] = [
  {
    id: 1,
    name: "Perplexity AI",
    tagline: "Investigación Real",
    description: "Como ChatGPT pero con fuentes reales de internet. Ideal para bibliografías y trabajos que requieran citas exactas.",
    url: "https://perplexity.ai",
    colorClass: "from-blue-500 to-indigo-500",
    icon: <Search className="w-8 h-8" />
  },
  {
    id: 2,
    name: "Humata.ai",
    tagline: "Resumidor de PDFs",
    description: "Sube un PDF de 50 páginas y hazle preguntas. Te responde en segundos con referencias exactas al texto original.",
    url: "https://humata.ai",
    colorClass: "from-purple-500 to-pink-500",
    icon: <FileText className="w-8 h-8" />
  },
  {
    id: 3,
    name: "Gamma",
    tagline: "Presentaciones con IA",
    description: "Crea presentaciones completas y atractivas con un solo prompt. Dile adiós a pasar horas acomodando cuadros en PowerPoint.",
    url: "https://gamma.app",
    colorClass: "from-orange-500 to-rose-500",
    icon: <Presentation className="w-8 h-8" />
  },
  {
    id: 4,
    name: "DeepL Write",
    tagline: "Corrector Pro",
    description: "No solo corrige ortografía, mejora el tono de tus ensayos para que parezcan escritos a nivel universitario avanzado.",
    url: "https://deepl.com/write",
    colorClass: "from-emerald-500 to-teal-500",
    icon: <PenTool className="w-8 h-8" />
  },
  {
    id: 5,
    name: "Reclaim AI",
    tagline: "Gestión de Tiempo",
    description: "Organiza tu calendario de estudios automáticamente alrededor de tus clases para que tengas tiempo libre real para salir.",
    url: "https://reclaim.ai",
    colorClass: "from-cyan-500 to-blue-500",
    icon: <CalendarClock className="w-8 h-8" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      {/* Navigation (Minimal) */}
      <nav className="absolute top-0 w-full p-6 flex justify-center md:justify-between items-center z-10">
        <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span>AI Student Hub</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-gradient-hero border-b border-border/50">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full pointer-events-none opacity-40 blur-3xl">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full mix-blend-multiply animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply animate-pulse delay-700" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-xl shadow-primary/10 mb-8 border border-primary/10"
          >
            <span className="text-6xl md:text-7xl leading-none">👨‍🎓💻</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-foreground mb-6"
          >
            Pasa tus materias en <br className="hidden md:block" />
            <span className="text-gradient-primary">tiempo récord 🚀</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Las herramientas de IA que tus profes <strong className="text-foreground">no quieren que conozcas</strong>. Haz tareas de horas en segundos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <a 
              href="#tools"
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 md:py-5 min-h-[56px] rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-black/20 hover:shadow-black/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
            >
              Ver las herramientas
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </header>

      <main className="px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* AD SLOT 1 */}
          <section className="w-full">
            <AdPlaceholder 
              label="📢 Espacio Publicitario #1 – Banner Superior" 
              subLabel="Este es el primero que carga. Paga bien porque todos lo ven al entrar."
              className="bg-white"
            />
          </section>

          {/* TOOLS SECTION */}
          <section id="tools" className="scroll-mt-24">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
                Las 5 IAs que necesitas conocer
              </h2>
              <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Seleccionadas especialmente para estudiantes universitarios
              </p>
            </div>

            <div className="space-y-8 md:space-y-12 pl-4 md:pl-6">
              {TOOLS.slice(0, 3).map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}

              {/* AD SLOT 2 (Native) */}
              <div className="py-4">
                <AdPlaceholder 
                  type="native"
                  label="🚀 Espacio Publicitario #2 – Anuncio Nativo" 
                  subLabel="Colocado estratégicamente. El usuario ya está interesado y haciendo scroll."
                />
              </div>

              {TOOLS.slice(3, 5).map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index + 3} />
              ))}
            </div>
          </section>

          {/* AD SLOT 3 */}
          <section className="w-full pt-8">
            <AdPlaceholder 
              label="📣 Espacio Publicitario #3 – Antes del Botón de Descarga" 
              subLabel="Aumenta visibilidad porque el usuario pausa aquí para buscar el botón de descarga."
            />
          </section>

          {/* DOWNLOAD BONUS SECTION */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative bg-background/95 backdrop-blur-xl rounded-[23px] p-8 md:p-16 text-center border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black font-display mb-4 text-foreground">
                🎁 ¡Bonus exclusivo para estudiantes!
              </h2>
              
              <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
                Descarga mi lista secreta de +50 Prompts para sacar 10 en exámenes
              </p>
              
              <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                Prompts probados para ChatGPT, Perplexity, DeepL y más. Usado por más de 10,000 estudiantes para optimizar sus sesiones de estudio.
              </p>

              <button 
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 min-h-[60px] overflow-hidden rounded-2xl font-black text-lg md:text-xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
                onClick={() => alert("¡Descarga iniciada! (Simulación)")}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient"></span>
                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-3">
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  DESCARGAR GUÍA PDF GRATIS
                </span>
              </button>
              
              <p className="text-xs text-muted-foreground mt-6 font-medium">
                🔒 100% Gratis. Sin spam.
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/50 bg-muted/30 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 font-display font-bold text-lg mb-6 opacity-80">
            <Zap className="w-4 h-4 fill-primary text-primary" />
            <span>AI Student Hub</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} AI Student Hub. Todos los derechos reservados.
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            Hecho para estudiantes, por estudiantes.
          </p>
        </div>
      </footer>

      {/* Global Modals/Banners */}
      <CookieBanner />
    </div>
  );
}
