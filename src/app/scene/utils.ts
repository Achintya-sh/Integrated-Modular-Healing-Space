import * as THREE from "three";
import { ZONES } from "../data/zones";

export function applySplitLighting(refs: any, typical: boolean) {
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
export const std = (color: number, rough = 0.78, metal = 0, opts = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal, ...opts });

// ─── Geometry helpers ──────────────────────────────────────────────────────────
export function box(w: number, h: number, d: number) { return new THREE.BoxGeometry(w, h, d); }
export function cyl(rt: number, rb: number, h: number, seg = 12) { return new THREE.CylinderGeometry(rt, rb, h, seg); }
export function sph(r: number, ws = 10, hs = 8) { return new THREE.SphereGeometry(r, ws, hs); }
