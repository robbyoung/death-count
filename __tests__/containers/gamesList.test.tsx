import React from 'react';
import renderer from 'react-test-renderer';
import GamesList from '../../app/containers/gamesList';
import store from '../../app/store';
import { addGameAction } from '../../app/actions';

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
        store.dispatch(addGameAction('Game 1'));
        store.dispatch(addGameAction('Game 2'));
        
        const component = renderer.create(<GamesList navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
