import pokemon from '../data.js';
import { getRandomPokemon, setPokedex, getPokedex, renderNewPokemon, encounterPokemon, catchPokemon } from '../utils.js';

const pokedex = getPokedex();

const arrayNames = pokedex.map(({ name }) => name);
const numberOfEncounters = pokedex.map(({ encountered }) => encountered);
const numberOfCaptures = pokedex.map(({ caught }) => caught);


const ctx = document.getElementById('encounterCaptureChart');
const myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: arrayNames,
        datasets: [{
            label: '# of encounters',
            data: numberOfEncounters,
            backgroundColor: [
                'rgba(0, 222, 8, 0.2)',
                'rgba(22, 201, 55, 0.2)',
                'rgba(44, 188, 86, 0.2)',
                'rgba(88, 144, 122, 0.2)',
                'rgba(122, 122, 188, 0.2)',
                'rgba(144, 88, 205, 0.2)',
                'rgba(188, 44, 222, 0.2)'
            ],
            borderWidth: 1
        }], 
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});