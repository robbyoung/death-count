import { Action } from 'redux';
import { Game } from '../state';
import { ActionType, addGame, AddGame } from '../actions';

export default function gamesReducer(
    state: Game[] = [],
    action: Action,
): Game[] {
    switch (action.type) {
        case ActionType.ADD_GAME:
            return addGame(state, action as AddGame);
        default:
            return state;
    }
}
