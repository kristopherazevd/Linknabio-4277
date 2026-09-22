import LinkButton from "../components/link-button";
import SocialRow from "../components/social-row";
import { links, profile } from "../lib/links";

function Index() {
  const year = new Date().getFullYear();

  return (
    <main className="relative min-h-dvh overflow-hidden bg-[var(--bg)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(88,101,242,0.16),transparent_70%)]" />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-[30rem] flex-col px-5 pt-14 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
        <header className="flex flex-col items-center text-center">
          <div
            className="reveal relative mb-5"
            style={{ animationDelay: "0ms" }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--accent-glow)] blur-2xl" />
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="size-22 rounded-full border border-white/10 object-cover"
              />
            ) : (
              <div className="flex size-22 items-center justify-center rounded-full border border-white/10 bg-[var(--surface)] font-display text-2xl font-bold tracking-tight text-[var(--fg)]">
                {profile.initials}
              </div>
            )}
          </div>

          <h1
            className="reveal font-display text-[22px] leading-tight font-bold tracking-[-0.02em] text-[var(--fg)] text-balance sm:text-[26px]"
            style={{ animationDelay: "60ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="reveal mt-1 text-[14px] font-medium text-[var(--muted)]"
            style={{ animationDelay: "100ms" }}
          >
            {profile.handle}
          </p>

          <p
            className="reveal mt-4 max-w-[22rem] text-[14.5px] leading-relaxed text-[var(--muted)]"
            style={{ animationDelay: "140ms" }}
          >
            {profile.bio}
          </p>
        </header>

        <nav className="mt-9 flex flex-col gap-3">
          {links.map((link, i) => (
            <LinkButton key={link.label} link={link} delay={200 + i * 60} />
          ))}
        </nav>

        <div className="mt-8">
          <SocialRow delay={200 + links.length * 60} />
        </div>

        <footer
          className="reveal mt-auto pt-10 text-center text-[12px] text-[var(--muted)]/70"
          style={{ animationDelay: `${260 + links.length * 60}ms` }}
        >
          © {year} {profile.name}
        </footer>
      </div>
    </main>
  );
}

export default Index;
