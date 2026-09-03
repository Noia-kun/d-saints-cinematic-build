const links = [
  { label: "STORY", href: "#story" },
  { label: "SIGNATURE", href: "#signature" },
  { label: "CAKES", href: "#cakes" },
  { label: "FAVORITES", href: "#favorites" },
  { label: "CONTACT", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="mx-auto mt-3 flex max-w-6xl items-start gap-3 sm:mt-5"
        style={{ width: "calc(100% - 1.5rem)" }}
      >
      <nav
        aria-label="Primary"
        className="flex min-w-0 flex-1 items-center justify-between gap-4 rounded-full border border-border/70 bg-background/75 px-5 py-3 backdrop-blur-md sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-lg tracking-[0.18em] text-foreground sm:text-xl"
        >
          D&apos;SAINTS
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[0.68rem] tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-foreground/25 px-4 py-1.5 text-[0.62rem] tracking-[0.26em] text-foreground transition-colors hover:bg-foreground hover:text-background md:hidden"
        >
          CONTACT
        </a>
      </nav>
        <div aria-hidden="true" className="w-[6.5rem] shrink-0 sm:w-[7.5rem]" />
      </div>
    </header>
  );
}
