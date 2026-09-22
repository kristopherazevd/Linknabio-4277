import { ArrowUpRight } from "lucide-react";
import type { BioLink, LinkIcon } from "../lib/links";
import LinkGlyph from "./link-icon";

type Tone = {
  /** fundo do botão inteiro */
  button: string;
  /** cor do texto principal */
  text: string;
  /** cor do texto secundário / seta */
  sub: string;
  /** quadrado do ícone */
  tile: string;
  glyph: string;
  /** glow embaixo do botão */
  glow: string;
};

const brand: Partial<Record<LinkIcon, Tone>> = {
  discord: {
    button: "bg-[#5865F2] hover:bg-[#4b57e0]",
    text: "text-white",
    sub: "text-white/75",
    tile: "bg-white/20",
    glyph: "text-white",
    glow: "shadow-[0_12px_40px_-14px_rgba(88,101,242,0.75)]",
  },
  youtube: {
    button: "bg-[#FF0000] hover:bg-[#e60000]",
    text: "text-white",
    sub: "text-white/80",
    tile: "bg-white",
    glyph: "text-[#FF0000]",
    glow: "shadow-[0_12px_40px_-14px_rgba(255,0,0,0.7)]",
  },
  instagram: {
    button:
      "bg-[linear-gradient(100deg,#FEDA75_0%,#FA7E1E_28%,#F9407B_58%,#C13584_82%,#833AB4_100%)] hover:brightness-110",
    text: "text-white",
    sub: "text-white/85",
    tile: "bg-white/25",
    glyph: "text-white",
    glow: "shadow-[0_12px_40px_-14px_rgba(225,48,108,0.7)]",
  },
  tiktok: {
    button: "bg-black hover:bg-[#0d0d0d] ring-1 ring-white/12",
    text: "text-white",
    sub: "text-white/70",
    tile: "bg-white/10",
    glyph: "text-white",
    glow: "shadow-[0_12px_40px_-16px_rgba(37,244,238,0.55)]",
  },
  mail: {
    button: "bg-[#F2C94C] hover:bg-[#e8bf3e]",
    text: "text-[#1A1A1A]",
    sub: "text-[#1A1A1A]/70",
    tile: "bg-black/15",
    glyph: "text-[#1A1A1A]",
    glow: "shadow-[0_12px_40px_-14px_rgba(242,201,76,0.7)]",
  },
};

const neutral: Tone = {
  button:
    "bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--line)] hover:border-white/15",
  text: "text-[var(--fg)]",
  sub: "text-[var(--muted)]",
  tile: "bg-white/[0.06]",
  glyph: "text-[var(--fg)]",
  glow: "",
};

function LinkButton({ link, delay }: { link: BioLink; delay: number }) {
  const isEmpty = link.url.trim() === "";
  const isMail = link.url.startsWith("mailto:");
  const tone = isEmpty ? neutral : (brand[link.icon] ?? neutral);

  const shell = [
    "reveal group relative flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left",
    "min-h-[64px] transition-[background-color,border-color,transform,filter,box-shadow] duration-200",
    tone.button,
    tone.glow,
    isEmpty ? "cursor-default opacity-45" : "active:scale-[0.985]",
  ].join(" ");

  const content = (
    <>
      <span
        className={[
          "relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
          tone.tile,
        ].join(" ")}
      >
        {link.icon === "tiktok" && !isEmpty && (
          <>
            <span className="absolute -left-1 top-1 size-6 rounded-full bg-[#25F4EE] blur-[5px]" />
            <span className="absolute -right-1 bottom-1 size-6 rounded-full bg-[#FE2C55] blur-[5px]" />
          </>
        )}
        <LinkGlyph
          name={link.icon}
          className={["relative size-[18px]", tone.glyph].join(" ")}
        />
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={[
            "block font-display text-[15px] leading-snug font-semibold tracking-[-0.01em]",
            tone.text,
          ].join(" ")}
        >
          {link.label}
        </span>
        {link.description && (
          <span
            className={["mt-0.5 block text-[13px] leading-snug", tone.sub].join(
              " ",
            )}
          >
            {link.description}
          </span>
        )}
      </span>

      {isEmpty ? (
        <span className="shrink-0 rounded-full border border-[var(--line)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">
          em breve
        </span>
      ) : (
        <ArrowUpRight
          className={[
            "size-[18px] shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            tone.sub,
          ].join(" ")}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (isEmpty) {
    return (
      <div
        className={shell}
        style={{ animationDelay: `${delay}ms` }}
        aria-disabled="true"
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={link.url}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className={shell}
      style={{ animationDelay: `${delay}ms` }}
    >
      {content}
    </a>
  );
}

export default LinkButton;
