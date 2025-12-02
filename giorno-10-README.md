# 🎄 Giorno 10 - La Galleria dei Ricordi

## Ciao stella brillante! ⭐

Oggi rendiamo la foto bellissima e prepariamo lo spazio per altre!

---

## 📚 Cosa Impariamo Oggi
- **Flexbox** - il modo moderno per disporre elementi
- **Object-fit** - come le immagini si adattano
- **Border e shadow** - decorazioni per le foto

---

## 🎯 Cosa Fare

Nel file `style.css`, **aggiungi in fondo** questo codice:

```css
/* 📸 Galleria delle foto */
.galleria {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

.galleria img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    border-radius: 20px;
    border: 4px solid white;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.galleria img:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 15px 35px rgba(248, 180, 196, 0.4);
}
```

---

## 🔍 Cosa Significa?

| Codice | Spiegazione |
|--------|-------------|
| `display: flex` | Attiva il layout Flexbox |
| `justify-content: center` | Centra gli elementi |
| `flex-wrap: wrap` | Va a capo se non c'è spazio |
| `gap: 20px` | Spazio tra le foto |
| `object-fit: cover` | La foto riempie lo spazio senza deformarsi |
| `scale(1.05)` | Ingrandisce del 5% |
| `rotate(2deg)` | Ruota leggermente di 2 gradi |

💡 **Curiosità:** Flexbox è uno dei concetti più potenti del CSS moderno! Ti permette di creare layout flessibili facilmente.

---

## 👀 Risultato Atteso

La foto ora:
- 📐 È quadrata e centrata
- 🖼️ Ha angoli arrotondati e bordo bianco
- ✨ Si ingrandisce e ruota leggermente al passaggio del mouse!
- 🌸 Ha un'ombra rosa quando ci passi sopra

---

## 🎁 Aggiungi Altre Foto!

Puoi aggiungere più foto! Nel file `index.html`, nella sezione galleria, aggiungi altre immagini:

```html
<div class="galleria">
    <img src="foto-noi.jpg" alt="Una nostra foto insieme">
    <img src="foto-2.jpg" alt="Un altro ricordo">
    <img src="foto-3.jpg" alt="Momento speciale">
</div>
```

Le foto si disporranno automaticamente in griglia!

---

## 💝 Pensiero del Giorno

*"Ogni foto è un ricordo prezioso, e tu li hai resi ancora più belli con la magia del CSS. La nostra galleria di ricordi è stupenda!"*

---

**Domani: un footer romantico!** 🌙
