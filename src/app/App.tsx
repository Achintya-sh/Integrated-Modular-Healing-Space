import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ZONES } from "./data/zones";
import { TOUR_WAYPOINTS, TUTORIAL_STEPS } from "./data/tour";
import { buildScene } from "./scene/SceneBuilder";
import { applySplitLighting, std, box, cyl, sph } from "./scene/utils";
import {
  ZoneNavigation, DetailPanel, WelcomeModal, TutorialOverlay,
  ToolsMenu, MaterialInspector, OverlayUI, TopNav, HelpPanel
} from "./components/ui";

export default function App() {
  const mountRef  = useRef<HTMLDivElement>(null);
  const R         = useRef<any>({});
  const [activeZone, setActiveZone] = useState<any>(null);
  const [showHint, setShowHint]   = useState(true);
  const [loaded, setLoaded]       = useState(false);
  const [hovered, setHovered]     = useState<any>(null);
  const [showHelp, setShowHelp]   = useState(false);
  const [webglError, setWebglError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [comparisonMode, setComparisonMode] = useState(false);
  const [heatmapMode, setHeatmapMode] = useState(false);
  const [circadianTime, setCircadianTime] = useState(12);
  const [guidedTour, setGuidedTour] = useState(false);
  const [tourZoneIndex, setTourZoneIndex] = useState(-1);
  const [splitScreen, setSplitScreen] = useState(false);
  const [inspectorMode, setInspectorMode] = useState(false);
  const [inspectedItem, setInspectedItem] = useState<any>(null);
  const [patientSimActive, setPatientSimActive] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [occupancy, setOccupancy] = useState<Record<string, number>>({});
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomePhase, setWelcomePhase] = useState<"intro" | "askNew" | "done">("intro");
  const [tutorialStep, setTutorialStep] = useState(-1); // -1 = not active
  const [idlePrompt, setIdlePrompt] = useState(false);
  const idleTimerRef = useRef<any>(null);

  const handleTutorialAction = useCallback((action: string) => {
    setTutorialStep((prev) => {
      if (prev >= 0 && (TUTORIAL_STEPS[prev] as any).requiredAction === action) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const handleZoom = useCallback((zone: any) => {
    // Toggle: if clicking the same zone, reset to overview
    if (activeZone?.id === zone.id) {
      const r = R.current;
      r.isOrbit = true;
      if (r.tPos && r.tLookAt) {
        r.tPos.set(0, 7.5, 15.5);
        r.tLookAt.set(0, 1.0, 0);
      }
      setActiveZone(null);
      setHovered(null);
      return;
    }
    const r = R.current;
    r.isOrbit = false;
    if (r.tPos && r.tLookAt) {
      r.tPos.set(zone.camPos[0], zone.camPos[1], zone.camPos[2]);
      r.tLookAt.set(zone.lookAt[0], zone.lookAt[1], zone.lookAt[2]);
    }
    setActiveZone(zone);
    setShowHint(false);
  }, [activeZone]);

  const handleReset = useCallback(() => {
    const r = R.current;
    r.isOrbit = true;
    if (r.tPos && r.tLookAt) {
      r.tPos.set(0, 7.5, 15.5);
      r.tLookAt.set(0, 1.0, 0);
    }
    setActiveZone(null);
    setHovered(null);
  }, []);

  const handleZoomRef = useRef(handleZoom);
  const handleResetRef = useRef(handleReset);
  useEffect(() => { handleZoomRef.current = handleZoom; handleResetRef.current = handleReset; });

  const goToAdjacentZone = useCallback((direction: 1 | -1) => {
    if (!activeZone) return;
    const idx = ZONES.findIndex(z => z.id === activeZone.id);
    const next = ZONES[(idx + direction + ZONES.length) % ZONES.length];
    handleZoom(next);
  }, [activeZone, handleZoom]);

  // Heatmap mode
  useEffect(() => {
    R.current.heatmapMode = heatmapMode;
  }, [heatmapMode]);

  // Inspector mode sync
  useEffect(() => { R.current.inspectorMode = inspectorMode; }, [inspectorMode]);
  useEffect(() => { R.current.splitScreen = splitScreen; }, [splitScreen]);

  // Patient simulation toggle
  useEffect(() => {
    const refs = R.current.animRefs;
    if (!refs?.patientGroup) return;
    refs.patientGroup.visible = patientSimActive;
    R.current.patientSimActive = patientSimActive;
    if (!patientSimActive) setOccupancy({});
  }, [patientSimActive]);

  // Guided tour mode
  useEffect(() => {
    R.current.guidedTour = guidedTour;
    if (guidedTour) {
      R.current.tour = {
        startTime: 0,
        waypointIdx: 0,
        segmentStart: 0,
        started: false,
        fromPos: new THREE.Vector3(0, 7.5, 15.5),
        fromLookAt: new THREE.Vector3(0, 1.0, 0),
        waypoints: TOUR_WAYPOINTS,
      };
      R.current.isOrbit = false;
      setActiveZone(null);
    } else {
      R.current.tour = null;
      handleReset();
    }
  }, [guidedTour, handleReset]);

  // Circadian time-of-day
  useEffect(() => {
    const refs = R.current.animRefs;
    if (!refs || !refs.sun || comparisonMode) return;
    const t = circadianTime;
    // Sun arc across sky: angle 0 at 6am, PI at 6pm
    const dayT = Math.max(0, Math.min(1, (t - 6) / 12));
    const angle = dayT * Math.PI;
    const sunX = -12 + dayT * 24;
    const sunY = Math.sin(angle) * 14 + 2;
    const sunZ = 10 - dayT * 4;
    refs.sun.position.set(sunX, sunY, sunZ);

    // Color / intensity based on time
    let sunColor: number, sunInt: number, ambColor: number, ambInt: number, skyColor: number, skyInt: number;
    if (t < 6 || t > 20) {
      sunColor = 0x22334A; sunInt = 0.05;
      ambColor = 0x1A2030; ambInt = 0.2;
      skyColor = 0x0A1428; skyInt = 0.1;
    } else if (t < 8) {
      sunColor = 0xFFB878; sunInt = 0.6;
      ambColor = 0xFFDBB0; ambInt = 0.35;
      skyColor = 0xFFA880; skyInt = 0.8;
    } else if (t < 17) {
      sunColor = 0xFFEDD0; sunInt = 1.05;
      ambColor = 0xFFF5E4; ambInt = 0.45;
      skyColor = 0x88CCFF; skyInt = 0.6;
    } else if (t < 19) {
      sunColor = 0xFF9658; sunInt = 0.8;
      ambColor = 0xFFCC90; ambInt = 0.4;
      skyColor = 0xFF7F58; skyInt = 0.9;
    } else {
      sunColor = 0x6A5090; sunInt = 0.25;
      ambColor = 0x4A4060; ambInt = 0.28;
      skyColor = 0x3A3058; skyInt = 0.3;
    }
    refs.sun.color.setHex(sunColor); refs.sun.intensity = sunInt;
    refs.ambient.color.setHex(ambColor); refs.ambient.intensity = ambInt;
    if (refs.skyMat) {
      // Tint the backdrop texture via material color (texture is multiplied by color)
      const c = new THREE.Color(skyColor);
      // Mix with white so texture details remain visible
      c.lerp(new THREE.Color(0xffffff), 1 - Math.min(1, skyInt));
      refs.skyMat.color.copy(c);
    }
    // Evening/night: boost pendants & accents
    const nightBoost = (t < 7 || t > 18) ? 1 : 0;
    R.current.nightBoost = nightBoost;
  }, [circadianTime, comparisonMode]);

  // Apply comparison mode lighting changes
  useEffect(() => {
    const refs = R.current.animRefs;
    if (!refs || !refs.ambient) return;

    if (comparisonMode) {
      R.current.comparisonMode = true;
      refs.ambient.color.setHex(0xEAF4FF);
      refs.ambient.intensity = 0.95;
      refs.sun.color.setHex(0xF0F6FF);
      refs.sun.intensity = 0.6;
      refs.fillLight.intensity = 0.15;
      refs.accentLights?.forEach((pl: THREE.PointLight) => { pl.intensity = 0; });
      refs.pendants?.forEach((p: any) => { p.pl.intensity = 0; });
      if (R.current.scene) {
        R.current.scene.background = new THREE.Color(0xD8DEE4);
        if (R.current.scene.fog) R.current.scene.fog.color.setHex(0xD8DEE4);
      }
    } else {
      R.current.comparisonMode = false;
      refs.ambient.color.setHex(0xFFF5E4);
      refs.ambient.intensity = 0.45;
      refs.sun.color.setHex(0xFFEDD0);
      refs.sun.intensity = 1.05;
      refs.fillLight.intensity = 0.35;
      refs.accentLights?.forEach((pl: THREE.PointLight, i: number) => {
        pl.color.setHex(ZONES[i].hex);
        pl.intensity = 1.4;
      });
      if (R.current.scene) {
        R.current.scene.background = new THREE.Color(0xEDE0C8);
        if (R.current.scene.fog) R.current.scene.fog.color.setHex(0xEDE0C8);
      }
    }
  }, [comparisonMode]);

  useEffect(() => {
    R.current.tutorialStep = tutorialStep;
  }, [tutorialStep]);

  // Tutorial camera movement
  useEffect(() => {
    if (tutorialStep < 0) return;
    const step = TUTORIAL_STEPS[tutorialStep];
    if (!step) return;
    const r = R.current;
    if (step.cam) {
      r.isOrbit = false;
      if (r.tPos && r.tLookAt) {
        r.tPos.set(step.cam.pos[0], step.cam.pos[1], step.cam.pos[2]);
        r.tLookAt.set(step.cam.lookAt[0], step.cam.lookAt[1], step.cam.lookAt[2]);
      }
    } else if (tutorialStep === 0 || !step.cam) {
      // Return to overview
      r.isOrbit = true;
      if (r.tPos && r.tLookAt) {
        r.tPos.set(0, 7.5, 15.5);
        r.tLookAt.set(0, 1.0, 0);
      }
    }
    // Auto-open tools panel for the tools step
    if (step.highlight === "tools") {
      setShowTools(true);
    }
  }, [tutorialStep]);

  // Idle prompt: show after 5s of no interaction, hide on any interaction
  useEffect(() => {
    const resetIdle = () => {
      setIdlePrompt(false);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setIdlePrompt(true), 5000);
    };
    resetIdle();
    window.addEventListener("mousemove", resetIdle);
    window.addEventListener("mousedown", resetIdle);
    window.addEventListener("wheel", resetIdle);
    window.addEventListener("touchstart", resetIdle);
    window.addEventListener("keydown", resetIdle);
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      window.removeEventListener("mousemove", resetIdle);
      window.removeEventListener("mousedown", resetIdle);
      window.removeEventListener("wheel", resetIdle);
      window.removeEventListener("touchstart", resetIdle);
      window.removeEventListener("keydown", resetIdle);
    };
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const el  = mountRef.current;
    if (!el) return;
    const r   = R.current;
    r.animRefs = {};

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglError(true);
        return;
      }
    } catch (e) {
      setWebglError(true);
      return;
    }

    setLoadingProgress(10);

    // Renderer
    const isMobileDevice = window.innerWidth <= 768 || 'ontouchstart' in window;
    r.renderer = new THREE.WebGLRenderer({
      antialias: !isMobileDevice, // Disable antialiasing on mobile for performance
      powerPreference: "high-performance"
    });
    r.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobileDevice ? 1.5 : 2));
    r.renderer.setSize(el.clientWidth, el.clientHeight);
    r.renderer.shadowMap.enabled = !isMobileDevice; // Disable shadows on mobile
    if (!isMobileDevice) {
      r.renderer.shadowMap.type = THREE.PCFShadowMap;
    }
    r.renderer.toneMapping       = THREE.ACESFilmicToneMapping;
    r.renderer.toneMappingExposure = 1.1;
    r.renderer.outputColorSpace  = THREE.SRGBColorSpace;
    el.appendChild(r.renderer.domElement);

    setLoadingProgress(30);

    // Scene
    r.scene = new THREE.Scene();
    r.scene.background = new THREE.Color(0xEDE0C8);
    r.scene.fog = new THREE.Fog(0xEDE0C8, 18, 30);

    // Camera
    r.camera = new THREE.PerspectiveCamera(54, el.clientWidth / el.clientHeight, 0.1, 80);
    r.camera.position.set(0, 7.5, 15.5);

    setLoadingProgress(50);

    // Build
    r.clickables = buildScene(r.scene, r.animRefs);

    // ─── Patient simulation figures ──────────────────────────────────────────
    const patientColors = [0x5A7A9E, 0xC89270, 0x9E7AC8, 0x70A890, 0xC87A9E, 0x9EAE70, 0x7A9EC8, 0xC89E5A];
    const patients: any[] = [];
    const patientGroup = new THREE.Group();
    patientGroup.visible = false;
    r.scene.add(patientGroup);
    for (let i = 0; i < 8; i++) {
      const g = new THREE.Group();
      const c = patientColors[i];
      const body = new THREE.Mesh(cyl(0.14, 0.18, 0.7, 8), std(c, 0.85));
      body.position.y = 0.35; body.castShadow = true; g.add(body);
      const head = new THREE.Mesh(sph(0.11, 10, 8), std(0xE8C098, 0.85));
      head.position.y = 0.82; head.castShadow = true; g.add(head);
      const entranceX = -6 + Math.random() * 12;
      g.position.set(entranceX, 0, 6.2);
      patientGroup.add(g);
      patients.push({
        group: g,
        state: "entering",
        target: new THREE.Vector3(0, 0, -5),
        waypoint: null as THREE.Vector3 | null,
        zoneId: null as string | null,
        dwellEnd: 0,
        speed: 0.012 + Math.random() * 0.008,
        stressLevel: 0.7 + Math.random() * 0.3,
        bobPhase: Math.random() * Math.PI * 2,
        spawnDelay: i * 600,
        spawnTime: 0,
      });
    }
    r.animRefs.patients = patients;
    r.animRefs.patientGroup = patientGroup;

    setLoadingProgress(70);

    // Camera state
    r.orbit  = { theta: 0.38, phi: 0.58, radius: 15.5 };
    r.tOrbit = { theta: 0.38, phi: 0.58, radius: 15.5 };
    r.isOrbit = true;
    r.tPos    = new THREE.Vector3(0, 7.5, 15.5);
    r.tLookAt = new THREE.Vector3(0, 1.0, 0);
    r.cLookAt = new THREE.Vector3(0, 1.0, 0);

    // Raycaster / hover
    const raycaster = new THREE.Raycaster();
    const m2d = new THREE.Vector2();

    const getHit = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      m2d.x =  ((clientX - rect.left) / rect.width)  * 2 - 1;
      m2d.y = -((clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(m2d, r.camera);
      const hits = raycaster.intersectObjects(r.clickables.map((o: any) => o.mesh));
      if (!hits.length) return null;
      return r.clickables.find((o: any) => o.mesh === hits[0].object);
    };

    // Drag state
    let drag = false, moved = false, lx = 0, ly = 0;
    // Tutorial interaction accumulators — advance only after meaningful movement
    let tutorialOrbitAccum = 0;
    let tutorialZoomAccum = 0;

    const onDown = (e: MouseEvent) => {
      drag = true; moved = false;
      lx = e.clientX; ly = e.clientY;
      setShowHint(false);
      el.style.cursor = "grabbing";
    };
    const onMove = (e: MouseEvent) => {
      if (!drag) {
        const hit = getHit(e.clientX, e.clientY);
        setHovered(hit ? ZONES.find(z => z.id === hit.zoneId) : null);
        el.style.cursor = hit ? "pointer" : (r.guidedTour ? "default" : "grab");
        return;
      }
      const dx = e.clientX - lx, dy = e.clientY - ly;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true;
      if (r.guidedTour) {
        // During guided tour, mouse drag does not control camera
      } else if (r.isOrbit) {
        if (r.tutorialStep >= 0) {
          const step = TUTORIAL_STEPS[r.tutorialStep] as any;
          if (step.requiredAction === "orbit") {
            tutorialOrbitAccum += Math.abs(dx) + Math.abs(dy);
            if (tutorialOrbitAccum > 80) handleTutorialAction("orbit");
          } else if (step.requiredAction) return;
        }
        if (e.buttons === 2 || (e.buttons === 1 && (e.ctrlKey || e.metaKey))) {
          // Pan camera (smooth buttery panning)
          const panSpeed = r.tOrbit.radius * 0.0015;
          const cx = Math.sin(r.orbit.theta + Math.PI/2);
          const cz = Math.cos(r.orbit.theta + Math.PI/2);
          const fx = Math.sin(r.orbit.theta);
          const fz = Math.cos(r.orbit.theta);
          
          r.tLookAt.x -= cx * dx * panSpeed + fx * dy * panSpeed;
          r.tLookAt.z -= cz * dx * panSpeed + fz * dy * panSpeed;
        } else {
          // Orbit camera
          r.tOrbit.theta -= dx * 0.005;
          r.tOrbit.phi    = Math.max(0.01, Math.min(Math.PI/2 - 0.05, r.tOrbit.phi + dy * 0.005));
        }
      }
      lx = e.clientX; ly = e.clientY;
    };
    const onUp   = () => { drag = false; el.style.cursor = "grab"; };
    const onWheel = (e: WheelEvent) => {
      if (r.tutorialStep >= 0) {
        const step = TUTORIAL_STEPS[r.tutorialStep] as any;
        if (step.requiredAction === "zoom") {
          tutorialZoomAccum += Math.abs(e.deltaY);
          if (tutorialZoomAccum > 150) handleTutorialAction("zoom");
        } else if (step.requiredAction) return;
      }
      if (r.isOrbit) r.tOrbit.radius = Math.max(5, Math.min(30, r.tOrbit.radius + e.deltaY * 0.015));
    };
    const onClick = (e: MouseEvent) => {
      if (moved) return;
      if (r.tutorialStep >= 0 && (TUTORIAL_STEPS[r.tutorialStep] as any).requiredAction) {
        // Only allow specific clicks if explicitly handled (like zone navigation)
        // Block raw scene clicks during required action steps
        return;
      }
      const hit = getHit(e.clientX, e.clientY);
      if (!hit) return;
      // Inspector mode: show material info if available
      if (r.inspectorMode && hit.mesh.userData?.material) {
        const clickedMaterial = hit.mesh.userData.material;
        // Toggle: if clicking the same item, close inspector
        setInspectedItem((prev: any) => prev?.name === clickedMaterial.name ? null : clickedMaterial);
        return;
      }
      const zone = ZONES.find(z => z.id === hit.zoneId);
      if (zone) handleZoomRef.current(zone);
    };

    // Touch
    let lt: Touch | null = null;
    let pinchDist = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        lt = e.touches[0];
        setShowHint(false);
      } else if (e.touches.length === 2) {
        // Pinch start
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchDist = Math.sqrt(dx * dx + dy * dy);
      }
    };
    const onTouchMove  = (e: TouchEvent) => {
      if (e.touches.length === 1 && lt) {
        // Single finger - orbit
        const t = e.touches[0];
        const tdx = t.clientX - lt.clientX, tdy = t.clientY - lt.clientY;
        if (r.tutorialStep >= 0) {
          const step = TUTORIAL_STEPS[r.tutorialStep] as any;
          if (step.requiredAction === "orbit") {
            tutorialOrbitAccum += Math.abs(tdx) + Math.abs(tdy);
            if (tutorialOrbitAccum > 80) handleTutorialAction("orbit");
          }
        }
        r.tOrbit.theta -= tdx * 0.005;
        r.tOrbit.phi    = Math.max(0.01, Math.min(Math.PI/2 - 0.05, r.tOrbit.phi + tdy * 0.005));
        lt = t;
        e.preventDefault();
      } else if (e.touches.length === 2 && pinchDist > 0) {
        // Two fingers - pinch to zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const newPinchDist = Math.sqrt(dx * dx + dy * dy);
        const delta = pinchDist - newPinchDist;
        if (r.tutorialStep >= 0) {
          const step = TUTORIAL_STEPS[r.tutorialStep] as any;
          if (step.requiredAction === "zoom") {
            tutorialZoomAccum += Math.abs(delta);
            if (tutorialZoomAccum > 60) handleTutorialAction("zoom");
          }
        }
        r.tOrbit.radius = Math.max(5, Math.min(30, r.tOrbit.radius + delta * 0.02));
        pinchDist = newPinchDist;
        e.preventDefault();
      }
    };
    const onTouchEnd = () => {
      lt = null;
      pinchDist = 0;
    };

    const onKeyUp = (e: KeyboardEvent) => {
      // no-op: guided tour doesn't use keyboard movement
    };
    // Keyboard shortcuts
    const onKeyDown = (e: KeyboardEvent) => {
      // ESC to close panels (priority: modals → modes → zones)
      if (e.key === 'Escape') {
        if (showHelp) {
          setShowHelp(false);
        } else if (inspectorMode) {
          setInspectorMode(false);
          setInspectedItem(null);
        } else if (r.guidedTour) {
          setGuidedTour(false);
        } else if (activeZone) {
          handleResetRef.current();
        }
      }
      // 1-4 to jump to zones
      if (e.key === '1' && ZONES[0]) handleZoomRef.current(ZONES[0]);
      if (e.key === '2' && ZONES[1]) handleZoomRef.current(ZONES[1]);
      if (e.key === '3' && ZONES[2]) handleZoomRef.current(ZONES[2]);
      if (e.key === '4' && ZONES[3]) handleZoomRef.current(ZONES[3]);
      // R to reset
      if (e.key === 'r' || e.key === 'R') handleResetRef.current();
      // H or ? for help
      if (e.key === 'h' || e.key === 'H' || e.key === '?') setShowHelp((prev: boolean) => !prev);
      // Arrow keys to orbit
      if (r.isOrbit) {
        if (e.key === 'ArrowLeft') r.tOrbit.theta -= 0.15;
        if (e.key === 'ArrowRight') r.tOrbit.theta += 0.15;
        if (e.key === 'ArrowUp') r.tOrbit.phi = Math.max(0.01, r.tOrbit.phi - 0.15);
        if (e.key === 'ArrowDown') r.tOrbit.phi = Math.min(Math.PI/2 - 0.05, r.tOrbit.phi + 0.15);
      }
    };

    // Animation loop
    let t = 0;
    const animate = (ts: number) => {
      r.frame = requestAnimationFrame(animate);
      const dt = Math.min(0.1, ts * 0.001 - t);
      t = ts * 0.001;

      // Guided tour camera
      if (r.guidedTour && r.tour) {
        const tour = r.tour;
        if (!tour.started) {
          tour.started = true;
          tour.startTime = ts;
          tour.segmentStart = ts;
          tour.fromPos.copy(r.camera.position);
          tour.fromLookAt.copy(r.cLookAt);
        }
        const wp = tour.waypoints[tour.waypointIdx];
        const elapsed = (ts - tour.segmentStart) / 1000;
        const progress = Math.min(1, elapsed / wp.dur);
        // Smooth cubic ease in-out
        const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        const toPos = new THREE.Vector3(wp.pos[0], wp.pos[1], wp.pos[2]);
        const toLook = new THREE.Vector3(wp.lookAt[0], wp.lookAt[1], wp.lookAt[2]);
        r.camera.position.lerpVectors(tour.fromPos, toPos, ease);
        r.cLookAt.lerpVectors(tour.fromLookAt, toLook, ease);
        r.camera.lookAt(r.cLookAt);
        // Update current tour zone for UI
        if (wp.zoneIdx !== r._lastTourZone) {
          r._lastTourZone = wp.zoneIdx;
          setTourZoneIndex(wp.zoneIdx);
          if (wp.zoneIdx >= 0) setActiveZone(ZONES[wp.zoneIdx]);
          else setActiveZone(null);
        }
        // Advance to next waypoint
        if (progress >= 1) {
          tour.waypointIdx++;
          if (tour.waypointIdx >= tour.waypoints.length) {
            // Tour complete
            setGuidedTour(false);
            return;
          }
          tour.segmentStart = ts;
          tour.fromPos.copy(r.camera.position);
          tour.fromLookAt.copy(r.cLookAt);
        }
      } else {
        // Orbit camera (Smooth and buttery physics)
        if (r.isOrbit) {
          // Independent of frame rate (approximate time delta limit to avoid huge jumps)
          const lerpFactor = 1 - Math.exp(-12 * dt); // smooth damping
          
          r.orbit.theta += (r.tOrbit.theta - r.orbit.theta) * lerpFactor;
          r.orbit.phi += (r.tOrbit.phi - r.orbit.phi) * lerpFactor;
          r.orbit.radius += (r.tOrbit.radius - r.orbit.radius) * lerpFactor;

          const { theta, phi, radius } = r.orbit;
          r.tPos.set(
            r.tLookAt.x + radius * Math.sin(phi) * Math.sin(theta),
            r.tLookAt.y + radius * Math.cos(phi),
            r.tLookAt.z + radius * Math.sin(phi) * Math.cos(theta)
          );
        }
        const lookLerp = r.isOrbit ? 0.12 : 0.06;
        r.camera.position.lerp(r.tPos, lookLerp);
        r.cLookAt.lerp(r.tLookAt, lookLerp);
        r.camera.lookAt(r.cLookAt);
      }

      // Animate pendants
      if (r.animRefs.pendants) {
        r.animRefs.pendants.forEach((p: any) => {
          p.pl.intensity = r.comparisonMode ? 0 : 1.1 + Math.sin(t * 1.1 + p.phase) * 0.12;
        });
      }
      // Animate plants (gentle sway)
      if (r.animRefs.plants) {
        r.animRefs.plants.forEach((p: any) => {
          p.mesh.position.y = p.baseY + Math.sin(t * 0.55 + p.phase) * 0.018;
          p.mesh.rotation.z = Math.sin(t * 0.4 + p.phase) * 0.025;
        });
      }
      // Animate water surface
      if (r.animRefs.water) {
        r.animRefs.water.material.opacity = 0.75 + Math.sin(t * 1.8) * 0.06;
        r.animRefs.water.material.color.setHSL(0.52, 0.5, 0.55 + Math.sin(t * 0.9) * 0.04);
      }
      // Animate screens
      if (r.animRefs.screens) {
        r.animRefs.screens.forEach((s: any) => {
          if (s.isPl) {
            s.pl.intensity = 0.7 + Math.sin(t * 2.2 + s.phase) * 0.25;
          } else if (s.isBar) {
            s.mat.emissiveIntensity = 1.5 + Math.sin(t * 1.6 + s.phase) * 0.5;
          } else if (s.mat) {
            s.mat.emissiveIntensity = 0.6 + Math.sin(t * 0.8 + s.phase) * 0.15;
          }
        });
      }
      // Animate floor lamp
      if (r.animRefs.lampLight) {
        r.animRefs.lampLight.intensity = r.comparisonMode ? 0 : 1.5 + Math.sin(t * 1.3) * 0.15;
      }
      // Heatmap discs pulse
      if (r.animRefs.heatmapDiscs) {
        r.animRefs.heatmapDiscs.forEach((d: THREE.Mesh, i: number) => {
          const base = r.heatmapMode ? 0.22 : 0;
          (d.material as THREE.MeshBasicMaterial).opacity = base * (1 + Math.sin(t * 0.9 + i) * 0.35);
          d.scale.setScalar(1 + Math.sin(t * 0.7 + i * 0.8) * 0.08);
        });
      }
      // Patient flow simulation
      if (r.animRefs.patients && r.patientSimActive) {
        const occ: Record<string, number> = { seating: 0, biophilic: 0, digital: 0, calm: 0, reception: 0 };
        r.animRefs.patients.forEach((p: any) => {
          // Spawn delay — wait before activating
          if (!p.spawnTime) p.spawnTime = ts;
          if (ts - p.spawnTime < p.spawnDelay) return;

          const g = p.group;
          // Route around divider wall (x=0, z in [-4.25, 5.25]) when crossing sides
          const needsDetour = (from: THREE.Vector3, to: THREE.Vector3) => {
            if (Math.sign(from.x) === Math.sign(to.x) || from.x === 0 || to.x === 0) return null;
            // Path crosses x=0. Find z where it crosses.
            const tCross = from.x / (from.x - to.x);
            const zCross = from.z + (to.z - from.z) * tCross;
            if (zCross > -4.25 && zCross < 5.25) {
              // Route around the front opening (z ≈ 5.8)
              return new THREE.Vector3(from.x > 0 ? 0.5 : -0.5, 0, 5.8);
            }
            return null;
          };
          if (!p.waypoint && p.state !== "dwelling") {
            p.waypoint = needsDetour(g.position, p.target);
          }
          const aim = p.waypoint || p.target;
          const toTarget = new THREE.Vector3().subVectors(aim, g.position);
          toTarget.y = 0;
          const dist = toTarget.length();
          // Clear waypoint when reached
          if (p.waypoint && dist < 0.35) { p.waypoint = null; }

          if (p.state === "dwelling") {
            // Idle at zone, slight bob
            g.position.y = Math.abs(Math.sin(t * 2 + p.bobPhase)) * 0.02;
            if (ts > p.dwellEnd) {
              // Pick new destination: random zone or leave
              if (Math.random() < 0.2) {
                p.state = "leaving";
                p.target.set(-6 + Math.random() * 12, 0, 7);
                p.zoneId = null;
              } else {
                const z = ZONES[Math.floor(Math.random() * ZONES.length)];
                p.state = "walking";
                const jitterX = (Math.random() - 0.5) * 1.5;
                const jitterZ = (Math.random() - 0.5) * 1.5;
                p.target.set(z.pos[0] + jitterX, 0, z.pos[2] + jitterZ);
                p.waypoint = null;
                p.zoneId = z.id;
                // Stress drops as they enter calm/biophilic zones
                if (z.id === "calm" || z.id === "biophilic") p.stressLevel = Math.max(0.1, p.stressLevel - 0.25);
                else if (z.id === "digital") p.stressLevel = Math.max(0.2, p.stressLevel - 0.1);
              }
            }
            if (p.zoneId) occ[p.zoneId] = (occ[p.zoneId] || 0) + 1;
          } else if (dist < 0.25) {
            if (p.state === "leaving") {
              // Respawn at entrance
              p.group.position.set(-6 + Math.random() * 12, 0, 6.2);
              p.state = "entering";
              p.target.set(0, 0, -5);
              p.stressLevel = 0.7 + Math.random() * 0.3;
            } else {
              p.state = "dwelling";
              p.dwellEnd = ts + 3000 + Math.random() * 6000;
            }
          } else {
            // Walk toward target
            toTarget.normalize();
            g.position.addScaledVector(toTarget, p.speed * (1 + (1 - p.stressLevel) * 0.3));
            g.rotation.y = Math.atan2(toTarget.x, toTarget.z);
            // Step bob
            g.position.y = Math.abs(Math.sin(t * 8 + p.bobPhase)) * 0.04;
          }
          // Color shift based on stress: red-ish when stressed, green-ish when calm
          const head = g.children[1] as THREE.Mesh;
          const mat = head.material as THREE.MeshStandardMaterial;
          mat.color.setHSL(0.08 + (1 - p.stressLevel) * 0.2, 0.4, 0.65);
        });
        // Update occupancy at 2Hz
        if (!r.lastOccUpdate || ts - r.lastOccUpdate > 500) {
          r.lastOccUpdate = ts;
          setOccupancy({ ...occ });
        }
      }

      // Split-screen rendering
      if (r.splitScreen) {
        const w = el.clientWidth, h = el.clientHeight;
        const half = w / 2;
        r.renderer.setScissorTest(true);
        // Left viewport: typical (force comparison lighting)
        const savedComp = r.comparisonMode;
        applySplitLighting(r.animRefs, true);
        r.renderer.setScissor(0, 0, half, h);
        r.renderer.setViewport(0, 0, half, h);
        r.camera.aspect = half / h;
        r.camera.updateProjectionMatrix();
        if (r.scene.background) (r.scene.background as THREE.Color).setHex(0xD8DEE4);
        r.renderer.render(r.scene, r.camera);
        // Right viewport: healing
        applySplitLighting(r.animRefs, false);
        r.renderer.setScissor(half, 0, half, h);
        r.renderer.setViewport(half, 0, half, h);
        if (r.scene.background) (r.scene.background as THREE.Color).setHex(0xEDE0C8);
        r.renderer.render(r.scene, r.camera);
        // Restore
        r.renderer.setScissorTest(false);
        r.renderer.setViewport(0, 0, w, h);
        r.camera.aspect = w / h;
        r.camera.updateProjectionMatrix();
        applySplitLighting(r.animRefs, savedComp);
        if (r.scene.background) (r.scene.background as THREE.Color).setHex(savedComp ? 0xD8DEE4 : 0xEDE0C8);
      } else {
        r.renderer.render(r.scene, r.camera);
      }
    };
    animate(0);
    setLoadingProgress(90);
    setTimeout(() => {
      setLoaded(true);
      setLoadingProgress(100);
    }, 400);

    // Events
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("click", onClick);
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const onContextMenu = (e: Event) => e.preventDefault();
    el.addEventListener("contextmenu", onContextMenu);

    const onResize = () => {
      r.camera.aspect = el.clientWidth / el.clientHeight;
      r.camera.updateProjectionMatrix();
      r.renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(r.frame);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("contextmenu", onContextMenu);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("click", onClick);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", onResize);
      if (el.contains(r.renderer.domElement)) el.removeChild(r.renderer.domElement);
      r.renderer.dispose();
    };
  }, []);

  const displayZone = activeZone;

  // WebGL Error fallback
  if (webglError) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh", background: "#16100A", color: "#F8EED8", fontFamily: "'DM Sans', sans-serif", textAlign: "center", padding: 40 }}>
        <div>
          <div style={{ fontSize: 48, marginBottom: 20 }}>⚠️</div>
          <h1 style={{ fontSize: 24, marginBottom: 12 }}>WebGL Not Supported</h1>
          <p style={{ color: "rgba(248,238,216,0.7)", maxWidth: 400 }}>
            Your browser doesn't support WebGL, which is required for this 3D experience.
            Please try using a modern browser like Chrome, Firefox, or Safari.
          </p>
        </div>
      </div>
    );
  }

  const tutorialHighlight = tutorialStep >= 0 ? (TUTORIAL_STEPS[tutorialStep] as any)?.highlight || null : null;

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#16100A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin:0; padding:0; }
        .zbtn { transition: all 0.2s cubic-bezier(.4,0,.2,1); }
        .zbtn:hover { transform: translateY(-2px); filter: brightness(1.12); }
        .zbtn:active { transform: translateY(0); }
        @keyframes panelIn {
          from { opacity:0; transform:translateY(-50%) translateX(18px) scale(0.97); }
          to   { opacity:1; transform:translateY(-50%) translateX(0)     scale(1);    }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(196,144,90,0.4); }
          70% { box-shadow: 0 0 0 14px rgba(196,144,90,0); }
          100% { box-shadow: 0 0 0 0 rgba(196,144,90,0); }
        }
        @keyframes welcomeFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes welcomeSlideUp {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.95); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes idleBob {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -8px); }
        }
        .fade-up { animation: fadeUp 0.6s cubic-bezier(.2,.8,.2,1) forwards; }
        .panel-in { animation: panelIn 0.5s cubic-bezier(.2,.8,.2,1) forwards; }
        .tools-fab .bars, .tools-fab .cross {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s cubic-bezier(.4,0,.2,1);
        }
        .tools-fab .cross { opacity: 0; transform: translate(-50%, -50%) rotate(-45deg) scale(0.5); }
        .tools-fab.open .bars { opacity: 0; transform: translate(-50%, -50%) rotate(45deg) scale(0.5); }
        .tools-fab.open .cross { opacity: 1; transform: translate(-50%, -50%) rotate(0) scale(1); }
        @keyframes tutorialGlow {
          0%, 100% { box-shadow: 0 0 8px rgba(196,144,90,0.4), 0 0 20px rgba(196,144,90,0.2); }
          50% { box-shadow: 0 0 16px rgba(196,144,90,0.8), 0 0 40px rgba(196,144,90,0.4), 0 0 60px rgba(196,144,90,0.15); }
        }
      `}</style>

      {/* 3D Viewport */}
      <div ref={mountRef} style={{ width: "100%", height: "100%", touchAction: "none" }} />

      <OverlayUI
        isMobile={isMobile} loaded={loaded} loadingProgress={loadingProgress}
        activeZone={activeZone} hovered={hovered} showHint={showHint}
        splitScreen={splitScreen} guidedTour={guidedTour} tourZoneIndex={tourZoneIndex}
        setGuidedTour={setGuidedTour} comparisonMode={comparisonMode}
        idlePrompt={idlePrompt} showWelcome={showWelcome} showHelp={showHelp}
        tutorialStep={tutorialStep} inspectorMode={inspectorMode}
        patientSimActive={patientSimActive} occupancy={occupancy}
        tourRef={R.current.tour}
      />

      <TopNav
        isMobile={isMobile} comparisonMode={comparisonMode} setComparisonMode={setComparisonMode}
        showHelp={showHelp} setShowHelp={setShowHelp} onTutorialAction={handleTutorialAction}
        tutorialHighlight={tutorialHighlight}
      />

      {loaded && !showWelcome && (
        <ZoneNavigation
          activeZone={activeZone} isMobile={isMobile}
          handleZoom={(zone) => {
            handleTutorialAction("click_zone");
            handleZoomRef.current(zone);
          }} 
          handleReset={handleResetRef.current}
          tutorialHighlight={tutorialHighlight}
        />
      )}

      {loaded && !showWelcome && tutorialStep < 0 && (displayZone || hovered) && !isMobile && (
        <DetailPanel
          displayZone={displayZone || hovered} activeZone={activeZone}
          isMobile={isMobile} goToAdjacentZone={goToAdjacentZone}
        />
      )}

      <WelcomeModal
        loaded={loaded} welcomePhase={welcomePhase} setWelcomePhase={setWelcomePhase}
        setShowWelcome={setShowWelcome} setTutorialStep={setTutorialStep} isMobile={isMobile}
      />

      <TutorialOverlay
        tutorialStep={tutorialStep} setTutorialStep={setTutorialStep}
        handleReset={handleResetRef.current} isMobile={isMobile}
      />

      <HelpPanel
        showHelp={showHelp} setShowHelp={setShowHelp} isMobile={isMobile}
        setTutorialStep={setTutorialStep} setWelcomePhase={setWelcomePhase}
      />

      <ToolsMenu
        isMobile={isMobile} showTools={showTools} setShowTools={setShowTools}
        heatmapMode={heatmapMode} setHeatmapMode={setHeatmapMode}
        patientSimActive={patientSimActive} setPatientSimActive={setPatientSimActive}
        guidedTour={guidedTour} setGuidedTour={setGuidedTour}
        splitScreen={splitScreen} setSplitScreen={setSplitScreen}
        inspectorMode={inspectorMode} setInspectorMode={setInspectorMode}
        setInspectedItem={setInspectedItem}
        circadianTime={circadianTime} setCircadianTime={setCircadianTime}
        comparisonMode={comparisonMode}
        onTutorialAction={handleTutorialAction}
        tutorialHighlight={tutorialHighlight}
      />

      <MaterialInspector
        inspectedItem={inspectedItem} setInspectedItem={setInspectedItem} isMobile={isMobile}
      />
    </div>
  );
}
