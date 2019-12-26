import { Action } from 'redux';
import { ActionType, addGame, AddGameAction, AddOptionAction, addOption } from '../actions';
import { OptionSet } from '../state';

export default function optionsReducer(
    state: OptionSet[] = [],
    action: Action,
): OptionSet[] {
    switch (action.type) {
        case ActionType.ADD_OPTION:
            return addOption(state, action as AddOptionAction);
        default:
            return state;
    }
}
