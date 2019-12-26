import { Game } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';
import uuid from 'uuid';

export interface AddGameAction extends Action {
    type: ActionType.ADD_GAME;
    newGame: Game;
}

export function addGameAction(name: string): AddGameAction {
    return {
        type: ActionType.ADD_GAME,
        newGame: {
            name,
            id: uuid.v4(),
            selected: true,
        }
    };
}

export function addGame(state: Game[], action: AddGameAction): Game[] {
    const newState = [
        ...state,
    ];

    const toDeselectIndex = state.findIndex(game => game.selected);
    const deselected = {
        ...state[toDeselectIndex],
        selected: false,
    };
    newState[toDeselectIndex] = deselected;

    return [ ...newState, action.newGame ];
}