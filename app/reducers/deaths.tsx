import { Action } from 'redux';
import { Death } from '../state';
import { ActionType } from '../actions/actionTypes';
import {
    addDeath,
    AddDeathAction,
    addDeathDetail,
    AddDeathDetailAction,
    completeDeath,
    CompleteDeathAction,
    loadDeaths,
    LoadStateAction,
    DeletePlaythroughAction,
    deleteDeathsForPlaythrough,
} from '../actions';

export default function deathsReducer(
    state: Death[] = [],
    action: Action,
): Death[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadDeaths(state, action as LoadStateAction);
        case ActionType.ADD_DEATH:
            return addDeath(state, action as AddDeathAction);
        case ActionType.ADD_DEATH_DETAIL:
            return addDeathDetail(state, action as AddDeathDetailAction);
        case ActionType.COMPLETE_DEATH:
            return completeDeath(state, action as CompleteDeathAction);
        case ActionType.DELETE_PLAYTHROUGH:
            return deleteDeathsForPlaythrough(
                state,
                action as DeletePlaythroughAction,
            );
        default:
            return state;
    }
}
