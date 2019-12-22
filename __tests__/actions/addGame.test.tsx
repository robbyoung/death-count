import { AddGame } from '../../app/actions';
import { Game } from '../../app/state';
import gamesReducer from '../../app/reducers/games';

describe('Add Game Action', () => {
    it('can add a death to an empty list', () => {
        const newGame: Game = {
            id: '123',
            name: 'test game',
            options: [],
        };
        const addDeathAction = new AddGame(newGame);
        const state = [];
        const newState = gamesReducer([], addDeathAction);
        expect(newState).toEqual([newGame]);
        expect(state).not.toEqual(newState);
    });
})