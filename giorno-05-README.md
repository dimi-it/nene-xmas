# 🎄 Giorno 5 - Immagini e Footer

## Ciao principessa! 💕

Ultimo giorno di HTML puro! Oggi aggiungiamo immagini e un footer (piè di pagina).

---

## 📚 Cosa Impariamo Oggi
- **Immagini** (`<img>`) - per mostrare foto
- **Footer** (`<footer>`) - la parte finale della pagina
- **Contenitore** (`<div>`) - una scatola generica per raggruppare elementi

---

## 🎯 Cosa Fare

### Passo 1: Prepara una foto
Salva una vostra foto nella stessa cartella del progetto e chiamala `foto-noi.jpg` (o `.png`)

### Passo 2: Aggiorna la sezione Ricordi

**Trova** la sezione "I Nostri Ricordi" e **sostituiscila** con:

```html
    <section>
        <h2>📸 I Nostri Ricordi</h2>
        <p>Momenti che porteremo sempre nel cuore.</p>
        <div class="galleria">
            <img src="foto-noi.jpg" alt="Una nostra foto insieme">
        </div>
    </section>
```

### Passo 3: Aggiungi il Footer

**Prima** di `</body>`, aggiungi:

```html
    <footer>
        <p>Fatto con 💕 per te</p>
        <p>La nostra storia continua...</p>
    </footer>
</body>
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `<img>` | Mostra un'immagine (nota: non ha tag di chiusura!) |
| `src="..."` | Il percorso/nome del file immagine |
| `alt="..."` | Testo alternativo se l'immagine non carica |
| `<div>` | Un contenitore generico (lo stilizzeremo dopo!) |
| `class="..."` | Un nome che useremo per lo stile CSS |
| `<footer>` | Il piè di pagina del sito |

---

## 👀 Risultato Atteso

- Una foto nella sezione ricordi
- Un piè di pagina carino in fondo

Se la foto non appare, controlla che:
- Il nome del file sia esatto (maiuscole/minuscole contano!)
- La foto sia nella stessa cartella di `index.html`

---

## 💝 Pensiero del Giorno

*"Ogni elemento che inserisci racconta un pezzo della tua crescita. È così che si diventa creatori. 🎉"*

---

**Da domani: COLORI! 🎨**
