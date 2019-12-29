import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../app/components/button';

describe('Button Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Button
            text="Hello Button"
            onPress={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});