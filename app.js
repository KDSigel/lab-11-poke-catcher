import { getRandomPokemon, setPokedex, getPokedex, renderNewPokemon, encounterPokemon, catchPokemon } from './utils.js';


const catchBtn = document.getElementById('catch-btn');

let turns = 0;

renderNewPokemon();

catchBtn.addEventListener('click', () => {
    turns++;
    const pickedPoke = document.querySelector('input:checked');
    catchPokemon(pickedPoke.value);
    if (turns > 9) {
        window.location = './results/index.html';
    } else {
        renderNewPokemon();
    }

});
  

  // - now, if `pokeCaught > 10`, redirect to the results page
  // - call `renderNewPokemon()`