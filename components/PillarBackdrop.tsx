"use client";

import LightPillar from "@/components/LightPillar";

// Electric blue, the same as --color-azure-500. Top and bottom match, so the
// pillar is one colour end to end rather than a gradient.
const PILLAR_BLUE = "#0038ff";

// Light pillar behind a page section, on black.
export function PillarBackdrop({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 bg-black ${className}`}>
      <LightPillar
        topColor={PILLAR_BLUE}
        bottomColor={PILLAR_BLUE}
        intensity={1.0}
        rotationSpeed={0.7}
        glowAmount={0.004}
        pillarWidth={8.8}
        pillarHeight={0.9}
        noiseIntensity={0.4}
        pillarRotation={0}
        interactive={false}
        mixBlendMode="normal"
      />
    </div>
  );
}
