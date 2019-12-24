import { Action } from 'redux';
import { Death } from '../state';
import { addDeath, AddDeathAction } from '../actions/addDeath';
import { ActionType } from '../actions/actionTypes';
import { AddDeathDetailAction, addDeathDetail } from '../actions/addDeathDetail';

export default function deathsReducer(
	state: Death[] = [],
	action: Action,
): Death[] {
    switch (action.type) {
        case ActionType.ADD_DEATH: 
            return addDeath(state, action as AddDeathAction);
        case ActionType.ADD_DEATH_DETAIL: 
            return addDeathDetail(state, action as AddDeathDetailAction);
        default:
            return state;
    }
}
