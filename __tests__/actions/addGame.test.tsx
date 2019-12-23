import { addGameAction } from '../../app/actions';
import gamesReducer from '../../app/reducers/games';

describe('Add Game Action', () => {
    it('can add a death to an empty list', () => {
        const action = addGameAction('test action');
        const state = [];
        const newState = gamesReducer([], action);
        expect(newState).toEqual([action.newGame]);
        expect(state).not.toEqual(newState);
    });
})