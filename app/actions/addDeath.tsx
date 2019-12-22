import uuid from 'uuid';
import { Action } from 'redux';
import { Death } from '../state';
import { ActionType } from './actionTypes';

export interface AddDeathAction extends Action {
    type: ActionType.ADD_DEATH;
    playthroughId: string;
}

export function addDeathAction(playthroughId: string): AddDeathAction {
    return {
        type: ActionType.ADD_DEATH,
        playthroughId,
    };
}

export function addDeath(state: Death[], action: AddDeathAction): Death[] {
    return [
        ...state,
        {
            id: uuid.v4(),
            playthroughId: action.playthroughId,
        },
    ]
}