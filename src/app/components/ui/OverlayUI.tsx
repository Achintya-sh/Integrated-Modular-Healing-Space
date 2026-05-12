import React from "react";
import { ZONES, ZoneType } from "../../data/zones";

interface OverlayUIProps {
  isMobile: boolean;
  loaded: boolean;
  loadingProgress: number;
  activeZone: ZoneType | null;
  hovered: ZoneType | null;
  showHint: boolean;
  splitScreen: boolean;
  guidedTour: boolean;
  tourZoneIndex: number;
  setGuidedTour: React.Dispatch<React.SetStateAction<boolean>>;
  comparisonMode: boolean;
  idlePrompt: boolean;
  showWelcome: boolean;
  showHelp: boolean;
  tutorialStep: number;
  inspectorMode: boolean;
  patientSimActive: boolean;
  occupancy: Record<string, number>;
  tourRef: any;
}

export function OverlayUI({
  isMobile, loaded, loadingProgress, activeZone, hovered,
  showHint, splitScreen, guidedTour, tourZoneIndex, setGuidedTour,
  comparisonMode, idlePrompt, showWelcome, showHelp, tutorialStep,
  inspectorMode, patientSimActive, occupancy, tourRef
}: OverlayUIProps) {
  return (
    <>
      {/* Header */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        padding: isMobile ? "16px 16px 50px" : "20px 28px 60px",
        background: "linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        pointerEvents: "none",
      }}>
        <div className={loaded ? "fade-up" : ""} style={{ opacity: loaded ? 1 : 0, maxWidth: isMobile ? "calc(100% - 60px)" : "auto" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 18 : 23, fontWeight: 600, color: "#F8EED8", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
            Integrated Modular Healing Space
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 8 : 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(248,238,216,0.5)", marginTop: 5 }}>
            3D Spatial Prototype · Hospital Waiting Environment · Team 142
          </div>
        </div>
        {!isMobile && (
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(248,238,216,0.38)", textAlign: "right", lineHeight: 1.8, letterSpacing: "0.04em" }}>
            300 m² floor plate<br />Capacity: 40–60 persons<br />Scale approx. 1:50
          </div>
        )}
      </div>

      {/* Hint bar */}
      {showHint && !activeZone && !isMobile && (
        <div style={{
          position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
          background: "rgba(16,10,4,0.82)", color: "rgba(248,238,216,0.7)",
          padding: "10px 24px", borderRadius: 30,
          fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: "0.05em",
          backdropFilter: "blur(12px)", border: "1px solid rgba(248,238,216,0.1)",
          pointerEvents: "none", display: "flex", gap: 22,
        }}>
          <span>🖱 Drag to orbit</span>
          <span>⚲ Scroll to zoom</span>
          <span>Click zones</span>
          <span>Press H for help</span>
        </div>
      )}
      {showHint && !activeZone && isMobile && (
        <div style={{
          position: "absolute", bottom: 145, left: "50%", transform: "translateX(-50%)",
          background: "rgba(16,10,4,0.82)", color: "rgba(248,238,216,0.7)",
          padding: "10px 20px", borderRadius: 30,
          fontFamily: "'DM Sans'", fontSize: 10, letterSpacing: "0.05em",
          backdropFilter: "blur(12px)", border: "1px solid rgba(248,238,216,0.1)",
          pointerEvents: "none", textAlign: "center", maxWidth: "calc(100% - 32px)",
        }}>
          <span>Swipe to explore · Tap zones · Press ? for help</span>
        </div>
      )}

      {/* Compass */}
      {!isMobile && (
        <div style={{
          position: "absolute", bottom: 28, right: 26,
          fontFamily: "'DM Sans'", fontSize: 9,
          color: "rgba(248,238,216,0.32)", textAlign: "center", lineHeight: 1.9,
          letterSpacing: "0.1em",
        }}>
          <div style={{ fontSize: 20, opacity: 0.35 }}>⊕</div>
          N
        </div>
      )}

      {/* Zone indicator dots (bottom-center) */}
      {!isMobile && (
        <div style={{
          position: "absolute", bottom: 78, left: "50%", transform: "translateX(-50%)",
          display: "flex", gap: 8, alignItems: "center",
          pointerEvents: "none",
        }}>
          {ZONES.map(z => (
            <div key={z.id} style={{
              width: activeZone?.id === z.id ? 20 : 6,
              height: 6, borderRadius: 3,
              background: activeZone?.id === z.id ? z.accent : "rgba(248,238,216,0.22)",
              transition: "all 0.35s cubic-bezier(.4,0,.2,1)",
            }} />
          ))}
        </div>
      )}

      {/* Occupancy Dashboard (when patient sim active) */}
      {patientSimActive && !isMobile && !splitScreen && (
        <div className="panel-in" style={{
          position: "absolute",
          top: 150, left: 26,
          width: 220, padding: 16,
          background: "rgba(18,12,6,0.9)",
          borderRadius: 12,
          border: "1px solid rgba(74,138,88,0.4)",
          backdropFilter: "blur(14px)",
          zIndex: 15,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(74,138,88,0.9)", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: "#4A8A58", display: "inline-block", animation: "pulse 1.5s infinite" }} />
            Live Occupancy
          </div>
          {ZONES.map(z => {
            const count = occupancy[z.id] || 0;
            return (
              <div key={z.id} style={{ marginBottom: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(248,238,216,0.8)", marginBottom: 3 }}>
                  <span>{z.icon} {z.label.split(" ")[0]}</span>
                  <span style={{ color: z.accent, fontWeight: 500 }}>{count}</span>
                </div>
                <div style={{ height: 4, background: "rgba(248,238,216,0.08)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${Math.min(100, count * 25)}%`, background: z.accent, transition: "width 0.4s" }} />
                </div>
              </div>
            );
          })}
          <div style={{ fontSize: 9, color: "rgba(248,238,216,0.4)", marginTop: 10, paddingTop: 8, borderTop: "1px solid rgba(248,238,216,0.08)" }}>
            8 simulated patients · stress-adaptive routing
          </div>
        </div>
      )}

      {/* Subtle hover pill */}
      {hovered && !activeZone && !inspectorMode && (
        <div style={{
          position: "absolute",
          top: isMobile ? 108 : 120,
          left: "50%", transform: "translateX(-50%)",
          padding: "5px 14px", borderRadius: 14,
          background: "rgba(18,12,6,0.78)",
          border: `1px solid ${hovered.accent}66`,
          backdropFilter: "blur(10px)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11, color: "rgba(248,238,216,0.85)",
          letterSpacing: "0.04em",
          display: "flex", alignItems: "center", gap: 6,
          zIndex: 12,
          pointerEvents: "none",
        }}>
          <span style={{ color: hovered.accent }}>{hovered.icon}</span>
          {hovered.label}
          <span style={{ color: "rgba(248,238,216,0.35)", fontSize: 10, marginLeft: 4 }}>· click to enter</span>
        </div>
      )}

      {/* Inspector Mode active hint */}
      {inspectorMode && (
        <div style={{
          position: "absolute", top: isMobile ? 110 : 140, left: "50%", transform: "translateX(-50%)",
          padding: "8px 18px", borderRadius: 16,
          background: "rgba(196,144,90,0.9)", color: "#fff",
          fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: "0.06em",
          zIndex: 14, backdropFilter: "blur(12px)",
        }}>
          ⊙ Click a material surface (floor, beam, moss, acoustic panel)
        </div>
      )}

      {/* Split-screen labels */}
      {splitScreen && (
        <>
          <div style={{
            position: "absolute", top: isMobile ? 120 : 150, left: "25%", transform: "translateX(-50%)",
            padding: "8px 20px", borderRadius: 10,
            background: "rgba(60,70,85,0.92)", color: "#fff",
            fontFamily: "'DM Sans'", fontSize: isMobile ? 10 : 12, letterSpacing: "0.12em",
            textTransform: "uppercase", fontWeight: 500,
            zIndex: 14, border: "1px solid rgba(255,255,255,0.18)",
          }}>
            ⊘ Typical Ward
          </div>
          <div style={{
            position: "absolute", top: isMobile ? 120 : 150, left: "75%", transform: "translateX(-50%)",
            padding: "8px 20px", borderRadius: 10,
            background: "rgba(74,138,88,0.92)", color: "#fff",
            fontFamily: "'DM Sans'", fontSize: isMobile ? 10 : 12, letterSpacing: "0.12em",
            textTransform: "uppercase", fontWeight: 500,
            zIndex: 14, border: "1px solid rgba(255,255,255,0.22)",
          }}>
            ✦ Healing Space
          </div>
          <div style={{
            position: "absolute", top: 0, bottom: 0, left: "50%", width: 2,
            background: "rgba(248,238,216,0.4)", zIndex: 13,
          }} />
        </>
      )}

      {/* Comparison Mode Banner */}
      {comparisonMode && (
        <div style={{
          position: "absolute",
          top: isMobile ? 110 : 140,
          left: "50%", transform: "translateX(-50%)",
          background: "rgba(60,70,85,0.92)",
          color: "#fff",
          padding: isMobile ? "10px 18px" : "12px 26px",
          borderRadius: 14,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: isMobile ? 10 : 12,
          letterSpacing: "0.08em",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.18)",
          textAlign: "center",
          zIndex: 15,
          maxWidth: isMobile ? "calc(100% - 32px)" : 420,
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}>
          <div style={{ fontSize: isMobile ? 9 : 10, opacity: 0.65, textTransform: "uppercase", letterSpacing: "0.14em", marginBottom: 3 }}>
            Baseline Reference
          </div>
          <div style={{ fontWeight: 500 }}>
            Typical Hospital Waiting Room · Fluorescent, desaturated, no biophilic elements
          </div>
        </div>
      )}

      {/* Guided Tour overlay — progress bar + exit button */}
      {guidedTour && (
        <div style={{
          position: "absolute", bottom: isMobile ? 80 : 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
          zIndex: 14, pointerEvents: "auto",
        }}>
          <div style={{
            padding: "8px 20px", borderRadius: 16,
            background: "rgba(16,10,4,0.88)",
            border: "1px solid rgba(85,114,196,0.5)",
            backdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", gap: 14,
            fontFamily: "'DM Sans'", fontSize: 11, color: "rgba(248,238,216,0.85)",
            letterSpacing: "0.05em",
          }}>
            <span style={{ color: "#5572C4" }}>▶</span>
            <span>Guided Tour{tourZoneIndex >= 0 ? ` · ${ZONES[tourZoneIndex].label}` : " · Starting"}</span>
            <span style={{ color: "rgba(248,238,216,0.35)", fontSize: 10 }}>
              {tourRef ? `${tourRef.waypointIdx + 1}/${tourRef.waypoints.length}` : ""}
            </span>
            <button onClick={() => setGuidedTour(false)} className="zbtn" style={{
              padding: "4px 12px", borderRadius: 12,
              border: "1px solid rgba(248,238,216,0.25)",
              background: "rgba(248,238,216,0.08)",
              color: "rgba(248,238,216,0.75)",
              fontSize: 10, cursor: "pointer", fontFamily: "'DM Sans'",
            }}>
              Exit Tour
            </button>
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {ZONES.map((z, i) => (
              <div key={z.id} style={{
                width: tourZoneIndex === i ? 18 : 6,
                height: 6, borderRadius: 3,
                background: tourZoneIndex === i ? z.accent : "rgba(248,238,216,0.2)",
                transition: "all 0.4s ease",
              }} />
            ))}
          </div>
        </div>
      )}

      {/* Idle Prompt */}
      {idlePrompt && loaded && !activeZone && !showWelcome && !showHelp && !guidedTour && tutorialStep < 0 && (
        <div style={{
          position: "absolute",
          bottom: isMobile ? 160 : 120,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          pointerEvents: "none",
          animation: "idleBob 2s ease-in-out infinite",
          zIndex: 12,
        }}>
          <div style={{
            width: 28, height: 44, borderRadius: 14,
            border: "2px solid rgba(248,238,216,0.35)",
            display: "flex", justifyContent: "center", paddingTop: 8,
          }}>
            <div style={{
              width: 4, height: 10, borderRadius: 2,
              background: "rgba(248,238,216,0.6)",
              animation: "fadeUp 1.2s ease-in-out infinite",
            }} />
          </div>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(248,238,216,0.4)",
          }}>
            Scroll to explore
          </span>
        </div>
      )}

      {/* Loading Screen */}
      {!loaded && loadingProgress < 100 && (
        <div style={{
          position: "absolute", inset: 0,
          background: "#16100A",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column",
          zIndex: 100,
          transition: "opacity 0.5s",
        }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 22 : 28, color: "#F8EED8", marginBottom: 24 }}>
            Loading Healing Space
          </div>
          <div style={{
            width: isMobile ? 220 : 280, height: 4,
            background: "rgba(248,238,216,0.1)",
            borderRadius: 2,
            overflow: "hidden",
          }}>
            <div style={{
              width: `${loadingProgress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #C4905A, #4A8A58, #5572C4, #8A5898)",
              transition: "width 0.3s ease",
            }} />
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12,
            color: "rgba(248,238,216,0.5)",
            marginTop: 16,
          }}>
            {loadingProgress}%
          </div>
        </div>
      )}
    </>
  );
}
