import { Action } from 'redux';
import { Game, createTestState } from '../state';
import { ActionType, addGame, AddGameAction, SelectGameAction, selectGame } from '../actions';
import { LoadStateAction, loadGames } from '../actions/setState';

export default function gamesReducer(
    state: Game[] = [],
    action: Action,
): Game[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadGames(state, action as LoadStateAction);
        case ActionType.ADD_GAME:
            return addGame(state, action as AddGameAction);
        case ActionType.SELECT_GAME:
            return selectGame(state, action as SelectGameAction);
        default:
            return state;
    }
}
