# Portale Riviste Pedagogiche Italiane

Architettura centralizzata per il portale [rivistepedagogiche.it](https://www.rivistepedagogiche.it) ospitato su Google Sites.

## Struttura del repository

```text
riviste-pedagogiche/
├── assets/
│   ├── riviste.js          # Repertorio unico delle riviste e configurazione API
│   └── stile.css           # Foglio di stile unico condiviso da tutte le pagine
├── pagine-google-sites/
│   ├── HomePage.html
│   ├── ElencoRiviste.html
│   ├── OpenAlexParole.html
│   ├── OpenAlexSemantico.html
│   ├── GoogleSearch.html
│   └── Informazioni.html
└── README.md
```

## Configurazione iniziale (da fare una sola volta)

1. Attiva **GitHub Pages** su questo repository (`Settings` -> `Pages` -> Branch `main`, cartella `/ (root)`).
2. Nei 6 file dentro `pagine-google-sites/`, sostituisci `TUO-USERNAME` con il tuo nome utente GitHub negli indirizzi `<link>` e `<script>` dentro `<head>`.
3. Copia il contenuto dei file `.html` nei rispettivi riquadri *Incorpora codice* di Google Sites.

## Manutenzione ordinaria

* **Aggiungere/modificare una rivista, un URL, un ISSN o un ID OpenAlex:** modifica solo `assets/riviste.js` in Visual Studio Code e fai *Commit + Sync* verso GitHub. Tutte le pagine del sito si aggiorneranno automaticamente senza dover toccare Google Sites.
* **Modificare colori, font o spaziature:** modifica solo `assets/stile.css` e fai *Commit + Sync*.
