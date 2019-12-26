import { Action } from 'redux';
import { Playthrough, createTestState } from '../state';
import { ActionType, addPlaythrough, AddPlaythroughAction } from '../actions';

export default function playthroughsReducer(
    state: Playthrough[] = createTestState(2, 2, 0, 0, 0).playthroughs,
    // state: Playthrough[] = [],
    action: Action,
): Playthrough[] {
    switch (action.type) {
        case ActionType.ADD_PLAYTHROUGH:
            return addPlaythrough(state, action as AddPlaythroughAction);
        default:
            return state;
    }
}
