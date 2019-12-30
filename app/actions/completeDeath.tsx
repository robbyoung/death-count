import { Action } from 'redux';
import { Death } from '../state';
import { ActionType } from './actionTypes';

export interface CompleteDeathAction extends Action {
    type: ActionType.COMPLETE_DEATH;
}

export function completeDeathAction(): CompleteDeathAction {
    return {
        type: ActionType.COMPLETE_DEATH,
    };
}

export function completeDeath(state: Death[], _action: CompleteDeathAction): Death[] {
    const incompleteIndex = state.findIndex(death => !death.complete);
    const newState = [
        ...state
    ];
    const editedDeath: Death = {
        ...state[incompleteIndex],
        complete: true,
    }

    newState[incompleteIndex] = editedDeath;
    return newState;
}