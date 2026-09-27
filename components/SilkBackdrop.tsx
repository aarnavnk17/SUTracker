"use client";

import Silk from "@/components/Silk";

// Sapphire, the same blue as --color-azure-500. Inlined because Silk takes a
// hex string, not a CSS variable -- keep the two in step by hand.
// lightMode folds white into the pattern peaks, which is where the secondary
// white comes from -- the base stays deep so the gold text never competes.
const SILK_BLUE = "#0f52ba";

// Full-viewport silk that sits behind every dashboard page.
export function SilkBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <Silk speed={5} scale={1} color={SILK_BLUE} noiseIntensity={1.5} rotation={0} lightMode />
    </div>
  );
}
