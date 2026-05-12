import React from "react";

interface ToolsMenuProps {
  isMobile: boolean;
  showTools: boolean;
  setShowTools: React.Dispatch<React.SetStateAction<boolean>>;
  heatmapMode: boolean;
  setHeatmapMode: React.Dispatch<React.SetStateAction<boolean>>;
  patientSimActive: boolean;
  setPatientSimActive: React.Dispatch<React.SetStateAction<boolean>>;
  guidedTour: boolean;
  setGuidedTour: React.Dispatch<React.SetStateAction<boolean>>;
  splitScreen: boolean;
  setSplitScreen: React.Dispatch<React.SetStateAction<boolean>>;
  inspectorMode: boolean;
  setInspectorMode: React.Dispatch<React.SetStateAction<boolean>>;
  setInspectedItem: React.Dispatch<React.SetStateAction<any>>;
  circadianTime: number;
  setCircadianTime: React.Dispatch<React.SetStateAction<number>>;
  comparisonMode: boolean;
}

export function ToolsMenu({
  isMobile, showTools, setShowTools,
  heatmapMode, setHeatmapMode,
  patientSimActive, setPatientSimActive,
  guidedTour, setGuidedTour,
  splitScreen, setSplitScreen,
  inspectorMode, setInspectorMode, setInspectedItem,
  circadianTime, setCircadianTime,
  comparisonMode
}: ToolsMenuProps) {
  return (
    <>
      {/* Tools toggle FAB */}
      <button
        onClick={() => setShowTools(v => !v)}
        title={showTools ? "Hide tools" : "Show tools"}
        className={`tools-fab ${showTools ? "open" : ""}`}
        style={{
          position: "absolute",
          left: isMobile ? 14 : 26,
          top: "auto",
          bottom: isMobile ? 14 : 26,
          width: 46, height: 46,
          borderRadius: 13,
          border: `1px solid ${showTools ? "rgba(196,144,90,0.6)" : "rgba(248,238,216,0.14)"}`,
          background: showTools
            ? "linear-gradient(135deg, rgba(196,144,90,0.92), rgba(160,112,80,0.92))"
            : "rgba(18,12,6,0.72)",
          color: "#F8EED8",
          cursor: "pointer",
          backdropFilter: "blur(16px)",
          boxShadow: showTools
            ? "0 8px 28px rgba(196,144,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)"
            : "0 4px 14px rgba(0,0,0,0.3)",
          zIndex: 25,
          padding: 0,
        }}
      >
        <span className="bars">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="3" cy="4.5" r="1.2" fill="currentColor" />
            <rect x="6.5" y="3.8" width="9" height="1.4" rx="0.7" fill="currentColor" />
            <circle cx="3" cy="9" r="1.2" fill="currentColor" />
            <rect x="6.5" y="8.3" width="9" height="1.4" rx="0.7" fill="currentColor" />
            <circle cx="3" cy="13.5" r="1.2" fill="currentColor" />
            <rect x="6.5" y="12.8" width="9" height="1.4" rx="0.7" fill="currentColor" />
          </svg>
        </span>
        <span className="cross">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3 L13 13 M13 3 L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {/* Tools label hint */}
      {!showTools && !isMobile && (
        <div style={{
          position: "absolute",
          left: 80,
          bottom: 34,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(248,238,216,0.45)",
          pointerEvents: "none",
          animation: "fadeUp 0.5s ease 2s forwards",
          opacity: 0,
          zIndex: 25,
        }}>
          Tools
        </div>
      )}

      {/* Feature Dock — left rail (desktop) / bottom strip (mobile) */}
      {showTools && (
        <div className="dock-in" style={{
          position: "absolute",
          left: isMobile ? "50%" : 26,
          bottom: isMobile ? 72 : 84,
          top: "auto",
          transform: isMobile ? "translateX(-50%)" : "none",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          gap: 8,
          zIndex: 20,
          padding: 8,
          background: "rgba(18,12,6,0.75)",
          borderRadius: 14,
          border: "1px solid rgba(248,238,216,0.12)",
          backdropFilter: "blur(14px)",
          flexWrap: "wrap",
          maxWidth: isMobile ? "calc(100% - 24px)" : "auto",
        }}>
          {[
            { key: "heatmap", label: "Heatmap", icon: "▦", active: heatmapMode, toggle: () => setHeatmapMode(v => !v), color: "#E07B4A" },
            { key: "patients", label: "Patient Flow", icon: "◉", active: patientSimActive, toggle: () => setPatientSimActive(v => !v), color: "#4A8A58" },
            {
              key: "tour", label: "Guided Tour", icon: "▶", active: guidedTour,
              toggle: () => {
                if (!guidedTour) {
                  setSplitScreen(false);
                }
                setGuidedTour(v => !v);
              },
              color: "#5572C4"
            },
            {
              key: "split", label: "Split View", icon: "◫", active: splitScreen,
              toggle: () => {
                if (!splitScreen) setGuidedTour(false); // disable conflicting mode
                setSplitScreen(v => !v);
              },
              color: "#8A5898"
            },
            {
              key: "inspect", label: "Inspect", icon: "⊙", active: inspectorMode,
              toggle: () => {
                setInspectorMode(v => !v);
                if (inspectorMode) setInspectedItem(null); // clear selection when toggling off
              },
              color: "#C4905A"
            },
          ].map((btn, i) => (
            <button key={btn.key} onClick={btn.toggle} className="zbtn dock-item"
              title={`${btn.label}${btn.active ? " (click to disable)" : ""}`}
              style={{
                animationDelay: `${0.06 + i * 0.05}s`,
                width: isMobile ? 44 : 150,
                height: 36,
                padding: isMobile ? 0 : "0 12px",
                borderRadius: 8,
                border: `1px solid ${btn.active ? btn.color : "rgba(248,238,216,0.18)"}`,
                background: btn.active ? btn.color : "rgba(18,12,6,0.4)",
                color: btn.active ? "#fff" : "rgba(248,238,216,0.8)",
                fontSize: isMobile ? 16 : 11,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.04em",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: isMobile ? "center" : "flex-start", gap: 8,
                fontWeight: btn.active ? 500 : 400,
              }}>
              <span style={{ fontSize: 14 }}>{btn.icon}</span>
              {!isMobile && <span>{btn.label}</span>}
            </button>
          ))}
        </div>
      )}

      {/* Circadian Slider (bottom-center, desktop) */}
      {showTools && !isMobile && !splitScreen && (
        <div className="slider-in" style={{
          position: "absolute",
          bottom: 28, left: "50%", transform: "translateX(-50%)",
          width: 340, padding: "10px 18px",
          background: "rgba(18,12,6,0.82)",
          borderRadius: 12,
          border: "1px solid rgba(248,238,216,0.12)",
          backdropFilter: "blur(14px)",
          zIndex: 15,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(248,238,216,0.5)" }}>
              Circadian Light
            </span>
            <span style={{ fontSize: 12, color: "#F8EED8", fontVariantNumeric: "tabular-nums" }}>
              {String(Math.floor(circadianTime)).padStart(2, "0")}:{String(Math.floor((circadianTime % 1) * 60)).padStart(2, "0")}
            </span>
          </div>
          <input type="range" min={0} max={24} step={0.25}
            value={circadianTime}
            onChange={e => setCircadianTime(parseFloat(e.target.value))}
            disabled={comparisonMode}
            style={{ width: "100%", accentColor: "#C4905A", cursor: comparisonMode ? "not-allowed" : "pointer", opacity: comparisonMode ? 0.4 : 1 }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "rgba(248,238,216,0.35)", marginTop: 2 }}>
            <span>00</span><span>06</span><span>12</span><span>18</span><span>24</span>
          </div>
        </div>
      )}
    </>
  );
}
