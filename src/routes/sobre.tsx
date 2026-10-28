import { createFileRoute } from "@tanstack/react-router";
import { ContactCta } from "@/components/site/ContactCta";
import { QuoteBand } from "@/components/site/QuoteBand";
import { quotes } from "@/lib/site";
import quemEErika from "@/assets/quem-e-erika.jpg.asset.json";
import familiaSobre from "@/assets/familia-sobre.jpg.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem é Érika Pires — Erika Fotografia" },
      {
        name: "description",
        content:
          "Conheça a Érika Pires, fotógrafa em Curitiba: gestante, smash the cake, retrato feminino, corporativo, eventos e mentoria.",
      },
      { property: "og:title", content: "Quem é Érika Pires" },
      {
        property: "og:description",
        content: "Mãe, enfermeira por formação e fotógrafa apaixonada em registrar os melhores momentos.",
      },
    ],
  }),
  component: Sobre,
});

const aboutAlt =
  "Quem é Érika Pires. Casada e mamãe de um príncipe e uma princesa. Natural de Goiânia e morando em Curitiba há 14 anos. " +
  "Enfermeira por formação, fotógrafa quase por acaso e apaixonada em registrar os melhores momentos. " +
  "Criativa, extrovertida, ligada no 220w e tem pavor de mimimi. Cristã, filha do Rei e apaixonada por pets e música! Detalhista nível hard. " +
  "Nichos de atuação: gestante, smash the cake, corporativo, retrato feminino, eventos e mentoria fotográfica.";

function Sobre() {
  return (
    <>
      <section className="bg-gradient-lavender px-4 py-14 md:py-20">
        <h1 className="sr-only">Quem é Érika Pires</h1>
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl shadow-photo fade-up">
          <img
            src={quemEErika.url}
            alt={aboutAlt}
            width={895}
            height={887}
            className="h-auto w-full"
          />
        </div>
      </section>

      <QuoteBand quote={quotes[1]} />

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
          <img
            src={familiaSobre.url}
            alt="Pai e mãe sorrindo segurando o filho pequeno em cenário verde de Natal"
            width={608}
            height={849}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
