import { Action } from 'redux';
import { Playthrough } from '../state';
import {
    ActionType,
    addPlaythrough,
    AddPlaythroughAction,
    LoadStateAction,
    loadPlaythroughs,
    SelectPlaythroughAction,
    selectPlaythrough,
    deletePlaythrough,
    DeletePlaythroughAction,
    updatePlaythrough,
    UpdatePlaythroughAction,
    completePlaythrough,
    CompletePlaythroughAction,
} from '../actions';

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
        case ActionType.DELETE_PLAYTHROUGH:
            return deletePlaythrough(state, action as DeletePlaythroughAction);
        case ActionType.UPDATE_PLAYTHROUGH:
            return updatePlaythrough(state, action as UpdatePlaythroughAction);
        case ActionType.COMPLETE_PLAYTHROUGH:
            return completePlaythrough(
                state,
                action as CompletePlaythroughAction,
            );
        default:
            return state;
    }
}
