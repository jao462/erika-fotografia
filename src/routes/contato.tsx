import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";
import feminino2 from "@/assets/feminino-2-real.jpg.asset.json";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Erika Fotografia" },
      {
        name: "description",
        content: "Converse com a Erika pelo WhatsApp ou veja o Instagram e agende o seu ensaio.",
      },
      { property: "og:title", content: "Agende seu ensaio — Erika Fotografia" },
      {
        property: "og:description",
        content: "Fale com a Erika pelo WhatsApp ou acompanhe o trabalho no Instagram.",
      },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <section className="bg-gradient-lavender">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-2">
        <div className="fade-up">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-4 text-5xl leading-tight text-primary-deep md:text-6xl">
            Vamos conversar sobre <em className="text-primary">o seu ensaio?</em>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            A forma mais rápida de falar comigo é pelo WhatsApp. Lá eu te envio valores, datas
            disponíveis e tiro todas as suas dúvidas. Se quiser ver mais do meu trabalho, me
            acompanhe no Instagram.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="size-6" />
              </span>
              <span>
                <span className="block font-display text-2xl text-primary-deep">Conversar no WhatsApp</span>
                <span className="text-sm text-muted-foreground">Resposta rápida, de segunda a sábado</span>
              </span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-elegant"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-gradient-plum text-primary-foreground">
                <Instagram className="size-6" />
              </span>
              <span>
                <span className="block font-display text-2xl text-primary-deep">Ver Instagram</span>
                <span className="text-sm text-muted-foreground">@{INSTAGRAM_HANDLE}</span>
              </span>
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" /> Estúdio em Curitiba
          </p>

          <Button asChild variant="hero" size="xl" className="mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar meu ensaio</a>
          </Button>
        </div>
        <div className="photo-frame mx-auto w-full max-w-md fade-up [animation-delay:150ms]">
          <img src={feminino2.url} alt="Jovem de vestido dourado em ensaio feminino com balões" width={607} height={852} className="aspect-[4/5] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
