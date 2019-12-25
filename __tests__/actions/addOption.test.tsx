import { addOptionAction } from '../../app/actions';
import gamesReducer from '../../app/reducers/games';
import { createTestGame } from '../../app/state';

describe('Add Option Action', () => {
    it('can add an option to a game with one option set', () => {
        const testGame = createTestGame(true, 1, 1);
        const action = addOptionAction(testGame.options[0].title, 'Option 1');
        const state = [testGame];
        const newState = gamesReducer(state, action);
        expect(newState).toEqual([createTestGame(true, 1, 2, testGame.id)]);
        expect(state).toEqual([createTestGame(true, 1, 1, testGame.id)]);
    });
})