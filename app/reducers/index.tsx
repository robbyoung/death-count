import playthroughs from './playthroughs';
import deaths from './deaths';
import games from './games';
import optionSets from './options';
import { combineReducers } from 'redux';

export default combineReducers({
    playthroughs,
    deaths,
    games,
    optionSets,
});
