interface AdPlaceholderProps {
  type?: "banner" | "native";
}

export function AdPlaceholder({ type = "banner" }: AdPlaceholderProps) {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        border: "1px solid #333",
        borderRadius: "12px",
        padding: type === "native" ? "30px 15px" : "15px",
        margin: "0",
        textAlign: "center",
        color: "#a1a1aa",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        width: "100%",
        minHeight: type === "native" ? "120px" : "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Publicidad
    </div>
  );
}
