import { Game } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface AddOptionAction extends Action {
    type: ActionType.ADD_OPTION;
    title: string,
    value: string,
}

export function addOptionAction(title: string, value: string): AddOptionAction {
    return {
        type: ActionType.ADD_OPTION,
        title,
        value,
    };
}

export function addOption(state: Game[], action: AddOptionAction): Game[] {
    const selectedIndex = state.findIndex(game => game.selected);
    const oldGame = state[selectedIndex];
    const optionsIndex = state[selectedIndex].options.findIndex(optionSet => optionSet.title === action.title);
    const oldOptions = oldGame.options[optionsIndex].options;

    const editedGame: Game = {
        ...oldGame,
        options: [ ...oldGame.options ],
    }
    editedGame.options[optionsIndex] = {
        title: action.title,
        options: [
            ...oldOptions,
            action.value,
        ],
    };

    const newState = [
        ...state
    ];
    newState[selectedIndex] = editedGame;
    return newState;
}