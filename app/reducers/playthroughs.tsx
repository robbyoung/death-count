import { Action } from 'redux';
import { Playthrough } from '../state';
import { ActionType, addPlaythrough, AddPlaythroughAction, LoadStateAction, loadPlaythroughs, SelectPlaythroughAction, selectPlaythrough } from '../actions';

export default function playthroughsReducer(
    state: Playthrough[] = [],
    action: Action,
): Playthrough[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadPlaythroughs(state, action as LoadStateAction);
        case ActionType.ADD_PLAYTHROUGH:
            return addPlaythrough(state, action as AddPlaythroughAction);
        case ActionType.SELECT_PLAYTHROUGH:
            return selectPlaythrough(state, action as SelectPlaythroughAction);
        default:
            return state;
    }
}
