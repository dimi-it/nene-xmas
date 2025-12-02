# 🎄 Giorno 19 - Saluti Personalizzati

## Ciao sole mio! ☀️

Oggi la pagina cambierà saluto in base all'ora del giorno!

---

## 📚 Cosa Impariamo Oggi
- **getHours()** - ottenere l'ora corrente
- **if/else** - prendere decisioni nel codice
- **Condizioni multiple** - controllare diversi casi

---

## 🎯 Cosa Fare

### Passo 1: Modifica l'HTML dell'header

Nel file `index.html`, **modifica** il paragrafo nell'header:

```html
    <header>
        <h1>💕 La Nostra Storia d'Amore 💕</h1>
        <p id="saluto">Un viaggio attraverso i nostri ricordi più belli</p>
    </header>
```

(Abbiamo aggiunto `id="saluto"` al paragrafo)

### Passo 2: Aggiungi il JavaScript

Nel file `script.js`, **aggiungi** (sempre dentro la funzione principale):

```javascript
    // 🌅 Saluto personalizzato in base all'ora
    const ora = new Date().getHours();
    const salutoElemento = document.getElementById('saluto');
    
    let saluto;
    let emoji;
    
    if (ora >= 5 && ora < 12) {
        saluto = 'Buongiorno amore mio!';
        emoji = '☀️';
    } else if (ora >= 12 && ora < 18) {
        saluto = 'Buon pomeriggio tesoro!';
        emoji = '🌤️';
    } else if (ora >= 18 && ora < 22) {
        saluto = 'Buonasera dolcezza!';
        emoji = '🌅';
    } else {
        saluto = 'Buonanotte stellina!';
        emoji = '🌙';
    }
    
    salutoElemento.textContent = emoji + ' ' + saluto + ' ' + emoji;
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `new Date().getHours()` | Ottiene l'ora corrente (0-23) |
| `let saluto` | Crea una variabile che PUÒ cambiare |
| `if (condizione) { }` | Se la condizione è vera, esegui il codice |
| `else if (condizione) { }` | Altrimenti, se questa è vera... |
| `else { }` | Altrimenti (nessuna condizione precedente era vera) |
| `&&` | AND logico - entrambe le condizioni devono essere vere |

💡 **Differenza importante:**
- `const` = variabile che NON cambia mai
- `let` = variabile che PUÒ cambiare

---

## 👀 Risultato Atteso

In base all'ora in cui apri la pagina, vedrai:
- 🌅 **Mattina (5-12)**: "☀️ Buongiorno amore mio! ☀️"
- 🌤️ **Pomeriggio (12-18)**: "🌤️ Buon pomeriggio tesoro! 🌤️"
- 🌅 **Sera (18-22)**: "🌅 Buonasera dolcezza! 🌅"
- 🌙 **Notte (22-5)**: "🌙 Buonanotte stellina! 🌙"

---

## 💝 Pensiero del Giorno

*"La pagina ora ti saluta in modo diverso a seconda di quando la visiti! È come se avesse imparato a conoscerti. Ma nessun codice potrà mai conoscerti bene quanto me."*

---

## ✨ Sfida Bonus

Personalizza i messaggi! Puoi anche aggiungere il suo nome:
```javascript
saluto = 'Buongiorno amore mio, [Nome]!';
```

---

**Domani: ricordi speciali!** 📝
