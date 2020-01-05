import { OptionSet } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface SelectOptionSetAction extends Action {
    type: ActionType.SELECT_OPTION_SET;
    id: string;
}

export function selectOptionSetAction(id: string | undefined): SelectOptionSetAction {
    return {
        type: ActionType.SELECT_OPTION_SET,
        id,
    };
}

export function selectOptionSet(state: OptionSet[], action: SelectOptionSetAction): OptionSet[] {
    const newState = [...state];

    const toDeselectIndex = state.findIndex(playthrough => playthrough.selected);
    if (toDeselectIndex !== -1) {
        const deselected = {
            ...state[toDeselectIndex],
            selected: false,
        };
        newState[toDeselectIndex] = deselected;
    }

    if (action.id !== undefined) {
        const toSelectIndex = state.findIndex(playthrough => playthrough.id === action.id);
        const selected = {
            ...state[toSelectIndex],
            selected: true,
        };
        newState[toSelectIndex] = selected;
        console.log(selected.title)
    }

    return newState;
}