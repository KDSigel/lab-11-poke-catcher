import pokemon from './data.js';

const POKEDEX = 'POKEDEX';

function getRandomIndex() {
    return Math.floor(Math.random() * pokemon.length);
}

export function getRandomPokemon() {
    let randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();
    let randomIndex3 = getRandomIndex();

    while (
        randomIndex1 === randomIndex2 
        || randomIndex2 === randomIndex3 
        || randomIndex1 === randomIndex3) {
        randomIndex1 = getRandomIndex();
        randomIndex2 = getRandomIndex();
        randomIndex3 = getRandomIndex();
    }

    return [
        pokemon[randomIndex1], 
        pokemon[randomIndex2], 
        pokemon[randomIndex3]
    ];
}

export function renderNewPokemon() {

    const firstPokesEl = document.getElementById('poke-1');
    const secondPokesEl = document.getElementById('poke-2');
    const thirdPokesEl = document.getElementById('poke-3');
    const firstPokesImage = document.getElementById('poke-image-1');
    const secondPokesImage = document.getElementById('poke-image-2');
    const thirdPokesImage = document.getElementById('poke-image-3');
    
    const getNewThree = getRandomPokemon();
    
    firstPokesImage.src = getNewThree[0].url_image;
    secondPokesImage.src = getNewThree[1].url_image;
    thirdPokesImage.src = getNewThree[2].url_image;
    
    firstPokesEl.value = getNewThree[0].id;
    secondPokesEl.value = getNewThree[1].id;
    thirdPokesEl.value = getNewThree[2].id;

    encounterPokemon(getNewThree[0].id);
    encounterPokemon(getNewThree[1].id);
    encounterPokemon(getNewThree[2].id);
}

export function setPokedex(pokedex) {

    const stringPoke = JSON.stringify(pokedex);
    
    localStorage.setItem(POKEDEX, stringPoke);
}

export function getPokedex() {
    const stringPoke = localStorage.getItem(POKEDEX);
    if (!stringPoke) {
        return [];
    }
    const actualPokeCount = JSON.parse(stringPoke);
    return actualPokeCount;
}

export function encounterPokemon(id) {
    const encounterPoke = getPokedex();
    
    const hasEncountered = findById(encounterPoke, id);

    if (hasEncountered) {
        hasEncountered.encountered++;
    }
    else {
        const newPokeEncounter = {
            id: id, encountered: 1, caught: 0 };
        encounterPoke.push(newPokeEncounter);
    }
    setPokedex(encounterPoke);
}

export function catchPokemon(id) {
    const caughtValue = getPokedex();
    const caughtPoke = findById(caughtValue, id);
    caughtPoke.caught++;
    getPokedex(caughtValue);
}

export function findById(pokeArray, id) {
    for (let poke of pokeArray) {
        if (poke.id === Number(id)) {
            return poke;
        }
    }
}