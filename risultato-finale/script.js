// 🎉 Il nostro JavaScript d'amore!

document.addEventListener('DOMContentLoaded', function() {
    console.log('💕 La nostra pagina d\'amore è pronta!');
    console.log('JavaScript funziona perfettamente! ✨');

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
    
    aggiornaContatore();
    setInterval(aggiornaContatore, 1000);

    // 💌 Messaggi d'amore casuali
    const messaggi = [
        "Sei la cosa più bella che mi sia mai capitata 💕",
        "Ogni momento con te è un regalo prezioso ✨",
        "Il tuo sorriso è la mia felicità quotidiana 😊",
        "Ti amo più di quanto le parole possano esprimere 💗",
        "Sei il mio sogno diventato realtà 🌟",
        "Con te al mio fianco, ogni giorno è speciale 🌈",
        "Il mio cuore batte solo per te 💓",
        "Sei la mia persona preferita al mondo 🌍"
    ];
    
    const btnMessaggio = document.getElementById('btn-messaggio');
    const messaggioRandom = document.getElementById('messaggio-random');
    
    btnMessaggio.addEventListener('click', function() {
        const indice = Math.floor(Math.random() * messaggi.length);
        messaggioRandom.textContent = messaggi[indice];
    });

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

    // Anima gli elementi della timeline
    const elementiTimeline = document.querySelectorAll('.timeline-item');
    elementiTimeline.forEach(function(elemento, indice) {
        setTimeout(function() {
            elemento.classList.add('visibile');
        }, 200 * indice);
    });

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

    // 💕 Cuoricini che volano al click!
    const cuori = ['💕', '💗', '💖', '💝', '❤️', '💓', '💞'];
    
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
            return;
        }
        
        const cuore = document.createElement('span');
        cuore.className = 'cuore-volante';
        cuore.textContent = cuori[Math.floor(Math.random() * cuori.length)];
        cuore.style.left = e.clientX + 'px';
        cuore.style.top = e.clientY + 'px';
        
        document.body.appendChild(cuore);
        
        setTimeout(function() {
            cuore.remove();
        }, 1500);
    });

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

    // ❄️ Neve che cade!
    function creaFiocco() {
        const fiocco = document.createElement('div');
        fiocco.className = 'fiocco-neve';
        fiocco.innerHTML = '❄️';
        
        fiocco.style.left = Math.random() * 100 + '%';
        
        const dimensione = Math.random() * 1 + 0.5;
        fiocco.style.fontSize = dimensione + 'em';
        
        const durata = Math.random() * 3 + 4;
        fiocco.style.animationDuration = durata + 's';
        
        fiocco.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(fiocco);
        
        setTimeout(function() {
            fiocco.remove();
        }, (durata + 2) * 1000);
    }
    
    setInterval(creaFiocco, 300);

    // 🎵 Player musicale
    const audio = document.getElementById('audio-sottofondo');
    const btnMusica = document.getElementById('btn-musica');
    const statoMusica = document.getElementById('stato-musica');
    let musicaAttiva = false;
    
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

    // 🎄 Countdown al Natale
    function aggiornaCountdown() {
        const adesso = new Date();
        const natale = new Date(adesso.getFullYear(), 11, 25, 0, 0, 0);
        
        if (adesso > natale) {
            natale.setFullYear(natale.getFullYear() + 1);
        }
        
        const differenza = natale - adesso;
        
        if (differenza <= 0) {
            document.getElementById('messaggio-natale').textContent = '🎄 È NATALE! 🎄';
            document.getElementById('sorpresa-natale').classList.add('sorpresa-visibile');
            return;
        }
        
        const ore = Math.floor((differenza / (1000 * 60 * 60)) % 24);
        const minuti = Math.floor((differenza / (1000 * 60)) % 60);
        const secondi = Math.floor((differenza / 1000) % 60);
        const giorni = Math.floor(differenza / (1000 * 60 * 60 * 24));
        
        document.getElementById('countdown-ore').textContent = String(ore).padStart(2, '0');
        document.getElementById('countdown-minuti').textContent = String(minuti).padStart(2, '0');
        document.getElementById('countdown-secondi').textContent = String(secondi).padStart(2, '0');
        
        if (giorni > 0) {
            document.getElementById('messaggio-natale').textContent = 
                `Mancano ${giorni} giorni e ${ore} ore! ✨`;
        }
    }
    
    aggiornaCountdown();
    setInterval(aggiornaCountdown, 1000);
    
    // Chiudi la sorpresa
    document.getElementById('chiudi-sorpresa').addEventListener('click', function() {
        document.getElementById('sorpresa-natale').classList.remove('sorpresa-visibile');
    });

});
