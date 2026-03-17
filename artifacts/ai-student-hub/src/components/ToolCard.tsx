import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToolProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  url: string;
  colorClass: string;
  icon: React.ReactNode;
}

interface ToolCardProps {
  tool: ToolProps;
  index: number;
}

export function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-border/50 hover:border-border transition-all duration-300"
    >
      {/* Number Badge */}
      <div className={cn(
        "absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white shadow-lg rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300",
        tool.colorClass
      )}>
        #{tool.id}
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        {/* Icon Container */}
        <div className={cn(
          "flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br shadow-inner",
          tool.colorClass
        )}>
          {tool.icon}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
            <h3 className="text-2xl font-bold text-foreground font-display">
              {tool.name}
            </h3>
            <span className="inline-block px-3 py-1 rounded-full bg-muted text-xs font-semibold text-muted-foreground uppercase tracking-wider w-fit">
              {tool.tagline}
            </span>
          </div>
          <p className="text-muted-foreground md:text-lg leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Action */}
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center justify-center w-full md:w-auto px-6 py-4 min-h-[48px] overflow-hidden rounded-xl font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            <span className={cn("absolute inset-0 w-full h-full bg-gradient-to-r", tool.colorClass)}></span>
            <span className="absolute inset-0 w-full h-full opacity-0 group-hover/btn:opacity-20 bg-white transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Probar Ahora
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
