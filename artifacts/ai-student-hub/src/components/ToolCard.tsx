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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      style={{
        backgroundColor: "#1e1e1e",
        border: "1px solid #2a2a2a",
        borderRadius: "16px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      className="group hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        {/* Icon */}
        <div
          style={{
            flexShrink: 0,
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            backgroundColor: "rgba(99,102,241,0.15)",
            border: "1px solid rgba(99,102,241,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#818cf8",
          }}
        >
          {tool.icon}
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "1px" }}>
              #{tool.id}
            </span>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
              {tool.name}
            </h3>
            <span
              style={{
                padding: "2px 10px",
                borderRadius: "999px",
                backgroundColor: "rgba(99,102,241,0.15)",
                color: "#a5b4fc",
                fontSize: "0.72rem",
                fontWeight: 600,
              }}
            >
              {tool.tagline}
            </span>
          </div>

          <p
            style={{
              color: "#a1a1aa",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {tool.description}
          </p>
        </div>
      </div>

      {/* Button */}
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "12px 20px",
          minHeight: "48px",
          borderRadius: "10px",
          backgroundColor: "#6366f1",
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "0.9rem",
          textDecoration: "none",
          transition: "background-color 0.2s, transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
          alignSelf: "flex-start",
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
        Probar Ahora
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
}
