import { State, Playthrough, OptionSet, Game, Death } from '../state';
import { Action } from 'redux';
import { ActionType } from './actionTypes';

export interface LoadStateAction extends Action {
    type: ActionType.LOAD_STATE;
    newState: State;
}

export function loadStateAction(newState: State): LoadStateAction {
    return {
        type: ActionType.LOAD_STATE,
        newState,
    };
}

export function loadGames(_state: Game[], action: LoadStateAction): Game[] {
    return action.newState.games;
}

export function loadPlaythroughs(
    _state: Playthrough[],
    action: LoadStateAction,
): Playthrough[] {
    return action.newState.playthroughs;
}

export function loadDeaths(_state: Death[], action: LoadStateAction): Death[] {
    return action.newState.deaths;
}

export function loadOptionSets(
    _state: OptionSet[],
    action: LoadStateAction,
): OptionSet[] {
    return action.newState.optionSets;
}
