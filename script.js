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
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i  < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        const population = (land['population'] + '').replace('.',',');
        const firstLetter = land['name'].charAt(0);

        if (!filter || filter == firstLetter) {
            content.innerHTML += generateLink(land, population);
        }

        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }
    }
    renderLetters();
}