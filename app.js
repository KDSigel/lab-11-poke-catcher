import { getRandomPokemon, setPokedex, getPokedex, renderNewPokemon, encounterPokemon, catchPokemon } from './utils.js';

const catchBtn = document.getElementById('catch-btn');


renderNewPokemon();

catchBtn.addEventListener('click', () => {
    const pickedPoke = document.querySelector('input:checked');
    catchPokemon(pickedPoke.value);
    // renderNewPokemon();
});
  

  // - now, if `pokeCaught > 10`, redirect to the results page
  // - call `renderNewPokemon()`
