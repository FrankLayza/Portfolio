export default function Header() {
  return (
    <header className="pt-24 pb-[72px] border-b border-line max-[560px]:pt-16 max-[560px]:pb-12">
      <div className="text-[12px] tracking-[0.08em] uppercase text-grey mb-5">
        Frank Anthony
      </div>

      <h1 className="font-serif font-medium text-[clamp(36px,7vw,52px)] tracking-[-0.01em] leading-[1.1] mb-5">
        Fullstack developer,<br />
        frontend-heavy.
      </h1>

      <p className="text-[15px] text-grey max-w-[46ch]">
        Building on{" "}
        <strong className="text-ink font-medium">Solana</strong>,{" "}
        <strong className="text-ink font-medium">Monad</strong>, and{" "}
        <strong className="text-ink font-medium">Zama FHE</strong>.
        {" "}Based in Lagos, Nigeria. Currently finishing a B.Tech in Computer Science.
      </p>
    </header>
  );
}
