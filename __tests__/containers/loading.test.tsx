import React from 'react';
import renderer from 'react-test-renderer';
import { StackActions, NavigationActions } from 'react-navigation';
import Loading from '../../app/containers/loading';
import { Screens } from '../../app/screens';
import { addGameAction } from '../../app/actions';
import store from '../../app/store';

const fakeNavigation = {
    dispatch: () => undefined,
}

jest.mock('react-navigation', () => ({
    StackActions: {
        reset: jest.fn(),
    },
    NavigationActions: {
        navigate: jest.fn(),
    }
}));

describe('Loading Container', () => {
    afterEach(() => jest.clearAllMocks());

    it('Redirects to the startup screen if there are no games', async () => {
        const component = renderer.create(<Loading navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
        expect(NavigationActions.navigate).toHaveBeenCalledWith({ routeName: Screens.Startup });
        expect(StackActions.reset).toHaveBeenCalledTimes(1);
    });

    it('Redirects to the home screen if there are games', async () => {
        store.dispatch(addGameAction('Test Game'));

        const component = renderer.create(<Loading navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
        expect(NavigationActions.navigate).toHaveBeenCalledWith({ routeName: Screens.Home });
        expect(StackActions.reset).toHaveBeenCalledTimes(1);
    });
});
