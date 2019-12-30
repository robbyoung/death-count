import { addGameAction } from '../../app/actions';
import gamesReducer from '../../app/reducers/games';
import { createTestState, createTestGame } from '../../app/state';

describe('Add Game Action', () => {
    it('can add a death to an empty list', () => {
        const action = addGameAction('test action');
        const state = [];
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([action.newGame]);
        expect(state).toEqual([]);
    });

    it('will mark the new game as incomplete', () => {
        const action = addGameAction('test action');
        const state = createTestState(2, 2, 0, 1, 1).games;
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([...createTestState(2, 2, 0, 1, 1).games, action.newGame]);
        expect(newState[2].complete).toBe(false);
        expect(state).toEqual(createTestState(2, 2, 0, 1, 1).games);
    });

    it('will remove other incomplete games', () => {
        const complete = createTestGame(true);
        const incomplete = createTestGame(false);
        const action = addGameAction('Test Game');
        const state = [complete, incomplete];
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([complete, action.newGame]);
        expect(state).toEqual([createTestGame(true, complete.id), createTestGame(false, incomplete.id)]);
    });
})