import pokemon from './data.js';

const POKEDEX = 'pokedex';

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
    
    firstPokesEl.value = getNewThree[0]._id;
    secondPokesEl.value = getNewThree[1]._id;
    thirdPokesEl.value = getNewThree[2]._id;
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

// encounterPokemon(id)
// - getPokedex
// - If the pokemon has been previously seen, just increment the times seen
// - If this is the first time, make a new object with `{ id: 5, encoutered: 1, caught: 0 }`
// - setPokedex

// catchPokemon(id)
// - getPokedex
// - no need to check if it's been encountered. If you got this far, it _has_ been encountered.
// - Increment the `caught` of this pokemon in local storage
// - setPokedex

export function findById(pokeArray, id) {
    for (let poke of pokeArray) {
        if (poke.id === Number(id)) {
            return poke;
        }
    }
}