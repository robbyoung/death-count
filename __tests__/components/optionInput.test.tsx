import React from 'react';
import renderer from 'react-test-renderer';
import OptionInput from '../../app/components/optionInput';

describe('Option Input Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<OptionInput
            onSubmit={() => undefined}
            placeholder='placeholder'
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});