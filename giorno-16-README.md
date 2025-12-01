# 🎄 Giorno 16 - Il Tempo che Scorre

## Ciao meraviglia! 🌟

Oggi miglioriamo il contatore per mostrare giorni, ore, minuti e secondi in tempo reale!

---

## 📚 Cosa Impariamo Oggi
- **setInterval** - eseguire codice ripetutamente
- **Funzioni** - blocchi di codice riutilizzabili
- **Calcoli con date** - estrarre ore, minuti, secondi

---

## 🎯 Cosa Fare

### Passo 1: Aggiorna l'HTML del contatore

Nel file `index.html`, **sostituisci** la sezione `contatore-amore` con:

```html
    <section class="contatore-amore">
        <h2>💕 Il Nostro Tempo Insieme</h2>
        <div id="contatore">
            <div class="tempo-box">
                <span id="giorni">0</span>
                <small>giorni</small>
            </div>
            <div class="tempo-box">
                <span id="ore">0</span>
                <small>ore</small>
            </div>
            <div class="tempo-box">
                <span id="minuti">0</span>
                <small>minuti</small>
            </div>
            <div class="tempo-box">
                <span id="secondi">0</span>
                <small>secondi</small>
            </div>
        </div>
        <p class="data-inizio">Dal giorno in cui tutto è iniziato...</p>
    </section>
```

### Passo 2: Aggiorna il JavaScript

Nel file `script.js`, **trova e sostituisci** la parte del contatore con:

```javascript
    // 💑 Contatore del tempo insieme (aggiornato ogni secondo!)
    const dataInizio = new Date('2023-01-15'); // CAMBIA con la vostra data!
    
    function aggiornaContatore() {
        const adesso = new Date();
        const differenza = adesso - dataInizio;
        
        const secondiTotali = Math.floor(differenza / 1000);
        const minutiTotali = Math.floor(secondiTotali / 60);
        const oreTotali = Math.floor(minutiTotali / 60);
        const giorniTotali = Math.floor(oreTotali / 24);
        
        const secondi = secondiTotali % 60;
        const minuti = minutiTotali % 60;
        const ore = oreTotali % 24;
        
        document.getElementById('giorni').textContent = giorniTotali;
        document.getElementById('ore').textContent = ore;
        document.getElementById('minuti').textContent = minuti;
        document.getElementById('secondi').textContent = secondi;
    }
    
    // Aggiorna subito e poi ogni secondo
    aggiornaContatore();
    setInterval(aggiornaContatore, 1000);
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `function aggiornaContatore()` | Definisce una funzione riutilizzabile |
| `% 60` | Modulo - il resto della divisione (per avere 0-59) |
| `setInterval(funzione, 1000)` | Esegui la funzione ogni 1000ms (1 secondo) |

💡 **Curiosità:** `%` è l'operatore modulo. `65 % 60` dà `5` perché 65 diviso 60 fa 1 con resto 5!

---

## 🎨 Aggiorna lo Stile

Nel file `style.css`, **trova** gli stili del contatore e **sostituiscili** con:

```css
/* 💕 Contatore dell'amore - versione completa */
.contatore-amore {
    background: linear-gradient(135deg, #ffe4e6 0%, #fff5f5 100%);
    text-align: center;
}

#contatore {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 25px 0;
}

.tempo-box {
    background: white;
    padding: 20px 25px;
    border-radius: 20px;
    box-shadow: 0 5px 20px rgba(248, 180, 196, 0.3);
    min-width: 90px;
}

.tempo-box span {
    display: block;
    font-size: 2.5em;
    font-weight: 700;
    color: #e8a0b4;
}

.tempo-box small {
    color: #b89a9a;
    font-size: 0.9em;
}

.data-inizio {
    font-style: italic;
    color: #b89a9a;
}
```

---

## 👀 Risultato Atteso

Vedrai 4 box con:
- 📅 Giorni
- ⏰ Ore  
- ⏱️ Minuti
- ⏲️ Secondi (che scorrono in tempo reale!)

---

## 💝 Pensiero del Giorno

*"Guarda il tempo che scorre! Ogni secondo che passa è un secondo d'amore in più. E tu hai imparato a catturarlo con il codice!"*

---

**Domani: foto che si espandono!** 🖼️
