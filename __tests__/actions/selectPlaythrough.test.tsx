import { selectPlaythroughAction } from '../../app/actions';
import playthroughsReducer from '../../app/reducers/playthroughs';
import { createTestState } from '../../app/state';

describe('Select Playthrough Action', () => {
    it('can select a playthrough', () => {
        const state = createTestState(2, 5, 10, 1, 1).playthroughs;
        const action = selectPlaythroughAction(state[3].id);
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 1, 3).playthroughs);
        expect(state).toEqual(createTestState(2, 5, 10, 1, 1).playthroughs);
    });

    it('will leave the selected playthroughs of other games alone', () => {
        const state = createTestState(2, 5, 10, 1, 1).playthroughs;
        const action = selectPlaythroughAction(state[2].id);
        const newState = playthroughsReducer(state, action);

        const expectedState = createTestState(2, 5, 10, 1, 1).playthroughs;
        expectedState[2].selected  = true;
        expect(newState).toEqual(expectedState);
        expect(state).toEqual(createTestState(2, 5, 10, 1, 1).playthroughs);
    });

    it('will leave unchanged if an already-selected playthrough is selected', () => {
        const state = createTestState(2, 5, 10, 1, 1).playthroughs;
        const action = selectPlaythroughAction(state[1].id);
        const newState = playthroughsReducer(state, action);
        expect(newState).toEqual(createTestState(2, 5, 10, 1, 1).playthroughs);
        expect(state).toEqual(createTestState(2, 5, 10, 1, 1).playthroughs);
    });
});