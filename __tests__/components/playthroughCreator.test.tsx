import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { loadStateAction, addPlaythroughAction, updatePlaythroughAction } from '../../app/actions';
import { createTestState, createTestPlaythrough } from '../../app/state';
import PlaythroughCreator from '../../app/containers/playthroughCreator';

const fakeNavigation = {
    goBack: () => undefined,
}
jest.mock('@react-native-community/async-storage', () => ({}));

describe('Playthrough Creator Container', () => {
    it('Renders with the empty initial state', () => {
        const component = renderer.create(<PlaythroughCreator navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with the default incomplete playthrough', () => {
        const state = createTestState(1, 1, 2, 0, 0);
        store.dispatch(loadStateAction(state));
        store.dispatch(addPlaythroughAction());

        const component = renderer.create(<PlaythroughCreator navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with an edited incomplete playthrough', () => {
        const state = createTestState(2, 1, 2, 0, 0);
        store.dispatch(loadStateAction(state));
        store.dispatch(addPlaythroughAction());
        store.dispatch(updatePlaythroughAction({
            ...createTestPlaythrough(false),
            name: 'New name',
            gameId: 'g1',
        }))

        const component = renderer.create(<PlaythroughCreator navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
