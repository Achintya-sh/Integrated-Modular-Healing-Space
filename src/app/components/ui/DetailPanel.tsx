import React from "react";
import { ZONES, ZoneType } from "../../data/zones";

interface DetailPanelProps {
  displayZone: ZoneType;
  activeZone: ZoneType | null;
  isMobile: boolean;
  goToAdjacentZone: (direction: 1 | -1) => void;
}

export function DetailPanel({ displayZone, activeZone, isMobile, goToAdjacentZone }: DetailPanelProps) {
  return (
    <div key={displayZone.id} className="panel-in"
      style={{
        position: "absolute",
        right: isMobile ? 12 : 22,
        top: isMobile ? "auto" : "50%",
        bottom: isMobile ? 12 : "auto",
        left: isMobile ? 12 : "auto",
        width: isMobile ? "auto" : 300,
        maxHeight: isMobile ? "50vh" : "auto",
        overflowY: isMobile ? "auto" : "visible",
        zIndex: 20,
        background: "rgba(16,10,4,0.95)",
        borderRadius: isMobile ? 16 : 20,
        padding: isMobile ? "20px 18px" : "28px 24px",
        boxShadow: `0 16px 50px rgba(0,0,0,0.55), 0 0 0 1px ${displayZone.accent}44`,
        backdropFilter: "blur(18px)",
        border: `1px solid ${displayZone.accent}44`,
      }}
    >
      {/* Zone badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "5px 13px", borderRadius: 20, marginBottom: 16,
        background: displayZone.accent + "22", border: `1px solid ${displayZone.accent}66`,
      }}>
        <span style={{ fontSize: 15 }}>{displayZone.icon}</span>
        <span style={{ fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 500, color: displayZone.accent, letterSpacing: "0.07em", textTransform: "uppercase" }}>
          {activeZone ? "Zone Active" : "Hover Preview"}
        </span>
      </div>

      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 600, color: "#F8EED8", lineHeight: 1.2, marginBottom: 12 }}>
        {displayZone.label}
      </div>

      <div style={{ fontFamily: "'DM Sans'", fontSize: 12, lineHeight: 1.8, color: "rgba(248,238,216,0.62)", marginBottom: 20 }}>
        {displayZone.desc}
      </div>

      <div style={{ fontFamily: "'DM Sans'", fontSize: 9, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(248,238,216,0.32)", marginBottom: 10 }}>
        Design Interventions
      </div>
      {displayZone.features.map((f: string, i: number) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 9,
          padding: "7px 0", borderBottom: "1px solid rgba(248,238,216,0.06)",
          fontFamily: "'DM Sans'", fontSize: 12, color: "rgba(248,238,216,0.75)",
        }}>
          <span style={{ color: displayZone.accent, fontSize: 9, flexShrink: 0, marginTop: 1 }}>✦</span>
          {f}
        </div>
      ))}

      {/* Metric */}
      <div style={{
        marginTop: 18, padding: "10px 16px", borderRadius: 12,
        background: displayZone.accent + "18", border: `1px solid ${displayZone.accent}30`,
        fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 500, color: displayZone.accent,
        letterSpacing: "0.02em",
      }}>
        {displayZone.metric}
      </div>

      {/* Click prompt if just hovering */}
      {!activeZone && (
        <div style={{ marginTop: 12, fontFamily: "'DM Sans'", fontSize: 10, color: "rgba(248,238,216,0.3)", textAlign: "center", letterSpacing: "0.08em" }}>
          Click to enter zone →
        </div>
      )}

      {/* Prev / Next navigation */}
      {activeZone && (
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(248,238,216,0.08)",
        }}>
          <button className="zbtn" onClick={() => goToAdjacentZone(-1)}
            style={{
              padding: "6px 12px", borderRadius: 18,
              border: "1px solid rgba(248,238,216,0.22)",
              background: "rgba(248,238,216,0.05)", color: "rgba(248,238,216,0.8)",
              fontSize: 11, cursor: "pointer", fontFamily: "'DM Sans'",
            }}>
            ← Prev
          </button>
          <span style={{ fontFamily: "'DM Sans'", fontSize: 10, color: "rgba(248,238,216,0.4)", letterSpacing: "0.08em" }}>
            {ZONES.findIndex(z => z.id === activeZone.id) + 1} / {ZONES.length}
          </span>
          <button className="zbtn" onClick={() => goToAdjacentZone(1)}
            style={{
              padding: "6px 12px", borderRadius: 18,
              border: `1px solid ${displayZone.accent}66`,
              background: displayZone.accent + "22", color: displayZone.accent,
              fontSize: 11, cursor: "pointer", fontFamily: "'DM Sans'", fontWeight: 500,
            }}>
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
