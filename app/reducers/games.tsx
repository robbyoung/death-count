import { Action } from 'redux';
import { Game } from '../state';
import {
    ActionType,
    addGame,
    AddGameAction,
    SelectGameAction,
    selectGame,
    loadGames,
    LoadStateAction,
    CompleteGameAction,
    completeGame,
} from '../actions';

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
        case ActionType.COMPLETE_GAME:
            return completeGame(state, action as CompleteGameAction);
        default:
            return state;
    }
}
