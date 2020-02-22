import { Action } from 'redux';
import { Playthrough } from '../state';
import { ActionType } from './actionTypes';

export interface CompletePlaythroughAction extends Action {
    type: ActionType.COMPLETE_PLAYTHROUGH;
}

export function completePlaythroughAction(): CompletePlaythroughAction {
    return {
        type: ActionType.COMPLETE_PLAYTHROUGH,
    };
}

export function completePlaythrough(
    state: Playthrough[],
    _action: CompletePlaythroughAction,
): Playthrough[] {
    const incompleteIndex = state.findIndex(
        playthrough => !playthrough.complete,
    );
    const newState = [...state];
    const editedPlaythrough: Playthrough = {
        ...state[incompleteIndex],
        complete: true,
    };

    newState[incompleteIndex] = editedPlaythrough;
    return newState;
}
