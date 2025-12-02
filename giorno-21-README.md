# 🎄 Giorno 21 - Animazioni di Entrata Magiche

## Ciao magia! ✨

Siamo nella settimana finale! Oggi aggiungiamo animazioni stupende quando gli elementi appaiono sullo schermo.

---

## 📚 Cosa Impariamo Oggi
- **Intersection Observer** - vedere quando un elemento entra nello schermo
- **Animazioni su scroll** - effetti che si attivano scorrendo

---

## 🎯 Cosa Fare

### Passo 1: Aggiorna le Classi HTML

Nel file `index.html`, aggiungi la classe `anima-entrata` alle sezioni che vuoi animare. Per esempio:

```html
    <section class="anima-entrata">
        <h2>🌟 Chi Siamo</h2>
        ...
    </section>

    <section class="messaggi-amore anima-entrata">
        ...
    </section>
```

Aggiungi `anima-entrata` a tutte le sezioni che vuoi (tranne l'header).

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // ✨ Animazioni quando gli elementi appaiono
    const elementiAnimati = document.querySelectorAll('.anima-entrata');
    
    const osservatore = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visibile');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementiAnimati.forEach(function(elemento) {
        osservatore.observe(elemento);
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `IntersectionObserver` | Osserva quando elementi entrano/escono dallo schermo |
| `entry.isIntersecting` | True se l'elemento è visibile |
| `entry.target` | L'elemento che stiamo osservando |
| `threshold: 0.1` | Attiva quando il 10% dell'elemento è visibile |
| `osservatore.observe(elemento)` | Inizia a osservare quell'elemento |

💡 **Curiosità:** L'Intersection Observer è molto più efficiente di controllare lo scroll manualmente!

---

## 🎨 Aggiungi lo Stile per le Animazioni

Nel file `style.css`, **aggiungi in fondo**:

```css
/* ✨ Animazioni di entrata */
.anima-entrata {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.anima-entrata.visibile {
    opacity: 1;
    transform: translateY(0);
}

/* Varianti per elementi diversi */
.timeline-item {
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease;
}

.timeline-item.visibile {
    opacity: 1;
    transform: translateX(0);
}
```

### E nel JavaScript, aggiungi anche gli elementi timeline:

```javascript
    // Anima anche gli elementi della timeline
    const elementiTimeline = document.querySelectorAll('.timeline-item');
    elementiTimeline.forEach(function(elemento, indice) {
        setTimeout(function() {
            elemento.classList.add('visibile');
        }, 200 * indice);
    });
```

---

## 👀 Risultato Atteso

- 📜 Scorri la pagina verso il basso
- ✨ Le sezioni appaiono dolcemente dal basso!
- 📅 Gli elementi della timeline appaiono uno dopo l'altro

---

## 💝 Pensiero del Giorno

*"La pagina ora prende vita quando la esplori! Ogni sezione si rivela come un regalo da scartare. Come ogni giorno con te."*

---

**Domani: neve che cade!** ❄️
