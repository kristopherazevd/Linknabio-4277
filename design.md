# Link da Bio — Design

Página link-in-bio minimalista e mobile-first (web only) para o link da bio de um canal do YouTube. Copy em português (BR). Objetivo principal: levar o visitante pro servidor do Discord. Visual: dark, alto contraste, botões empilhados full-width, zero distração.

## Brand & Colors

Tema dark fixo (não segue o sistema). Tokens em `packages/web/src/web/styles.css`.

| Token | Valor | Uso |
|-------|-------|-----|
| background | #08090B | Fundo da página |
| surface | #131519 | Botões / cards |
| surface-hover | #1B1E24 | Hover/active dos botões |
| foreground | #F4F5F7 | Texto principal |
| muted | #8A8F98 | Bio, legendas, "em breve" |
| border | rgba(255,255,255,0.08) | Hairlines dos botões |
| accent (discord) | #5865F2 | CTA principal |
| accent-glow | rgba(88,101,242,0.35) | Glow atrás do avatar e do CTA |

Fundo: preto quase puro + um gradiente radial suave no topo (accent 8%) pra dar profundidade sem poluir.

## Typography

- **Display**: Sora (700/600) — nome do canal e títulos.
- **Body**: Plus Jakarta Sans (400/500/600) — bio, labels dos botões, footer.
- Carregadas via Google Fonts em `index.html`. Labels de botão em 15–16px, peso 600, tracking levemente negativo no display.

## Pages & Screens

- **Web — Home** (`packages/web/src/web/pages/index.tsx`) — a página inteira: avatar, nome, bio, CTA do Discord, lista de links, linha de ícones sociais, footer.
- **Dados dos links** (`packages/web/src/web/lib/links.ts`) — fonte única de verdade: perfil + array de links. É o único arquivo que precisa ser editado pra trocar nome, bio e links.
- **Componentes**: `components/link-button.tsx` (botão de link, variantes `primary` e `default`), `components/social-row.tsx` (ícones sociais).

## Layout

- Coluna única, `max-width: 30rem`, centralizada, padding lateral 20px, safe-area no rodapé.
- Ordem: avatar (88px, glow) → nome → bio (2 linhas máx) → CTA Discord → links → ícones sociais → footer.
- Alvo de toque mínimo 56px de altura por botão, gap 12px.

## Motion

Um único load orquestrado: os blocos entram com fade + translate-y de 12px, stagger de 60ms via `animation-delay` inline. CSS puro. Nos botões: `active:scale-[0.985]` e transição de background — nada além disso.

## Key User Flows

1. Visitante toca o link da bio no YouTube → abre a página → o CTA "Entrar no Discord" é o primeiro elemento clicável → toca → abre o convite em nova aba.
2. Slots vazios (`url: ""`) renderizam como placeholder desativado com a legenda "em breve" — o dono do canal preenche a URL em `links.ts` e o botão vira ativo automaticamente.

## Architecture

Página 100% estática no frontend — sem API, sem banco. Todo o conteúdo vem de `lib/links.ts`.
