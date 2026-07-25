export default function Header() {
  return (
    <header className="pt-16 sm:pt-24 pb-12 sm:pb-[72px] border-b border-line">
      <div className="text-xs tracking-[0.08em] uppercase text-grey mb-4 sm:mb-5">
        Frank Anthony
      </div>

      <h1 className="font-serif font-medium text-[clamp(30px,7.5vw,52px)] tracking-[-0.01em] leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5">
        Fullstack developer,<br />
        frontend-heavy.
      </h1>

      <p className="text-sm sm:text-[15px] text-grey max-w-[46ch] leading-relaxed">
        Building on{" "}
        <strong className="text-ink font-medium">Solana</strong>,{" "}
        <strong className="text-ink font-medium">Monad</strong>, and{" "}
        <strong className="text-ink font-medium">Zama FHE</strong>.
        {" "}Based in Lagos, Nigeria. Currently finishing a B.Tech in Computer Science.
      </p>
    </header>
  );
}
