type FooterProps = {
  name: string;
  copyright: string;
  line: string;
};

export function Footer({ name, copyright, line }: FooterProps) {
  return (
    <footer data-nav-theme="dark" className="overflow-hidden border-t border-brand-800 bg-brand-950 text-brand-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
        <p>{copyright}</p>
        <p>{line}</p>
      </div>

      <p
        aria-hidden="true"
        className="select-none whitespace-nowrap px-6 pb-4 text-center text-[9vw] font-black leading-none tracking-tight text-brand-800/60 lg:text-[5vw]"
      >
        {name}
      </p>
    </footer>
  );
}
