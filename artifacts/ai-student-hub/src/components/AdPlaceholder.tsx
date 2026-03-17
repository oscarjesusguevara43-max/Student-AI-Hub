import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  label: string;
  subLabel?: string;
  className?: string;
  type?: "banner" | "native";
}

export function AdPlaceholder({ label, subLabel, className, type = "banner" }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center text-center p-6 rounded-2xl transition-all duration-300",
        type === "banner" 
          ? "border-2 border-dashed border-muted-foreground/30 bg-muted/40 min-h-[120px]"
          : "border border-muted-foreground/20 bg-muted/10 min-h-[200px] shadow-inner",
        className
      )}
    >
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1">
        Publicidad
      </span>
      <h4 className="text-sm md:text-base font-semibold text-muted-foreground">
        {label}
      </h4>
      {subLabel && (
        <p className="text-xs text-muted-foreground/60 mt-2 max-w-md">
          {subLabel}
        </p>
      )}
    </div>
  );
}
