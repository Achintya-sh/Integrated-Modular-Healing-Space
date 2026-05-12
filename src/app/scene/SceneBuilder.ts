import * as THREE from "three";
import { ZONES } from "../data/zones";
import { std, box, cyl, sph } from "./utils";

export function buildScene(scene: THREE.Scene, animRefs: any) {
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
  // (Moss wall frame removed for a clean, frameless look)

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



  // ── ZONE 4: Calm Engagement ──────────────────────────────────────────────────

  // ── High-Quality Architectural Bookshelf ──
  const shGroup = new THREE.Group();
  shGroup.position.set(-3.8, 0, -6.32);
  const shMat = std(0x5A3820, 0.6, 0.1); // Rich dark walnut/oak
  const shBackMat = std(0x4A2C18, 0.8, 0.1); // Darker backboard
  
  // Backboard
  const sBack = new THREE.Mesh(box(3.2, 2.4, 0.02), shBackMat);
  sBack.position.set(0, 1.2, -0.16); sBack.castShadow = true; shGroup.add(sBack);
  
  // Top/Bottom/Side frame
  const sTop = new THREE.Mesh(box(3.24, 0.06, 0.36), shMat);
  sTop.position.set(0, 2.43, 0); sTop.castShadow = true; shGroup.add(sTop);
  
  const sBot = new THREE.Mesh(box(3.24, 0.08, 0.36), shMat);
  sBot.position.set(0, 0.04, 0); sBot.castShadow = true; shGroup.add(sBot);
  
  [-1.6, 1.6].forEach(sx => {
    const sSide = new THREE.Mesh(box(0.06, 2.4, 0.36), shMat);
    sSide.position.set(sx, 1.2, 0); sSide.castShadow = true; shGroup.add(sSide);
  });
  
  // Vertical dividers (creates 3 bays)
  [-0.53, 0.53].forEach(sx => {
    const div = new THREE.Mesh(box(0.04, 2.32, 0.32), shMat);
    div.position.set(sx, 1.2, -0.02); div.castShadow = true; shGroup.add(div);
  });
  
  // Horizontal shelves
  const shelfY = [0.45, 0.85, 1.25, 1.65, 2.05];
  shelfY.forEach(sy => {
    const sh = new THREE.Mesh(box(3.14, 0.03, 0.32), shMat);
    sh.position.set(0, sy, -0.02); sh.castShadow = true; shGroup.add(sh);
  });
  
  scene.add(shGroup);
  shGroup.children.forEach(c => { if ((c as any).isMesh) clickables.push({ mesh: c, zoneId: "calm" }); });

  // Abstract Paintings for a homely feel
  function addPainting(px: number, py: number, pz: number, ry: number, width: number, height: number, colors: number[]) {
    const g = new THREE.Group();
    const frameDepth = 0.04, frameW = 0.04;
    const frameMat = std(0x2A1A10, 0.6, 0.1); // Dark wood frame
    // Canvas
    const canvas = new THREE.Mesh(box(width, height, 0.01), std(0xF5F0E8, 0.95));
    canvas.position.z = frameDepth / 2; g.add(canvas);
    // Abstract geometric shapes on canvas
    colors.forEach((c, i) => {
       const shapeW = width * (0.3 + Math.random() * 0.4);
       const shapeH = height * (0.3 + Math.random() * 0.4);
       const shape = new THREE.Mesh(box(shapeW, shapeH, 0.002), std(c, 0.9));
       shape.position.set((Math.random() - 0.5) * (width - shapeW), (Math.random() - 0.5) * (height - shapeH), frameDepth / 2 + 0.006 + i * 0.001);
       g.add(shape);
    });
    // Frame borders
    const tB = new THREE.Mesh(box(width + frameW * 2, frameW, frameDepth), frameMat);
    tB.position.set(0, height / 2 + frameW / 2, 0); g.add(tB);
    const bB = new THREE.Mesh(box(width + frameW * 2, frameW, frameDepth), frameMat);
    bB.position.set(0, -height / 2 - frameW / 2, 0); g.add(bB);
    const lB = new THREE.Mesh(box(frameW, height, frameDepth), frameMat);
    lB.position.set(-width / 2 - frameW / 2, 0, 0); g.add(lB);
    const rB = new THREE.Mesh(box(frameW, height, frameDepth), frameMat);
    rB.position.set(width / 2 + frameW / 2, 0, 0); g.add(rB);
    
    g.position.set(px, py, pz); g.rotation.y = ry;
    scene.add(g);
  }
  
  // Left wall large landscape painting
  addPainting(-7.94, 1.8, 1.0, Math.PI / 2, 2.0, 1.2, [0x4A6A8A, 0xC49070, 0xD8C8A8, 0x2A3A4A]);
  // Back wall portrait near Calm Zone
  addPainting(-1.2, 1.7, -6.44, 0, 1.0, 1.4, [0x5A7848, 0xA87850, 0xE0D0B8]);
  // Back wall square near Digital Hub
  addPainting(1.8, 1.7, -6.44, 0, 0.9, 0.9, [0xD4A840, 0x4A2C0E, 0xC8A87A]);

  // Books — properly scaled (20-35cm tall) and organized in natural clusters
  const bookColors = [0xC05050, 0x5070C0, 0x50A060, 0xC0A030, 0x805090, 0xC07040, 0x405080, 0xC04888, 0x408A70, 0x306070, 0x904040, 0xD0A040, 0x40A090, 0x805040, 0x5050B0];
  const bookHeights = [0.32, 0.28, 0.35, 0.30, 0.25, 0.33, 0.29, 0.27, 0.34, 0.31, 0.26, 0.36, 0.28, 0.33, 0.30];
  const bookWidths  = [0.04, 0.05, 0.03, 0.06, 0.04, 0.05, 0.04, 0.03, 0.04, 0.05, 0.03, 0.06, 0.04, 0.04, 0.05];
  
  for (let shelfLvl = 0; shelfLvl < 4; shelfLvl++) {
    for (let bay = 0; bay < 3; bay++) {
      // 70% chance a bay section has a cluster of books
      if (Math.random() > 0.3) {
        const numBooks = 4 + Math.floor(Math.random() * 9); // 4 to 12 books per cluster
        const bayCenterX = (bay - 1) * 1.06;
        let startX = bayCenterX - 0.35 + Math.random() * 0.3; // Random start pos within bay
        
        for (let b = 0; b < numBooks; b++) {
          const typeIdx = Math.floor(Math.random() * bookColors.length);
          const c = bookColors[typeIdx];
          const bw = bookWidths[typeIdx];
          const bh = bookHeights[typeIdx] + (Math.random() * 0.04 - 0.02); // slight variance
          const bd = 0.20 + (Math.random() * 0.02 - 0.01);
          
          const g = new THREE.Group();
          const cover = new THREE.Mesh(box(bw, bh, bd), std(c, 0.88));
          cover.castShadow = true; g.add(cover);
          const spine = new THREE.Mesh(box(bw + 0.002, bh - 0.01, 0.015), std(c, 0.75, 0.05));
          spine.position.z = bd / 2 + 0.007; g.add(spine);
          const pages = new THREE.Mesh(box(bw - 0.006, bh - 0.015, bd - 0.015), std(0xF5F0E0, 0.95));
          pages.position.x = 0.002; g.add(pages);
          
          const sy = shelfY[shelfLvl] + 0.015 + bh / 2;
          
          // Leaning books at the right end of the cluster
          let lean = 0;
          if (b >= numBooks - 2 && Math.random() > 0.4) {
             lean = 0.12 + Math.random() * 0.1;
             startX += 0.03; // gap for lean
          }
          
          g.position.set(-3.8 + startX, sy, -6.22 + (Math.random() * 0.02 - 0.01));
          g.rotation.z = -lean; // Negative to lean right
          
          scene.add(g);
          g.children.forEach((m: any) => { if (m.isMesh) clickables.push({ mesh: m, zoneId: "calm" }); });
          
          startX += bw + 0.002 + (lean > 0 ? 0.03 : 0);
        }
      }
    }
  }

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
