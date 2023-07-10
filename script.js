let bundeslaender = [];
let letters = [];


// Die function init() ladt Daten aus JSON Array
async function init() {
    let resp = await fetch('./bundesleand.json');
    bundeslaender = await resp.json();
    render();
}