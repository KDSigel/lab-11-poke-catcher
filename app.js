import { getRandomPokemon, setPokedex, getPokedex, renderNewPokemon, encounterPokemon, catchPokemon } from './utils.js';

const catchBtn = document.getElementById('catch-btn');

// const pokesSection = document.getElementById('pokes-section');


renderNewPokemon();

catchBtn.addEventListener('click', () => {
    let pickedPoke = document.querySelector('input:checked');
    catchPokemon(pickedPoke);
    renderNewPokemon();
});
  

  // - now, if `pokeCaught > 10`, redirect to the results page
  // - call `renderNewPokemon()`
