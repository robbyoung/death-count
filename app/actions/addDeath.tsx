import { Death } from '../state';
import { Action } from 'redux';

export interface AddDeathAction extends Action {
    newDeath: Death;
}

export function addDeath(state: Death[], action: AddDeathAction): Death[] {
    return [
        ...state,
        action.newDeath,
    ]
}