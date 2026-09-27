"use client";

import Silk from "@/components/Silk";

// The masthead red, the same one the old backdrop led with. Gold is the text
// colour here, so the silk stays red and the two never compete.
const SILK_RED = "#c40000";

// Full-viewport silk that sits behind every dashboard page.
export function SilkBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-black">
      <Silk speed={5} scale={1} color={SILK_RED} noiseIntensity={1.5} rotation={0} />
    </div>
  );
}
