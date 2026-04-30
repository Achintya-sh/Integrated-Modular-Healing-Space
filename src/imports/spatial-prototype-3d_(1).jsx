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
    mapColor: "#C4905A", mapX: 22, mapY: 55, mapW: 38, mapH: 32,
  },
  {
    id: "biophilic", label: "Biophilic Micro-Garden", icon: "❧",
    accent: "#4A8A58", hex: 0x4A8A58,
    pos: [3.8, 0, 2.8], camPos: [1.2, 2.4, 7.2], lookAt: [3.8, 1.4, 2.8],
    desc: "A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",
    features: ["4 m × 2.8 m living moss wall", "Recirculating water basin", "Natural-spectrum clerestory", "Terracotta planter clusters"],
    metric: "↓ 28% cortisol stress markers",
    mapColor: "#4A8A58", mapX: 60, mapY: 55, mapW: 38, mapH: 32,
  },
  {
    id: "digital", label: "Digital Wellness Hub", icon: "◈",
    accent: "#5572C4", hex: 0x5572C4,
    pos: [3.8, 0, -2.8], camPos: [1.2, 2.4, -6.2], lookAt: [3.8, 1.4, -2.8],
    desc: "Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",
    features: ["Real-time queue status", "Guided breathing animations", "Nature ambient visuals", "Motion-sensing interaction"],
    metric: "↓ 20% perceived wait time",
    mapColor: "#5572C4", mapX: 60, mapY: 13, mapW: 38, mapH: 32,
  },
  {
    id: "calm", label: "Calm Engagement Zone", icon: "◎",
    accent: "#8A5898", hex: 0x8A5898,
    pos: [-3.8, 0, -2.8], camPos: [-1.2, 2.4, -6.2], lookAt: [-3.8, 1.1, -2.8],
    desc: "A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",
    features: ["Curated book corner", "Art & craft station", "Guided meditation audio", "Full acoustic wall panels"],
    metric: "↓ 32% anxiety self-reports",
    mapColor: "#8A5898", mapX: 22, mapY: 13, mapW: 38, mapH: 32,
  },
];

// ─── PBR Material helpers ──────────────────────────────────────────────────────
const std = (color, rough = 0.78, metal = 0, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...opts });

// ─── Geometry helpers ──────────────────────────────────────────────────────────
function box(w, h, d) { return new THREE.BoxGeometry(w, h, d); }
function cyl(rt, rb, h, seg = 12) { return new THREE.CylinderGeometry(rt, rb, h, seg); }
function sph(r, ws = 10, hs = 8) { return new THREE.SphereGeometry(r, ws, hs); }

// ─── Scene Builder ─────────────────────────────────────────────────────────────
function buildScene(scene, animRefs) {
  // ── Lighting ──────────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xFFF5E4, 0.45));

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
  ZONES.forEach(z => {
    const pl = new THREE.PointLight(z.hex, 1.4, 6.5, 1.8);
    pl.position.set(z.pos[0], 2.6, z.pos[2]);
    scene.add(pl);
  });

  // Ceiling strip lights
  [[-3.8, 3.16, 2.8], [3.8, 3.16, 2.8], [3.8, 3.16, -2.8], [-3.8, 3.16, -2.8]].forEach(([x, y, z]) => {
    const strip = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 0.3),
      new THREE.MeshStandardMaterial({ color: 0xFFFDF5, emissive: 0xFFFDF5, emissiveIntensity: 1.2, roughness: 1 })
    );
    strip.rotation.x = Math.PI / 2; strip.position.set(x, y, z);
    scene.add(strip);
    const stripLight = new THREE.RectAreaLight !== undefined
      ? null : new THREE.PointLight(0xFFF8E8, 0.5, 4);
    if (stripLight) { stripLight.position.set(x, y - 0.1, z); scene.add(stripLight); }
  });

  // Pendant lamps (animated glow)
  const pendants = [];
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
  scene.add(floor);

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

  // Oak ceiling beams
  [[-3.8, 0], [0, 0], [3.8, 0]].forEach(([x]) => {
    const beam = new THREE.Mesh(box(0.18, 0.22, 13), std(0x6A4428, 0.75));
    beam.position.set(x, 3.09, 0); scene.add(beam);
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
  // Right wall — with window cutout effect
  const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(13, 3.2), wallMat2);
  rightWall.rotation.y = -Math.PI / 2; rightWall.position.set(8, 1.6, 0); scene.add(rightWall);

  // Windows (right wall) — bright sky panels
  const skyMat = new THREE.MeshStandardMaterial({ color: 0xA8DCFF, emissive: 0x88CCFF, emissiveIntensity: 0.6, roughness: 1 });
  [[7.98, 1.65, 2.5], [7.98, 1.65, -1.0]].forEach(([x, y, z]) => {
    const win = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 1.8), skyMat);
    win.rotation.y = -Math.PI / 2; win.position.set(x, y, z);
    scene.add(win);
    // Frame
    const frameMat = std(0xC8A870, 0.6, 0.1);
    [[0, 0.93, 0, 2.92, 0.06], [0, -0.93, 0, 2.92, 0.06],
     [-1.46, 0, 0, 0.06, 1.92], [1.46, 0, 0, 0.06, 1.92],
     [0, 0, 0, 0.04, 1.92], [0.7, 0, 0, 2.92, 0.04]
    ].forEach(([fx, fy, fz, fw, fh]) => {
      const fr = new THREE.Mesh(box(0.05, fh, fw), frameMat);
      fr.rotation.y = -Math.PI / 2; fr.position.set(x - 0.02, y + fy, z + fx);
      scene.add(fr);
    });
    // Light shaft
    const shaft = new THREE.Mesh(
      new THREE.ConeGeometry(1.2, 4, 6, 1, true),
      new THREE.MeshStandardMaterial({ color: 0xFFEEAA, transparent: true, opacity: 0.04, side: THREE.DoubleSide, depthWrite: false })
    );
    shaft.rotation.z = -Math.PI / 2; shaft.position.set(x - 2.5, y - 1.2, z);
    scene.add(shaft);
  });

  // Central low divider wall
  const divider = new THREE.Mesh(box(0.14, 1.05, 11.5), std(0xD8C8A8, 0.88));
  divider.position.set(0, 0.525, -0.5); scene.add(divider);
  // Divider cap
  const divCap = new THREE.Mesh(box(0.22, 0.06, 11.5), std(0xB89860, 0.5, 0.15));
  divCap.position.set(0, 1.08, -0.5); scene.add(divCap);
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
  const clickables = [];
  const addClick = (mesh, id) => { mesh.castShadow = true; scene.add(mesh); clickables.push({ mesh, zoneId: id }); };

  const sofaColor = std(0xC49070, 0.85);
  const sofaDark  = std(0xA07050, 0.88);
  const legMat    = std(0x5A3018, 0.6, 0.3);
  const cushMat   = std(0xD4A880, 0.82);

  function makeSofa(cx, cz, ry = 0) {
    const g = new THREE.Group();
    // Base
    const base = new THREE.Mesh(box(1.6, 0.38, 0.8), sofaColor);
    base.position.set(0, 0.19, 0); base.castShadow = true; g.add(base);
    // Back
    const back = new THREE.Mesh(box(1.6, 0.52, 0.12), sofaDark);
    back.position.set(0, 0.57, -0.34); g.add(back);
    // Arms
    [-0.74, 0.74].forEach(ax => {
      const arm = new THREE.Mesh(box(0.12, 0.22, 0.8), sofaDark);
      arm.position.set(ax, 0.49, 0); g.add(arm);
    });
    // Cushions
    [-0.45, 0.45].forEach(cx2 => {
      const cush = new THREE.Mesh(box(0.68, 0.14, 0.65), cushMat);
      cush.position.set(cx2, 0.45, 0.04); g.add(cush);
    });
    // Legs
    [[-0.68, -0.34], [0.68, -0.34], [-0.68, 0.34], [0.68, 0.34]].forEach(([lx, lz]) => {
      const leg = new THREE.Mesh(cyl(0.028, 0.028, 0.14, 6), legMat);
      leg.position.set(lx, 0.07, lz); g.add(leg);
    });
    g.position.set(cx, 0, cz); g.rotation.y = ry;
    scene.add(g);
    g.children.filter(c => c.isMesh && c !== g.children[3]).forEach(m => clickables.push({ mesh: m, zoneId: "seating" }));
    return g;
  }

  makeSofa(-4.5, 3.4, 0.3);
  makeSofa(-2.8, 3.0, -0.2);
  makeSofa(-4.2, 1.5, 0.1);

  // Ottoman / side tables
  [[-3.8, 2.5], [-3.2, 3.6]].forEach(([x, z]) => {
    const ot = new THREE.Mesh(cyl(0.28, 0.28, 0.34, 10), std(0xD0A878, 0.82));
    ot.position.set(x, 0.17, z); ot.castShadow = true;
    scene.add(ot); clickables.push({ mesh: ot, zoneId: "seating" });
  });

  // Central round table
  const ct = new THREE.Mesh(cyl(0.52, 0.52, 0.05, 16), std(0x7A5030, 0.5, 0.2));
  ct.position.set(-3.8, 0.56, 2.5); ct.castShadow = true;
  scene.add(ct); clickables.push({ mesh: ct, zoneId: "seating" });
  const ctBase = new THREE.Mesh(cyl(0.04, 0.12, 0.54, 8), legMat);
  ctBase.position.set(-3.8, 0.27, 2.5); scene.add(ctBase);

  // Acoustic partition panels
  [[0.06, 1.05, 2.0, -1.9, 0.55, 2.8], [0.06, 1.05, 2.0, -5.7, 0.55, 2.5]].forEach(([w, h, d, x, y, z]) => {
    const panel = new THREE.Mesh(box(w, h, d), std(0xE0D0B8, 0.92));
    panel.position.set(x, y, z); panel.castShadow = true;
    scene.add(panel); clickables.push({ mesh: panel, zoneId: "seating" });
    const cap2 = new THREE.Mesh(box(w + 0.02, 0.04, d + 0.02), std(0xB09060, 0.5, 0.2));
    cap2.position.set(x, y + 0.545, z); scene.add(cap2);
  });

  // ── ZONE 2: Biophilic ────────────────────────────────────────────────────────
  const plantAnim = [];

  // Moss wall tiles on right wall
  for (let row = 0; row < 5; row++) for (let col = 0; col < 5; col++) {
    const shade = (row + col) % 3;
    const c = [0x2E6A3A, 0x3D8A4A, 0x4AA05A][shade];
    const tile = new THREE.Mesh(box(0.52, 0.52, 0.08), std(c, 0.95));
    tile.position.set(7.96, 0.38 + row * 0.55, 1.0 + col * 0.55);
    tile.rotation.y = -Math.PI / 2; tile.castShadow = true;
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
  const screens = [];
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

  // Acoustic wall panels (calm zone — back-left)
  [[-4.8, 1.6, -6.48, 2.2, 2.0], [-6.0, 1.6, -3.5, 2.0, 1.8]].forEach(([x, y, z, w, h]) => {
    const panel2 = new THREE.Mesh(box(w < 2.2 ? 0.06 : w, h, w < 2.2 ? w : 0.06), std(0xD8C8A8, 0.95));
    panel2.position.set(x, y, z); scene.add(panel2);
    // Fabric pattern via darker edge inset
    const inset = new THREE.Mesh(box(w < 2.2 ? 0.04 : w - 0.2, h - 0.2, w < 2.2 ? w - 0.2 : 0.04), std(0xC8B898, 0.98));
    inset.position.set(x + (w < 2.2 ? 0.02 : 0), y, z + (w < 2.2 ? 0 : 0.02)); scene.add(inset);
  });

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

// ─── Minimap ───────────────────────────────────────────────────────────────────
function Minimap({ activeZone }) {
  return (
    <div style={{
      position: "absolute", bottom: 28, left: 26,
      width: 130, height: 100,
      background: "rgba(20,14,8,0.82)",
      border: "1px solid rgba(245,236,216,0.18)",
      borderRadius: 10, overflow: "hidden",
      backdropFilter: "blur(10px)",
    }}>
      <svg width="130" height="100" viewBox="0 0 130 100">
        {/* Room outline */}
        <rect x="8" y="8" width="114" height="84" fill="none" stroke="rgba(245,236,216,0.25)" strokeWidth="1.2" rx="2" />
        {/* Divider */}
        <line x1="65" y1="8" x2="65" y2="92" stroke="rgba(245,236,216,0.2)" strokeWidth="1.5" />
        <line x1="8" y1="50" x2="122" y2="50" stroke="rgba(245,236,216,0.2)" strokeWidth="1.5" />
        {/* Zones */}
        {ZONES.map(z => (
          <rect key={z.id} x={z.mapX} y={z.mapY} width={z.mapW} height={z.mapH}
            fill={activeZone?.id === z.id ? z.mapColor : z.mapColor + "55"}
            stroke={z.mapColor} strokeWidth="1.2" rx="3"
            style={{ transition: "fill 0.3s" }}
          />
        ))}
        {/* Zone labels */}
        {ZONES.map(z => (
          <text key={z.id + "t"} x={z.mapX + z.mapW / 2} y={z.mapY + z.mapH / 2 + 3}
            textAnchor="middle" fill="rgba(255,245,228,0.8)"
            fontSize="6" fontFamily="'DM Sans', sans-serif">
            {z.icon}
          </text>
        ))}
        {/* Camera indicator */}
        <polygon points="65,94 62,99 68,99" fill="rgba(245,236,216,0.6)" />
        {/* Label */}
        <text x="65" y="6" textAnchor="middle" fill="rgba(245,236,216,0.35)" fontSize="4.5" fontFamily="'DM Sans', sans-serif">FLOOR PLAN 1:50</text>
      </svg>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function SpatialPrototype() {
  const mountRef  = useRef(null);
  const R         = useRef({});
  const [activeZone, setActiveZone] = useState(null);
  const [showHint, setShowHint]   = useState(true);
  const [loaded, setLoaded]       = useState(false);
  const [hovered, setHovered]     = useState(null);

  const handleZoom = useCallback(zone => {
    const r = R.current;
    if (!r.zoomTo) return;
    r.zoomTo(zone);
  }, []);

  const handleReset = useCallback(() => {
    const r = R.current;
    if (r.resetView) r.resetView();
  }, []);

  useEffect(() => {
    const el  = mountRef.current;
    const r   = R.current;
    r.animRefs = {};

    // Renderer
    r.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    r.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    r.renderer.setSize(el.clientWidth, el.clientHeight);
    r.renderer.shadowMap.enabled = true;
    r.renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    r.renderer.toneMapping       = THREE.ACESFilmicToneMapping;
    r.renderer.toneMappingExposure = 1.1;
    r.renderer.outputColorSpace  = THREE.SRGBColorSpace;
    el.appendChild(r.renderer.domElement);

    // Scene
    r.scene = new THREE.Scene();
    r.scene.background = new THREE.Color(0xEDE0C8);
    r.scene.fog = new THREE.Fog(0xEDE0C8, 18, 30);

    // Camera
    r.camera = new THREE.PerspectiveCamera(54, el.clientWidth / el.clientHeight, 0.1, 80);
    r.camera.position.set(0, 7.5, 15.5);

    // Build
    r.clickables = buildScene(r.scene, r.animRefs);

    // Camera state
    r.orbit  = { theta: 0.38, phi: 0.58, radius: 15.5 };
    r.isOrbit = true;
    r.tPos    = new THREE.Vector3(0, 7.5, 15.5);
    r.tLookAt = new THREE.Vector3(0, 1.0, 0);
    r.cLookAt = new THREE.Vector3(0, 1.0, 0);

    // Raycaster / hover
    const raycaster = new THREE.Raycaster();
    const m2d = new THREE.Vector2();

    const getHit = (clientX, clientY) => {
      const rect = el.getBoundingClientRect();
      m2d.x =  ((clientX - rect.left) / rect.width)  * 2 - 1;
      m2d.y = -((clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(m2d, r.camera);
      const hits = raycaster.intersectObjects(r.clickables.map(o => o.mesh));
      if (!hits.length) return null;
      return r.clickables.find(o => o.mesh === hits[0].object);
    };

    // Drag state
    let drag = false, moved = false, lx = 0, ly = 0;

    const onDown = e => {
      drag = true; moved = false;
      lx = e.clientX; ly = e.clientY;
      setShowHint(false);
    };
    const onMove = e => {
      if (!drag) {
        const hit = getHit(e.clientX, e.clientY);
        setHovered(hit ? ZONES.find(z => z.id === hit.zoneId) : null);
        el.style.cursor = hit ? "pointer" : "grab";
        return;
      }
      const dx = e.clientX - lx, dy = e.clientY - ly;
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) moved = true;
      if (r.isOrbit) {
        r.orbit.theta -= dx * 0.005;
        r.orbit.phi    = Math.max(0.18, Math.min(1.35, r.orbit.phi + dy * 0.005));
      }
      lx = e.clientX; ly = e.clientY;
    };
    const onUp   = () => { drag = false; };
    const onWheel = e => {
      if (r.isOrbit) r.orbit.radius = Math.max(6, Math.min(22, r.orbit.radius + e.deltaY * 0.013));
    };
    const onClick = e => {
      if (moved) return;
      const hit = getHit(e.clientX, e.clientY);
      if (hit) {
        const zone = ZONES.find(z => z.id === hit.zoneId);
        if (zone) r.zoomTo(zone);
      }
    };

    // Touch
    let lt = null;
    const onTouchStart = e => { lt = e.touches[0]; };
    const onTouchMove  = e => {
      if (!lt || e.touches.length !== 1) return;
      const t = e.touches[0];
      r.orbit.theta -= (t.clientX - lt.clientX) * 0.005;
      r.orbit.phi    = Math.max(0.18, Math.min(1.35, r.orbit.phi + (t.clientY - lt.clientY) * 0.005));
      lt = t; e.preventDefault();
    };

    // Exposed controls
    r.zoomTo = zone => {
      r.isOrbit = false;
      r.tPos.set(...zone.camPos);
      r.tLookAt.set(...zone.lookAt);
      setActiveZone(zone);
    };
    r.resetView = () => {
      r.isOrbit = true;
      setActiveZone(null);
      setHovered(null);
    };

    // Animation loop
    let t = 0;
    const animate = ts => {
      r.frame = requestAnimationFrame(animate);
      t = ts * 0.001;

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
      r.camera.position.lerp(r.tPos, 0.052);
      r.cLookAt.lerp(r.tLookAt, 0.052);
      r.camera.lookAt(r.cLookAt);

      // Animate pendants
      if (r.animRefs.pendants) {
        r.animRefs.pendants.forEach(p => {
          p.pl.intensity = 1.1 + Math.sin(t * 1.1 + p.phase) * 0.12;
        });
      }
      // Animate plants (gentle sway)
      if (r.animRefs.plants) {
        r.animRefs.plants.forEach(p => {
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
        r.animRefs.screens.forEach(s => {
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
        r.animRefs.lampLight.intensity = 1.5 + Math.sin(t * 1.3) * 0.15;
      }

      r.renderer.render(r.scene, r.camera);
    };
    animate(0);
    setTimeout(() => setLoaded(true), 400);

    // Events
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("click", onClick);
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

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
      window.removeEventListener("resize", onResize);
      if (el.contains(r.renderer.domElement)) el.removeChild(r.renderer.domElement);
      r.renderer.dispose();
    };
  }, []);

  const displayZone = activeZone || hovered;

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
        .panel-in { animation: panelIn 0.38s cubic-bezier(.34,1.48,.64,1) forwards; }
        .fade-up  { animation: fadeUp 0.55s ease forwards; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-thumb { background: rgba(245,236,216,0.2); border-radius:2px; }
      `}</style>

      {/* 3D Viewport */}
      <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />

      {/* Cinematic vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 75% 75% at center, transparent 40%, rgba(18,12,6,0.55) 100%)", pointerEvents: "none" }} />

      {/* Header */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        padding: "20px 28px 60px",
        background: "linear-gradient(180deg, rgba(18,12,6,0.82) 0%, transparent 100%)",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        pointerEvents: "none",
      }}>
        <div className={loaded ? "fade-up" : ""} style={{ opacity: loaded ? 1 : 0 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 23, fontWeight: 600, color: "#F8EED8", letterSpacing: "-0.01em", lineHeight: 1.1 }}>
            Integrated Modular Healing Space
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(248,238,216,0.5)", marginTop: 5 }}>
            3D Spatial Prototype · Hospital Waiting Environment · Team 142
          </div>
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(248,238,216,0.38)", textAlign: "right", lineHeight: 1.8, letterSpacing: "0.04em" }}>
          300 m² floor plate<br />Capacity: 40–60 persons<br />Scale approx. 1:50
        </div>
      </div>

      {/* Zone Navigation */}
      <div style={{
        position: "absolute", top: 76, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 7, flexWrap: "wrap", justifyContent: "center",
        zIndex: 10,
      }}>
        {ZONES.map((zone, i) => {
          const isActive = activeZone?.id === zone.id;
          return (
            <button key={zone.id} className="zbtn"
              onClick={() => handleZoom(zone)}
              style={{
                padding: "7px 16px", borderRadius: 24,
                border: `1.5px solid ${isActive ? zone.accent : "rgba(248,238,216,0.25)"}`,
                background: isActive ? zone.accent : "rgba(18,12,6,0.6)",
                color: isActive ? "#fff" : "rgba(248,238,216,0.78)",
                fontSize: 11, fontWeight: isActive ? 500 : 400, letterSpacing: "0.04em",
                cursor: "pointer", backdropFilter: "blur(12px)",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: isActive ? `0 4px 20px ${zone.accent}55` : "none",
                animationDelay: `${i * 0.06}s`,
              }}
            >
              {zone.icon} {zone.label}
            </button>
          );
        })}
        {activeZone && (
          <button className="zbtn" onClick={handleReset}
            style={{
              padding: "7px 16px", borderRadius: 24,
              border: "1.5px solid rgba(248,238,216,0.28)",
              background: "rgba(18,12,6,0.6)", color: "rgba(248,238,216,0.7)",
              fontSize: 11, fontWeight: 300, cursor: "pointer",
              backdropFilter: "blur(12px)", fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ↺ Overview
          </button>
        )}
      </div>

      {/* Detail Panel */}
      {displayZone && (
        <div key={displayZone.id} className="panel-in"
          style={{
            position: "absolute", right: 22, top: "50%",
            width: 300, zIndex: 20,
            background: "rgba(16,10,4,0.9)",
            borderRadius: 20, padding: "28px 24px",
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
          {displayZone.features.map((f, i) => (
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
        </div>
      )}

      {/* Minimap */}
      <Minimap activeZone={activeZone} />

      {/* Hint bar */}
      {showHint && !activeZone && (
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
          <span>Hover or click any zone</span>
        </div>
      )}

      {/* Compass */}
      <div style={{
        position: "absolute", bottom: 28, right: 26,
        fontFamily: "'DM Sans'", fontSize: 9,
        color: "rgba(248,238,216,0.32)", textAlign: "center", lineHeight: 1.9,
        letterSpacing: "0.1em",
      }}>
        <div style={{ fontSize: 20, opacity: 0.35 }}>⊕</div>
        N
      </div>

      {/* Zone indicator dots (bottom-center) */}
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
    </div>
  );
}
