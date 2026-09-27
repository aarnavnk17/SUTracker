"use client";

import Silk from "@/components/Silk";

// Antique gold rather than a bright gold: the pattern is what sits behind the
// black cards, so it has to stay darker than the gold text sitting on them.
const SILK_GOLD = "#8a5f33";

// Full-viewport silk that sits behind every dashboard page.
export function SilkBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <Silk speed={5} scale={1} color={SILK_GOLD} noiseIntensity={1.5} rotation={0} />
    </div>
  );
}
