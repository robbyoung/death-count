import React from 'react';
import renderer from 'react-test-renderer';
import StatDisplay from '../../app/components/statDisplay';

describe('Stat Display Component', () => {
    it('can render a stat display', () => {
        const component = renderer.create(<StatDisplay
            count={2}
            name={'Test Stat Display'}
            percentage={20}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});