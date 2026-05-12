import React from "react";
import { ZONES, ZoneType } from "../../data/zones";

interface ZoneNavigationProps {
  activeZone: ZoneType | null;
  isMobile: boolean;
  handleZoom: (zone: ZoneType) => void;
  handleReset: () => void;
  tutorialHighlight?: string | null;
}

export function ZoneNavigation({ activeZone, isMobile, handleZoom, handleReset, tutorialHighlight }: ZoneNavigationProps) {
  const isHighlighted = tutorialHighlight === "zones";
  return (
    <div style={{
      position: "absolute", top: isMobile ? 65 : 76, left: "50%", transform: "translateX(-50%)",
      display: "flex", gap: isMobile ? 5 : 7, flexWrap: "wrap", justifyContent: "center",
      zIndex: isHighlighted ? 45 : 10, maxWidth: isMobile ? "calc(100% - 32px)" : "auto",
      padding: isMobile ? "0 8px" : 0,
    }}>
      {ZONES.map((zone, i) => {
        const isActive = activeZone?.id === zone.id;
        return (
          <button key={zone.id} className="zbtn"
            onClick={() => handleZoom(zone)}
            style={{
              padding: isMobile ? "6px 12px" : "7px 16px", borderRadius: 24,
              border: `1.5px solid ${isHighlighted ? "rgba(196,144,90,0.8)" : isActive ? zone.accent : "rgba(248,238,216,0.25)"}`,
              background: isActive ? zone.accent : "rgba(18,12,6,0.6)",
              color: isActive ? "#fff" : "rgba(248,238,216,0.78)",
              fontSize: isMobile ? 10 : 11, fontWeight: isActive ? 500 : 400, letterSpacing: "0.04em",
              cursor: "pointer", backdropFilter: "blur(12px)",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: isActive ? `0 4px 20px ${zone.accent}55` : "none",
              animationDelay: `${i * 0.06}s`,
              ...(isHighlighted ? { animation: "tutorialGlow 2s ease-in-out infinite" } : {}),
            }}
          >
            {isMobile ? zone.icon : `${zone.icon} ${zone.label}`}
          </button>
        );
      })}
      {activeZone && (
        <button className="zbtn" onClick={handleReset}
          style={{
            padding: isMobile ? "6px 12px" : "7px 16px", borderRadius: 24,
            border: "1.5px solid rgba(248,238,216,0.28)",
            background: "rgba(18,12,6,0.6)", color: "rgba(248,238,216,0.7)",
            fontSize: isMobile ? 10 : 11, fontWeight: 300, cursor: "pointer",
            backdropFilter: "blur(12px)", fontFamily: "'DM Sans', sans-serif",
          }}
        >
          ↺ {isMobile ? "" : "Overview"}
        </button>
      )}
    </div>
  );
}
