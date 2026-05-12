import React, { useState, useEffect } from "react";

interface MaterialInspectorProps {
  inspectedItem: any;
  setInspectedItem: React.Dispatch<React.SetStateAction<any>>;
  isMobile: boolean;
}

export function MaterialInspector({ inspectedItem, setInspectedItem, isMobile }: MaterialInspectorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inspectedItem) {
      setMounted(true);
    } else {
      setTimeout(() => setMounted(false), 250); // wait for fade out
    }
  }, [inspectedItem]);

  if (!mounted && !inspectedItem) return null;

  const isVisible = !!inspectedItem;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={() => setInspectedItem(null)} 
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(8px)",
          zIndex: 39,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.25s ease-in-out",
        }} 
      />

      {/* Modal */}
      <div 
        style={{
          position: "absolute",
          left: "50%", top: "50%",
          transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.96})`,
          opacity: isVisible ? 1 : 0,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          width: isMobile ? "calc(100% - 40px)" : 480,
          maxWidth: "100%",
          maxHeight: "85vh", overflowY: "auto",
          background: "linear-gradient(160deg, rgba(35,40,45,0.95) 0%, rgba(15,18,22,0.98) 100%)",
          borderRadius: 24, padding: "32px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <div style={{ 
              fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", 
              color: "#A0B0C0", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 10px rgba(74,222,128,0.5)" }} />
              Material Details
            </div>
            <div style={{ 
              fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#FFFFFF", 
              marginTop: 6, lineHeight: 1.1 
            }}>
              {inspectedItem?.name}
            </div>
          </div>
          <button 
            onClick={() => setInspectedItem(null)} 
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "scale(1)"; }}
            style={{
              border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#FFFFFF",
              borderRadius: "50%", width: 36, height: 36, fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s ease",
            }}
          >
            ×
          </button>
        </div>
        
        {inspectedItem?.dim && (
          <div style={{ 
            fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", 
            marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.08)"
          }}>
            Dimensions: <span style={{ color: "#E0E0E0", marginLeft: 8 }}>{inspectedItem.dim}</span>
          </div>
        )}

        <div style={{ 
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontFamily: "'DM Sans', sans-serif" 
        }}>
          {inspectedItem?.specs.map((row: [string, string], i: number) => (
            <div key={i} style={{ 
              padding: "12px 16px", 
              background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)", 
              borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
            }}>
              <div style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>{row[0]}</div>
              <div style={{ fontSize: 14, color: "#FFFFFF", marginTop: 4, fontWeight: 500 }}>{row[1]}</div>
            </div>
          ))}
        </div>

        {inspectedItem?.note && (
          <div style={{ 
            marginTop: 24, padding: "16px 20px", 
            background: "linear-gradient(90deg, rgba(74,222,128,0.1) 0%, rgba(74,222,128,0.01) 100%)", 
            borderLeft: "3px solid #4ADE80",
            borderRadius: "0 12px 12px 0", fontSize: 13, fontStyle: "italic", 
            color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5
          }}>
            "{inspectedItem.note}"
          </div>
        )}
      </div>
    </>
  );
}
