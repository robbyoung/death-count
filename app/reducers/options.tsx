import { Action } from 'redux';
import { ActionType, AddOptionAction, addOption, AddOptionSetAction, addOptionSet, LoadStateAction, loadOptionSets } from '../actions';
import { OptionSet } from '../state';

export default function optionsReducer(
    state: OptionSet[] = [],
    action: Action,
): OptionSet[] {
    switch (action.type) {
        case ActionType.LOAD_STATE:
            return loadOptionSets(state, action as LoadStateAction);
        case ActionType.ADD_OPTION:
            return addOption(state, action as AddOptionAction);
        case ActionType.ADD_OPTION_SET:
            return addOptionSet(state, action as AddOptionSetAction);
        default:
            return state;
    }
}
