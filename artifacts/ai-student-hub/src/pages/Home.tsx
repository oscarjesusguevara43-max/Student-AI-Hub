import { motion } from "framer-motion";
import { 
  ChevronDown, 
  Search, 
  FileText, 
  Presentation, 
  PenTool, 
  CalendarClock,
  Download,
  Zap,
  Sparkles
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
    icon: <Search className="w-6 h-6" />
  },
  {
    id: 2,
    name: "Humata.ai",
    tagline: "Resumidor de PDFs",
    description: "Sube un PDF de 50 páginas y hazle preguntas. Te responde en segundos.",
    url: "https://humata.ai",
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 3,
    name: "Gamma",
    tagline: "Presentaciones con IA",
    description: "Crea presentaciones completas y atractivas con un solo prompt. Dile adiós al PowerPoint.",
    url: "https://gamma.app",
    icon: <Presentation className="w-6 h-6" />
  },
  {
    id: 4,
    name: "DeepL Write",
    tagline: "Corrector Pro",
    description: "No solo corrige ortografía, mejora el tono de tus ensayos para que parezcan de nivel universitario.",
    url: "https://deepl.com/write",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 5,
    name: "Reclaim AI",
    tagline: "Gestión de Tiempo",
    description: "Organiza tu calendario de estudios automáticamente para que tengas tiempo de salir.",
    url: "https://reclaim.ai",
    icon: <CalendarClock className="w-6 h-6" />
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/8 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2.5">
          <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-bold text-lg text-white tracking-tight">AI Student Hub</span>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 mb-10 text-4xl"
          >
            👨‍🎓
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6"
          >
            Pasa tus materias en{" "}
            <span className="text-indigo-400">tiempo récord 🚀</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Las herramientas de IA que tus profes{" "}
            <strong className="text-white font-semibold">no quieren que conozcas</strong>.
            Haz tareas de horas en segundos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <a
              href="#tools"
              className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 min-h-[56px] rounded-2xl shadow-xl shadow-indigo-500/25 hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
            >
              Ver las herramientas
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </header>

      <main className="px-6">
        <div className="max-w-3xl mx-auto space-y-20">

          {/* AD SLOT 1 */}
          <section>
            <AdPlaceholder type="banner" />
          </section>

          {/* TOOLS */}
          <section id="tools" className="scroll-mt-20">
            <div className="text-center mb-14">
              <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Seleccionadas para estudiantes universitarios
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white">
                Las 5 IAs que necesitas conocer
              </h2>
            </div>

            <div className="space-y-5">
              {TOOLS.slice(0, 3).map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} index={i} />
              ))}

              {/* AD SLOT 2 */}
              <div className="py-4">
                <AdPlaceholder type="native" />
              </div>

              {TOOLS.slice(3).map((tool, i) => (
                <ToolCard key={tool.id} tool={tool} index={i + 3} />
              ))}
            </div>
          </section>

          {/* AD SLOT 3 */}
          <section>
            <AdPlaceholder type="banner" />
          </section>

          {/* DOWNLOAD */}
          <section className="relative rounded-3xl border border-indigo-500/30 bg-indigo-500/5 p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 pointer-events-none" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 text-3xl mb-8">
                🎁
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                ¡Bonus exclusivo para estudiantes!
              </h2>

              <p className="text-xl font-semibold text-indigo-300 mb-4">
                Descarga mi lista secreta de +50 Prompts para sacar 10 en exámenes
              </p>

              <p className="text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
                Prompts probados para ChatGPT, Perplexity, DeepL y más.
                Usado por más de 10,000 estudiantes.
              </p>

              <button
                onClick={() => alert("¡Descarga iniciada!")}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 min-h-[60px] rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg shadow-2xl shadow-indigo-500/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-6 h-6" />
                DESCARGAR GUÍA PDF GRATIS
              </button>

              <p className="text-xs text-white/30 mt-6">
                🔒 100% Gratis · Sin spam
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-white/8 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-4 h-4 text-indigo-400 fill-indigo-400" />
            <span className="font-bold text-white/70">AI Student Hub</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/30 mb-8">
            <a href="#" className="hover:text-indigo-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a>
          </div>
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} AI Student Hub · Hecho para estudiantes, por estudiantes.
          </p>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
