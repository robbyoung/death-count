import { Playthrough } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface SelectPlaythroughAction extends Action {
    type: ActionType.SELECT_PLAYTHROUGH;
    id: string;
}

export function selectPlaythroughAction(id: string): SelectPlaythroughAction {
    return {
        type: ActionType.SELECT_PLAYTHROUGH,
        id,
    };
}

export function selectPlaythrough(
    state: Playthrough[],
    action: SelectPlaythroughAction,
): Playthrough[] {
    const newState = [...state];
    const toSelectIndex = state.findIndex(
        playthrough => playthrough.id === action.id,
    );
    const selected = {
        ...state[toSelectIndex],
        selected: true,
    };
    const gameId = selected.gameId;

    const toDeselectIndex = state.findIndex(
        playthrough => playthrough.selected && playthrough.gameId === gameId,
    );
    if (toDeselectIndex !== -1) {
        const deselected = {
            ...state[toDeselectIndex],
            selected: false,
        };
        newState[toDeselectIndex] = deselected;
    }

    newState[toSelectIndex] = selected;
    return newState;
}
