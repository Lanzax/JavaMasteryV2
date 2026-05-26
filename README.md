# JavaMastery MVP

Piattaforma web dark per imparare programmazione. Questa fase include modulo Java + executor backend sicuro in Docker.

## Comandi frontend

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Java Executor service

Path: `services/java-executor`

Sicurezza implementata:
- esecuzione in container Docker isolato
- network disabilitata (`--network none`)
- limiti CPU/memoria/processi (`--cpus`, `--memory`, `--pids-limit`)
- timeout hard per compile/run
- user non-root (`--user 1000:1000`)
- no-new-privileges
- validazione input + blocco path traversal
- cleanup directory temporanea dopo ogni run

API Next:
- `POST /api/execute/java`

Body:
```json
{
  "files": [{ "name": "Main.java", "content": "..." }],
  "mainClass": "Main"
}
```

## Test executor

```bash
node --test services/java-executor/tests/*.test.mjs
```

## Roadmap
1. Monaco Editor completo.
2. Coda job + rate limit.
3. Workspace multi-file avanzato.
4. Moduli HTML/CSS/React/Spring.
