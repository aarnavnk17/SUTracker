"use client";

import GhostFibers from "@/components/GhostFibers";

// Animated white fibers with a blue glow on black, behind a page section.
export function FibersBackdrop({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      <GhostFibers
        backdrop="#000000"
        lineColor="#ffffff"
        glowColor="#0ea5e9"
        blueBoost={1}
        brightness={1.4}
        glowIntensity={1.2}
        layers={5}
        waveAmplitude={0.06}
        speed={0.15}
        vignette={0.85}
        grain={0.035}
        fps={30}
      />
    </div>
  );
}
