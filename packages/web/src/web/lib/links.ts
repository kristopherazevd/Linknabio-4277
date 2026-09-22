/**
 * ✏️ EDITE SÓ ESTE ARQUIVO PARA MUDAR O CONTEÚDO DA PÁGINA.
 *
 * - Troque `profile` pelo nome, @ e bio do seu canal.
 * - Em `links`, coloque a URL de cada item. Se `url` ficar vazio (""),
 *   o botão aparece desativado com a legenda "em breve".
 * - Para remover um link, apague o objeto dele da lista.
 */

export type LinkIcon =
  | "discord"
  | "youtube"
  | "instagram"
  | "tiktok"
  | "twitter"
  | "twitch"
  | "shop"
  | "mail"
  | "link";

export type BioLink = {
  label: string;
  description?: string;
  url: string;
  icon: LinkIcon;
  /** true = botão destacado (CTA principal). Use em um só link. */
  featured?: boolean;
};

export const profile = {
  name: "Kawe Kristopher Games",
  handle: "@KaweKristopherGames-g5y",
  bio: "Todos os meus links em um só lugar. Entra no Discord pra ficar por dentro de tudo primeiro.",
  /** Coloque uma imagem em packages/web/public/images/ e use "/images/avatar.png" */
  avatarUrl: "",
  /** Iniciais mostradas enquanto não houver avatar */
  initials: "KK",
};

export const links: BioLink[] = [
  {
    label: "Entrar no Discord",
    description: "Comunidade e avisos",
    url: "https://kris-checkin.preview.emergentagent.com/?utm_source=share",
    icon: "discord",
    featured: true,
  },
  {
    label: "YouTube",
    description: "Inscreva-se no canal",
    url: "https://www.youtube.com/@KaweKristopherGames-g5y",
    icon: "youtube",
  },
  {
    label: "Instagram",
    description: "@azevedokristopher",
    url: "https://www.instagram.com/azevedokristopher/",
    icon: "instagram",
  },
  {
    label: "TikTok",
    description: "@kristopher.azeved1",
    url: "https://www.tiktok.com/@kristopher.azeved1",
    icon: "tiktok",
  },
  {
    label: "Contato",
    description: "Marcas e propostas",
    url: "mailto:Kristopherazevedo263@gmail.com",
    icon: "mail",
  },
];

/** Ícones que aparecem na linha compacta no rodapé. url vazia = escondido. */
export const socials: { icon: LinkIcon; url: string; label: string }[] = [
  // Os links principais já estão nos botões acima. Preencha aqui só se
  // quiser ícones extras no rodapé (ex.: X, Twitch).
  { icon: "twitter", url: "", label: "X" },
  { icon: "twitch", url: "", label: "Twitch" },
];
