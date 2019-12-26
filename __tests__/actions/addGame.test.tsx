import { addGameAction } from '../../app/actions';
import gamesReducer from '../../app/reducers/games';
import { createTestState } from '../../app/state';

describe('Add Game Action', () => {
    it('can add a death to an empty list', () => {
        const action = addGameAction('test action');
        const state = [];
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([action.newGame]);
        expect(state).toEqual([]);
    });

    it('will mark the new game as selected', () => {
        const action = addGameAction('test action');
        const state = createTestState(2, 2, 0, 1, 1).games;
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, -1, 1).games, action.newGame]);
        expect(state).toEqual(createTestState(2, 2, 0, 1, 1).games);
    });
})