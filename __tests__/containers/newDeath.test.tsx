import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { addGameAction, addDeathAction, addOptionSetAction } from '../../app/actions';
import NewDeath from '../../app/containers/newDeath';

const fakeNavigation = {
    goBack: () => undefined,
}

describe('New Death Container', () => {
    it('Renders with game and incomplete death in the state', async () => {
        const gameAction = addGameAction('Test Game');
        const deathAction = addDeathAction('id');
        const optionSetAction = addOptionSetAction('Death Options', gameAction.newGame.id)
        gameAction.newGame.selected = true;
        optionSetAction.newOptionSet.options = [ 'one', 'two' ];

        store.dispatch(gameAction);
        store.dispatch(deathAction);
        store.dispatch(optionSetAction);
        
        const component = renderer.create(<NewDeath navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
