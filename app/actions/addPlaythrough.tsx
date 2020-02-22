import { Playthrough } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';
import uuid from 'uuid';

export interface AddPlaythroughAction extends Action {
    type: ActionType.ADD_PLAYTHROUGH;
    newPlaythrough: Playthrough;
}

export function addPlaythroughAction(id?: string): AddPlaythroughAction {
    return {
        type: ActionType.ADD_PLAYTHROUGH,
        newPlaythrough: {
            id: id ? id : uuid.v4(),
            selected: false,
            complete: false,
            gameId: undefined,
            name: '',
        },
    };
}

export function addPlaythrough(
    state: Playthrough[],
    action: AddPlaythroughAction,
): Playthrough[] {
    return [
        ...state.filter(playthrough => playthrough.complete),
        action.newPlaythrough,
    ];
}
