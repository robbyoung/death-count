import React from 'react';
import renderer from 'react-test-renderer';
import Startup from '../../app/containers/startup';

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

describe('Startup Container', () => {
    it('Renders with nothing in the state', async () => {
        const component = renderer.create(<Startup navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
