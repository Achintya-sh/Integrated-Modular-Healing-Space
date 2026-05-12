export const TOUR_WAYPOINTS = [
  { pos: [0, 1.7, 5.8], lookAt: [0, 1.2, 0], dur: 2.5, zoneIdx: -1 },       // Entrance overview
  { pos: [-1.2, 2.0, 5.5], lookAt: [-3.8, 1.1, 2.8], dur: 2.5, zoneIdx: 0 },  // Approach Seating
  { pos: [-1.8, 1.7, 3.8], lookAt: [-3.8, 1.0, 2.8], dur: 4.0, zoneIdx: 0 },  // Dwell at Seating
  { pos: [1.0, 1.8, 4.2], lookAt: [3.8, 1.4, 2.8], dur: 2.5, zoneIdx: 1 },    // Approach Biophilic
  { pos: [2.0, 1.7, 3.4], lookAt: [4.5, 1.2, 3.0], dur: 4.0, zoneIdx: 1 },    // Dwell at Biophilic
  { pos: [1.0, 1.8, -0.5], lookAt: [3.8, 1.4, -2.8], dur: 2.5, zoneIdx: 2 },  // Approach Digital
  { pos: [2.0, 1.7, -2.2], lookAt: [3.8, 1.5, -3.2], dur: 4.0, zoneIdx: 2 },  // Dwell at Digital
  { pos: [-1.0, 1.8, -1.0], lookAt: [-3.8, 1.1, -2.8], dur: 2.5, zoneIdx: 3 },// Approach Calm
  { pos: [-2.0, 1.7, -2.5], lookAt: [-3.8, 1.0, -2.8], dur: 4.0, zoneIdx: 3 },// Dwell at Calm
  { pos: [0, 4.5, 8.0], lookAt: [0, 1.0, 0], dur: 3.0, zoneIdx: -1 },          // Rise to overview
];

export const TUTORIAL_STEPS = [
  {
    title: "The Problem",
    text: "Hospital waiting rooms cause stress, anxiety, and discomfort. Patients often spend hours in sterile, noisy spaces with harsh fluorescent lighting — worsening their health outcomes before treatment even begins.",
    sub: "This prototype reimagines the waiting experience using evidence-based design.",
    cam: null, // stay at overview
    highlight: null,
  },
  {
    title: "Navigate the Space",
    text: "Drag your mouse (or swipe on mobile / touchpad) to orbit the 3D model around. Try it now!",
    sub: "You can rotate the view in any direction to explore the architecture.",
    cam: null,
    highlight: "viewport",
    requiredAction: "orbit",
  },
  {
    title: "Zoom In & Out",
    text: "Scroll your mouse wheel (or pinch on mobile / two-finger swipe on touchpad) to zoom closer or further away from the model. Try it now!",
    sub: "Try scrolling now to see the space up close.",
    cam: null,
    highlight: "viewport",
    requiredAction: "zoom",
  },
  {
    title: "Zone Navigation",
    text: "Click any of these zone buttons at the top to fly the camera into that area and read about its design interventions.",
    sub: "Each zone addresses a specific aspect of patient wellbeing.",
    cam: null,
    highlight: "zones",
    requiredAction: "click_zone",
  },
  {
    title: "⬡ Adaptive Seating Clusters",
    text: "Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with acoustic partitions let patients choose between solitude and social warmth.",
    sub: "↓ 35% reported isolation",
    cam: { pos: [-1.2, 2.4, 7.2], lookAt: [-3.8, 1.1, 2.8] },
    highlight: null,
  },
  {
    title: "❧ Biophilic Micro-Garden",
    text: "A living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light completes the biophilic immersion.",
    sub: "↓ 28% cortisol stress markers",
    cam: { pos: [1.2, 2.4, 7.2], lookAt: [3.8, 1.4, 2.8] },
    highlight: null,
  },
  {
    title: "◈ Digital Wellness Hub",
    text: "Touchless kiosks deliver real-time queue updates, guided breathing exercises, and ambient nature loops — designed to inform without overwhelming.",
    sub: "↓ 20% perceived wait time",
    cam: { pos: [1.2, 2.4, -6.2], lookAt: [3.8, 1.4, -2.8] },
    highlight: null,
  },
  {
    title: "◎ Calm Engagement Zone",
    text: "A low-stimulation alcove with a curated book corner, art & craft station, and guided meditation audio. Full acoustic dampening creates a personal refuge.",
    sub: "↓ 32% anxiety self-reports",
    cam: { pos: [-1.2, 2.4, -6.2], lookAt: [-3.8, 1.1, -2.8] },
    highlight: null,
  },
  {
    title: "Compare: Standard vs Healing",
    text: "This toggle switches between a typical sterile hospital lighting and the proposed healing environment, so you can visually compare the difference.",
    sub: "Click it anytime to see what conventional waiting rooms look like.",
    cam: null,
    highlight: "comparison",
    requiredAction: "toggle_comparison",
  },
  {
    title: "Advanced Tools",
    text: "Open the Tools panel to access: Heatmap overlay, Patient Flow simulation, Guided Tour, Split View comparison, and Material Inspector.",
    sub: "Each tool reveals a different layer of the design's evidence base.",
    cam: null,
    highlight: "tools",
    requiredAction: "open_tools",
  },
  {
    title: "You're Ready! 🎉",
    text: "You now know everything you need to explore the Integrated Modular Healing Space. Click around, zoom in, try the tools — make it your own.",
    sub: "Press H anytime for keyboard shortcuts.",
    cam: null,
    highlight: null,
  },
];
