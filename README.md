# Latino Inclusivo - Ruoli e Forme

App didattica inclusiva per introdurre alcune forme latine attraverso il ruolo logico:

- `CHI FA?` = soggetto
- `CHI SUBISCE?` = oggetto

L'app usa lessico visuale, flashcard, confronto guidato, scelta della forma corretta, sintesi vocale del browser e rinforzo a stelle.

## Pubblicazione

La pubblicazione su GitHub Pages e' configurata tramite GitHub Actions.

URL atteso dopo il deploy:

https://vitopalumbopodcast.github.io/LATINO/

## Sviluppo locale

Prerequisito: Node.js.

```bash
npm install
npm run dev
```

## Variabili ambiente

Copiare `.env.example` in `.env.local` solo in locale, se serve una chiave Gemini.

Non committare `.env.local`.
