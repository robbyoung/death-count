import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../app/containers/home';
import store from '../../app/store';
import { addGameAction, addPlaythroughAction } from '../../app/actions';

jest.mock('@react-native-community/async-storage', () => ({}));

describe('Home Container', () => {
    it('Renders with game and playthrough in the state', () => {
        const gameAction = addGameAction('Test Game');
        const playthroughAction = addPlaythroughAction('Test Playthrough', gameAction.newGame.id);
        gameAction.newGame.selected = true;
        playthroughAction.newPlaythrough.selected = true;

        store.dispatch(playthroughAction);
        store.dispatch(gameAction);
        
        const component = renderer.create(<Home navigation={{} as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
