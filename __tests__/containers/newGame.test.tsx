import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { addGameAction, addOptionSetAction } from '../../app/actions';
import NewGame from '../../app/containers/newGame';

const fakeNavigation = {
    goBack: () => undefined,
}

jest.mock('react-navigation', () => ({
    StackActions: {
        reset: () => undefined,
    },
    NavigationActions: {
        navigate: () => undefined,
    }
}));

jest.mock('@react-native-community/async-storage', () => ({}));

describe('New Game Container', () => {
    it('Renders without any option sets', () => {
        store.dispatch(addGameAction('Test Game'));
        
        const component = renderer.create(<NewGame navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with option sets', () => {
        const gameAction = addGameAction('Test Game');
        store.dispatch(gameAction);
        store.dispatch(addOptionSetAction('Set 1', gameAction.newGame.id));
        store.dispatch(addOptionSetAction('Set 2', gameAction.newGame.id));
        
        const component = renderer.create(<NewGame navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
