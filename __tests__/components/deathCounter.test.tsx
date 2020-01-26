import React from 'react';
import renderer from 'react-test-renderer';
import DeathCounter from '../../app/components/deathCounter';
import { createTestState } from '../../app/state';

describe('Death Counter Component', () => {
    it('renders correctly with no deaths', () => {
        const component = renderer.create(<DeathCounter
            deaths={[]}
            onPress={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders correctly with multiple deaths', () => {
        const state = createTestState(1, 1, 10, 0, 0);
        const component = renderer.create(<DeathCounter
            deaths={state.deaths}
            onPress={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    })
});