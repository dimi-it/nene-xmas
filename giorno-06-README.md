# 🎄 Giorno 6 - Benvenuta nel Mondo di Bootstrap!

## Ciao artista! 🎨

Oggi iniziamo con **Bootstrap** - un framework CSS che rende tutto FACILISSIMO! Invece di scrivere centinaia di righe di CSS, useremo classi già pronte!

---

## 📚 Cosa Impariamo Oggi
**Bootstrap** è come un kit di costruzioni: ha già tutti i pezzi pronti, tu devi solo assemblarli! Oggi impostiamo Bootstrap e i nostri colori personalizzati.

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi Bootstrap all'HTML
Nel file `index.html`, nella sezione `<head>`, **aggiungi** queste due righe:

```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Il nostro CSS personalizzato (per i colori romantici) -->
<link rel="stylesheet" href="style.css">
```

### Passo 2: Configura i Colori Romantici
Nel file `style.css`, **sostituisci tutto** con questo semplice codice:

```css
/* 🎨 Font carino da Google */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

/* ✨ I nostri colori romantici */
:root {
    --rosa-chiaro: #fff5f5;
    --rosa-medio: #ffe4e6;
    --rosa-intenso: #f8b4c4;
    --rosa-scuro: #e8a0b4;
    --marrone: #5a4a4a;
    --oro: #ffd700;
}

body {
    font-family: 'Quicksand', sans-serif;
    background-color: var(--rosa-chiaro);
    color: var(--marrone);
}
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `Bootstrap CSS` | Il framework che fa tutto il lavoro pesante! |
| `:root { }` | Definisce variabili CSS riutilizzabili |
| `--nome-colore` | Una variabile per memorizzare un colore |
| `var(--nome)` | Usa la variabile definita |

💡 **Magia Bootstrap:** Ora puoi usare classi come `text-center` per centrare, `p-3` per padding, `bg-light` per sfondi chiari, senza scrivere CSS!

---

## 👀 Risultato Atteso

Salva e aggiorna il browser. Ora vedrai:
- ✅ Sfondo rosa tenue invece di bianco
- ✅ Font arrotondato e carino
- ✅ Testo marrone caldo invece di nero

---

## 🎨 La Nostra Palette di Colori

Useremo questi colori nei prossimi giorni:
- `#fff5f5` - Rosa cipria (sfondo)
- `#ffe4e6` - Rosa più intenso
- `#f8b4c4` - Rosa dolce
- `#e8a0b4` - Rosa romantico
- `#5a4a4a` - Marrone caldo (testo)
- `#ffd700` - Oro (dettagli speciali)

---

## 💝 Pensiero del Giorno

*"Hai appena dato colore ai nostri ricordi! Il CSS è come la magia: trasforma il grigio in arcobaleno. Continua così! 🌈"*

---

**Domani: rendiamo bello l'header!** 💫
