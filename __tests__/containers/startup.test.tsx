import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreen from 'react-native-splash-screen';
import Startup from '../../app/containers/startup';

const fakeNavigation = {
    dispatch: () => undefined,
}
jest.mock('@react-native-community/async-storage', () => ({}));
jest.mock('react-native-splash-screen', () => ({
    hide: jest.fn(),
}));


describe('Startup Container', () => {
    it('Renders with nothing in the state', () => {
        const component = renderer.create(<Startup navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
        expect(SplashScreen.hide).toHaveBeenCalledTimes(1);
    });
});
