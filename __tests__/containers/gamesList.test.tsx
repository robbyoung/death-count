import React from 'react';
import renderer from 'react-test-renderer';
import GamesList from '../../app/containers/gamesList';
import store from '../../app/store';
import { loadStateAction } from '../../app/actions';
import { createTestState } from '../../app/state';

const fakeNavigation = {
    goBack: () => undefined,
}
jest.mock('@react-native-community/async-storage', () => ({}));

describe('Games List Container', () => {
    it('Renders with the empty initial state', () => {
        const component = renderer.create(<GamesList navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with games in the state', () => {
        const state = createTestState(1, 1, 2, 0, 0);
        const action = loadStateAction(state);
        store.dispatch(action);
        
        const component = renderer.create(<GamesList navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
