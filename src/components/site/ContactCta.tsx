import { Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

export function ContactCta({
  title = "Vamos criar memórias juntas?",
  text = "Me conte sobre o momento que você quer eternizar. Respondo com carinho e te ajudo a escolher o ensaio ideal.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-plum px-8 py-16 text-center text-primary-foreground shadow-photo md:px-16">
        <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-primary-foreground/10" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-primary-foreground/10" />
        <p className="relative text-xs uppercase tracking-[0.3em] text-primary-foreground/80">Agende seu ensaio</p>
        <h2 className="relative mt-4 text-4xl italic md:text-5xl">{title}</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-primary-foreground/85">{text}</p>
        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="whatsapp" size="xl">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle /> Conversar no WhatsApp
            </a>
          </Button>
          <Button asChild variant="soft" size="xl">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram /> Ver Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
