import React from 'react';
import renderer from 'react-test-renderer';
import PlaythroughDisplay from '../../app/components/playthroughDisplay';

describe('Playthrough Display Component', () => {
    it('will correctly render playthrough details', () => {
        const component = renderer.create(<PlaythroughDisplay
            playthrough={{
                deathCount: 80,
                gameId: '123',
                gameName: 'Test Game',
                id: '456',
                name: 'Test Playthrough',
                selected: false,
            }}
            onSelect={() => undefined}
            onDelete={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('will correctly details of the selected playthrough', () => {
        const component = renderer.create(<PlaythroughDisplay
            playthrough={{
                deathCount: 80,
                gameId: '123',
                gameName: 'Test Game',
                id: '456',
                name: 'Test Playthrough',
                selected: true,
            }}
            onSelect={() => undefined}
            onDelete={() => undefined}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});