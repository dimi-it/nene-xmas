# 🎄 Giorno 18 - Cuoricini che Volano!

## Ciao stellina! ⭐

Oggi aggiungiamo un effetto magico: cuoricini che volano quando clicchi sulla pagina!

---

## 📚 Cosa Impariamo Oggi
- **Creare elementi dinamicamente** con JavaScript
- **Position absolute** - posizionare elementi liberamente
- **setTimeout** - eseguire codice dopo un ritardo
- **Coordinate del mouse** - sapere dove clicchi

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 💕 Cuoricini che volano al click!
    const cuori = ['💕', '💗', '💖', '💝', '❤️', '💓', '💞'];
    
    document.addEventListener('click', function(e) {
        // Non creare cuori se clicco su bottoni o foto
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
            return;
        }
        
        const cuore = document.createElement('span');
        cuore.className = 'cuore-volante';
        cuore.textContent = cuori[Math.floor(Math.random() * cuori.length)];
        cuore.style.left = e.clientX + 'px';
        cuore.style.top = e.clientY + 'px';
        
        document.body.appendChild(cuore);
        
        // Rimuovi il cuore dopo l'animazione
        setTimeout(function() {
            cuore.remove();
        }, 1500);
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `document.createElement('span')` | Crea un nuovo elemento HTML |
| `e.clientX` / `e.clientY` | Posizione X e Y del click |
| `document.body.appendChild(cuore)` | Aggiunge l'elemento alla pagina |
| `setTimeout(function, 1500)` | Esegui dopo 1500ms (1.5 secondi) |
| `cuore.remove()` | Rimuove l'elemento dalla pagina |
| `e.target.tagName` | Il tipo di elemento su cui ho cliccato |

💡 **Curiosità:** `createElement` è come avere una stampante 3D per elementi HTML! Puoi creare qualsiasi cosa al volo.

---

## 🎨 Aggiungi lo Stile per i Cuoricini

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 💕 Cuoricini volanti */
.cuore-volante {
    position: fixed;
    font-size: 1.5em;
    pointer-events: none;
    animation: vola-su 1.5s ease-out forwards;
    z-index: 9999;
}

@keyframes vola-su {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateY(-150px) scale(1.5);
    }
}
```

---

## 👀 Risultato Atteso

**Clicca ovunque sulla pagina** (tranne su bottoni e foto) e vedrai:
- 💕 Un cuoricino appare dove hai cliccato
- ⬆️ Vola verso l'alto ingrandendosi
- ✨ Svanisce dolcemente

---

## 💝 Pensiero del Giorno

*"Ora ogni tuo click lascia una traccia d'amore! È come se la pagina rispondesse ai tuoi tocchi con affetto. Proprio come faccio io!"*

---

## ✨ Sfida Bonus

Prova a cambiare l'array `cuori` con altri emoji:
- Stelline: `['⭐', '🌟', '✨', '💫']`
- Fiori: `['🌸', '🌺', '🌷', '🌹', '💐']`

---

**Domani: saluti personalizzati!** 🌅
