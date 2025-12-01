# 🎄 Giorno 5 - Immagini e Footer

## Ciao campionessa! 🏆

Ultimo giorno di HTML puro! Oggi aggiungiamo immagini e un footer (piè di pagina).

---

## 📚 Cosa Impariamo Oggi
- **Immagini** (`<img>`) - per mostrare foto
- **Footer** (`<footer>`) - la parte finale della pagina
- **Contenitore** (`<div>`) - una scatola generica per raggruppare elementi

---

## 🎯 Cosa Fare

### Passo 1: Prepara una foto
Salva una vostra foto nella stessa cartella del progetto e chiamala `foto-noi.jpg` (o `.png`)

### Passo 2: Aggiorna la sezione Ricordi

**Trova** la sezione "I Nostri Ricordi" e **sostituiscila** con:

```html
    <section>
        <h2>📸 I Nostri Ricordi</h2>
        <p>Momenti che porteremo sempre nel cuore.</p>
        <div class="galleria">
            <img src="foto-noi.jpg" alt="Una nostra foto insieme">
        </div>
    </section>
```

### Passo 3: Aggiungi il Footer

**Prima** di `</body>`, aggiungi:

```html
    <footer>
        <p>Fatto con 💕 per te</p>
        <p>La nostra storia continua...</p>
    </footer>
</body>
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `<img>` | Mostra un'immagine (nota: non ha tag di chiusura!) |
| `src="..."` | Il percorso/nome del file immagine |
| `alt="..."` | Testo alternativo se l'immagine non carica |
| `<div>` | Un contenitore generico (lo stilizzeremo dopo!) |
| `class="..."` | Un nome che useremo per lo stile CSS |
| `<footer>` | Il piè di pagina del sito |

---

## 👀 Risultato Atteso

- Una foto nella sezione ricordi
- Un piè di pagina carino in fondo

Se la foto non appare, controlla che:
- Il nome del file sia esatto (maiuscole/minuscole contano!)
- La foto sia nella stessa cartella di `index.html`

---

## 💝 Pensiero del Giorno

*"Hai completato la struttura HTML! Ora la pagina ha tutte le sue ossa. Da domani le daremo colori e stile. Sei stata bravissima! 🎉"*

---

## 📋 Il Tuo Codice Completo Finora

Il tuo `index.html` dovrebbe essere simile a questo:

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Il Nostro Amore ❤️</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>💕 La Nostra Storia d'Amore 💕</h1>
        <p>Un viaggio attraverso i nostri ricordi più belli</p>
    </header>

    <section>
        <h2>🌟 Chi Siamo</h2>
        <p>Due cuori che si sono trovati e non si sono più lasciati.</p>
    </section>

    <section>
        <h2>💝 Perché Ti Amo</h2>
        <p>Ci sono infinite ragioni, ma eccone alcune speciali...</p>
        <ul>
            <li>Per il tuo sorriso che illumina le mie giornate ☀️</li>
            <li>Per come mi fai sentire a casa ovunque 🏠</li>
            <li>Per la tua dolcezza infinita 🍯</li>
            <li>Per ogni momento che condividiamo insieme 💫</li>
            <li>Perché sei semplicemente tu 💕</li>
        </ul>
    </section>

    <section>
        <h2>📸 I Nostri Ricordi</h2>
        <p>Momenti che porteremo sempre nel cuore.</p>
        <div class="galleria">
            <img src="foto-noi.jpg" alt="Una nostra foto insieme">
        </div>
    </section>

    <footer>
        <p>Fatto con 💕 per te</p>
        <p>La nostra storia continua...</p>
    </footer>
</body>
</html>
```

---

**Da domani: COLORI! 🎨**
