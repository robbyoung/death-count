import { OptionSet } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface AddOptionAction extends Action {
    type: ActionType.ADD_OPTION;
    id: string,
    value: string,
}

export function addOptionAction(id: string, value: string): AddOptionAction {
    return {
        type: ActionType.ADD_OPTION,
        id,
        value,
    };
}

export function addOption(state: OptionSet[], action: AddOptionAction): OptionSet[] {
    const optionsIndex = state.findIndex(optionSet => optionSet.id === action.id);
    if(state[optionsIndex].options.find(option => option === action.value)) {
        return state;
    }

    const newState = [
        ...state
    ];
    newState[optionsIndex] = {
        ...state[optionsIndex],
        options: [
            ...state[optionsIndex].options,
            action.value,
        ],
    };
    return newState;
}