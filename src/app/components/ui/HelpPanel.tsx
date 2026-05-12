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
    <div className="panel-in" style={{
      position: "absolute",
      top: isMobile ? 65 : 140,
      right: isMobile ? 16 : 22,
      width: 260,
      background: "rgba(18,12,6,0.95)",
      borderRadius: 16, padding: "20px 22px",
      border: "1px solid rgba(85,114,196,0.4)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
      backdropFilter: "blur(18px)",
      zIndex: 40,
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#F8EED8", marginBottom: 16 }}>
        Controls & Help
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 14px", fontFamily: "'DM Sans'", fontSize: 11, color: "rgba(248,238,216,0.7)" }}>
        <span style={{ color: "#5572C4", fontWeight: 500 }}>🖱 L-Click + Drag</span> <span>Orbit camera</span>
        <span style={{ color: "#5572C4", fontWeight: 500 }}>🖱 R-Click + Drag</span> <span>Pan camera</span>
        <span style={{ color: "#5572C4", fontWeight: 500 }}>⚲ Scroll</span> <span>Zoom in/out</span>
        <span style={{ color: "#5572C4", fontWeight: 500 }}>📱 Pinch/Swipe</span> <span>Mobile controls</span>
        <span style={{ color: "#C4905A", fontWeight: 500 }}>⌨️ [ H ] or [ ? ]</span> <span>Toggle this help</span>
        <span style={{ color: "#C4905A", fontWeight: 500 }}>⌨️ [ C ]</span> <span>Toggle comparison</span>
        <span style={{ color: "#C4905A", fontWeight: 500 }}>⌨️ [ T ]</span> <span>Toggle tools panel</span>
      </div>

      <div style={{
        marginTop: 20, paddingTop: 16,
        borderTop: "1px solid rgba(248,238,216,0.1)",
        display: "flex", flexDirection: "column", gap: 8,
      }}>
        <button
          onClick={() => {
            setShowHelp(false);
            setTutorialStep(0);
            setWelcomePhase("done"); // ensure welcome is done
          }}
          className="zbtn"
          style={{
            padding: "8px 0", width: "100%", borderRadius: 8,
            background: "rgba(85,114,196,0.15)", border: "1px solid rgba(85,114,196,0.4)",
            color: "#8FA8F0", fontSize: 11, fontFamily: "'DM Sans'", cursor: "pointer",
          }}
        >
          ▶ Replay Interactive Tutorial
        </button>
      </div>
    </div>
  );
}
