import uuid from 'uuid';
import { Action } from 'redux';
import { Death } from '../state';
import { ActionType } from './actionTypes';

export interface AddDeathAction extends Action {
    type: ActionType.ADD_DEATH;
    newDeath: Death;
}

export function addDeathAction(playthroughId: string): AddDeathAction {
    return {
        type: ActionType.ADD_DEATH,
        newDeath: {
            id: uuid.v4(),
            playthroughId: playthroughId,
        },
    };
}

export function addDeath(state: Death[], action: AddDeathAction): Death[] {
    return [
        ...state,
        action.newDeath,
    ]
}