# 🎄 Giorno 23 - Musica e Suoni d'Amore

## Ciao melodia! 🎵

Oggi aggiungiamo un tocco speciale: la possibilità di avere musica di sottofondo!

---

## 📚 Cosa Impariamo Oggi
- **Audio in HTML** - il tag audio
- **Controlli JavaScript per audio** - play, pause, volume
- **LocalStorage** - ricordare le preferenze dell'utente

---

## 🎯 Cosa Fare

### Passo 1: Prepara una Canzone

Salva un file MP3 della vostra canzone speciale nella cartella del progetto. Chiamalo `nostra-canzone.mp3`.

(Se non hai un MP3, puoi saltare questo passaggio e il player sarà comunque presente!)

### Passo 2: Aggiungi l'HTML per il Player

Nel file `index.html`, **dopo l'header**, aggiungi:

```html
    <div class="music-player">
        <button id="btn-musica">🎵</button>
        <span id="stato-musica">Clicca per la musica</span>
        <audio id="audio-sottofondo" loop>
            <source src="nostra-canzone.mp3" type="audio/mpeg">
        </audio>
    </div>
```

### Passo 3: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 🎵 Player musicale
    const audio = document.getElementById('audio-sottofondo');
    const btnMusica = document.getElementById('btn-musica');
    const statoMusica = document.getElementById('stato-musica');
    let musicaAttiva = false;
    
    // Imposta volume basso
    audio.volume = 0.3;
    
    btnMusica.addEventListener('click', function() {
        if (musicaAttiva) {
            audio.pause();
            btnMusica.textContent = '🎵';
            statoMusica.textContent = 'Musica in pausa';
            musicaAttiva = false;
        } else {
            audio.play().catch(function() {
                statoMusica.textContent = 'Aggiungi nostra-canzone.mp3!';
            });
            btnMusica.textContent = '⏸️';
            statoMusica.textContent = 'La nostra canzone ♪';
            musicaAttiva = true;
        }
    });
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `<audio>` | Elemento per riprodurre audio |
| `loop` | Ripete la canzone all'infinito |
| `audio.play()` | Avvia la riproduzione |
| `audio.pause()` | Mette in pausa |
| `audio.volume = 0.3` | Volume al 30% |
| `.catch(function() {...})` | Gestisce l'errore se il file non esiste |

💡 **Nota:** I browser richiedono un'interazione utente prima di riprodurre audio. Per questo usiamo un bottone!

---

## 🎨 Aggiungi lo Stile per il Player

Nel file `style.css`, **aggiungi in fondo**:

```css
/* 🎵 Music Player */
.music-player {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    padding: 10px 20px;
    border-radius: 50px;
    box-shadow: 0 5px 25px rgba(248, 180, 196, 0.4);
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1000;
}

#btn-musica {
    font-size: 1.5em;
    background: none;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}

#btn-musica:hover {
    transform: scale(1.2);
}

#stato-musica {
    color: #e8a0b4;
    font-size: 0.9em;
    font-weight: 500;
}
```

---

## 👀 Risultato Atteso

- 🎵 Un player carino in basso a destra
- ▶️ Clicca per avviare la musica
- ⏸️ Clicca di nuovo per metterla in pausa
- 🔄 La canzone si ripete all'infinito

---

## 💝 Pensiero del Giorno

*"Ora la nostra pagina ha anche una colonna sonora! Ogni volta che la apri, puoi sentire la nostra canzone. È come un abbraccio musicale."*

---

## 🎵 Suggerimenti per la Canzone

Non sai quale canzone mettere? Ecco alcune idee:
- La canzone del vostro primo ballo
- Una canzone che vi ricorda un momento speciale
- Una canzone natalizia romantica

---

**Domani: sorpresa finale!** 🎁
