// import functions and grab DOM elements
import { getRandomPokemon, setPokedex, getPokedex, renderNewPokemon } from './utils.js';
import pokemon from './data.js';


const catchBtn = document.getElementById('catch-btn');
const pokesSection = document.getElementById('pokes-section');


// initialize global state
renderNewPokemon();
// set event listeners 
  // User clicks catch button
catchBtn.addEventListener('click', () => {
    let pickedPoke = document.querySelector('input:checked');

});
  // - increment: `pokeCaught++`
  // - We figure out the id of the pokemon that was captured.
  //     - call `catchPokemon(id)` with this id
  // - now, if `pokeCaught > 10`, redirect to the results page
  // - call `renderNewPokemon()`
