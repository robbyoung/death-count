import { Playthrough } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface UpdatePlaythroughAction extends Action {
    type: ActionType.UPDATE_PLAYTHROUGH;
    updated: Playthrough;
}

export function updatePlaythroughAction(updated: Playthrough): UpdatePlaythroughAction {
    return {
        type: ActionType.UPDATE_PLAYTHROUGH,
        updated,
    };
}

export function updatePlaythrough(
    state: Playthrough[],
    action: UpdatePlaythroughAction,
): Playthrough[] {
    const updateIndex = state.findIndex(playthrough => !playthrough.complete)
    const newState = [
        ...state,
    ];
    newState[updateIndex] = action.updated;
    return newState;
}
