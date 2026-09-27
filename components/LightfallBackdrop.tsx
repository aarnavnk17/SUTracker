"use client";

import Lightfall from "@/components/Lightfall";

// Red and gold streaks on black, matching the Students Union masthead.
const COLORS = ["#c40000", "#f0b44a", "#d4921f", "#8a0000"];

// Full-viewport falling light that sits behind every dashboard page.
export function LightfallBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Lightfall
        colors={COLORS}
        backgroundColor="#000000"
        speed={1}
        streakCount={6}
        streakWidth={1}
        streakLength={1}
        glow={1}
        density={1}
        twinkle={1}
        zoom={2}
        backgroundGlow={1}
        opacity={0.45}
        mouseInteraction
        mouseStrength={1}
        mouseRadius={0.6}
        dpr={1}
        fps={30}
      />
    </div>
  );
}
