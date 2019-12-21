import { Game } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export class AddGame implements Action {
    type: ActionType.ADD_GAME;

    constructor(public newGame: Game) {}
}

export function addGame(state: Game[], action: AddGame): Game[] {
    return [
        ...state,
        action.newGame,
    ]
}