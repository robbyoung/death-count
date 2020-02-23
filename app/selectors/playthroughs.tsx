import { createSelector } from 'reselect';
import { State } from '../state';

export const getAllPlaythroughs = (state: State) =>
    state.playthroughs.filter(playthrough => playthrough.complete);

export const getIncompletePlaythrough = (state: State) =>
    state.playthroughs.find(playthrough => !playthrough.complete);

export const getSelectedPlaythrough = createSelector(
    [getAllPlaythroughs],
    playthroughs => {
        return playthroughs.find(playthrough => playthrough.selected);
    },
);
