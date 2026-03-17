import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  className?: string;
  type?: "banner" | "native";
}

export function AdPlaceholder({ className, type = "banner" }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center rounded-2xl",
        type === "banner"
          ? "min-h-[90px] bg-white/5 border border-white/10"
          : "min-h-[160px] bg-white/5 border border-white/10",
        className
      )}
    >
      <span className="text-xs font-medium uppercase tracking-widest text-white/20">
        Publicidad
      </span>
    </div>
  );
}
