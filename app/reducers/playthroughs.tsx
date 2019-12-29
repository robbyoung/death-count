import { Action } from 'redux';
import { Playthrough } from '../state';
import { ActionType, addPlaythrough, AddPlaythroughAction } from '../actions';
import { loadPlaythroughs, LoadStateAction } from '../actions/setState';

export default function playthroughsReducer(
    state: Playthrough[] = [],
    action: Action,
): Playthrough[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadPlaythroughs(state, action as LoadStateAction);
        case ActionType.ADD_PLAYTHROUGH:
            return addPlaythrough(state, action as AddPlaythroughAction);
        default:
            return state;
    }
}
