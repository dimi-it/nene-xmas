# 🎄 Giorno 14 - Il Contatore del Nostro Amore

## Buongiorno amore! 💕

Oggi creiamo qualcosa di speciale: un contatore che mostra da quanto tempo stiamo insieme!

---

## 📚 Cosa Impariamo Oggi
- **Variabili** - contenitori per i dati
- **Date** - lavorare con le date in JavaScript
- **Modificare la pagina** - cambiare il contenuto HTML

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi il contenitore HTML

Nel file `index.html`, **dopo l'header** e **prima della prima section**, aggiungi:

```html
    <section class="contatore-amore">
        <h2>💕 Il Nostro Tempo Insieme</h2>
        <div id="contatore">
            <span id="giorni">0</span> giorni d'amore
        </div>
        <p class="data-inizio">Dal giorno in cui tutto è iniziato...</p>
    </section>
```

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **dentro la funzione** (dopo i console.log), aggiungi:

```javascript
    // 💑 Contatore dei giorni insieme
    // CAMBIA QUESTA DATA con la vostra data di inizio!
    const dataInizio = new Date('2023-01-15'); // Formato: ANNO-MESE-GIORNO
    
    const oggi = new Date();
    const differenza = oggi - dataInizio;
    const giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
    
    document.getElementById('giorni').textContent = giorni;
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `const` | Crea una variabile che non cambia |
| `new Date('2023-01-15')` | Crea una data specifica |
| `new Date()` | La data di oggi |
| `oggi - dataInizio` | Differenza in millisecondi |
| `Math.floor()` | Arrotonda per difetto |
| `/ (1000 * 60 * 60 * 24)` | Converte millisecondi in giorni |
| `getElementById('giorni')` | Trova l'elemento con id="giorni" |
| `.textContent = ` | Cambia il testo dell'elemento |

💡 **Importante:** Cambia `'2023-01-15'` con la vostra vera data di inizio! 💕

---

## 🎨 Aggiungi lo Stile

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 💕 Contatore dell'amore */
.contatore-amore {
    background: linear-gradient(135deg, #ffe4e6 0%, #fff5f5 100%);
    text-align: center;
}

#contatore {
    font-size: 2.5em;
    color: #e8a0b4;
    margin: 20px 0;
}

#contatore #giorni {
    font-size: 2em;
    font-weight: 700;
    color: #f8b4c4;
    display: inline-block;
    background: white;
    padding: 10px 30px;
    border-radius: 50px;
    box-shadow: 0 5px 20px rgba(248, 180, 196, 0.3);
}

.data-inizio {
    font-style: italic;
    color: #b89a9a;
}
```

---

## 👀 Risultato Atteso

Vedrai una bellissima sezione con:
- 💕 Il numero di giorni che state insieme
- ✨ Il numero in una "pillola" rosa
- 🌸 Un messaggio romantico sotto

---

## 💝 Pensiero del Giorno

*"Ogni giorno con te è un giorno guadagnato. Ora possiamo vedere esattamente quanti tesori abbiamo accumulato insieme!"*

---

## ✨ Sfida Bonus

Prova a cambiare il testo! Invece di "giorni d'amore" potresti scrivere "giorni di felicità" o "giorni indimenticabili"!

---

**Domani: messaggi interattivi!** 💌
