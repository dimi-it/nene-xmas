# 🎄 Giorno 22 - Neve che Cade (Effetto Natalizio!)

## Ciao fiocco di neve! ❄️

È quasi Natale! Aggiungiamo una magica nevicata alla nostra pagina!

---

## 📚 Cosa Impariamo Oggi
- **setInterval per animazioni** - creare elementi continuamente
- **Numeri casuali avanzati** - posizioni e dimensioni random
- **Animazioni CSS complesse** - movimenti fluidi

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // ❄️ Neve che cade!
    function creaFiocco() {
        const fiocco = document.createElement('div');
        fiocco.className = 'fiocco-neve';
        fiocco.innerHTML = '❄️';
        
        // Posizione casuale orizzontale
        fiocco.style.left = Math.random() * 100 + '%';
        
        // Dimensione casuale
        const dimensione = Math.random() * 1 + 0.5;
        fiocco.style.fontSize = dimensione + 'em';
        
        // Durata casuale dell'animazione
        const durata = Math.random() * 3 + 4;
        fiocco.style.animationDuration = durata + 's';
        
        // Ritardo casuale
        fiocco.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(fiocco);
        
        // Rimuovi dopo che è caduto
        setTimeout(function() {
            fiocco.remove();
        }, (durata + 2) * 1000);
    }
    
    // Crea un fiocco ogni 300ms
    setInterval(creaFiocco, 300);
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `Math.random() * 100 + '%'` | Posizione tra 0% e 100% |
| `Math.random() * 1 + 0.5` | Numero tra 0.5 e 1.5 |
| `setInterval(creaFiocco, 300)` | Esegui ogni 300ms (0.3 secondi) |
| `animationDuration` | Durata dell'animazione CSS |
| `animationDelay` | Ritardo prima che inizi |

💡 **Curiosità:** Creiamo e distruggiamo fiocchi per non appesantire la pagina!

---

## 🎨 Aggiungi lo Stile per la Neve

Nel file `style.css`, **aggiungi in fondo**:

```css
/* ❄️ Neve che cade */
.fiocco-neve {
    position: fixed;
    top: -50px;
    pointer-events: none;
    z-index: 9998;
    animation: cade-neve linear forwards;
    opacity: 0.8;
}

@keyframes cade-neve {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.8;
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
    }
}
```

---

## 👀 Risultato Atteso

- ❄️ Fiocchi di neve cadono da tutto lo schermo!
- 🌀 Ogni fiocco ruota mentre cade
- 📐 Dimensioni e velocità diverse per ogni fiocco
- ✨ Effetto magico e natalizio!

---

## 💝 Pensiero del Giorno

*"Hai creato la magia del Natale sulla nostra pagina! Ogni fiocco è unico, proprio come ogni momento con te. La neve cade, ma il nostro amore resta."*

---

## ✨ Sfida Bonus

Vuoi altri emoji invece della neve? Prova:
```javascript
const emoji = ['❄️', '🌟', '✨', '💕'];
fiocco.innerHTML = emoji[Math.floor(Math.random() * emoji.length)];
```

---

**Domani: musica di sottofondo!** 🎵
