import React from "react";
import { ZONES } from "../../data/zones";

interface WelcomeModalProps {
  loaded: boolean;
  welcomePhase: "intro" | "askNew" | "done";
  setWelcomePhase: (phase: "intro" | "askNew" | "done") => void;
  setShowWelcome: (show: boolean) => void;
  setTutorialStep: (step: number) => void;
  isMobile: boolean;
}

export function WelcomeModal({ loaded, welcomePhase, setWelcomePhase, setShowWelcome, setTutorialStep, isMobile }: WelcomeModalProps) {
  if (!loaded || welcomePhase === "done") return null;

  return (
    <>
      <div style={{
        position: "absolute", inset: 0,
        background: "rgba(10,6,2,0.65)",
        backdropFilter: "blur(4px)",
        zIndex: 50,
        animation: "welcomeFadeIn 0.5s ease forwards",
      }} />
      <div style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: isMobile ? "calc(100% - 40px)" : 440,
        maxWidth: "calc(100vw - 40px)",
        zIndex: 51,
        background: "rgba(20,14,8,0.97)",
        borderRadius: 22,
        padding: isMobile ? "32px 24px" : "40px 36px",
        border: "1px solid rgba(196,144,90,0.35)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(248,238,216,0.06)",
        backdropFilter: "blur(20px)",
        textAlign: "center",
        animation: "welcomeSlideUp 0.6s cubic-bezier(.2,.8,.2,1) forwards",
      }}>
        {welcomePhase === "intro" && (
          <>
            <div style={{
              fontSize: 36, marginBottom: 16,
              filter: "drop-shadow(0 4px 12px rgba(196,144,90,0.3))",
            }}>🌿</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 22 : 26, fontWeight: 600,
              color: "#F8EED8", lineHeight: 1.2,
              marginBottom: 12,
            }}>
              Integrated Modular<br />Healing Space
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, lineHeight: 1.8,
              color: "rgba(248,238,216,0.55)",
              marginBottom: 8,
              maxWidth: 340, margin: "0 auto 24px",
            }}>
              Explore a 3D prototype of a hospital waiting environment redesigned around
              four wellness zones — each backed by evidence-based design interventions
              that measurably reduce patient stress and anxiety.
            </div>
            <div style={{
              display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8,
              marginBottom: 28,
            }}>
              {ZONES.map(z => (
                <span key={z.id} style={{
                  padding: "4px 12px", borderRadius: 16,
                  background: z.accent + "18", border: `1px solid ${z.accent}44`,
                  fontFamily: "'DM Sans'", fontSize: 10,
                  color: z.accent, letterSpacing: "0.04em",
                }}>
                  {z.icon} {z.label}
                </span>
              ))}
            </div>
            <button
              onClick={() => setWelcomePhase("askNew")}
              className="zbtn"
              style={{
                padding: "12px 36px", borderRadius: 28,
                border: "none",
                background: "linear-gradient(135deg, #C4905A, #A07040)",
                color: "#fff",
                fontSize: 14, fontWeight: 500, letterSpacing: "0.06em",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 8px 28px rgba(196,144,90,0.35)",
              }}
            >
              Start Exploring →
            </button>
            <div style={{
              marginTop: 16,
              fontFamily: "'DM Sans'", fontSize: 10,
              color: "rgba(248,238,216,0.3)",
              letterSpacing: "0.08em",
            }}>
              3D Spatial Prototype · Team 142
            </div>
          </>
        )}

        {welcomePhase === "askNew" && (
          <>
            <div style={{
              fontSize: 32, marginBottom: 16,
            }}>👋</div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 20 : 24, fontWeight: 600,
              color: "#F8EED8", lineHeight: 1.2,
              marginBottom: 12,
            }}>
              Are you a new user?
            </div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, lineHeight: 1.8,
              color: "rgba(248,238,216,0.55)",
              maxWidth: 340, margin: "0 auto 28px",
            }}>
              If this is your first time, we'll walk you through the space with a
              quick interactive tutorial covering controls, zones, and tools.
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  setShowWelcome(false);
                  setWelcomePhase("done");
                  setTutorialStep(0);
                }}
                className="zbtn"
                style={{
                  padding: "12px 28px", borderRadius: 28,
                  border: "none",
                  background: "linear-gradient(135deg, #C4905A, #A07040)",
                  color: "#fff",
                  fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 8px 28px rgba(196,144,90,0.35)",
                }}
              >
                Yes, show me around
              </button>
              <button
                onClick={() => {
                  setShowWelcome(false);
                  setWelcomePhase("done");
                }}
                className="zbtn"
                style={{
                  padding: "12px 28px", borderRadius: 28,
                  border: "1px solid rgba(248,238,216,0.25)",
                  background: "rgba(248,238,216,0.06)",
                  color: "rgba(248,238,216,0.8)",
                  fontSize: 13, fontWeight: 400, letterSpacing: "0.06em",
                  cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                No, I'll explore
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
