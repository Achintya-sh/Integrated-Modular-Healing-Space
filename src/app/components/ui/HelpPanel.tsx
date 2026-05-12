import React from "react";

interface HelpPanelProps {
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setTutorialStep: React.Dispatch<React.SetStateAction<number>>;
  setWelcomePhase: React.Dispatch<React.SetStateAction<"intro" | "askNew" | "done">>;
}

export function HelpPanel({ showHelp, setShowHelp, isMobile, setTutorialStep, setWelcomePhase }: HelpPanelProps) {
  if (!showHelp) return null;

  return (
    <div className="fade-up" style={{
      position: "absolute",
      top: isMobile ? 70 : 90, // Match top nav height nicely
      right: isMobile ? 16 : 24, // Consistent padding with right edge
      width: 280, 
      maxWidth: "calc(100vw - 32px)",
      background: "linear-gradient(160deg, rgba(22,16,10,0.95) 0%, rgba(12,8,4,0.98) 100%)",
      borderRadius: 20, padding: "24px",
      border: "1px solid rgba(196,144,90,0.3)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
      backdropFilter: "blur(20px)",
      zIndex: 50,
      pointerEvents: "auto", 
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: "#F8EED8", lineHeight: 1.1 }}>
          Controls & Help
        </div>
        <button 
          onClick={() => setShowHelp(false)} 
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(196,144,90,0.15)"; e.currentTarget.style.transform = "scale(1.1)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(196,144,90,0.05)"; e.currentTarget.style.transform = "scale(1)"; }}
          style={{
            border: "1px solid rgba(196,144,90,0.2)", background: "rgba(196,144,90,0.05)", color: "#F8EED8",
            borderRadius: "50%", width: 32, height: 32, fontSize: 16, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s ease", marginTop: -4, marginRight: -4
          }}
        >
          ×
        </button>
      </div>

      <div style={{ 
        display: "grid", gridTemplateColumns: "auto 1fr", gap: "12px 14px", 
        fontFamily: "'DM Sans'", fontSize: 12, color: "rgba(248,238,216,0.75)" 
      }}>
        <span style={{ color: "#8FA8F0", fontWeight: 500 }}>🖱 L-Click + Drag</span> <span>Orbit camera</span>
        <span style={{ color: "#8FA8F0", fontWeight: 500 }}>🖱 R-Click + Drag</span> <span>Pan camera</span>
        <span style={{ color: "#8FA8F0", fontWeight: 500 }}>⚲ Scroll</span> <span>Zoom in/out</span>
        <span style={{ color: "#8FA8F0", fontWeight: 500 }}>📱 Pinch/Swipe</span> <span>Mobile controls</span>
        <span style={{ color: "#C4905A", fontWeight: 500 }}>⌨️ [ H ] or [ ? ]</span> <span>Toggle this help</span>
        <span style={{ color: "#C4905A", fontWeight: 500 }}>⌨️ [ C ]</span> <span>Toggle comparison</span>
        <span style={{ color: "#C4905A", fontWeight: 500 }}>⌨️ [ T ]</span> <span>Toggle tools panel</span>
      </div>

      <div style={{
        marginTop: 24, paddingTop: 16,
        borderTop: "1px solid rgba(248,238,216,0.1)",
      }}>
        <button
          onClick={() => {
            setShowHelp(false);
            setTutorialStep(0);
            setWelcomePhase("done");
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(85,114,196,0.25)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(85,114,196,0.15)"; }}
          style={{
            padding: "10px 0", width: "100%", borderRadius: 10,
            background: "rgba(85,114,196,0.15)", border: "1px solid rgba(85,114,196,0.4)",
            color: "#A0B8FF", fontSize: 12, fontWeight: 500, fontFamily: "'DM Sans'", cursor: "pointer",
            transition: "all 0.2s ease", display: "flex", alignItems: "center", justifyContent: "center", gap: 8
          }}
        >
          <span style={{ fontSize: 10 }}>▶</span> Replay Interactive Tutorial
        </button>
      </div>
    </div>
  );
}
