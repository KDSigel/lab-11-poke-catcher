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
                'rgba(80, 111, 88, 0.1)',
                'rgba(0, 222, 8, 0.1)',
                'rgba(22, 0, 55, 0.1)',
                'rgba(44, 188, 86, 0.1)',
                'rgba(88, 144, 0, 0.1)',
                'rgba(122, 122, 188, 0.1)',
                'rgba(144, 88, 205, 0.1)',
                'rgba(0, 44, 222, 0.1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of captures',
            data: numberOfCaptures,
            backgroundColor: [
                'rgba(80, 111, 88, 0.7)',
                'rgba(0, 222, 8, 0.7)',
                'rgba(22, 0, 55, 0.7)',
                'rgba(44, 188, 86, 0.7)',
                'rgba(88, 144, 0, 0.7)',
                'rgba(122, 122, 188, 0.7)',
                'rgba(144, 88, 205, 0.7)',
                'rgba(0, 44, 222, 0.7)'
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