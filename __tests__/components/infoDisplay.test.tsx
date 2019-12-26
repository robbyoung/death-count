import React from 'react';
import renderer from 'react-test-renderer';
import InfoDisplay from '../../app/components/infoDisplay';
import { createTestState } from '../../app/state';

describe('Info Display Component', () => {
    it('renders correctly', () => {

        const testState = createTestState(1, 1, 0, 0, 0);
        const component = renderer.create(<InfoDisplay
            currentGame={testState.games[0]}
            currentPlaythrough={testState.playthroughs[0]}
            deaths={testState.deaths}
            onGamePress={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});