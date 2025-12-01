# 🎄 Giorno 17 - Galleria Foto Interattiva

## Ciao artista! 🎨

Oggi rendiamo la galleria foto interattiva - cliccando su una foto si ingrandirà!

---

## 📚 Cosa Impariamo Oggi
- **Creare elementi** con JavaScript
- **classList** - aggiungere/togliere classi CSS
- **Eventi su più elementi** - gestire click su tutte le foto

---

## 🎯 Cosa Fare

### Passo 1: Aggiungi l'HTML per il popup

Nel file `index.html`, **prima di `</body>`** (e prima dello script), aggiungi:

```html
    <!-- Popup per le foto ingrandite -->
    <div id="foto-popup" class="popup-nascosto">
        <span id="chiudi-popup">✕</span>
        <img id="foto-grande" src="" alt="Foto ingrandita">
    </div>
```

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 📸 Galleria foto con popup
    const fotoGalleria = document.querySelectorAll('.galleria img');
    const popup = document.getElementById('foto-popup');
    const fotoGrande = document.getElementById('foto-grande');
    const chiudiPopup = document.getElementById('chiudi-popup');
    
    fotoGalleria.forEach(function(foto) {
        foto.addEventListener('click', function() {
            fotoGrande.src = foto.src;
            popup.classList.remove('popup-nascosto');
            popup.classList.add('popup-visibile');
        });
    });
    
    chiudiPopup.addEventListener('click', function() {
        popup.classList.remove('popup-visibile');
        popup.classList.add('popup-nascosto');
    });
    
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('popup-visibile');
            popup.classList.add('popup-nascosto');
        }
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `querySelectorAll('.galleria img')` | Seleziona TUTTE le immagini nella galleria |
| `.forEach(function(foto) {...})` | Esegui il codice per OGNI foto |
| `classList.add()` / `.remove()` | Aggiunge o rimuove una classe CSS |
| `e.target === popup` | Controlla se ho cliccato sullo sfondo (non sulla foto) |

💡 **Curiosità:** `querySelectorAll` restituisce una lista di elementi, mentre `querySelector` (senza All) restituisce solo il primo!

---

## 🎨 Aggiungi lo Stile per il Popup

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 🖼️ Popup foto */
#foto-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transition: opacity 0.3s ease;
}

.popup-nascosto {
    opacity: 0;
    pointer-events: none;
}

.popup-visibile {
    opacity: 1;
    pointer-events: auto;
}

#foto-grande {
    max-width: 90%;
    max-height: 90%;
    border-radius: 15px;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
}

#chiudi-popup {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2.5em;
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease;
}

#chiudi-popup:hover {
    transform: scale(1.2);
}
```

---

## 👀 Risultato Atteso

- 🖼️ Clicca su una foto nella galleria
- ✨ La foto si apre in grande al centro dello schermo!
- ✕ Clicca la X o lo sfondo scuro per chiudere

---

## 💝 Pensiero del Giorno

*"Hai creato un vero lightbox per le foto! Ogni ricordo ora può essere ammirato in grande. La nostra storia merita di essere vista in alta definizione!"*

---

## ✨ Sfida Bonus

Aggiungi più foto alla galleria nel file HTML e guarda come funzionano automaticamente tutte con il popup!

---

**Domani: effetti speciali!** ✨
