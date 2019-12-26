import React from 'react';
import renderer from 'react-test-renderer';
import OptionList from '../../app/components/optionList';

describe('Options List Component', () => {
    it('can render a selectable list', () => {
        const component = renderer.create(<OptionList
            onSelect={() => undefined}
            options={['one', 'two', 'three', 'four']}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render a non-selectable list', () => {
        const component = renderer.create(<OptionList
            options={['one', 'two', 'three', 'four']}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});