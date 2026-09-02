type FooterProps = {
  copyright: string;
  line: string;
};

export function Footer({ copyright, line }: FooterProps) {
  return (
    <footer className="border-t border-brand-800 bg-brand-950 text-brand-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
        <p>{copyright}</p>
        <p>{line}</p>
      </div>
    </footer>
  );
}
