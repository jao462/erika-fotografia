import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/site/ContactCta";
import { QuoteBand } from "@/components/site/QuoteBand";
import { categories, quotes, WHATSAPP_URL } from "@/lib/site";
import heroNewborn from "@/assets/hero-newborn.jpg";
import erika from "@/assets/erika.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erika Fotografia — Newborn, Feminino, Infantil e Família" },
      {
        name: "description",
        content:
          "Fotografia afetiva de newborn, ensaios femininos, infantis e em família. Eternize os momentos mais especiais com a Erika.",
      },
      { property: "og:title", content: "Erika Fotografia — Memórias feitas com amor" },
      {
        property: "og:description",
        content: "Ensaios newborn, femininos, infantis e em família com sensibilidade e delicadeza.",
      },
    ],
  }),
  component: Index,
});

const values = [
  { icon: Heart, title: "Com afeto", text: "Cada ensaio é conduzido com calma, carinho e respeito ao seu tempo." },
  { icon: Camera, title: "Olhar artístico", text: "Luz natural, cores suaves e composições delicadas e atemporais." },
  { icon: Sparkles, title: "Experiência única", text: "Do primeiro contato à entrega, você se sente acolhida em cada etapa." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-lavender">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pt-20">
          <div className="fade-up">
            <p className="eyebrow">Fotografia afetiva</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-primary-deep md:text-7xl">
              Momentos que passam,
              <br />
              <em className="text-primary">memórias que ficam.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Eu sou a Erika e transformo os capítulos mais lindos da sua história em fotografias
              para guardar no coração.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/portfolio">
                  Ver portfólio <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  Agendar meu ensaio
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md fade-up [animation-delay:150ms]">
            <div className="absolute -right-6 -top-6 h-full w-full rounded-[999px_999px_1.5rem_1.5rem] border border-lavender-strong" />
            <div className="photo-frame relative">
              <img
                src={heroNewborn}
                alt="Recém-nascida dormindo em manta lilás"
                width={1280}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card px-5 py-4 shadow-elegant">
              <p className="font-display text-3xl text-primary">5x</p>
              <p className="text-xs text-muted-foreground">premiada internacionalmente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Por que fotografar comigo</p>
          <h2 className="mt-4 text-4xl text-primary-deep md:text-5xl">
            Mais que fotos, <em>uma experiência</em>
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-8 text-center transition-shadow hover:shadow-elegant">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-lavender text-primary">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-6 text-2xl text-primary-deep">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <div aria-hidden className="px-6 py-6">
        <div className="mx-auto h-0.5 max-w-3xl rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h2 className="mt-4 text-4xl text-primary-deep md:text-5xl">Escolha o seu ensaio</h2>
          </div>
          <Link to="/portfolio" className="group flex items-center gap-2 text-sm text-primary">
            Ver todas as fotos <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const cover = c.photos.find((p) => p.height > p.width) ?? c.photos[0]!;
            return (
              <Link
                key={c.id}
                to="/portfolio"
                search={{ categoria: c.id }}
                className="group relative block overflow-hidden rounded-[999px_999px_1.25rem_1.25rem] shadow-photo"
              >
                <img
                  src={cover.src}
                  alt={cover.alt}
                  width={cover.width}
                  height={cover.height}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/85 via-primary-deep/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <h3 className="text-2xl italic">{c.title}</h3>
                  <p className="mt-1 text-xs text-primary-foreground/80">{c.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-gradient-lavender">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div className="photo-frame mx-auto w-full max-w-sm">
            <img src={erika} alt="Erika, fotógrafa, segurando sua câmera" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Sobre a Erika fotógrafa</p>
            <h2 className="mt-4 text-4xl text-primary-deep md:text-5xl">
              Olá, eu sou a <em className="text-primary">Erika</em>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Mãe, apaixonada por gente e por luz natural. Há mais de 12 anos registro histórias de
              famílias, mulheres e bebês com um olhar sensível e acolhedor. Acredito que toda foto
              deve carregar um sentimento — e é isso que eu busco em cada clique.
            </p>
            <Button asChild variant="soft" size="xl" className="mt-8">
              <Link to="/sobre">
                Conhecer minha história <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <QuoteBand quote={quotes[0]} />

      <ContactCta />
    </>
  );
}
