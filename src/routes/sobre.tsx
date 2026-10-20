import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { QuoteBand } from "@/components/site/QuoteBand";
import { quotes } from "@/lib/site";
import erika from "@/assets/erika.jpg";
import familia2 from "@/assets/familia-2.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Erika — Erika Fotografia" },
      {
        name: "description",
        content: "Conheça a Erika, fotógrafa de newborn, ensaios femininos, infantis e em família.",
      },
      { property: "og:title", content: "Sobre a Erika fotógrafa" },
      {
        property: "og:description",
        content: "Mais de 12 anos registrando histórias com sensibilidade, luz natural e afeto.",
      },
    ],
  }),
  component: Sobre,
});

const stats = [
  { n: "12+", label: "anos de fotografia" },
  { n: "500+", label: "famílias atendidas" },
  { n: "1.200+", label: "ensaios realizados" },
];

function Sobre() {
  return (
    <>
      <section className="bg-gradient-lavender">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2">
          <div className="photo-frame mx-auto w-full max-w-md fade-up">
            <img src={erika} alt="Retrato da fotógrafa Erika" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="fade-up [animation-delay:150ms]">
            <p className="eyebrow">Sobre a Erika fotógrafa</p>
            <h1 className="mt-4 text-5xl leading-tight text-primary-deep md:text-6xl">
              Fotografo o que <em className="text-primary">o amor</em> tem de mais bonito
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Tudo começou quando me tornei mãe. Percebi como os dias passavam rápido e como eu
                queria guardar cada detalhe — as mãozinhas, os primeiros sorrisos, os abraços
                apertados. Foi aí que a câmera virou extensão do meu coração.
              </p>
              <p>
                Hoje, com mais de 12 anos de experiência, dedico meu trabalho a newborns, mulheres,
                crianças e famílias. Meu estúdio é um espaço acolhedor, pensado para que você se
                sinta em casa e possa simplesmente viver o momento.
              </p>
              <p>
                Acredito em fotos leves, naturais e cheias de verdade. Fotos que, daqui a muitos
                anos, ainda vão fazer você sorrir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-8 text-center">
              <p className="font-display text-5xl text-primary">{s.n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteBand quote={quotes[2]} />

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow">Como funciona</p>
          <h2 className="mt-4 text-4xl text-primary-deep md:text-5xl">Um ensaio do seu jeito</h2>
          <ol className="mt-8 space-y-6">
            {[
              ["Conversa inicial", "Entendemos juntas o seu sonho, estilo e o melhor momento para o ensaio."],
              ["Planejamento", "Escolhemos cenário, figurino e cores para que tudo fique harmonioso."],
              ["O ensaio", "Um momento leve e divertido, sem pressa, respeitando o tempo de cada um."],
              ["Entrega", "Fotos tratadas com carinho, em galeria online e opções de álbum impresso."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lavender font-display text-xl text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl text-primary-deep">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-[2rem] shadow-photo">
          <img src={familia2} alt="Pais beijando o bebê" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
