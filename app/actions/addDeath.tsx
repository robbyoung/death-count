import { Death } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export class AddDeath implements Action {
    type: ActionType = ActionType.ADD_DEATH;

    constructor(public newDeath: Death) {}
}

export function addDeath(state: Death[], action: AddDeath): Death[] {
    return [
        ...state,
        action.newDeath,
    ]
}