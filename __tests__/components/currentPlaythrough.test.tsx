import React from 'react';
import renderer from 'react-test-renderer';
import CurrentPlaythrough from '../../app/components/currentPlaythrough';

describe('Current Playthrough Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<CurrentPlaythrough
            gameName="Test Game"
            playthroughName="Playthrough 1"
            onPress={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});