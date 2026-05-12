import React from "react";

interface TopNavProps {
  isMobile: boolean;
  comparisonMode: boolean;
  setComparisonMode: React.Dispatch<React.SetStateAction<boolean>>;
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  onTutorialAction?: (action: string) => void;
  tutorialHighlight?: string | null;
}

export function TopNav({ isMobile, comparisonMode, setComparisonMode, showHelp, setShowHelp, onTutorialAction, tutorialHighlight }: TopNavProps) {
  const isHighlighted = tutorialHighlight === "comparison";
  return (
    <div style={{
      position: "absolute",
      top: isMobile ? 16 : 90,
      right: isMobile ? 16 : 22,
      display: "flex",
      gap: 8,
      zIndex: isHighlighted ? 45 : 30,
      pointerEvents: "auto",
    }}>
      {/* Comparison Mode Toggle */}
      <button
        onClick={() => {
          setComparisonMode(!comparisonMode);
          if (onTutorialAction) onTutorialAction("toggle_comparison");
        }}
        className="zbtn"
        style={{
          height: 40, padding: "0 14px", borderRadius: 20,
          border: `1.5px solid ${isHighlighted ? "rgba(196,144,90,0.8)" : comparisonMode ? "#C4905A" : "rgba(248,238,216,0.3)"}`,
          background: comparisonMode ? "#C4905A" : "rgba(18,12,6,0.7)",
          color: comparisonMode ? "#fff" : "rgba(248,238,216,0.8)",
          fontSize: isMobile ? 10 : 11, cursor: "pointer",
          backdropFilter: "blur(12px)", fontFamily: "'DM Sans'",
          letterSpacing: "0.04em",
          display: "flex", alignItems: "center", gap: 6,
          ...(isHighlighted ? { animation: "tutorialGlow 2s ease-in-out infinite" } : {}),
        }}
        title="Compare to typical waiting room"
      >
        {comparisonMode ? "✨ Healing View" : "⊘ Standard View"}
      </button>

      {/* Help Button */}
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="zbtn"
        style={{
          width: 40, height: 40, borderRadius: "50%",
          border: `1.5px solid ${showHelp ? "#5572C4" : "rgba(248,238,216,0.3)"}`,
          background: showHelp ? "#5572C4" : "rgba(18,12,6,0.7)",
          color: "rgba(248,238,216,0.8)",
          fontSize: 18, cursor: "pointer",
          backdropFilter: "blur(12px)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
        title="Help (press H or ?)"
      >
        ?
      </button>
    </div>
  );
}
