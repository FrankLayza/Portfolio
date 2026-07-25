export default function Header() {
  return (
    <header className="pt-16 sm:pt-24 pb-12 sm:pb-[72px] border-b border-line animate-in fade-in duration-300">
      {/* Eyebrow */}
      <div className="text-xs font-mono tracking-[0.08em] uppercase text-grey mb-4 sm:mb-5">
        HELLO, I'M FRANK
      </div>

      {/* Main Heading */}
      <h1 className="font-serif font-medium text-[clamp(28px,6.2vw,46px)] tracking-[-0.015em] leading-[1.14] sm:leading-[1.12] mb-5 sm:mb-6 text-ink max-w-[22ch]">
        I build fullstack products, from clean interfaces to the backend that runs them.
      </h1>

      {/* Body Paragraph */}
      <p className="text-sm sm:text-[15px] font-mono text-grey max-w-[48ch] leading-relaxed">
        I help teams and founders ship{" "}
        <strong className="text-ink font-medium">web apps</strong>,{" "}
        <strong className="text-ink font-medium">mobile apps</strong>, and{" "}
        <strong className="text-ink font-medium">on-chain tools</strong>
        {" "}— currently building on{" "}
        <strong className="text-ink font-medium">Solana</strong>. Based in Lagos, Nigeria.
      </p>
    </header>
  );
}
