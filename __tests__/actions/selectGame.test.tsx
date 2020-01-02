import { selectGameAction } from '../../app/actions';
import gamesReducer from '../../app/reducers/games';
import { createTestState } from '../../app/state';

describe('Select Game Action', () => {
    it('can select a game', () => {
        const state = createTestState(2, 5, 10, 0, 0).games;
        const action = selectGameAction(state[1].id);
        const newState = gamesReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 1, 0).games);
        expect(state).toEqual(createTestState(2, 5, 10, 0, 0).games);
    });

    it('will leave the state unchanged if the already-selected game is selected', () => {
        const state = createTestState(2, 5, 10, 0, 0).games;
        const action = selectGameAction(state[0].id);
        const newState = gamesReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 0, 0).games);
        expect(state).toEqual(createTestState(2, 5, 10, 0, 0).games);
    })
})