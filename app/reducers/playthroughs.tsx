import { Action } from 'redux';
import { Playthrough } from '../state';
import { ActionType, addPlaythrough, AddPlaythroughAction } from '../actions';

export default function playthroughsReducer(
	state: Playthrough[] = [],
	action: Action,
): Playthrough[] {
    switch (action.type) {
        case ActionType.ADD_PLAYTHROUGH: 
            return addPlaythrough(state, action as AddPlaythroughAction);
    }
}
