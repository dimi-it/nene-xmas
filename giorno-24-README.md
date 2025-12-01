# 🎄 Giorno 24 - La Vigilia: Conto alla Rovescia e Sorpresa!

## Ciao amore, è la Vigilia! 🎄

Oggi è un giorno speciale! Aggiungiamo un conto alla rovescia per la mezzanotte e una sorpresa!

---

## 📚 Cosa Impariamo Oggi
- **Countdown dinamico** - conto alla rovescia
- **Condizioni temporali** - eseguire codice a un'ora specifica
- **Sorprese nascoste** - elementi che appaiono a sorpresa

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi l'HTML per il Countdown

Nel file `index.html`, **prima del footer**, aggiungi:

```html
    <section class="countdown-natale">
        <h2>🎄 Countdown al Natale 🎄</h2>
        <div id="countdown">
            <div class="countdown-box">
                <span id="countdown-ore">00</span>
                <small>ore</small>
            </div>
            <div class="countdown-box">
                <span id="countdown-minuti">00</span>
                <small>minuti</small>
            </div>
            <div class="countdown-box">
                <span id="countdown-secondi">00</span>
                <small>secondi</small>
            </div>
        </div>
        <p id="messaggio-natale">Manca poco alla magia... ✨</p>
    </section>

    <div id="sorpresa-natale" class="sorpresa-nascosta">
        <div class="sorpresa-contenuto">
            <h2>🎄 Buon Natale Amore! 🎄</h2>
            <p>Grazie per aver costruito questa pagina con me.</p>
            <p>Sei la cosa più bella che mi sia capitata.</p>
            <p class="cuore-grande">💕</p>
            <button id="chiudi-sorpresa">Grazie! ❤️</button>
        </div>
    </div>
```

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 🎄 Countdown al Natale
    function aggiornaCountdown() {
        const adesso = new Date();
        const natale = new Date(adesso.getFullYear(), 11, 25, 0, 0, 0); // 25 Dicembre
        
        // Se siamo già oltre Natale di quest'anno, conta per il prossimo
        if (adesso > natale) {
            natale.setFullYear(natale.getFullYear() + 1);
        }
        
        const differenza = natale - adesso;
        
        if (differenza <= 0) {
            // È NATALE! Mostra la sorpresa!
            document.getElementById('messaggio-natale').textContent = '🎄 È NATALE! 🎄';
            document.getElementById('sorpresa-natale').classList.add('sorpresa-visibile');
            return;
        }
        
        const ore = Math.floor((differenza / (1000 * 60 * 60)) % 24);
        const minuti = Math.floor((differenza / (1000 * 60)) % 60);
        const secondi = Math.floor((differenza / 1000) % 60);
        const giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
        
        document.getElementById('countdown-ore').textContent = String(ore).padStart(2, '0');
        document.getElementById('countdown-minuti').textContent = String(minuti).padStart(2, '0');
        document.getElementById('countdown-secondi').textContent = String(secondi).padStart(2, '0');
        
        if (giorni > 0) {
            document.getElementById('messaggio-natale').textContent = 
                `Mancano ${giorni} giorni e ${ore} ore! ✨`;
        }
    }
    
    aggiornaCountdown();
    setInterval(aggiornaCountdown, 1000);
    
    // Chiudi la sorpresa
    document.getElementById('chiudi-sorpresa').addEventListener('click', function() {
        document.getElementById('sorpresa-natale').classList.remove('sorpresa-visibile');
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `new Date(anno, 11, 25)` | 25 Dicembre (mese 11 = Dicembre, i mesi partono da 0!) |
| `String(ore).padStart(2, '0')` | Aggiunge uno zero davanti se serve (5 → "05") |
| `% 24` / `% 60` | Per avere solo le ore/minuti rimanenti |

---

## 🎨 Aggiungi lo Stile

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 🎄 Countdown Natale */
.countdown-natale {
    background: linear-gradient(135deg, #2d5a3d 0%, #3d7a5d 100%);
    color: white;
    text-align: center;
}

.countdown-natale h2 {
    color: white;
    border-bottom-color: rgba(255,255,255,0.3);
}

#countdown {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 25px 0;
}

.countdown-box {
    background: rgba(255,255,255,0.15);
    padding: 20px 25px;
    border-radius: 15px;
    min-width: 80px;
}

.countdown-box span {
    display: block;
    font-size: 2.5em;
    font-weight: 700;
}

.countdown-box small {
    opacity: 0.8;
}

#messaggio-natale {
    font-size: 1.2em;
    margin-top: 15px;
}

/* 🎁 Sorpresa */
#sorpresa-natale {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    transition: opacity 0.5s ease;
}

.sorpresa-nascosta {
    opacity: 0;
    pointer-events: none;
}

.sorpresa-visibile {
    opacity: 1;
    pointer-events: auto;
}

.sorpresa-contenuto {
    background: linear-gradient(135deg, #f8b4c4 0%, #e8a0b4 100%);
    padding: 50px;
    border-radius: 30px;
    text-align: center;
    color: white;
    max-width: 500px;
    animation: bounce-in 0.5s ease;
}

@keyframes bounce-in {
    0% { transform: scale(0.5); }
    70% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.cuore-grande {
    font-size: 4em;
    margin: 20px 0;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

#chiudi-sorpresa {
    background: white;
    color: #e8a0b4;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.1em;
    cursor: pointer;
    margin-top: 20px;
    font-weight: 600;
    transition: transform 0.3s ease;
}

#chiudi-sorpresa:hover {
    transform: scale(1.05);
}
```

---

## 👀 Risultato Atteso

- ⏰ Un countdown verde natalizio
- 🎄 A mezzanotte del 25: una sorpresa animata!
- 💕 Un messaggio d'amore speciale

---

## 💝 Pensiero del Giorno

*"Domani è l'ultimo giorno. Guarderemo insieme tutto quello che hai costruito. Sono così orgoglioso di te!"*

---

**Domani: il Gran Finale!** 🎉
