# SKALA 4기 National Pokédex

SKALA 4기 교육생이 함께 만드는 포켓몬 전국도감 커뮤니티입니다.

## Features
- National Dex #1–1025
- Trainer ownership registration by campus / class / name
- Pokémon detail and owner distribution
- Popularity voting with duplicate protection
- Campus statistics
- PostgreSQL audit log
- Cloudflare Workers + OpenNext + Hyperdrive deployment

## Cloudflare deployment
1. Create a PostgreSQL database.
2. Create a Cloudflare Hyperdrive configuration pointing to PostgreSQL.
3. Put its ID into `wrangler.jsonc` as `HYPERDRIVE`.
4. Connect this GitHub repository to Workers Builds.
5. Build command: `npx opennextjs-cloudflare build`
6. Deploy command: `npx opennextjs-cloudflare deploy`
7. Add Worker secret `ADMIN_KEY`.
8. Add Worker variable `APP_URL`.
9. Apply Prisma schema and seed from a trusted environment with network access: `npx prisma db push && npx tsx prisma/seed.ts`.

Do not commit `.env`, database URLs, API keys, or admin secrets.

## Local development
```bash
cp .env.example .env
docker compose up -d --build
docker compose exec app npx prisma db push
docker compose exec app npx tsx prisma/seed.ts
```

Pokémon names, artwork, and sprites are third-party assets/data. The project does not bundle the Pokémon assets into the repository; seed data references PokéAPI-hosted resources.
