import Aurora from "@/components/Aurora";

function LogoChip({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-14 items-center rounded-md bg-white px-2.5 py-1.5 sm:h-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-auto object-contain" />
    </div>
  );
}

export function Masthead({
  subtitle = "Attendance Tracker",
}: {
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-black py-6 sm:py-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* The azure ramp, dark to light, so the masthead reads as the same
            blue as the silk behind the dashboard rather than its own. */}
        <Aurora
          colorStops={["#0026ad", "#0038ff", "#3864ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-4 px-5 sm:justify-between">
        <div className="flex items-center gap-3">
          <LogoChip src="/psg-diamond.png" alt="PSG - In Nation Building since 1926" />
          <LogoChip src="/psg-centenary.png" alt="PSG Centenary" />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-wordmark text-2xl font-semibold uppercase tracking-[0.3em] text-body sm:text-4xl">
            Students Union
          </p>
          <p className="font-script text-2xl text-body sm:text-3xl">
            Be the Change
          </p>
          <p className="eyebrow mt-2 text-muted">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3">
          <LogoChip src="/psg-75th.png" alt="PSG College of Technology - 75 Years" />
          <LogoChip src="/su-logo.png" alt="Students Union crest" />
        </div>
      </div>
    </div>
  );
}
