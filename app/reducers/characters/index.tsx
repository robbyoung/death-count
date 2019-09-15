import { Action } from 'redux';
import { Character } from '../../state';
import { AddCharacterAction, addCharacter } from '../../actions/addCharacter';
import { ActionType } from '../../actions/actionTypes';


export default function charactersReducer(
	state: Character[] = [],
	action: Action,
): Character[] {
    switch (action.type) {
        case ActionType.ADD_CHARACTER: 
            return addCharacter(state, action as AddCharacterAction);
    }
}
