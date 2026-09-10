import type { ProductCategory } from "../business";
import { Reveal } from "./Reveal";
import { Zoomable } from "./Zoomable";

type ProductsProps = {
  eyebrow: string;
  title: string;
  categories: ProductCategory[];
};

export function Products({ eyebrow, title, categories }: ProductsProps) {
  return (
    <section id="productos" data-nav-theme="light" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8 lg:pt-28">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            {title}
          </h2>
        </Reveal>
      </div>

      <div className="border-t border-brand-200">
        {categories.map((category, index) => {
          const photos = [
            { image: category.image, alt: category.alt },
            ...category.gallery,
          ];

          return (
            <Reveal
              key={category.title}
              as="div"
              direction="left"
              delay={(index % 4) * 90}
              className="border-b border-brand-200"
            >
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="mx-auto flex max-w-7xl cursor-pointer list-none items-center justify-between gap-4 px-6 py-8 transition-colors duration-300 hover:bg-brand-50 lg:px-8">
                  <div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                    <p className="mt-2 max-w-2xl leading-7 text-brand-600">
                      {category.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 text-xl font-bold transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {photos.map((photo) => (
                      <Zoomable
                        key={photo.image}
                        src={photo.image}
                        alt={photo.alt}
                        className="aspect-square w-full rounded-2xl"
                        imgClassName="object-cover transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                        sizes="(max-width: 640px) 50vw, 220px"
                      />
                    ))}
                  </div>
                </div>
              </details>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
