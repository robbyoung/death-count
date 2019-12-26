import { Playthrough } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';
import uuid from 'uuid';

export interface AddPlaythroughAction extends Action {
    type: ActionType.ADD_PLAYTHROUGH;
    newPlaythrough: Playthrough;
}

export function addPlaythroughAction(name: string, gameId: string): AddPlaythroughAction {
    return {
        type: ActionType.ADD_PLAYTHROUGH,
        newPlaythrough: {
            gameId,
            name,
            id: uuid.v4(),
            selected: true,
        }
    };
}

export function addPlaythrough(state: Playthrough[], action: AddPlaythroughAction): Playthrough[] {
    const newState = [
        ...state,
    ];

    const toDeselectIndex = state.findIndex(playthrough => playthrough.selected);
    const deselected = {
        ...state[toDeselectIndex],
        selected: false,
    };
    newState[toDeselectIndex] = deselected;

    return [ ...newState, action.newPlaythrough ];
}