import { Action } from 'redux';
import { Game, createTestState } from '../state';
import { ActionType, addGame, AddGame } from '../actions';

export default function gamesReducer(
    state: Game[] = createTestState(1, 1, 0, 0, 0).games,
    action: Action,
): Game[] {
    switch (action.type) {
        case ActionType.ADD_GAME:
            return addGame(state, action as AddGame);
        default:
            return state;
    }
}
