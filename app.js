// import functions and grab DOM elements
import { getRandomPokemon } from './utils.js';
import pokemon from './data.js';

const catchBtn = document.getElementById('catch-btn');
// initialize global state

// set event listeners 
  // User clicks catch button
catchBtn.addEventListener('click', () => {
});
  // - increment: `pokeCaught++`
  // - We figure out the id of the pokemon that was captured.
  //     - call `catchPokemon(id)` with this id
  // - now, if `pokeCaught > 10`, redirect to the results page
  // - call `renderNewPokemon()`
