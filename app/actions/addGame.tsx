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
            selected: false,
            complete: false,
        }
    };
}

export function addGame(state: Game[], action: AddGameAction): Game[] {
    return [
        ...state.filter(game => game.complete),
        action.newGame,
    ];
}