# 🎄 Giorno 7 - Un Header da Sogno

## Buongiorno principessa! 👑

Oggi trasformiamo l'intestazione in qualcosa di magico!

---

## 📚 Cosa Impariamo Oggi
- **Gradienti** - sfumature di colore
- **Padding** - spazio interno
- **Text-align** - allineamento del testo
- **Border-radius** - angoli arrotondati

---

## 🎯 Cosa Fare

Nel file `style.css`, **aggiungi in fondo** questo codice:

```css
/* 💕 Header - La nostra intestazione magica */
header {
    background: linear-gradient(135deg, #f8b4c4 0%, #e8a0b4 100%);
    color: white;
    text-align: center;
    padding: 60px 20px;
    border-radius: 0 0 50px 50px;
    box-shadow: 0 4px 20px rgba(232, 160, 180, 0.3);
}

header h1 {
    font-size: 2.5em;
    font-weight: 700;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

header p {
    font-size: 1.2em;
    opacity: 0.9;
}
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `linear-gradient(...)` | Crea una sfumatura tra due colori |
| `135deg` | L'angolo della sfumatura (diagonale) |
| `padding: 60px 20px` | 60px sopra/sotto, 20px ai lati |
| `border-radius: 0 0 50px 50px` | Solo gli angoli in basso sono arrotondati |
| `box-shadow` | Ombra morbida sotto l'elemento |
| `font-size: 2.5em` | 2.5 volte la dimensione normale |
| `text-shadow` | Ombra leggera dietro il testo |
| `opacity: 0.9` | Leggermente trasparente (90% opaco) |

💡 **Curiosità:** `em` è un'unità relativa - si adatta alla dimensione base del testo!

---

## 👀 Risultato Atteso

L'header ora è:
- 🌸 Rosa sfumato bellissimo
- 📝 Testo bianco centrato
- 🔵 Angoli inferiori arrotondati (effetto "nuvola")
- ✨ Con un'ombra morbida che gli dà profondità

---

## 💝 Pensiero del Giorno

*"Guarda che meraviglia! Hai creato un header degno di una storia d'amore. Ogni dettaglio che aggiungi rende la pagina più speciale, proprio come ogni momento con te."*

---

## 🆘 Se Qualcosa Non Funziona

- Assicurati che non ci siano errori di battitura
- Ogni proprietà finisce con `;`
- Le parentesi graffe `{ }` devono essere bilanciate

---

**Domani: stilizziamo le sezioni!** 🎀
