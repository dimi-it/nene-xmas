# 🎄 Giorno 15 - Messaggi d'Amore Casuali

## Ciao dolcezza! 🍬

Oggi creiamo un generatore di messaggi d'amore casuali!

---

## 📚 Cosa Impariamo Oggi
- **Array** - liste di elementi
- **Math.random()** - generare numeri casuali
- **Eventi click** - reagire ai click del mouse

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi il contenitore HTML

Nel file `index.html`, **dopo la sezione "Chi Siamo"**, aggiungi questa nuova sezione:

```html
    <section class="messaggi-amore">
        <h2>💌 Un Messaggio per Te</h2>
        <p id="messaggio-random">Clicca il cuore per ricevere un messaggio d'amore!</p>
        <button id="btn-messaggio">💕</button>
    </section>
```

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 💌 Messaggi d'amore casuali
    const messaggi = [
        "Sei la cosa più bella che mi sia mai capitata 💕",
        "Ogni momento con te è un regalo prezioso ✨",
        "Il tuo sorriso è la mia felicità quotidiana 😊",
        "Ti amo più di quanto le parole possano esprimere 💗",
        "Sei il mio sogno diventato realtà 🌟",
        "Con te al mio fianco, ogni giorno è speciale 🌈",
        "Il mio cuore batte solo per te 💓",
        "Sei la mia persona preferita al mondo 🌍"
    ];
    
    const btnMessaggio = document.getElementById('btn-messaggio');
    const messaggioRandom = document.getElementById('messaggio-random');
    
    btnMessaggio.addEventListener('click', function() {
        const indice = Math.floor(Math.random() * messaggi.length);
        messaggioRandom.textContent = messaggi[indice];
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `const messaggi = [...]` | Un array (lista) di messaggi |
| `Math.random()` | Genera un numero casuale tra 0 e 1 |
| `* messaggi.length` | Moltiplica per la lunghezza dell'array |
| `Math.floor()` | Arrotonda a numero intero |
| `messaggi[indice]` | Prende il messaggio in quella posizione |
| `addEventListener('click', ...)` | Esegui il codice quando clicco |

💡 **Personalizza!** Puoi aggiungere altri messaggi all'array! Basta aggiungere altre righe con le virgolette.

---

## 🎨 Aggiungi lo Stile

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 💌 Messaggi d'amore */
.messaggi-amore {
    text-align: center;
}

#messaggio-random {
    font-size: 1.3em;
    color: #e8a0b4;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: linear-gradient(to right, #fff5f5, #ffe4e6);
    border-radius: 15px;
    margin: 20px 0;
}

#btn-messaggio {
    font-size: 3em;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}

#btn-messaggio:hover {
    transform: scale(1.2);
}
```

---

## 👀 Risultato Atteso

- 💕 Un grande cuore cliccabile
- ✨ Ogni click mostra un messaggio diverso!
- 🌟 Il cuore si ingrandisce quando ci passi sopra

**Prova subito!** Clicca il cuore più volte!

---

## 💝 Pensiero del Giorno

*"Hai creato il tuo primo elemento interattivo! Ora la pagina risponde ai tuoi comandi. È come la magia, ma sei tu a controllarla!"*

---

**Domani: il tempo che scorre!** ⏰
