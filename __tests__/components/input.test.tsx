import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../app/components/input';

describe('Input Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<Input
            onTextChange={() => undefined}
            title='Input Title'
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});