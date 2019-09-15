import { Action } from 'redux';
import { Death } from '../../state';
import { addDeath, AddDeathAction } from '../../actions/addDeath';
import { ActionType } from '../../actions/actionTypes';


export default function deathsReducer(
	state: Death[] = [],
	action: Action,
): Death[] {
    switch (action.type) {
        case ActionType.ADD_CHARACTER: 
            return addDeath(state, action as AddDeathAction);
    }
}
