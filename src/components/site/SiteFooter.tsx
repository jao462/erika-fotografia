import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-lavender">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl italic text-primary-deep">Erika</p>
          <p className="eyebrow mt-1 text-[0.6rem]">Fotografia</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Smash the cake, ensaios femininos e ensaio gestante. Memórias feitas com amor.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="eyebrow mb-2">Navegue</p>
          <Link to="/portfolio" className="text-muted-foreground hover:text-primary">Portfólio</Link>
          <Link to="/sobre" className="text-muted-foreground hover:text-primary">Sobre a Erika</Link>
          <Link to="/contato" className="text-muted-foreground hover:text-primary">Contato</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="eyebrow mb-2">Fale comigo</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <MessageCircle className="size-4" /> WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Instagram className="size-4" /> @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
      <p className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Erika Fotografia · Todos os direitos reservados
      </p>
    </footer>
  );
}
