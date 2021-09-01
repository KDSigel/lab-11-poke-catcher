
import { getRandomPokemon } from '../utils.js';

const test = QUnit.test;

test('render 3 poke to screen', (expect) => {

    const actual = getRandomPokemon();

    expect.equal(actual.length, 3);
    expect.equal(!!actual[0].pokemon, true);
    expect.equal(!!actual[1].pokemon, true);
    expect.equal(!!actual[2].pokemon, true);
});