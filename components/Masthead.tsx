// The splash PNGs are dark red smoke, but their shape lives in the alpha
// channel -- so mask a blue fill through them rather than editing the assets.
function SmokeSplash({
  src,
  position,
  className,
}: {
  src: string;
  position: string;
  className: string;
}) {
  const mask = `url(${src})`;
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute opacity-90 ${className}`}
      style={{
        backgroundColor: "var(--color-azure-500)",
        maskImage: mask,
        WebkitMaskImage: mask,
        maskSize: "900px 900px",
        WebkitMaskSize: "900px 900px",
        maskPosition: position,
        WebkitMaskPosition: position,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}

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
      <SmokeSplash
        src="/su-smoke-tl.png"
        position="top left"
        className="left-0 top-0 h-40 w-56 sm:h-56 sm:w-72"
      />
      <SmokeSplash
        src="/su-smoke-br.png"
        position="bottom right"
        className="bottom-0 right-0 h-40 w-56 sm:h-56 sm:w-72"
      />

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
