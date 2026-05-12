import React from "react";
import { TUTORIAL_STEPS } from "../../data/tour";

interface TutorialOverlayProps {
  tutorialStep: number;
  setTutorialStep: React.Dispatch<React.SetStateAction<number>>;
  handleReset: () => void;
  isMobile: boolean;
}

export function TutorialOverlay({ tutorialStep, setTutorialStep, handleReset, isMobile }: TutorialOverlayProps) {
  if (tutorialStep < 0 || tutorialStep >= TUTORIAL_STEPS.length) return null;

  return (
    <>
      {/* Dark backdrop — covers entire screen behind highlighted element */}
      {TUTORIAL_STEPS[tutorialStep].highlight && (
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.7)",
          pointerEvents: "none",
          zIndex: 44,
        }} />
      )}

      {/* Viewport highlight border */}
      {TUTORIAL_STEPS[tutorialStep].highlight === "viewport" && (
        <div style={{
          position: "absolute", inset: 0,
          border: "3px solid rgba(196,144,90,0.5)",
          borderRadius: 0,
          pointerEvents: "none",
          zIndex: 45,
          boxShadow: "inset 0 0 60px rgba(196,144,90,0.15)",
        }} />
      )}

      {/* Tutorial card */}
      <div className="fade-up" style={{
        position: "absolute",
        bottom: isMobile ? 16 : 32,
        left: "50%", transform: "translateX(-50%)",
        width: isMobile ? "calc(100% - 24px)" : 520,
        maxWidth: "calc(100vw - 24px)",
        zIndex: 46,
        background: "rgba(16,10,4,0.96)",
        borderRadius: 18,
        padding: isMobile ? "20px 18px" : "24px 28px",
        border: "1px solid rgba(196,144,90,0.35)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
        backdropFilter: "blur(16px)",
      }}>
        {/* Progress bar */}
        <div style={{
          display: "flex", gap: 3, marginBottom: 16,
        }}>
          {TUTORIAL_STEPS.map((_, i) => (
            <div key={i} style={{
              flex: 1, height: 3, borderRadius: 2,
              background: i <= tutorialStep ? "#C4905A" : "rgba(248,238,216,0.12)",
              transition: "background 0.3s ease",
            }} />
          ))}
        </div>

        {/* Step counter */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
          color: "rgba(196,144,90,0.8)",
          marginBottom: 8,
        }}>
          Step {tutorialStep + 1} of {TUTORIAL_STEPS.length}
        </div>

        {/* Title */}
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 18 : 22, fontWeight: 600,
          color: "#F8EED8", lineHeight: 1.2,
          marginBottom: 10,
        }}>
          {TUTORIAL_STEPS[tutorialStep].title}
        </div>

        {/* Body */}
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, lineHeight: 1.8,
          color: "rgba(248,238,216,0.65)",
          marginBottom: 8,
        }}>
          {TUTORIAL_STEPS[tutorialStep].text}
        </div>

        {/* Sub / metric */}
        {TUTORIAL_STEPS[tutorialStep].sub && (
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 500,
            color: "#C4905A",
            marginBottom: 16,
            padding: "6px 12px",
            background: "rgba(196,144,90,0.1)",
            borderRadius: 8,
            display: "inline-block",
          }}>
            {TUTORIAL_STEPS[tutorialStep].sub}
          </div>
        )}

        {/* Navigation */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: 8, paddingTop: 14,
          borderTop: "1px solid rgba(248,238,216,0.08)",
        }}>
          <div style={{ display: "flex", gap: 10 }}>
            {tutorialStep > 0 && (
              <button onClick={() => setTutorialStep(s => s - 1)} className="zbtn"
                style={{
                  padding: "8px 18px", borderRadius: 20,
                  border: "1px solid rgba(248,238,216,0.4)",
                  background: "rgba(248,238,216,0.08)",
                  color: "rgba(248,238,216,0.9)",
                  fontSize: 13, cursor: "pointer", fontFamily: "'DM Sans'",
                }}>
                ← Back
              </button>
            )}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => { setTutorialStep(-1); handleReset(); }} className="zbtn"
              style={{
                padding: "8px 18px", borderRadius: 20,
                border: "1px solid rgba(248,238,216,0.3)",
                background: "transparent",
                color: "rgba(248,238,216,0.8)",
                fontSize: 13, cursor: "pointer", fontFamily: "'DM Sans'",
              }}>
              Skip
            </button>
            {!(TUTORIAL_STEPS[tutorialStep] as any).requiredAction && (
              <button onClick={() => {
                if (tutorialStep >= TUTORIAL_STEPS.length - 1) {
                  setTutorialStep(-1);
                  handleReset();
                } else {
                  setTutorialStep(s => s + 1);
                }
              }} className="zbtn"
                style={{
                  padding: "8px 24px", borderRadius: 20,
                  border: "none",
                  background: "linear-gradient(135deg, #D4A06A, #B08050)",
                  color: "#fff",
                  fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans'",
                  boxShadow: "0 4px 14px rgba(196,144,90,0.5)",
                }}>
                {tutorialStep >= TUTORIAL_STEPS.length - 1 ? "Finish ✓" : "Next →"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
