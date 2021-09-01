
import { setPokedex, getPokedex, encounterPokemon } from '../utils.js';

const test = QUnit.test;

test('what poke we have encountered/get/set', (expect) => {

    const pokeEncountered = [
        { id: 7, encountered: 0, caught: 1 },
        { id: 3, encountered: 11, caught: 2 },
        { id: 0, encountered: 21, caught: 3 }
    ];
    setPokedex(pokeEncountered);

    encounterPokemon(7);
    const changedPoke = getPokedex();
    const actual = changedPoke[0].encountered === 1;
    expect.equal(actual, true);

});