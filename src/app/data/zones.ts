export interface ZoneType {
  id: string;
  label: string;
  icon: string;
  accent: string;
  hex: number;
  pos: [number, number, number];
  camPos: [number, number, number];
  lookAt: [number, number, number];
  desc: string;
  features: string[];
  metric: string;
}

export const ZONES: ZoneType[] = [
  {
    id: "seating", label: "Adaptive Seating Clusters", icon: "⬡",
    accent: "#C4905A", hex: 0xC4905A,
    pos: [-3.8, 0, 2.8], camPos: [-1.2, 2.4, 7.2], lookAt: [-3.8, 1.1, 2.8],
    desc: "Reconfigurable modular seating in semi-private pods. Ergonomic lounge chairs with movable acoustic partitions let patients choose between solitude and social warmth.",
    features: ["Modular sofa + ottoman clusters", "Large patterned area rug", "Acoustic privacy wing panels", "Wireless charging tabletops"],
    metric: "↓ 35% reported isolation",
  },
  {
    id: "biophilic", label: "Biophilic Micro-Garden", icon: "❧",
    accent: "#4A8A58", hex: 0x4A8A58,
    pos: [3.8, 0, 2.8], camPos: [1.2, 2.4, 7.2], lookAt: [3.8, 1.4, 2.8],
    desc: "A curated living moss wall, specimen trees, and a recirculating water basin bring measurable stress relief. Natural-spectrum light from clerestory windows completes the biophilic immersion.",
    features: ["4 m × 2.8 m living moss wall", "Recirculating water basin", "Restorative wooden bench", "Terracotta planter clusters"],
    metric: "↓ 28% cortisol stress markers",
  },
  {
    id: "digital", label: "Digital Wellness Hub", icon: "◈",
    accent: "#5572C4", hex: 0x5572C4,
    pos: [3.8, 0, -2.8], camPos: [1.2, 2.4, -6.2], lookAt: [3.8, 1.4, -2.8],
    desc: "Touchless kiosks in organic alcoves deliver real-time queue updates, guided breathing, and ambient nature loops — designed to inform without overwhelming.",
    features: ["Real-time queue status", "Guided breathing animations", "Ergonomic high stools", "Motion-sensing interaction"],
    metric: "↓ 20% perceived wait time",
  },
  {
    id: "calm", label: "Calm Engagement Zone", icon: "◎",
    accent: "#8A5898", hex: 0x8A5898,
    pos: [-3.8, 0, -2.8], camPos: [-1.2, 2.4, -6.2], lookAt: [-3.8, 1.1, -2.8],
    desc: "A low-stimulation alcove for reading, art, and guided audio meditation. Full acoustic dampening and warm amber light create a personal refuge within the waiting space.",
    features: ["Curated book corner & armchair", "Abstract landscape paintings", "Large indoor foliage", "Full acoustic wall panels"],
    metric: "↓ 32% anxiety self-reports",
  },
];
