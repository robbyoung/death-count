import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { loadStateAction } from '../../app/actions';
import NewDeath from '../../app/containers/newDeath';
import { createTestState } from '../../app/state';

const fakeNavigation = {
    goBack: () => undefined,
}

jest.mock('@react-native-community/async-storage', () => ({}));

describe('New Death Container', () => {
    it('Renders with game and incomplete death in the state', () => {
        const state = createTestState(1, 1, 2, 0, 0);
        state.deaths[1].complete = false;
        const action = loadStateAction(state);
        store.dispatch(action);
        
        const component = renderer.create(<NewDeath navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
