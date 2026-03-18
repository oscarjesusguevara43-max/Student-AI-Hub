import { useEffect, useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="tool-card"
      style={{
        transitionDelay: `${index * 60}ms`,
        backgroundColor: "#1e1e1e",
        border: "1px solid #2a2a2a",
        borderRadius: "16px",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
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

          <p style={{ color: "#a1a1aa", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
            {tool.description}
          </p>
        </div>
      </div>

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
          transition: "background-color 0.2s, transform 0.2s",
          boxShadow: "0 4px 14px rgba(99,102,241,0.3)",
          alignSelf: "flex-start",
          willChange: "transform",
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
    </div>
  );
}
