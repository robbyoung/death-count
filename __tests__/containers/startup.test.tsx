import React from 'react';
import renderer from 'react-test-renderer';
import Startup from '../../app/containers/startup';

const fakeNavigation = {
    dispatch: () => undefined,
}
jest.mock('@react-native-community/async-storage', () => ({}));

describe('Startup Container', () => {
    it('Renders with nothing in the state', () => {
        const component = renderer.create(<Startup navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
