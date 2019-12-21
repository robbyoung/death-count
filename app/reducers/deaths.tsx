import { Action } from 'redux';
import { Death } from '../state';
import { addDeath, AddDeath } from '../actions/addDeath';
import { ActionType } from '../actions/actionTypes';


export default function deathsReducer(
	state: Death[] = [],
	action: Action,
): Death[] {
    switch (action.type) {
        case ActionType.ADD_DEATH: 
            return addDeath(state, action as AddDeath);
        default:
            return state;
    }
}
