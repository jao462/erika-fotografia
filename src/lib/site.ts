import heroNewborn from "@/assets/hero-newborn.jpg";
import newborn2 from "@/assets/newborn-2.jpg";
import feminino1 from "@/assets/feminino-1.jpg";
import feminino2 from "@/assets/feminino-2.jpg";
import infantil1 from "@/assets/infantil-1.jpg";
import infantil2 from "@/assets/infantil-2.jpg";
import familia1 from "@/assets/familia-1.jpg";
import familia2 from "@/assets/familia-2.jpg";

// Placeholder contact details — replace with Erika's real numbers/handles.
export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Erika! Vi seu site e gostaria de saber mais sobre os ensaios.",
)}`;
export const INSTAGRAM_HANDLE = "erikafotografia";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export type CategoryId = "newborn" | "feminino" | "infantil" | "familia";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Category = {
  id: CategoryId;
  title: string;
  tagline: string;
  description: string;
  photos: Photo[];
};

export const categories: Category[] = [
  {
    id: "newborn",
    title: "Newborn",
    tagline: "Os primeiros dias, para sempre",
    description:
      "Ensaios delicados e seguros nos primeiros dias de vida, com todo o cuidado e paciência que o seu bebê merece.",
    photos: [
      { src: heroNewborn, alt: "Recém-nascida dormindo enrolada em manta lilás", width: 1280, height: 1600 },
      { src: newborn2, alt: "Bebê dormindo em cestinho com flores brancas", width: 1280, height: 1024 },
    ],
  },
  {
    id: "feminino",
    title: "Ensaios Femininos",
    tagline: "Celebre quem você é",
    description:
      "Um momento só seu, para se ver com outros olhos e redescobrir a sua beleza, força e autenticidade.",
    photos: [
      { src: feminino1, alt: "Mulher de vestido branco sorrindo junto à janela", width: 1024, height: 1280 },
      { src: feminino2, alt: "Mulher de chapéu em campo de lavanda ao pôr do sol", width: 1280, height: 1024 },
    ],
  },
  {
    id: "infantil",
    title: "Ensaios Infantis",
    tagline: "A infância em sua forma mais pura",
    description:
      "Sorrisos espontâneos, brincadeiras e a personalidade única de cada criança, registrados com leveza.",
    photos: [
      { src: infantil1, alt: "Menina de vestido lilás segurando balões", width: 1024, height: 1280 },
      { src: infantil2, alt: "Menino lendo livro em cadeira de madeira", width: 1280, height: 1024 },
    ],
  },
  {
    id: "familia",
    title: "Em Família",
    tagline: "O amor que vocês constroem juntos",
    description:
      "Abraços, risadas e cumplicidade. Memórias da sua família para guardar e passar de geração em geração.",
    photos: [
      { src: familia1, alt: "Família rindo junta em campo de lavanda", width: 1280, height: 1024 },
      { src: familia2, alt: "Pais beijando o bebê sorridente", width: 1024, height: 1280 },
    ],
  },
];

export const quotes = [
  "Fotografar é eternizar o que o coração já sabe de cor.",
  "Os dias passam rápido. As memórias ficam para sempre.",
  "Cada sorriso tem uma história. Eu estou aqui para contá-la.",
];
