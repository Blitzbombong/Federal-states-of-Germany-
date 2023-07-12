let bundeslaender = [];
let letters = [];


// Die function init() ladt Daten aus JSON Array
async function init() {
    let resp = await fetch('./bundesleand.json');
    bundeslaender = await resp.json();
    render();
}


// render(filter) ist verantwortlich fur Rendern (Anzeigen) von Inhalten auf einer Webseite.
function render(filter) {
    let content = document.getElementById('content');// ruft die ID 'content' auf
    content.innerHTML = ''; // leert das vorherige Inhalt 

    for (let i = 0; i  < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        const population = (land['population'] + '').replace('.',',');// replace wird verwendet um ein Pukt durch Komma zu ersetzen. 
        const firstLetter = land['name'].charAt(0);// extrahiert den ersten Buchstaben des Landes.

        if (!filter || filter == firstLetter) {
            content.innerHTML += generateLink(land, population);
        }                                                        // Pruft den Esten Buchstaben des Bundeslaender.

        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }
    }
    renderLetters();
}


function setFilter(letter) {
    render(letter);
}


// rendert die Buhcstaben die Filtern dann die Bundesleander.
function renderLetters() {
    let lettrbox = document.getElementById('letterbox');
    lettrbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        lettrbox.innerHTML += `<div onclick="setFilter('${letter}')" class="letter">${letter}</div>`;
    }
}
