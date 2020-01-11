import { Game } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface SelectGameAction extends Action {
    type: ActionType.SELECT_GAME;
    id: string;
}

export function selectGameAction(id: string): SelectGameAction {
    return {
        type: ActionType.SELECT_GAME,
        id,
    };
}

export function selectGame(state: Game[], action: SelectGameAction): Game[] {
    const newState = [...state];

    const toDeselectIndex = state.findIndex(game => game.selected);
    const deselected = {
        ...state[toDeselectIndex],
        selected: false,
    };
    newState[toDeselectIndex] = deselected;

    const toSelectIndex = state.findIndex(game => game.id === action.id);
    const selected = {
        ...state[toSelectIndex],
        selected: true,
    };
    newState[toSelectIndex] = selected;

    return newState;
}
