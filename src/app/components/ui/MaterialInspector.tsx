import React from "react";

interface MaterialInspectorProps {
  inspectedItem: any;
  setInspectedItem: React.Dispatch<React.SetStateAction<any>>;
  isMobile: boolean;
}

export function MaterialInspector({ inspectedItem, setInspectedItem, isMobile }: MaterialInspectorProps) {
  if (!inspectedItem) return null;

  return (
    <>
      <div onClick={() => setInspectedItem(null)} style={{
        position: "absolute", inset: 0,
        background: "rgba(10,6,2,0.55)",
        backdropFilter: "blur(2px)",
        zIndex: 39,
        animation: "fadeUp 0.2s ease forwards",
      }} />

      <div className="panel-in" style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        width: isMobile ? "calc(100% - 32px)" : 420,
        maxWidth: "calc(100vw - 32px)",
        maxHeight: "75vh", overflowY: "auto",
        background: "rgba(24,18,10,0.97)",
        borderRadius: 16, padding: "22px 24px",
        border: "1px solid rgba(196,144,90,0.55)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
        backdropFilter: "blur(18px)",
        zIndex: 40,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4905A" }}>
              Material · Sample
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#F8EED8", marginTop: 2 }}>
              {inspectedItem.name}
            </div>
          </div>
          <button onClick={() => setInspectedItem(null)} style={{
            border: "none", background: "rgba(248,238,216,0.1)", color: "rgba(248,238,216,0.7)",
            borderRadius: 8, width: 28, height: 28, fontSize: 14, cursor: "pointer",
          }}>×</button>
        </div>
        <div style={{ fontSize: 11, color: "rgba(248,238,216,0.55)", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>
          {inspectedItem.dim}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontFamily: "'DM Sans', sans-serif" }}>
          {inspectedItem.specs.map((row: [string, string], i: number) => (
            <div key={i} style={{ padding: "8px 10px", background: "rgba(248,238,216,0.04)", borderRadius: 8, border: "1px solid rgba(248,238,216,0.08)" }}>
              <div style={{ fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,238,216,0.45)" }}>{row[0]}</div>
              <div style={{ fontSize: 12, color: "#F8EED8", marginTop: 2 }}>{row[1]}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: 10, background: "rgba(196,144,90,0.12)", borderRadius: 8, fontSize: 11, fontStyle: "italic", color: "rgba(248,238,216,0.75)", fontFamily: "'DM Sans'" }}>
          {inspectedItem.note}
        </div>
      </div>
    </>
  );
}
