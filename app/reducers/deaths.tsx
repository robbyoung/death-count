import { Action } from 'redux';
import { Death } from '../state';
import { ActionType } from '../actions/actionTypes';
import { addDeath, AddDeathAction, addDeathDetail, AddDeathDetailAction, completeDeath, CompleteDeathAction } from '../actions';

export default function deathsReducer(
    state: Death[] = [],
    action: Action,
): Death[] {
    switch (action.type) {
        case ActionType.ADD_DEATH:
            return addDeath(state, action as AddDeathAction);
        case ActionType.ADD_DEATH_DETAIL:
            return addDeathDetail(state, action as AddDeathDetailAction);
        case ActionType.COMPLETE_DEATH:
            return completeDeath(state, action as CompleteDeathAction);
        default:
            return state;
    }
}
