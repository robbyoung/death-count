import uuid from 'uuid';
import { OptionSet } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface AddOptionSetAction extends Action {
    type: ActionType.ADD_OPTION_SET;
    newOptionSet: OptionSet;
}

export function addOptionSetAction(title: string, gameId: string): AddOptionSetAction {
    return {
        type: ActionType.ADD_OPTION_SET,
        newOptionSet: {
            id: uuid.v4(),
            options: [],
            gameId,
            title,
            selected: false,
        }
    };
}

export function addOptionSet(state: OptionSet[], action: AddOptionSetAction): OptionSet[] {
    return [
        ...state,
        action.newOptionSet,
    ]
}