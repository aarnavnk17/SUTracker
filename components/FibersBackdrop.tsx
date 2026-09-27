"use client";

import GhostFibers from "@/components/GhostFibers";

// Animated gold fibers with a sapphire glow on black, behind a page section.
// Pushed well past the component's defaults: at the original values the fibres
// barely cleared the black backdrop. brightness tone-maps the whole frame,
// glowIntensity scales the glow term, blueBoost lifts the blue channel on its
// own, and vignette is what was eating the edges -- it multiplies them down to
// (1 - vignette), so 0.85 left almost nothing outside the centre.
export function FibersBackdrop({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
      <GhostFibers
        backdrop="#000000"
        lineColor="#ffd700"
        glowColor="#0f52ba"
        blueBoost={1.3}
        brightness={2.2}
        glowIntensity={1.9}
        layers={5}
        waveAmplitude={0.06}
        speed={0.15}
        vignette={0.55}
        grain={0.035}
        fps={30}
      />
    </div>
  );
}
