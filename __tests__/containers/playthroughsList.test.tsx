import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { loadStateAction } from '../../app/actions';
import { createTestState } from '../../app/state';
import PlaythroughsList from '../../app/containers/playthroughsList';

const fakeNavigation = {
    goBack: () => undefined,
}
jest.mock('@react-native-community/async-storage', () => ({}));

describe('Playthroughs List Container', () => {
    it('Renders with the empty initial state', () => {
        const component = renderer.create(<PlaythroughsList navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with playthroughs in the state', () => {
        const state = createTestState(1, 2, 2, 0, 0);
        const action = loadStateAction(state);
        store.dispatch(action);
        
        const component = renderer.create(<PlaythroughsList navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
