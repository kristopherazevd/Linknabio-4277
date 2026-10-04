# Notes
- Runs via `docker-compose.base44.yml` (bun + vite dev on :3000, API served by Hono inside Vite).
- DB is a local libsql file (`DATABASE_URL=file:/app/.data/local.db`), schema pushed on container start. Real Turso needs DATABASE_URL/DATABASE_AUTH_TOKEN secrets.
- Optional, unused locally: AI_GATEWAY_*, AUTUMN_SECRET_KEY, BETTER_AUTH_SECRET.
