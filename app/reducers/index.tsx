import characters from './playthroughs';
import deaths from './deaths';
import games from './games';
import { combineReducers } from 'redux';

export default combineReducers({
    characters,
    deaths,
    games,
});
