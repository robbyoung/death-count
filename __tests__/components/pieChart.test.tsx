import React from 'react';
import renderer from 'react-test-renderer';
import PieChart from '../../app/components/pieChart';

describe('Stat Display Component', () => {
    it('can render a pie chart', () => {
        const component = renderer.create(<PieChart
            data={[
                {
                    count: 4,
                    name: 'One',
                    percentage: 40,
                },
                {
                    count: 6,
                    name: 'Two',
                    percentage: 60,
                },
            ]}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});