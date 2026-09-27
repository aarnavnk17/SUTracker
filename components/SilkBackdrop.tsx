"use client";

import Silk from "@/components/Silk";

// Emerald blue: this year's blue, pulled green enough to keep the jewel cast.
// lightMode folds white into the pattern peaks, which is where the secondary
// white comes from -- the base stays deep so the gold text never competes.
const SILK_BLUE = "#0e7490";

// Full-viewport silk that sits behind every dashboard page.
export function SilkBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <Silk speed={5} scale={1} color={SILK_BLUE} noiseIntensity={1.5} rotation={0} lightMode />
    </div>
  );
}
