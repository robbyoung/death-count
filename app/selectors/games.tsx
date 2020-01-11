import { createSelector } from 'reselect';
import { State } from '../state';

export const getAllGames = (state: State) =>
    state.games.filter(game => game.complete);

export const getIncompleteGame = (state: State) =>
    state.games.find(game => !game.complete);

export const getSelectedGame = createSelector([getAllGames], games => {
    return games.find(game => game.selected);
});
