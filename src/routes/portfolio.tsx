import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { categories, type CategoryId } from "@/lib/site";
import { cn } from "@/lib/utils";

const ids = categories.map((c) => c.id);

export const Route = createFileRoute("/portfolio")({
  validateSearch: (search: Record<string, unknown>): { categoria?: CategoryId } => {
    const c = search.categoria;
    return typeof c === "string" && (ids as string[]).includes(c) ? { categoria: c as CategoryId } : {};
  },
  head: () => ({
    meta: [
      { title: "Portfólio — Erika Fotografia" },
      {
        name: "description",
        content: "Veja ensaios newborn, femininos, infantis e em família fotografados pela Erika.",
      },
      { property: "og:title", content: "Portfólio — Erika Fotografia" },
      {
        property: "og:description",
        content: "Newborn, ensaios femininos, infantis e em família: conheça o trabalho da Erika.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { categoria } = Route.useSearch();
  const visible = categoria ? categories.filter((c) => c.id === categoria) : categories;

  return (
    <>
      <section className="bg-gradient-lavender px-6 pb-14 pt-20 text-center">
        <p className="eyebrow">Portfólio</p>
        <h1 className="mt-4 text-5xl text-primary-deep md:text-6xl">
          Histórias <em className="text-primary">reais</em>, contadas com luz
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Escolha uma categoria e inspire-se para o seu próximo ensaio.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <FilterPill active={!categoria} label="Todos" />
          {categories.map((c) => (
            <FilterPill key={c.id} id={c.id} active={categoria === c.id} label={c.title} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {visible.map((c) => (
          <section key={c.id} className="border-b border-border py-20 last:border-b-0">
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <div className="md:sticky md:top-28 md:self-start">
                <p className="eyebrow">{c.tagline}</p>
                <h2 className="mt-3 text-4xl italic text-primary-deep">{c.title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {c.photos.map((p, i) => (
                  <figure
                    key={p.src}
                    className={cn(
                      "overflow-hidden rounded-2xl shadow-photo",
                      p.width > p.height && "sm:col-span-2",
                      i === 0 && p.height > p.width && "sm:row-span-2",
                    )}
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      width={p.width}
                      height={p.height}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <ContactCta title="Gostou do que viu?" />
    </>
  );
}

function FilterPill({ id, label, active }: { id?: CategoryId; label: string; active: boolean }) {
  return (
    <Link
      to="/portfolio"
      search={id ? { categoria: id } : {}}
      resetScroll={false}
      className={cn(
        "rounded-full border px-5 py-2 text-sm tracking-wide transition-all",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-elegant"
          : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
      )}
    >
      {label}
    </Link>
  );
}
