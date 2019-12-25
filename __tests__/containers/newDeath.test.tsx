import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { addGameAction, addPlaythroughAction, addDeathAction } from '../../app/actions';
import NewDeath from '../../app/containers/newDeath';

const fakeNavigation = {
    goBack: () => undefined,
}

describe('New Death Container', () => {
    it('Renders with game and incomplete death in the state', async () => {
        const gameAction = addGameAction('Test Game');
        const death = addDeathAction('id');
        gameAction.newGame.selected = true;
        gameAction.newGame.options = [{
            title: 'Death Options',
            options: ['one', 'two'],
        }];

        store.dispatch(gameAction);
        store.dispatch(death);
        
        const component = renderer.create(<NewDeath navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
