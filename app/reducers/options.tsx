import { Action } from 'redux';
import { ActionType, AddOptionAction, addOption, AddOptionSetAction, addOptionSet } from '../actions';
import { OptionSet, createTestState } from '../state';

export default function optionsReducer(
    // state: OptionSet[] = createTestState(1, 1, 0, 0, 0).optionSets,
    state: OptionSet[] = [],
    action: Action,
): OptionSet[] {
    switch (action.type) {
        case ActionType.ADD_OPTION:
            return addOption(state, action as AddOptionAction);
        case ActionType.ADD_OPTION_SET:
            return addOptionSet(state, action as AddOptionSetAction);
        default:
            return state;
    }
}
