import { Playthrough } from '../state';
import { Action } from 'redux';

export interface AddPlaythroughAction extends Action {
    newCharacter: Playthrough;
}

export function addPlaythrough(state: Playthrough[], action: AddPlaythroughAction): Playthrough[] {
    return [
        ...state,
        action.newCharacter,
    ]
}