import { Action } from 'redux';
import { Death } from '../state';
import { ActionType } from './actionTypes';

export interface AddDeathDetailAction extends Action {
    type: ActionType.ADD_DEATH_DETAIL;
    detailKey: string;
    detailValue: string;
}

export function addDeathDetailAction(
    detailKey: string,
    detailValue: string,
): AddDeathDetailAction {
    return {
        type: ActionType.ADD_DEATH_DETAIL,
        detailKey,
        detailValue,
    };
}

export function addDeathDetail(
    state: Death[],
    action: AddDeathDetailAction,
): Death[] {
    const incompleteIndex = state.findIndex(death => !death.complete);
    if (incompleteIndex === -1) {
        return state;
    }

    const newState = [...state];
    const editedDeath: Death = {
        ...state[incompleteIndex],
        details: {
            ...state[incompleteIndex].details,
        },
    };

    editedDeath.details[action.detailKey] = action.detailValue;
    newState[incompleteIndex] = editedDeath;
    return newState;
}
