import { Death, Character } from '../state';
import { Action } from 'redux';

export interface AddCharacterAction extends Action {
    newCharacter: Character;
}

export function addCharacter(state: Character[], action: AddCharacterAction): Character[] {
    return [
        ...state,
        action.newCharacter,
    ]
}