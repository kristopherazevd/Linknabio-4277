import { socials } from "../lib/links";
import LinkGlyph from "./link-icon";

function SocialRow({ delay }: { delay: number }) {
  const active = socials.filter((s) => s.url.trim() !== "");
  if (active.length === 0) return null;

  return (
    <div
      className="reveal flex items-center justify-center gap-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      {active.map((s) => (
        <a
          key={s.label}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] transition-colors duration-200 hover:border-white/15 hover:bg-[var(--surface-hover)] hover:text-[var(--fg)] active:scale-95"
        >
          <LinkGlyph name={s.icon} className="size-[17px]" />
        </a>
      ))}
    </div>
  );
}

export default SocialRow;
