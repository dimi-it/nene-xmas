# 🎄 Giorno 20 - Timeline dei Ricordi

## Ciao amore mio! 💕

Oggi creiamo una timeline interattiva dei momenti speciali della nostra storia!

---

## 📚 Cosa Impariamo Oggi
- **Array di oggetti** - dati strutturati
- **forEach con oggetti** - iterare su dati complessi
- **Template literals** - creare HTML dinamicamente

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi l'HTML per la Timeline

Nel file `index.html`, **dopo la sezione "Perché Ti Amo"**, aggiungi:

```html
    <section class="timeline-section">
        <h2>📅 La Nostra Timeline</h2>
        <p>I momenti che hanno scritto la nostra storia...</p>
        <div id="timeline"></div>
    </section>
```

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 📅 Timeline dei ricordi
    const ricordi = [
        {
            data: '15 Gennaio 2023',
            titolo: '💕 Il nostro primo incontro',
            descrizione: 'Il giorno in cui tutto è iniziato...'
        },
        {
            data: '14 Febbraio 2023',
            titolo: '💝 Il primo San Valentino',
            descrizione: 'Una serata magica insieme'
        },
        {
            data: '20 Giugno 2023',
            titolo: '🏖️ La nostra prima vacanza',
            descrizione: 'Mare, sole e tanto amore'
        },
        {
            data: '25 Dicembre 2023',
            titolo: '🎄 Il primo Natale insieme',
            descrizione: 'Regali, abbracci e felicità'
        }
    ];
    
    const timelineContainer = document.getElementById('timeline');
    
    ricordi.forEach(function(ricordo, indice) {
        const elemento = document.createElement('div');
        elemento.className = 'timeline-item';
        elemento.innerHTML = `
            <div class="timeline-data">${ricordo.data}</div>
            <div class="timeline-contenuto">
                <h3>${ricordo.titolo}</h3>
                <p>${ricordo.descrizione}</p>
            </div>
        `;
        timelineContainer.appendChild(elemento);
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `{ data: '...', titolo: '...' }` | Un oggetto con proprietà |
| `ricordi[0].data` | Accede alla proprietà "data" del primo oggetto |
| `forEach(function(ricordo, indice) {...})` | Per ogni ricordo, esegui... |
| `` `...${variabile}...` `` | Template literal - inserisce variabili nel testo |
| `elemento.innerHTML` | Imposta il contenuto HTML dell'elemento |

💡 **Importante:** Personalizza l'array `ricordi` con le VOSTRE date e momenti speciali!

---

## 🎨 Aggiungi lo Stile per la Timeline

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 📅 Timeline dei ricordi */
.timeline-section {
    text-align: center;
}

#timeline {
    margin-top: 30px;
    position: relative;
    padding-left: 30px;
}

#timeline::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #f8b4c4, #ffe4e6);
    border-radius: 3px;
}

.timeline-item {
    position: relative;
    margin-bottom: 30px;
    text-align: left;
}

.timeline-item::before {
    content: '💕';
    position: absolute;
    left: -30px;
    top: 5px;
    font-size: 1.2em;
}

.timeline-data {
    color: #e8a0b4;
    font-weight: 600;
    font-size: 0.9em;
    margin-bottom: 5px;
}

.timeline-contenuto {
    background: linear-gradient(to right, #fff5f5, white);
    padding: 15px 20px;
    border-radius: 15px;
    border-left: 3px solid #f8b4c4;
}

.timeline-contenuto h3 {
    color: #5a4a4a;
    margin-bottom: 5px;
    font-size: 1.1em;
}

.timeline-contenuto p {
    color: #8a7a7a;
    font-size: 0.95em;
    margin: 0;
}
```

---

## 👀 Risultato Atteso

Una bellissima timeline verticale con:
- 📍 Una linea rosa che collega tutti i momenti
- 💕 Cuoricini che segnano ogni ricordo
- 📅 Date e descrizioni per ogni momento

---

## 💝 Pensiero del Giorno

*"Hai appena creato una linea del tempo della nostra storia! Ogni punto è un capitolo del nostro libro d'amore. E stiamo ancora scrivendo insieme."*

---

## ✨ Sfida Bonus

Aggiungi altri ricordi all'array! Basta copiare la struttura:
```javascript
{
    data: 'La data',
    titolo: '🎉 Il titolo',
    descrizione: 'La descrizione'
}
```

---

**Da domani: tocchi finali magici!** ✨
