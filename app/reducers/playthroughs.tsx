import { Action } from 'redux';
import { Playthrough, createTestState } from '../state';
import { ActionType, addPlaythrough, AddPlaythrough } from '../actions';

export default function playthroughsReducer(
    state: Playthrough[] = createTestState(1, 1, 0, 0, 0).playthroughs,
    action: Action,
): Playthrough[] {
    switch (action.type) {
        case ActionType.ADD_PLAYTHROUGH:
            return addPlaythrough(state, action as AddPlaythrough);
        default:
            return state;
    }
}
