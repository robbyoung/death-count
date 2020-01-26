import { Playthrough } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface DeletePlaythroughAction extends Action {
    type: ActionType.DELETE_PLAYTHROUGH;
    id: string;
}

export function DeletePlaythroughAction(id: string): DeletePlaythroughAction {
    return {
        type: ActionType.DELETE_PLAYTHROUGH,
        id,
    };
}

export function deletePlaythrough(
    state: Playthrough[],
    action: DeletePlaythroughAction,
): Playthrough[] {
    return state.filter(playthrough => playthrough.id !== action.id);
}
