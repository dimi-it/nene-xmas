# 🎄 Giorno 6 - Benvenuta nel Mondo dei Colori!

## Ciao artista! 🎨

Oggi iniziamo con il **CSS** - il linguaggio che rende le cose belle! Se l'HTML è lo scheletro, il CSS è il vestito, il trucco, i colori!

---

## 📚 Cosa Impariamo Oggi
Il **CSS** (Cascading Style Sheets) dice al browser "come" mostrare le cose. Oggi impostiamo i colori base e il font della nostra pagina.

---

## 🎯 Cosa Fare

Apri il file `style.css` e **sostituisci tutto** con questo codice:

```css
/* 🎨 Importiamo un font carino da Google */
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap');

/* ✨ Stili di base per tutta la pagina */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Quicksand', sans-serif;
    background-color: #fff5f5;
    color: #5a4a4a;
    line-height: 1.6;
}
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `@import url(...)` | Carica un font carino da internet (Quicksand!) |
| `*` | Seleziona TUTTI gli elementi della pagina |
| `margin: 0` | Rimuove spazi esterni predefiniti |
| `padding: 0` | Rimuove spazi interni predefiniti |
| `body { }` | Stili per tutto il contenuto visibile |
| `font-family` | Il tipo di carattere da usare |
| `background-color` | Colore di sfondo (rosa tenue!) |
| `color` | Colore del testo |
| `line-height` | Spazio tra le righe di testo |

💡 **Curiosità:** I colori in CSS si scrivono con `#` seguito da 6 caratteri (formato esadecimale). `#fff5f5` è un rosa molto chiaro!

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
