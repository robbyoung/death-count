import { Action } from 'redux';
import { Game, createTestState } from '../state';
import { ActionType, addGame, AddGameAction, SelectGameAction, selectGame } from '../actions';

export default function gamesReducer(
    state: Game[] = createTestState(2, 2, 0, 0, 0).games,
    // state: Game[] = [],
    action: Action,
): Game[] {
    switch (action.type) {
        case ActionType.ADD_GAME:
            return addGame(state, action as AddGameAction);
        case ActionType.SELECT_GAME:
            return selectGame(state, action as SelectGameAction);
        default:
            return state;
    }
}
