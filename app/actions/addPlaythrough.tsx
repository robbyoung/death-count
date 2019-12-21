import { Playthrough } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export class AddPlaythrough implements Action {
    type: ActionType = ActionType.ADD_PLAYTHROUGH;

    constructor(public newPlaythrough: Playthrough) {}
}

export function addPlaythrough(state: Playthrough[], action: AddPlaythrough): Playthrough[] {
    return [
        ...state,
        action.newPlaythrough,
    ]
}