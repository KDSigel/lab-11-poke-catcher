import { getPokedex, } from '../utils.js';

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
                'rgba(80, 81, 79, 0.1)',
                'rgba(161, 88, 86, 0.1)',
                'rgba(242, 95, 92, 0.1)',
                'rgba(249, 160, 97, 0.1)',
                'rgba(255, 224, 102, 0.1)',
                'rgba(146, 174, 131, 0.1)',
                'rgba(36, 123, 160, 0.1)',
                'rgba(74, 158, 170, 0.1)',
                'rgba(112, 193, 179, 0.1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of captures',
            data: numberOfCaptures,
            backgroundColor: [
                'rgba(80, 81, 79, 0.7)',
                'rgba(161, 88, 86, 0.7)',
                'rgba(242, 95, 92, 0.7)',
                'rgba(249, 160, 97, 0.7)',
                'rgba(255, 224, 102, 0.7)',
                'rgba(146, 174, 131, 0.7)',
                'rgba(36, 123, 160, 0.7)',
                'rgba(74, 158, 170, 0.7)',
                'rgba(112, 193, 179, 0.7)'
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