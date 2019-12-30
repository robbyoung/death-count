import React from 'react';
import renderer from 'react-test-renderer';
import { StackActions, NavigationActions } from 'react-navigation';
import Loading from '../../app/containers/loading';
import { Screens } from '../../app/screens';
import { loadStateAction } from '../../app/actions';
import store from '../../app/store';
import { createTestState } from '../../app/state';

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

jest.mock('../../app/storage', () => ({
    loadState: () => undefined,
}));

describe('Loading Container', () => {
    afterEach(() => jest.clearAllMocks());

    it('Redirects to the startup screen if there are no games', async () => {
        const component = renderer.create(<Loading navigation={fakeNavigation as any} />);
        await waitForLoad();

        expect(component.toJSON()).toMatchSnapshot();
        expect(NavigationActions.navigate).toHaveBeenCalledWith({ routeName: Screens.Startup });
        expect(StackActions.reset).toHaveBeenCalledTimes(1);
    });

    it('Redirects to the startup screen if there are only incomplete games', async () => {
        const state = createTestState(1, 0, 0, 0, 0);
        state.games[0].complete = false;
        const action = loadStateAction(state);
        store.dispatch(action);

        const component = renderer.create(<Loading navigation={fakeNavigation as any} />);
        await waitForLoad();

        expect(component.toJSON()).toMatchSnapshot();
        expect(NavigationActions.navigate).toHaveBeenCalledWith({ routeName: Screens.Startup });
        expect(StackActions.reset).toHaveBeenCalledTimes(1);
    });

    it('Redirects to the home screen if there are games', async () => {
        const action = loadStateAction(createTestState(1, 1, 0, 0, 0));
        store.dispatch(action);

        const component = renderer.create(<Loading navigation={fakeNavigation as any} />);
        await waitForLoad();

        expect(component.toJSON()).toMatchSnapshot();
        expect(NavigationActions.navigate).toHaveBeenCalledWith({ routeName: Screens.Home });
        expect(StackActions.reset).toHaveBeenCalledTimes(1);
    });
});

async function waitForLoad() {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 0);
    });
}
