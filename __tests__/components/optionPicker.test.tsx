import React from 'react';
import renderer from 'react-test-renderer';
import OptionPicker from '../../app/components/optionPicker';

describe('Option Picker Component', () => {
    it('can render an option picker with nothing selected', () => {
        const component = renderer.create(<OptionPicker
            onSelect={() => undefined}
            options={[{
                key: 'key 1',
                value: 'value 1',
            }, {
                key: 'key 2',
                value: 'value 2',
            }]}
            selected={undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('can render an option picker with a selected item', () => {
        const component = renderer.create(<OptionPicker
            onSelect={() => undefined}
            options={[{
                key: 'key 1',
                value: 'value 1',
            }, {
                key: 'key 2',
                value: 'value 2',
            }]}
            selected={'value 1'}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});