import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../app/containers/home';
import store from '../../app/store';
import { addGameAction, addPlaythroughAction } from '../../app/actions';

describe('Home Container', () => {
    it('Renders with the empty initial state', () => {
        const component = renderer.create(<Home />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with game and playthrough in the state', async () => {
        const gameAction = addGameAction('Test Game');
        const playthroughAction = addPlaythroughAction('Test Playthrough', gameAction.newGame.id);
        gameAction.newGame.selected = true;
        playthroughAction.newPlaythrough.selected = true;

        store.dispatch(playthroughAction);
        store.dispatch(gameAction);
        
        const component = renderer.create(<Home />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
