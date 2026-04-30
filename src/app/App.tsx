import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

// ─── Zone Data ─────────────────────────────────────────────────────────────────
const ZONES = [
  {
    id: "seating", label: "Adaptive Seating Clusters", icon: "⬡",
    accent: "#C4905A", hex: 0xC4905A,
    pos: [-3.8, 0, 2.8], camPos: [-1.2, 2.4, 7.2], lookAt: [-3.8, 1.1, 2.8],
    desc: "Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",
    features: ["Modular sofa + ottoman clusters", "Acoustic privacy wing panels", "Wireless charging tabletops", "Wheelchair-accessible clearances"],
    metric: "↓ 35% reported isolation",
  },
  {
    id: "biophilic", label: "Biophilic Micro-Garden", icon: "❧",
    accent: "#4A8A58", hex: 0x4A8A58,
    pos: [3.8, 0, 2.8], camPos: [1.2, 2.4, 7.2], lookAt: [3.8, 1.4, 2.8],
    desc: "A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",
    features: ["4 m × 2.8 m living moss wall", "Recirculating water basin", "Natural-spectrum clerestory", "Terracotta planter clusters"],
    metric: "↓ 28% cortisol stress markers",
  },
  {
    id: "digital", label: "Digital Wellness Hub", icon: "◈",
    accent: "#5572C4", hex: 0x5572C4,
    pos: [3.8, 0, -2.8], camPos: [1.2, 2.4, -6.2], lookAt: [3.8, 1.4, -2.8],
    desc: "Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",
    features: ["Real-time queue status", "Guided breathing animations", "Nature ambient visuals", "Motion-sensing interaction"],
    metric: "↓ 20% perceived wait time",
  },
  {
    id: "calm", label: "Calm Engagement Zone", icon: "◎",
    accent: "#8A5898", hex: 0x8A5898,
    pos: [-3.8, 0, -2.8], camPos: [-1.2, 2.4, -6.2], lookAt: [-3.8, 1.1, -2.8],
    desc: "A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",
    features: ["Curated book corner", "Art & craft station", "Guided meditation audio", "Full acoustic wall panels"],
    metric: "↓ 32% anxiety self-reports",
  },
];

// ─── Lighting swap helper (used by split-screen render) ──────────────────────
function applySplitLighting(refs: any, typical: boolean) {
  if (!refs || !refs.ambient) return;
  if (typical) {
    refs.ambient.color.setHex(0xEAF4FF); refs.ambient.intensity = 0.95;
    refs.sun.color.setHex(0xF0F6FF); refs.sun.intensity = 0.6;
    refs.fillLight.intensity = 0.15;
    refs.accentLights?.forEach((pl: any) => { pl.intensity = 0; });
  } else {
    refs.ambient.color.setHex(0xFFF5E4); refs.ambient.intensity = 0.45;
    refs.sun.color.setHex(0xFFEDD0); refs.sun.intensity = 1.05;
    refs.fillLight.intensity = 0.35;
    refs.accentLights?.forEach((pl: any, i: number) => {
      pl.color.setHex(ZONES[i].hex); pl.intensity = 1.4;
    });
  }
}

// ─── PBR Material helpers ──────────────────────────────────────────────────────
const std = (color: number, rough = 0.78, metal = 0, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...opts });

// ─── Geometry helpers ──────────────────────────────────────────────────────────
function box(w: number, h: number, d: number) { return new THREE.BoxGeometry(w, h, d); }
function cyl(rt: number, rb: number, h: number, seg = 12) { return new THREE.CylinderGeometry(rt, rb, h, seg); }
function sph(r: number, ws = 10, hs = 8) { return new THREE.SphereGeometry(r, ws, hs); }

// ─── Scene Builder ─────────────────────────────────────────────────────────────
function buildScene(scene: THREE.Scene, animRefs: any) {
  // ── Lighting ──────────────────────────────────────────────────────────────────
  const ambient = new THREE.AmbientLight(0xFFF5E4, 0.45);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xFFEDD0, 1.05);
  sun.position.set(9, 14, 10); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 50;
  sun.shadow.camera.left = -14; sun.shadow.camera.right = 14;
  sun.shadow.camera.top = 14; sun.shadow.camera.bottom = -14;
  sun.shadow.bias = -0.001;
  scene.add(sun);

  // Window fill light (cool blue from right)
  const fillLight = new THREE.DirectionalLight(0xC8E0FF, 0.35);
  fillLight.position.set(14, 6, 0);
  scene.add(fillLight);

  // Zone accent point lights (warm pools)
  const accentLights: THREE.PointLight[] = [];
  ZONES.forEach(z => {
    const pl = new THREE.PointLight(z.hex, 1.4, 6.5, 1.8);
    pl.position.set(z.pos[0], 2.6, z.pos[2]);
    scene.add(pl);
    accentLights.push(pl);
  });
  animRefs.ambient = ambient;
  animRefs.sun = sun;
  animRefs.fillLight = fillLight;
  animRefs.accentLights = accentLights;

  // Ceiling strip lights
  [[-3.8, 3.16, 2.8], [3.8, 3.16, 2.8], [3.8, 3.16, -2.8], [-3.8, 3.16, -2.8]].forEach(([x, y, z]) => {
    const strip = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 0.3),
      new THREE.MeshStandardMaterial({ color: 0xFFFDF5, emissive: 0xFFFDF5, emissiveIntensity: 1.2, roughness: 1 })
    );
    strip.rotation.x = Math.PI / 2; strip.position.set(x, y, z);
    scene.add(strip);
    const stripLight: any = null;
    if (stripLight) { stripLight.position.set(x, y - 0.1, z); scene.add(stripLight); }
  });

  // Pendant lamps (animated glow)
  const pendants: any[] = [];
  [[-3.8, 2.85, 2.8], [3.8, 2.85, 2.8], [3.8, 2.85, -2.8], [-3.8, 2.85, -2.8]].forEach(([x, y, z]) => {
    const cord = new THREE.Mesh(cyl(0.012, 0.012, 0.5, 4), std(0x5A4030, 0.9));
    cord.position.set(x, y + 0.25, z); scene.add(cord);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.28, 12, 1, true), std(0xD4A840, 0.5, 0.1, { side: THREE.DoubleSide }));
    shade.position.set(x, y, z); scene.add(shade);
    const bulb = new THREE.Mesh(sph(0.065, 8, 6), new THREE.MeshStandardMaterial({ color: 0xFFEE88, emissive: 0xFFCC44, emissiveIntensity: 2.2 }));
    bulb.position.set(x, y - 0.08, z); scene.add(bulb);
    const pl = new THREE.PointLight(0xFFAA44, 1.2, 4.5, 2);
    pl.position.set(x, y - 0.2, z); scene.add(pl);
    pendants.push({ pl, shade, phase: Math.random() * Math.PI * 2 });
  });
  animRefs.pendants = pendants;

  // ── Architecture ──────────────────────────────────────────────────────────────

  // Floor — warm travertine
  const floorMat = std(0xC8A87A, 0.82, 0.0);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, 13), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
  floor.userData.material = {
    name: "Travertine Honed Tile", dim: "600×600×20 mm",
    specs: [["Finish", "Honed matte"], ["VOC", "<0.3 mg/m³"], ["Slip rating", "R10"], ["Thermal mass", "2.3 kJ/m²K"]],
    note: "Locally quarried. Thermal-mass helps passive climate.",
  };
  scene.add(floor);

  // Heatmap discs (one per zone, hidden by default)
  const heatmapDiscs: THREE.Mesh[] = [];
  ZONES.forEach(z => {
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(2.0, 32),
      new THREE.MeshBasicMaterial({ color: z.hex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide })
    );
    disc.rotation.x = -Math.PI / 2;
    disc.position.set(z.pos[0], 0.012, z.pos[2]);
    scene.add(disc);
    heatmapDiscs.push(disc);
  });
  animRefs.heatmapDiscs = heatmapDiscs;

  // Grout lines (thin dark strips)
  for (let i = -3; i <= 3; i++) {
    const groutH = new THREE.Mesh(new THREE.PlaneGeometry(16, 0.02), std(0x8A6A4A, 0.9));
    groutH.rotation.x = -Math.PI / 2; groutH.position.set(0, 0.001, i * 1.6);
    scene.add(groutH);
    const groutV = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 13), std(0x8A6A4A, 0.9));
    groutV.rotation.x = -Math.PI / 2; groutV.position.set(i * 2.2, 0.001, 0);
    scene.add(groutV);
  }

  // Ceiling
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(16, 13), std(0xF5F0E8, 0.95));
  ceil.rotation.x = Math.PI / 2; ceil.position.y = 3.2;
  scene.add(ceil);

  // Oak ceiling beams (slightly shorter than ceiling so they don't z-fight with walls)
  [[-3.8, 0], [0, 0], [3.8, 0]].forEach(([x]) => {
    const beam = new THREE.Mesh(box(0.18, 0.22, 12.7), std(0x6A4428, 0.75));
    beam.position.set(x, 3.09, 0);
    beam.userData.material = {
      name: "Solid White Oak Beam", dim: "180×220×13000 mm",
      specs: [["Grade", "FSC-certified European oak"], ["Finish", "Natural hard-wax oil"], ["CO₂ storage", "≈ 780 kg/m³"], ["Fire class", "D-s2,d0"]],
      note: "Carbon-negative structural expression.",
    };
    scene.add(beam);
  });

  // Walls — warm lime plaster
  const wallMat = std(0xEADDCA, 0.92);
  const wallMat2 = std(0xE2D5C0, 0.92);
  // Back wall
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(16, 3.2), wallMat);
  backWall.position.set(0, 1.6, -6.5); scene.add(backWall);
  // Front wall (behind camera — invisible, skip)
  // Left wall
  const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(13, 3.2), wallMat2);
  leftWall.rotation.y = Math.PI / 2; leftWall.position.set(-8, 1.6, 0); scene.add(leftWall);
  // Right wall — biophilic half (z > 0) remains solid for the moss wall
  const rightWallBio = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 3.2), wallMat2);
  rightWallBio.rotation.y = -Math.PI / 2; rightWallBio.position.set(8, 1.6, 3.25); scene.add(rightWallBio);
  // Thin infill above the window header on the non-biophilic half (between header and ceiling)
  const rightWallHeader = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 0.2), wallMat2);
  rightWallHeader.rotation.y = -Math.PI / 2; rightWallHeader.position.set(8, 3.1, -3.25); scene.add(rightWallHeader);

  // ── Floor-to-ceiling window bay (z: -6.5 → 0) ──────────────────────────────
  // Exterior landscape backdrop (gradient sky + soft horizon) set back from the glazing
  const skyCanvas = document.createElement("canvas");
  skyCanvas.width = 512; skyCanvas.height = 512;
  const sctx = skyCanvas.getContext("2d")!;
  const grad = sctx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, "#B8DEFF");
  grad.addColorStop(0.55, "#E8D8B8");
  grad.addColorStop(0.62, "#9CB48C");
  grad.addColorStop(1, "#7A9878");
  sctx.fillStyle = grad; sctx.fillRect(0, 0, 512, 512);
  // Soft distant tree silhouettes
  sctx.fillStyle = "rgba(90,120,90,0.55)";
  for (let i = 0; i < 12; i++) {
    const cx = (i / 11) * 512 + Math.sin(i) * 20;
    const r = 30 + (i % 3) * 12;
    sctx.beginPath(); sctx.arc(cx, 320 + (i % 2) * 10, r, 0, Math.PI * 2); sctx.fill();
  }
  const skyTex = new THREE.CanvasTexture(skyCanvas);
  skyTex.colorSpace = THREE.SRGBColorSpace;
  const skyMat = new THREE.MeshBasicMaterial({ map: skyTex });
  animRefs.skyMat = skyMat;

  const backdrop = new THREE.Mesh(new THREE.PlaneGeometry(10, 6), skyMat);
  backdrop.rotation.y = -Math.PI / 2; backdrop.position.set(10.5, 1.8, -3.25);
  scene.add(backdrop);

  // Actual glazing (very faint tinted plane — reads as clean glass)
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xFFFFFF, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.12,
    transmission: 0.8, ior: 1.45, thickness: 0.02,
  });
  const glazing = new THREE.Mesh(new THREE.PlaneGeometry(6.5, 3.0), glassMat);
  glazing.rotation.y = -Math.PI / 2; glazing.position.set(7.99, 1.5, -3.25);
  scene.add(glazing);

  // Window frame — warm oak
  const winOak = std(0xA87848, 0.55, 0.1);
  // Bottom sill (deeper, wraps around)
  const sill = new THREE.Mesh(box(0.32, 0.18, 6.5), winOak);
  sill.position.set(7.9, 0.09, -3.25); scene.add(sill);
  // Top header
  const header = new THREE.Mesh(box(0.22, 0.16, 6.5), winOak);
  header.position.set(7.93, 3.0, -3.25); scene.add(header);
  // End posts (attach to adjacent wall segments)
  [0, -6.5].forEach(zEnd => {
    const post = new THREE.Mesh(box(0.12, 3.0, 0.14), winOak);
    post.position.set(7.93, 1.5, zEnd); scene.add(post);
  });
  // Vertical mullions dividing into 4 bays
  [-1.625, -3.25, -4.875].forEach(zm => {
    const mull = new THREE.Mesh(box(0.06, 2.95, 0.08), winOak);
    mull.position.set(7.93, 1.5, zm); scene.add(mull);
  });
  // Single horizontal transom
  const transom = new THREE.Mesh(box(0.06, 0.05, 6.4), winOak);
  transom.position.set(7.93, 2.15, -3.25); scene.add(transom);

  // Clerestory strip above moss wall (kept — biophilic daylight)
  const clerestory = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.35), glassMat);
  clerestory.rotation.y = -Math.PI / 2; clerestory.position.set(7.99, 2.95, 2.2);
  scene.add(clerestory);
  const clerBackdrop = new THREE.Mesh(new THREE.PlaneGeometry(5, 0.6), skyMat);
  clerBackdrop.rotation.y = -Math.PI / 2; clerBackdrop.position.set(10.5, 2.95, 2.2);
  scene.add(clerBackdrop);
  const clerMull = std(0xA87848, 0.55, 0.1);
  [-1.4, 0, 1.4].forEach(off => {
    const m = new THREE.Mesh(box(0.03, 0.4, 0.05), clerMull);
    m.position.set(7.92, 2.95, 2.2 + off); scene.add(m);
  });

  // Central low divider wall — ends before the reception desk so it doesn't clip through it
  const divider = new THREE.Mesh(box(0.14, 1.05, 9.5), std(0xD8C8A8, 0.88));
  divider.position.set(0, 0.525, 0.5); scene.add(divider);
  // Divider cap
  const divCap = new THREE.Mesh(box(0.22, 0.06, 9.5), std(0xB89860, 0.5, 0.15));
  divCap.position.set(0, 1.08, 0.5); scene.add(divCap);
  // Planter on divider
  const dp = new THREE.Mesh(cyl(0.22, 0.18, 0.28, 10), std(0x8A5A38, 0.85));
  dp.position.set(0, 1.22, 1.2); scene.add(dp);
  const dpl = new THREE.Mesh(sph(0.3, 9, 7), std(0x3A7848, 0.8));
  dpl.position.set(0, 1.62, 1.2); scene.add(dpl);

  // Reception desk
  const deskMat = std(0xA08060, 0.72, 0.05);
  const desk = new THREE.Mesh(box(4.0, 1.0, 0.8), deskMat);
  desk.position.set(0, 0.5, -6.1); desk.castShadow = true; scene.add(desk);
  const deskFace = new THREE.Mesh(box(4.0, 1.0, 0.05), std(0xC8A870, 0.55, 0.2));
  deskFace.position.set(0, 0.5, -5.7); scene.add(deskFace);
  const deskTop = new THREE.Mesh(box(4.2, 0.06, 1.0), std(0x7A5030, 0.45, 0.3));
  deskTop.position.set(0, 1.03, -6.05); scene.add(deskTop);
  // Monitor on desk
  const mon = new THREE.Mesh(box(0.5, 0.32, 0.03), new THREE.MeshStandardMaterial({ color: 0x1A2A3A, roughness: 0.4, metalness: 0.7, emissive: 0x2A4A6A, emissiveIntensity: 0.4 }));
  mon.position.set(-0.6, 1.36, -5.92); scene.add(mon);

  // ── Skirting boards ──────────────────────────────────────────────────────────
  const skirtMat = std(0xC8A870, 0.6, 0.1);
  [
    [0, 0.06, -6.49, 16, 0.12, 0.1, 0],
    [-7.99, 0.06, 0, 0.1, 0.12, 13, 0],
    [7.99, 0.06, 0, 0.1, 0.12, 13, 0],
  ].forEach(([x, y, z, w, h, d]) => {
    const sk = new THREE.Mesh(box(w, h, d), skirtMat);
    sk.position.set(x, y, z); scene.add(sk);
  });

  // ── ZONE 1: Adaptive Seating ─────────────────────────────────────────────────
  const clickables: any[] = [];
  clickables.push({ mesh: floor, zoneId: null });
  scene.traverse(obj => {
    if ((obj as any).isMesh && (obj as any).userData?.material?.name?.includes("Oak Beam")) {
      clickables.push({ mesh: obj, zoneId: null });
    }
  });
  const addClick = (mesh: THREE.Mesh, id: string) => { mesh.castShadow = true; scene.add(mesh); clickables.push({ mesh, zoneId: id }); };

  const sofaColor = std(0xC49070, 0.85);
  const sofaDark  = std(0xA07050, 0.88);
  const legMat    = std(0x5A3018, 0.6, 0.3);
  const cushMat   = std(0xD4A880, 0.82);

  // Modular seat helper — seats: number of cushions (width scales), variant: 'sofa' | 'chair'
  function makeSeat(cx: number, cz: number, ry: number, seats: number, variant: "sofa" | "chair" = "sofa") {
    const g = new THREE.Group();
    const seatW = variant === "chair" ? 0.74 : 0.78;
    const depth = variant === "chair" ? 0.82 : 0.88;
    const w = seats * seatW;
    // Plinth (floating look)
    const plinth = new THREE.Mesh(box(w - 0.06, 0.08, depth - 0.16), legMat);
    plinth.position.set(0, 0.06, 0); g.add(plinth);
    // Base
    const base = new THREE.Mesh(box(w, 0.32, depth), sofaColor);
    base.position.set(0, 0.26, 0); base.castShadow = true; g.add(base);
    // Back — slightly reclined
    const back = new THREE.Mesh(box(w, 0.58, 0.14), sofaDark);
    back.position.set(0, 0.68, -depth / 2 + 0.07);
    back.rotation.x = -0.08; g.add(back);
    // Arms (low profile)
    [-w / 2 + 0.07, w / 2 - 0.07].forEach(ax => {
      const arm = new THREE.Mesh(box(0.14, 0.28, depth - 0.04), sofaDark);
      arm.position.set(ax, 0.56, 0); g.add(arm);
    });
    // Seat cushions per seat
    for (let i = 0; i < seats; i++) {
      const x = -w / 2 + seatW / 2 + i * seatW + (i === 0 ? 0.05 : i === seats - 1 ? -0.05 : 0);
      const cush = new THREE.Mesh(box(seatW - 0.12, 0.14, depth - 0.22), cushMat);
      cush.position.set(x, 0.49, 0.05); cush.castShadow = true; g.add(cush);
      // Back pillow
      const pil = new THREE.Mesh(box(seatW - 0.16, 0.34, 0.14), cushMat);
      pil.position.set(x, 0.72, -depth / 2 + 0.18);
      pil.rotation.x = 0.12; g.add(pil);
    }
    g.position.set(cx, 0, cz); g.rotation.y = ry;
    scene.add(g);
    g.children.forEach((m: any) => { if (m.isMesh) clickables.push({ mesh: m, zoneId: "seating" }); });
    return g;
  }

  // Composition centered on rug (-3.8, 2.5), rug extent x[-5.7..-1.9], z[1.0..4.0]
  // 3-seat anchor sofa along back edge, facing -z (toward room)
  makeSeat(-3.8, 3.35, Math.PI, 3, "sofa");
  // Two lounge chairs angled inward, facing the sofa (kept clear of acoustic wings at x=-5.7 / -1.9)
  makeSeat(-4.9, 1.55, Math.PI / 3.4, 1, "chair");
  makeSeat(-2.7, 1.55, -Math.PI / 3.4, 1, "chair");

  // Rectangular coffee table — low, centered
  const ct = new THREE.Mesh(box(1.3, 0.05, 0.7), std(0x7A5030, 0.45, 0.25));
  ct.position.set(-3.8, 0.42, 2.6); ct.castShadow = true;
  scene.add(ct); clickables.push({ mesh: ct, zoneId: "seating" });
  // Coffee table frame (thin underslung)
  const ctFrame = new THREE.Mesh(box(1.24, 0.03, 0.64), legMat);
  ctFrame.position.set(-3.8, 0.38, 2.6); scene.add(ctFrame);
  [[-0.58, -0.3], [0.58, -0.3], [-0.58, 0.3], [0.58, 0.3]].forEach(([lx, lz]) => {
    const l = new THREE.Mesh(cyl(0.022, 0.022, 0.38, 6), legMat);
    l.position.set(-3.8 + lx, 0.19, 2.6 + lz); scene.add(l);
  });
  // Ceramic vase centerpiece
  const vase = new THREE.Mesh(cyl(0.09, 0.07, 0.18, 14), std(0xE8DCC4, 0.7));
  vase.position.set(-3.8, 0.53, 2.6); vase.castShadow = true; scene.add(vase);
  const stem = new THREE.Mesh(cyl(0.006, 0.006, 0.34, 4), std(0x4A6A3A, 0.7));
  stem.position.set(-3.8, 0.76, 2.6); scene.add(stem);

  // Side table with small plant — tucked just inside rug between sofa end and chair
  const sidet = new THREE.Mesh(cyl(0.2, 0.2, 0.04, 14), std(0x6A4020, 0.5, 0.2));
  sidet.position.set(-5.35, 0.52, 3.55); sidet.castShadow = true;
  scene.add(sidet); clickables.push({ mesh: sidet, zoneId: "seating" });
  const sidetLeg = new THREE.Mesh(cyl(0.03, 0.05, 0.5, 8), legMat);
  sidetLeg.position.set(-5.35, 0.25, 3.55); scene.add(sidetLeg);
  const potS = new THREE.Mesh(cyl(0.1, 0.08, 0.13, 12), std(0x8A6A4A, 0.8));
  potS.position.set(-5.35, 0.61, 3.55); scene.add(potS);
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(sph(0.08, 8, 6), std(0x4A7A4A, 0.85));
    leaf.position.set(-5.35 + Math.cos(i) * 0.05, 0.73 + i * 0.03, 3.55 + Math.sin(i) * 0.05);
    leaf.scale.set(1, 0.5, 1); scene.add(leaf);
  }

  // Floor pouf for flexible seating
  const pouf = new THREE.Mesh(cyl(0.32, 0.32, 0.34, 16), std(0xB89070, 0.88));
  pouf.position.set(-3.8, 0.17, 1.4); pouf.castShadow = true;
  scene.add(pouf); clickables.push({ mesh: pouf, zoneId: "seating" });

  // Acoustic partition panels
  [[0.06, 1.05, 2.0, -1.9, 0.55, 2.8], [0.06, 1.05, 2.0, -5.7, 0.55, 2.5]].forEach(([w, h, d, x, y, z]) => {
    const panel = new THREE.Mesh(box(w, h, d), std(0xE0D0B8, 0.92));
    panel.position.set(x, y, z); panel.castShadow = true;
    panel.userData.material = {
      name: "Wool-Felt Acoustic Privacy Wing", dim: "2000×1050×60 mm",
      specs: [["Composition", "100% recycled PET + wool felt"], ["Acoustic NRC", "0.90"], ["Fire class", "B-s1,d0"], ["Colorways", "5 naturals"]],
      note: "Reduces reverberation to < 0.8 s.",
    };
    scene.add(panel); clickables.push({ mesh: panel, zoneId: "seating" });
    const cap2 = new THREE.Mesh(box(w + 0.02, 0.04, d + 0.02), std(0xB09060, 0.5, 0.2));
    cap2.position.set(x, y + 0.545, z); scene.add(cap2);
  });

  // ── ZONE 2: Biophilic ────────────────────────────────────────────────────────
  const plantAnim: any[] = [];

  // Moss wall tiles on right wall
  for (let row = 0; row < 5; row++) for (let col = 0; col < 5; col++) {
    const shade = (row + col) % 3;
    const c = [0x2E6A3A, 0x3D8A4A, 0x4AA05A][shade];
    const tile = new THREE.Mesh(box(0.52, 0.52, 0.08), std(c, 0.95));
    tile.position.set(7.96, 0.38 + row * 0.55, 1.0 + col * 0.55);
    tile.rotation.y = -Math.PI / 2; tile.castShadow = true;
    tile.userData.material = {
      name: "Preserved Reindeer Moss Panel", dim: "500×500×40 mm",
      specs: [["Species", "Cladonia rangiferina (mixed tones)"], ["Maintenance", "Zero water · Zero light"], ["Acoustic NRC", "0.75"], ["Air particulate trap", "Light PM2.5 capture"]],
      note: "Biophilic anchor of the space.",
    };
    scene.add(tile); clickables.push({ mesh: tile, zoneId: "biophilic" });
  }
  // Moss wall frame
  const mwFrame = new THREE.Mesh(box(0.06, 3.0, 2.88), std(0x6A4820, 0.6, 0.2));
  mwFrame.position.set(7.94, 1.4, 2.4); mwFrame.rotation.y = -Math.PI / 2; scene.add(mwFrame);

  // Specimen trees
  [[2.8, 1.8], [4.4, 3.0], [3.2, 1.1]].forEach(([x, z], i) => {
    const pot = new THREE.Mesh(cyl(0.22, 0.16, 0.4, 10), std(0x8A5830, 0.85));
    pot.position.set(x, 0.2, z); pot.castShadow = true;
    scene.add(pot); clickables.push({ mesh: pot, zoneId: "biophilic" });
    const trunk = new THREE.Mesh(cyl(0.05, 0.07, 0.7, 7), std(0x4A2C0E, 0.9));
    trunk.position.set(x, 0.75, z); scene.add(trunk);
    const foliageH = 1.1 + i * 0.15;
    const foliage = new THREE.Mesh(sph(0.45 + i * 0.05, 10, 8), std(0x2E7040, 0.85));
    foliage.position.set(x, 1.32 + i * 0.1, z); foliage.castShadow = true;
    scene.add(foliage); clickables.push({ mesh: foliage, zoneId: "biophilic" });
    const f2 = new THREE.Mesh(sph(0.3, 8, 6), std(0x3D8A50, 0.85));
    f2.position.set(x + 0.25, 1.05 + i * 0.08, z - 0.2); scene.add(f2);
    plantAnim.push({ mesh: foliage, baseY: foliage.position.y, phase: i * 1.2 });
    plantAnim.push({ mesh: f2, baseY: f2.position.y, phase: i * 1.2 + 0.5 });
  });
  animRefs.plants = plantAnim;

  // Water basin
  const basin = new THREE.Mesh(cyl(0.6, 0.55, 0.18, 20), std(0x7A5030, 0.8));
  basin.position.set(5.0, 0.09, 3.8); basin.castShadow = true;
  scene.add(basin); clickables.push({ mesh: basin, zoneId: "biophilic" });
  const waterSurf = new THREE.Mesh(new THREE.CircleGeometry(0.54, 20), new THREE.MeshStandardMaterial({ color: 0x7ECFE0, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.82 }));
  waterSurf.rotation.x = -Math.PI / 2; waterSurf.position.set(5.0, 0.19, 3.8);
  scene.add(waterSurf); animRefs.water = waterSurf; clickables.push({ mesh: waterSurf, zoneId: "biophilic" });

  // Cobble stepping stones around basin
  [0, 1, 2, 3, 4, 5].forEach(i => {
    const a = (i / 6) * Math.PI * 2;
    const stone = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.04, 8), std(0xA09080, 0.95));
    stone.position.set(5.0 + Math.cos(a) * 0.82, 0.02, 3.8 + Math.sin(a) * 0.82);
    scene.add(stone);
  });

  // ── ZONE 3: Digital Wellness ─────────────────────────────────────────────────
  const screens: any[] = [];
  [[2.5, -2.0], [3.8, -3.6], [5.1, -2.0]].forEach(([x, z], i) => {
    const stand = new THREE.Mesh(cyl(0.05, 0.08, 1.2, 8), std(0xB0B0B0, 0.4, 0.8));
    stand.position.set(x, 0.6, z); scene.add(stand);
    const baseP = new THREE.Mesh(cyl(0.18, 0.18, 0.04, 12), std(0x909090, 0.4, 0.7));
    baseP.position.set(x, 0.02, z); scene.add(baseP);

    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x0A1828, roughness: 0.05, metalness: 0.5,
      emissive: i === 1 ? 0x1A3468 : 0x1A2858, emissiveIntensity: 0.7,
    });
    const screenM = new THREE.Mesh(box(0.62, 0.96, 0.04), screenMat);
    screenM.position.set(x, 1.68, z); screenM.castShadow = true;
    scene.add(screenM); clickables.push({ mesh: screenM, zoneId: "digital" });
    screens.push({ mesh: screenM, mat: screenMat, phase: i * 1.4 });

    // Glow bar at bottom of screen
    const barMat = new THREE.MeshStandardMaterial({ color: 0x4080FF, emissive: 0x4080FF, emissiveIntensity: 1.8 });
    const bar = new THREE.Mesh(box(0.62, 0.04, 0.02), barMat);
    bar.position.set(x, 1.21, z + 0.03); scene.add(bar);
    screens.push({ mesh: bar, mat: barMat, phase: i * 1.4 + 0.3, isBar: true });

    // Screen glow halo
    const glowPl = new THREE.PointLight(0x4060CC, 0.8, 2.5, 2);
    glowPl.position.set(x, 1.68, z + 0.2); scene.add(glowPl);
    screens.push({ pl: glowPl, phase: i * 1.4, isPl: true });
  });
  animRefs.screens = screens;

  // Alcove back wall panel (blue-accent)
  const alcove = new THREE.Mesh(box(4.2, 2.8, 0.06), std(0x1A2030, 0.8));
  alcove.position.set(3.8, 1.4, -6.47); scene.add(alcove);

  // ── ZONE 4: Calm Engagement ──────────────────────────────────────────────────

  // Bookshelf
  const shelfMat = std(0x6A4220, 0.72);
  const shelfBody2 = new THREE.Mesh(box(3.2, 1.9, 0.34), shelfMat);
  shelfBody2.position.set(-3.8, 0.95, -6.33); shelfBody2.castShadow = true;
  scene.add(shelfBody2); clickables.push({ mesh: shelfBody2, zoneId: "calm" });
  // Shelf planks
  [0.28, 0.92, 1.56].forEach(sy => {
    const plank = new THREE.Mesh(box(3.12, 0.05, 0.3), std(0x8A5830, 0.65));
    plank.position.set(-3.8, sy, -6.18); scene.add(plank);
  });
  // Books
  const bookColors = [0xC05050, 0x5070C0, 0x50A060, 0xC0A030, 0x805090, 0xC07040, 0x405080, 0xC04888, 0x408A70];
  bookColors.forEach((c, i) => {
    const book = new THREE.Mesh(box(0.08 + (i % 3) * 0.02, 0.46 + (i % 2) * 0.1, 0.22), std(c, 0.9));
    book.position.set(-4.8 + i * 0.36, 1.12, -6.16); book.rotation.y = (i % 3 - 1) * 0.06;
    book.castShadow = true; scene.add(book); clickables.push({ mesh: book, zoneId: "calm" });
  });

  // Meditation cushions
  const cushionMat = std(0xA865A8, 0.88);
  [[-4.6, -2.2], [-3.5, -3.2], [-2.5, -2.5]].forEach(([x, z]) => {
    const cush = new THREE.Mesh(cyl(0.32, 0.3, 0.12, 14), cushionMat);
    cush.position.set(x, 0.06, z); cush.castShadow = true;
    scene.add(cush); clickables.push({ mesh: cush, zoneId: "calm" });
    // Cushion seam line
    const seam = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.01, 6, 20), std(0x8A4888, 0.9));
    seam.rotation.x = Math.PI / 2; seam.position.set(x, 0.12, z); scene.add(seam);
  });

  // Low tea table
  const ttMat = std(0x6A4220, 0.55, 0.1);
  const tt = new THREE.Mesh(box(1.3, 0.06, 0.75), ttMat);
  tt.position.set(-3.5, 0.38, -2.9); tt.castShadow = true;
  scene.add(tt); clickables.push({ mesh: tt, zoneId: "calm" });
  [[-0.55, -0.3], [0.55, -0.3], [-0.55, 0.3], [0.55, 0.3]].forEach(([lx, lz]) => {
    const l = new THREE.Mesh(cyl(0.022, 0.022, 0.36, 5), std(0x4A2C0E, 0.7, 0.2));
    l.position.set(-3.5 + lx, 0.18, -2.9 + lz); scene.add(l);
  });
  // Tea mug
  const mug = new THREE.Mesh(cyl(0.055, 0.05, 0.1, 10), std(0xE8E0D0, 0.7));
  mug.position.set(-3.5, 0.46, -2.9); scene.add(mug);

  // Floor lamp
  const lpMat = std(0x8A6840, 0.5, 0.4);
  const lampPole2 = new THREE.Mesh(cyl(0.022, 0.022, 1.55, 6), lpMat);
  lampPole2.position.set(-2.2, 0.78, -1.6); scene.add(lampPole2);
  const lampBase2 = new THREE.Mesh(cyl(0.15, 0.15, 0.04, 10), lpMat);
  lampBase2.position.set(-2.2, 0.02, -1.6); scene.add(lampBase2);
  const lampShade2 = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.38, 12, 1, true), std(0xE8C870, 0.7, 0, { side: THREE.DoubleSide }));
  lampShade2.position.set(-2.2, 1.65, -1.6); lampShade2.castShadow = true;
  scene.add(lampShade2); clickables.push({ mesh: lampShade2, zoneId: "calm" });
  const lampLight2 = new THREE.PointLight(0xFFAA44, 1.6, 4, 2);
  lampLight2.position.set(-2.2, 1.45, -1.6); scene.add(lampLight2);
  animRefs.lampLight = lampLight2;

  // Acoustic wall panels (calm zone — mounted on back and left walls)
  // Back wall panel
  const backPanel = new THREE.Mesh(box(2.2, 2.0, 0.06), std(0xD8C8A8, 0.95));
  backPanel.position.set(-4.8, 1.6, -6.44); scene.add(backPanel);
  const backPanelInset = new THREE.Mesh(box(2.0, 1.8, 0.04), std(0xC8B898, 0.98));
  backPanelInset.position.set(-4.8, 1.6, -6.42); scene.add(backPanelInset);
  // Left wall panel
  const leftPanel = new THREE.Mesh(box(0.06, 1.8, 2.0), std(0xD8C8A8, 0.95));
  leftPanel.position.set(-7.95, 1.6, -3.5); scene.add(leftPanel);
  const leftPanelInset = new THREE.Mesh(box(0.04, 1.6, 1.8), std(0xC8B898, 0.98));
  leftPanelInset.position.set(-7.93, 1.6, -3.5); scene.add(leftPanelInset);

  // ── Decorative: rug under seating zone ───────────────────────────────────────
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(3.8, 3.0), std(0xA87850, 0.98));
  rug.rotation.x = -Math.PI / 2; rug.position.set(-3.8, 0.003, 2.5); scene.add(rug);
  const rugEdge = new THREE.Mesh(new THREE.PlaneGeometry(4.0, 3.2), std(0x8A6038, 0.98));
  rugEdge.rotation.x = -Math.PI / 2; rugEdge.position.set(-3.8, 0.002, 2.5); scene.add(rugEdge);

  // Biophilic zone rug (green tones)
  const rug2 = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 2.8), std(0x5A7848, 0.98));
  rug2.rotation.x = -Math.PI / 2; rug2.position.set(3.8, 0.003, 2.5); scene.add(rug2);

  return clickables;
}

// ─── Main Component ────────────────────────────────────────────────────────────
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
  const [firstPersonMode, setFirstPersonMode] = useState(false);
  const [splitScreen, setSplitScreen] = useState(false);
  const [inspectorMode, setInspectorMode] = useState(false);
  const [inspectedItem, setInspectedItem] = useState<any>(null);
  const [patientSimActive, setPatientSimActive] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [occupancy, setOccupancy] = useState<Record<string, number>>({});

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

  // First-person mode
  useEffect(() => {
    R.current.firstPersonMode = firstPersonMode;
    if (firstPersonMode) {
      R.current.fp = {
        pos: new THREE.Vector3(0, 1.6, 5.8),
        yaw: 0, pitch: -0.05,
        keys: {} as Record<string, boolean>,
        bobPhase: 0,
      };
      R.current.isOrbit = false;
      setActiveZone(null);
    } else {
      handleReset();
    }
  }, [firstPersonMode, handleReset]);

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
        el.style.cursor = hit ? "pointer" : (r.firstPersonMode ? "crosshair" : "grab");
        return;
      }
      const dx = e.clientX - lx, dy = e.clientY - ly;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true;
      if (r.firstPersonMode && r.fp) {
        r.fp.yaw -= dx * 0.004;
        r.fp.pitch = Math.max(-0.9, Math.min(0.9, r.fp.pitch - dy * 0.004));
      } else if (r.isOrbit) {
        r.orbit.theta -= dx * 0.005;
        r.orbit.phi    = Math.max(0.18, Math.min(1.35, r.orbit.phi + dy * 0.005));
      }
      lx = e.clientX; ly = e.clientY;
    };
    const onUp   = () => { drag = false; el.style.cursor = "grab"; };
    const onWheel = (e: WheelEvent) => {
      if (r.isOrbit) r.orbit.radius = Math.max(8, Math.min(20, r.orbit.radius + e.deltaY * 0.013));
    };
    const onClick = (e: MouseEvent) => {
      if (moved) return;
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
        r.orbit.theta -= (t.clientX - lt.clientX) * 0.005;
        r.orbit.phi    = Math.max(0.18, Math.min(1.35, r.orbit.phi + (t.clientY - lt.clientY) * 0.005));
        lt = t;
        e.preventDefault();
      } else if (e.touches.length === 2 && pinchDist > 0) {
        // Two fingers - pinch to zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const newPinchDist = Math.sqrt(dx * dx + dy * dy);
        const delta = pinchDist - newPinchDist;
        r.orbit.radius = Math.max(8, Math.min(20, r.orbit.radius + delta * 0.02));
        pinchDist = newPinchDist;
        e.preventDefault();
      }
    };
    const onTouchEnd = () => {
      lt = null;
      pinchDist = 0;
    };

    const onKeyUp = (e: KeyboardEvent) => {
      if (r.firstPersonMode && r.fp) {
        r.fp.keys[e.key.toLowerCase()] = false;
        if (e.key === "Shift") r.fp.keys["shift"] = false;
      }
    };
    // Keyboard shortcuts
    const onKeyDown = (e: KeyboardEvent) => {
      if (r.firstPersonMode && r.fp) {
        r.fp.keys[e.key.toLowerCase()] = true;
        if (e.key === "Shift") r.fp.keys["shift"] = true;
      }
      // ESC to close panels (priority: modals → modes → zones)
      if (e.key === 'Escape') {
        if (showHelp) {
          setShowHelp(false);
        } else if (inspectorMode) {
          setInspectorMode(false);
          setInspectedItem(null);
        } else if (r.firstPersonMode) {
          setFirstPersonMode(false);
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
        if (e.key === 'ArrowLeft') r.orbit.theta -= 0.1;
        if (e.key === 'ArrowRight') r.orbit.theta += 0.1;
        if (e.key === 'ArrowUp') r.orbit.phi = Math.max(0.18, r.orbit.phi - 0.1);
        if (e.key === 'ArrowDown') r.orbit.phi = Math.min(1.35, r.orbit.phi + 0.1);
      }
    };

    // Animation loop
    let t = 0;
    const animate = (ts: number) => {
      r.frame = requestAnimationFrame(animate);
      t = ts * 0.001;

      // First-person camera
      if (r.firstPersonMode && r.fp) {
        const fp = r.fp;
        const running = fp.keys["shift"];
        const spd = running ? 0.15 : 0.07;
        const fwd = new THREE.Vector3(-Math.sin(fp.yaw), 0, -Math.cos(fp.yaw));
        const rgt = new THREE.Vector3(-Math.cos(fp.yaw), 0, Math.sin(fp.yaw));
        const prevX = fp.pos.x, prevZ = fp.pos.z;
        let moving = false;
        if (fp.keys["w"] || fp.keys["arrowup"]) { fp.pos.addScaledVector(fwd, spd); moving = true; }
        if (fp.keys["s"] || fp.keys["arrowdown"]) { fp.pos.addScaledVector(fwd, -spd); moving = true; }
        if (fp.keys["a"] || fp.keys["arrowleft"]) { fp.pos.addScaledVector(rgt, -spd); moving = true; }
        if (fp.keys["d"] || fp.keys["arrowright"]) { fp.pos.addScaledVector(rgt, spd); moving = true; }
        // Bounds (room walls)
        fp.pos.x = Math.max(-7.3, Math.min(7.3, fp.pos.x));
        fp.pos.z = Math.max(-5.8, Math.min(6.1, fp.pos.z));
        // Divider wall collision (low wall at x≈0, z between -4.25 and 5.25)
        if (fp.pos.z > -4.25 && fp.pos.z < 5.25) {
          if (prevX < -0.25 && fp.pos.x > -0.25) fp.pos.x = -0.25;
          else if (prevX > 0.25 && fp.pos.x < 0.25) fp.pos.x = 0.25;
          else if (Math.abs(fp.pos.x) < 0.25) fp.pos.x = prevX < 0 ? -0.25 : 0.25;
        }
        // Reception desk collision (z < -5.5, x -2 to 2)
        if (fp.pos.z < -5.3 && Math.abs(fp.pos.x) < 2.2) fp.pos.z = -5.3;
        // Head bob
        if (moving) fp.bobPhase += running ? 0.28 : 0.18;
        const bob = moving ? Math.sin(fp.bobPhase) * 0.035 : 0;
        const swayX = moving ? Math.cos(fp.bobPhase * 0.5) * 0.015 : 0;
        fp.pos.y = 1.62 + bob;
        r.camera.position.copy(fp.pos);
        r.camera.position.x += swayX;
        const lookTarget = fp.pos.clone().add(new THREE.Vector3(
          -Math.sin(fp.yaw) * Math.cos(fp.pitch),
          Math.sin(fp.pitch),
          -Math.cos(fp.yaw) * Math.cos(fp.pitch),
        ));
        r.cLookAt.copy(lookTarget);
        r.camera.lookAt(r.cLookAt);
      } else {
        // Orbit camera
        if (r.isOrbit) {
          const { theta, phi, radius } = r.orbit;
          r.tPos.set(
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi),
            radius * Math.sin(phi) * Math.cos(theta)
          );
          r.tLookAt.set(0, 1, 0);
        }
        const lerpSpeed = r.isOrbit ? 0.08 : 0.06;
        r.camera.position.lerp(r.tPos, lerpSpeed);
        r.cLookAt.lerp(r.tLookAt, lerpSpeed);
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

    const onResize = () => {
      r.camera.aspect = el.clientWidth / el.clientHeight;
      r.camera.updateProjectionMatrix();
      r.renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(r.frame);
      el.removeEventListener("mousedown", onDown);
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
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        .panel-in { animation: panelIn 0.38s cubic-bezier(.34,1.48,.64,1) forwards; }
        .fade-up  { animation: fadeUp 0.55s ease forwards; }

        @keyframes dockSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dockItemIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes sliderIn {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .dock-in { animation: dockSlideIn 0.42s cubic-bezier(.2,.8,.2,1) forwards; }
        .dock-item { animation: dockItemIn 0.4s cubic-bezier(.2,.8,.2,1) backwards; }
        .slider-in { animation: sliderIn 0.4s cubic-bezier(.2,.8,.2,1) forwards; }

        .tools-fab {
          position: relative;
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .tools-fab::before {
          content: ""; position: absolute; inset: -6px;
          border-radius: 16px;
          background: radial-gradient(circle, rgba(196,144,90,0.35), transparent 70%);
          opacity: 0; transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .tools-fab.open::before { opacity: 1; }
        .tools-fab .bars, .tools-fab .cross {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          transition: opacity 0.28s ease, transform 0.35s cubic-bezier(.34,1.3,.64,1);
        }
        .tools-fab .bars { opacity: 1; transform: rotate(0deg); }
        .tools-fab.open .bars { opacity: 0; transform: rotate(-90deg); }
        .tools-fab .cross { opacity: 0; transform: rotate(90deg); }
        .tools-fab.open .cross { opacity: 1; transform: rotate(0deg); }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: rgba(245,236,216,0.2); border-radius:2px; }

        @media (max-width: 768px) {
          .panel-in { animation: fadeUp 0.35s ease forwards; }
        }
      `}</style>

      {/* 3D Viewport */}
      <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />

      {/* Cinematic vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 75% 75% at center, transparent 40%, rgba(18,12,6,0.55) 100%)", pointerEvents: "none" }} />

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

      {/* Zone Navigation */}
      <div style={{
        position: "absolute", top: isMobile ? 65 : 76, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: isMobile ? 5 : 7, flexWrap: "wrap", justifyContent: "center",
        zIndex: 10, maxWidth: isMobile ? "calc(100% - 32px)" : "auto",
        padding: isMobile ? "0 8px" : 0,
      }}>
        {ZONES.map((zone, i) => {
          const isActive = activeZone?.id === zone.id;
          return (
            <button key={zone.id} className="zbtn"
              onClick={() => handleZoom(zone)}
              style={{
                padding: isMobile ? "6px 12px" : "7px 16px", borderRadius: 24,
                border: `1.5px solid ${isActive ? zone.accent : "rgba(248,238,216,0.25)"}`,
                background: isActive ? zone.accent : "rgba(18,12,6,0.6)",
                color: isActive ? "#fff" : "rgba(248,238,216,0.78)",
                fontSize: isMobile ? 10 : 11, fontWeight: isActive ? 500 : 400, letterSpacing: "0.04em",
                cursor: "pointer", backdropFilter: "blur(12px)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: isActive ? `0 4px 20px ${zone.accent}55` : "none",
                animationDelay: `${i * 0.06}s`,
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

      {/* Detail Panel */}
      {displayZone && (
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
      )}

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

      {/* Control Buttons - Top Right */}
      <div style={{
        position: "absolute",
        top: isMobile ? 16 : 90,
        right: isMobile ? 16 : 22,
        display: "flex",
        gap: 8,
        zIndex: 30,
        pointerEvents: "auto",
      }}>
        {/* Comparison Mode Toggle */}
        <button
          onClick={() => setComparisonMode(!comparisonMode)}
          className="zbtn"
          style={{
            height: 40, padding: "0 14px", borderRadius: 20,
            border: `1.5px solid ${comparisonMode ? "#C4905A" : "rgba(248,238,216,0.3)"}`,
            background: comparisonMode ? "#C4905A" : "rgba(18,12,6,0.7)",
            color: comparisonMode ? "#fff" : "rgba(248,238,216,0.8)",
            fontSize: isMobile ? 10 : 11, cursor: "pointer",
            backdropFilter: "blur(12px)", fontFamily: "'DM Sans'",
            letterSpacing: "0.04em",
            display: "flex", alignItems: "center", gap: 6,
          }}
          title="Compare to typical waiting room"
        >
          {comparisonMode ? "✨ Healing" : "⊘ Typical"}
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

      {/* Feature Dock — left rail (desktop) / bottom strip (mobile) */}
      {showTools && <div className="dock-in" style={{
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
            key: "fp", label: "1st Person", icon: "◐", active: firstPersonMode,
            toggle: () => {
              if (!firstPersonMode) {
                setSplitScreen(false); // disable conflicting mode
                setShowTools(false); // close tool dock for cleaner view
              }
              setFirstPersonMode(v => !v);
            },
            color: "#5572C4"
          },
          {
            key: "split", label: "Split View", icon: "◫", active: splitScreen,
            toggle: () => {
              if (!splitScreen) setFirstPersonMode(false); // disable conflicting mode
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
      </div>}

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

      {/* Material Inspector Backdrop */}
      {inspectedItem && (
        <div onClick={() => setInspectedItem(null)} style={{
          position: "absolute", inset: 0,
          background: "rgba(10,6,2,0.55)",
          backdropFilter: "blur(2px)",
          zIndex: 39,
          animation: "fadeUp 0.2s ease forwards",
        }} />
      )}

      {/* Material Inspector Panel */}
      {inspectedItem && (
        <div className="panel-in" style={{
          position: "absolute",
          left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: isMobile ? "calc(100% - 32px)" : 420,
          maxWidth: "calc(100vw - 32px)",
          maxHeight: "75vh", overflowY: "auto",
          background: "rgba(24,18,10,0.97)",
          borderRadius: 16, padding: "22px 24px",
          border: "1px solid rgba(196,144,90,0.55)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          backdropFilter: "blur(18px)",
          zIndex: 40,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "#C4905A" }}>
                Material · Sample
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#F8EED8", marginTop: 2 }}>
                {inspectedItem.name}
              </div>
            </div>
            <button onClick={() => setInspectedItem(null)} style={{
              border: "none", background: "rgba(248,238,216,0.1)", color: "rgba(248,238,216,0.7)",
              borderRadius: 8, width: 28, height: 28, fontSize: 14, cursor: "pointer",
            }}>×</button>
          </div>
          <div style={{ fontSize: 11, color: "rgba(248,238,216,0.55)", fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>
            {inspectedItem.dim}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontFamily: "'DM Sans', sans-serif" }}>
            {inspectedItem.specs.map((row: [string, string], i: number) => (
              <div key={i} style={{ padding: "8px 10px", background: "rgba(248,238,216,0.04)", borderRadius: 8, border: "1px solid rgba(248,238,216,0.08)" }}>
                <div style={{ fontSize: 8, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,238,216,0.45)" }}>{row[0]}</div>
                <div style={{ fontSize: 12, color: "#F8EED8", marginTop: 2 }}>{row[1]}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, padding: 10, background: "rgba(196,144,90,0.12)", borderRadius: 8, fontSize: 11, fontStyle: "italic", color: "rgba(248,238,216,0.75)", fontFamily: "'DM Sans'" }}>
            {inspectedItem.note}
          </div>
        </div>
      )}

      {/* Inspector Mode active hint */}
      {inspectorMode && !inspectedItem && (
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

      {/* First-person hint + crosshair */}
      {firstPersonMode && (
        <>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: 6, height: 6, borderRadius: 3,
            background: "rgba(255,255,255,0.55)",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
            zIndex: 14, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: isMobile ? 80 : 110, left: "50%", transform: "translateX(-50%)",
            padding: "8px 20px", borderRadius: 16,
            background: "rgba(85,114,196,0.9)", color: "#fff",
            fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: "0.06em",
            zIndex: 14, backdropFilter: "blur(12px)",
            display: "flex", gap: 18,
          }}>
            <span>WASD · Move</span>
            <span>Shift · Run</span>
            <span>Drag · Look</span>
            <span>ESC · Exit</span>
          </div>
        </>
      )}

      {/* Help Panel */}
      {showHelp && (
        <>
          <div onClick={() => setShowHelp(false)} style={{
            position: "absolute", inset: 0,
            background: "rgba(10,6,2,0.5)",
            backdropFilter: "blur(2px)",
            zIndex: 24,
          }} />
        <div
          className="panel-in"
          style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "calc(100% - 32px)" : 360,
            maxWidth: "calc(100vw - 32px)",
            maxHeight: "75vh",
            overflowY: "auto",
            zIndex: 25,
            background: "rgba(16,10,4,0.97)",
            borderRadius: 16, padding: isMobile ? "20px" : "24px",
            border: "1px solid rgba(248,238,216,0.2)",
            backdropFilter: "blur(18px)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#F8EED8", marginBottom: 16 }}>
            {isMobile ? "Touch Controls" : "Keyboard Shortcuts"}
          </h3>
          {!isMobile && (
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(248,238,216,0.7)", lineHeight: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>1, 2, 3, 4</span>
                <span>Toggle zones</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>R</span>
                <span>Reset to overview</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>ESC</span>
                <span>Close panels / Exit modes</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>H or ?</span>
                <span>Toggle help</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>Arrow keys</span>
                <span>Orbit camera</span>
              </div>
            </div>
          )}
          <div style={{ marginTop: isMobile ? 0 : 20, paddingTop: isMobile ? 0 : 16, borderTop: isMobile ? "none" : "1px solid rgba(248,238,216,0.1)" }}>
            {!isMobile && (
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(248,238,216,0.4)", marginBottom: 10 }}>
                Mouse Controls
              </h4>
            )}
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(248,238,216,0.7)", lineHeight: 2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>{isMobile ? "Swipe" : "Drag"}</span>
                <span>Orbit view</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>{isMobile ? "Pinch" : "Scroll"}</span>
                <span>Zoom in/out</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>{isMobile ? "Tap" : "Click"}</span>
                <span>Focus on zone</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(248,238,216,0.5)" }}>{isMobile ? "Tap icons" : "Use buttons"}</span>
                <span>Zone navigation</span>
              </div>
            </div>
          </div>
        </div>
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

    </div>
  );
}