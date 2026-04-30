Spatial Design Generation Prompt
Hospital Healing Space — Integrated Modular Framework
Team 142 · Enhancing Emotional Well-being in Hospital Waiting Environments

MASTER PROMPT
Paste this directly into any LLM, image generator, or 3D tool (Spline / ShapesXR / Midjourney / DALL·E / Unreal Engine)


Design an immersive, photorealistic 3D interior of a hospital waiting room redesigned as a healing sanctuary. The space is 18 m wide × 18 m deep × 5.5 m high and is divided into four distinct emotional zones, each with its own lighting mood, material palette, and purpose. The overall aesthetic is Japandi-Healthcare: warm, natural, deeply human — the antithesis of a clinical waiting room.
Architecture: Warm travertine tile floor with thin oak-toned grout lines. Lime-plaster walls in cream #EAD5BB. Exposed oak ceiling beams. Large clerestory windows on the east wall flooding the biophilic zone with natural-spectrum light. A low central divider wall (1.05 m tall) with a built-in planter separates the four zones. A warm oak reception desk sits on the north wall.
Zone 1 — Adaptive Seating Clusters (SW quadrant): Modular lounge sofas in terracotta-tan upholstery #C49070. Movable high-back acoustic panels in linen #E0D0B8. Circular oak coffee table with wireless-charging inlay. Warm terracotta area rug. Overhead: amber pendant lamps #E8C840.
Zone 2 — Biophilic Micro-Garden (NW quadrant): A 4 m × 2.8 m living moss wall in deep greens #3D8A50. Three specimen ficus trees in terracotta pots. A shallow circular water basin in dark wood #7A5030 with translucent blue water #7ECFE0. Sage-green area rug. Natural-spectrum clerestory light from the east wall. Cobblestone stepping stones around the basin.
Zone 3 — Digital Wellness Hub (NE quadrant): Three slim touchless kiosk stands in matte silver. Screens emit a calm blue-indigo glow #5572C4 displaying a breathing animation circle — no news, no clinical content. The back wall is a deep navy acoustic panel #1A2030. Recessed LED glow bars at screen bases pulse slowly.
Zone 4 — Calm Engagement Zone (SE quadrant): A built-in timber bookshelf (3 m wide, 1.9 m tall) with colourful spines on the south wall. Three purple meditation cushions #A865A8 on the floor. A low oak tea table with a ceramic mug. A warm amber floor lamp with a conical shade. Linen acoustic wall panels with geometric relief pattern.
Lighting: ACES filmic tone-mapping. 2700 K warm pendant lamps with gentle intensity flicker. Cool 5500 K fill from east windows. Each zone has its own coloured point-light pool matching its accent: terracotta / sage / indigo / purple. Soft shadow casting. No harsh fluorescent sources anywhere.
Mood: The space should feel like a boutique hotel lobby that happens to be inside a hospital. Calm, purposeful, warm. Patients should feel held, not processed.


TOOL-SPECIFIC VARIANTS
Spline (3D real-time)
Scene: 18 × 18 × 5.5 m box interior
Camera: Perspective, FOV 54°, orbit-enabled
Materials: MeshPhysical — roughness 0.75–0.85 across all organic surfaces; metalness 0.0–0.15
Lighting: HDR warm interior preset + 4 × PointLight zone accents + DirectionalLight sun from top-right
Animation:
  - Plants: gentle sine-wave Y-position oscillation (amplitude 0.018 m, period 11 s)
  - Water surface: opacity pulse 0.75–0.88, hue drift +/-0.04
  - Pendant lights: intensity oscillation +/-12%, period 4.5 s each staggered
  - Screen emissive: slow breathe cycle 0.45–0.9 emissiveIntensity, period 6 s
Post-processing: ACES tonemapping, exposure 1.1, subtle vignette, SSR reflections on water
Interactions: Click mesh → camera lerp to zone camPos + lookAt over 1.2 s
ShapesXR / Meta Quest (Immersive VR)
Scale: 1:1 true-scale walkable environment
Spatial audio:
  Zone 2 (Biophilic): ambient water trickle + distant birdsong, 3D positional from basin origin
  Zone 4 (Calm): soft 40 Hz binaural drone + page-turn sounds from bookshelf
  Zone 3 (Digital): subtle UI chime on approach, filtered white noise
Haptics: gentle pulse (80 ms, 30% intensity) on zone boundary cross
Gaze interaction: dwell 1.8 s on any object → floating info label appears
Locomotion: teleport to zone centre pads, smooth-turn only (no snap)
UI: floating zone name cards at 1.7 m height, opacity 0 → 1 on approach within 2.5 m
AR mode: overlay zone coloured floor pads only, suppress all 3D geometry for mixed-reality preview
Midjourney / DALL·E (Render)
/imagine prompt:
Architectural interior photography, hospital healing waiting room,
Japandi aesthetic, warm travertine floor, exposed oak ceiling beams,
cream lime-plaster walls, four distinct zones:
(1) modular terracotta sofas with linen acoustic panels and amber pendant lamps,
(2) living moss wall with ficus trees, circular water basin, sage green rug,
(3) slim glowing blue kiosk screens in dark alcove,
(4) timber bookshelf with coloured spines, purple meditation cushions, floor lamp.
Natural light from clerestory windows, ACES tone mapping, 8K architectural render,
golden hour atmosphere, no people, ultra-photorealistic, shot on Hasselblad H6D,
24mm tilt-shift lens, f/8, hyper-detailed materials --ar 16:9 --v 6 --style raw --q 2
Unreal Engine 5 (Lumen + Nanite)
Lumen Global Illumination: enabled, quality high
Nanite: enabled for all static meshes
Post-process volume:
  Exposure: min 0.8, max 1.4, metering: manual 1.1
  Tone curve: ACES
  Bloom: 0.6 intensity, threshold 1.2
  Vignette: 0.35
  DOF: focal length 50mm, aperture f/2.8, focus on active zone centre
Lighting:
  Sky atmosphere: disabled (interior only)
  Directional light (sun): 2800 K, intensity 6 lux, angle 35 degrees, cast volumetric
  4 x Point lights: zone accent colours, 1.4 cd, radius 6.5 m, inverse-square falloff
  Rect area light strips: ceiling panels, 5500 K, 0.8 cd
Blueprint: ZoneFocusComponent — on player overlap → lerp camera to zone preset + trigger info widget

MATERIAL SPEC SHEET
SurfaceBase ColourRoughnessMetalnessNotesTravertine floor#C8A87A0.820.0Subtle grout #8A6A4A at 1.6 m intervalsLime plaster walls#EAD5BB0.920.0Slight impasto textureOak beams / furniture#6A42200.680.05Visible grain, matte sheenSofa upholstery#C490700.880.0Woven fabric normal mapAcoustic panel (linen)#E0D0B80.950.0Microfibre textureMoss wall tile (dark)#2E6A3A0.970.0Bumpy organic displacementMoss wall tile (light)#4AA05A0.950.0Water basin surface#7ECFE00.050.1SSR, animated opacity 0.75–0.88Pendant lamp shade#D4A8400.550.08Thin-shell translucencyScreen face#0A18280.050.5emissiveIntensity 0.6–0.9, animatedMeditation cushion#A865A80.880.0Velvet micro-fibreTerracotta pot#8A58300.850.0Slight sub-surface scatterBookshelf timber#6A42200.720.02

EMOTIONAL DESIGN TARGETS
MetricBeforeAfter (Projected)Negative emotional state61%down to ~30%Perceived isolation72%down to ~37%Perceived wait durationBaselinedown 20%Satisfaction scoreBaselineup 25%Anxiety self-report (Calm Zone)Baselinedown 32%Cortisol markers (Biophilic Zone)Baselinedown 28%

Team 142 — Parushya Data · Avni Bhambani · Achintya Sharma · Hirenya Sansanwal
Design Thinking Midterm Submission · Integrated Modular Healing Framework