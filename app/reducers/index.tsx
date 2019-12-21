import characters from './playthroughs';
import deaths from './deaths';
import { combineReducers } from 'redux';

export default combineReducers({
    characters,
    deaths,
});
