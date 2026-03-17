import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ToolProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

interface ToolCardProps {
  tool: ToolProps;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/8 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
          {tool.icon}
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              #{tool.id}
            </span>
            <h3 className="text-xl font-bold text-white">
              {tool.name}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-semibold">
              {tool.tagline}
            </span>
          </div>

          <p className="text-white/60 text-sm md:text-base leading-relaxed line-clamp-2 mb-5">
            {tool.description}
          </p>

          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[48px] rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-indigo-500/25"
          >
            Probar Ahora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
