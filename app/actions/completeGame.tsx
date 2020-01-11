import { Action } from 'redux';
import { Game } from '../state';
import { ActionType } from './actionTypes';

export interface CompleteGameAction extends Action {
    type: ActionType.COMPLETE_GAME;
}

export function completeGameAction(): CompleteGameAction {
    return {
        type: ActionType.COMPLETE_GAME,
    };
}

export function completeGame(
    state: Game[],
    _action: CompleteGameAction,
): Game[] {
    const incompleteIndex = state.findIndex(game => !game.complete);
    const newState = [...state];
    const editedGame: Game = {
        ...state[incompleteIndex],
        complete: true,
    };

    newState[incompleteIndex] = editedGame;
    return newState;
}
