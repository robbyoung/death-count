import React from 'react';
import renderer from 'react-test-renderer';
import OptionList from '../../app/components/optionList';

describe('Options List Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<OptionList
            onSelect={() => undefined}
            options={['one', 'two', 'three', 'four']}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});