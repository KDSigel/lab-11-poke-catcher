import { renderNewPokemon, catchPokemon } from './utils.js';

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