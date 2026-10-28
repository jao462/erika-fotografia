import smashNatal from "@/assets/newborn-natal.jpg.asset.json";
import smashOne from "@/assets/newborn-one.jpg.asset.json";
import feminino1 from "@/assets/feminino-1-real.jpg.asset.json";
import feminino2 from "@/assets/feminino-2-real.jpg.asset.json";
import gestacao1 from "@/assets/gestacao-1-real.jpg.asset.json";
import gestacao2 from "@/assets/gestacao-2-real.jpg.asset.json";

// Placeholder contact details — replace with Erika's real numbers/handles.
export const WHATSAPP_NUMBER = "5511999999999";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá Erika! Vi seu site e gostaria de saber mais sobre os ensaios.",
)}`;
export const INSTAGRAM_HANDLE = "erikafotografia";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export type CategoryId = "smash-the-cake" | "feminino" | "gestante";

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
    id: "smash-the-cake",
    title: "Smash the Cake",
    tagline: "O primeiro aninho, do jeitinho dele",
    description:
      "Bolo, cenário temático e muita diversão para celebrar o primeiro ano de vida do seu bebê com leveza e alegria.",
    photos: [
      { src: smashNatal.url, alt: "Bebê de roupa vermelha e tiara de rena em cenário de Natal", width: 874, height: 566 },
      { src: smashOne.url, alt: "Bebê sorrindo em ensaio de primeiro aninho com tema Rei Leão", width: 862, height: 556 },
    ],
  },
  {
    id: "feminino",
    title: "Ensaios Femininos",
    tagline: "Celebre quem você é",
    description:
      "Um momento só seu, para se ver com outros olhos e redescobrir a sua beleza, força e autenticidade.",
    photos: [
      { src: feminino1.url, alt: "Jovem de vestido preto segurando um bolo, com balões pretos e prateados", width: 598, height: 857 },
      { src: feminino2.url, alt: "Jovem sorrindo sentada em cadeira de diretor, cercada de balões e globos espelhados", width: 607, height: 852 },
    ],
  },
  {
    id: "gestante",
    title: "Ensaio Gestante",
    tagline: "A espera mais linda da vida",
    description:
      "Registros delicados dessa fase única, para guardar a lembrança da barriga, da expectativa e de todo o amor que está chegando.",
    photos: [
      { src: gestacao1.url, alt: "Gestante de vestido azul royal com cauda longa em estúdio", width: 593, height: 839 },
      { src: gestacao2.url, alt: "Gestante de vestido azul claro à beira do lago, ao lado de um barco", width: 587, height: 879 },
    ],
  },
];

export const quotes = [
  "Os dias passam rápido. As memórias ficam para sempre.",
  "Cada sorriso tem uma história. Eu estou aqui para contá-la.",
] as const;
