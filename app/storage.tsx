import AsyncStorage from '@react-native-community/async-storage';
import { State } from './state/state';
import store from './store';
import { loadStateAction } from './actions';

export async function saveState(): Promise<void> {
    const state = store.getState();
    await AsyncStorage.setItem('state', JSON.stringify(state));
}

export async function loadState(): Promise<void> {
    const state = await AsyncStorage.getItem('state');
    let savedState: State;
    if (state !== undefined && state !== null) {
        savedState = JSON.parse(state) as State;
        const action = loadStateAction(savedState);
        store.dispatch(action);
    }
}

export async function clearState() {
    await AsyncStorage.clear();
}
