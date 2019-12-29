import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { addGameAction, addOptionSetAction } from '../../app/actions';
import NewGame from '../../app/containers/newGame';

const fakeNavigation = {
    goBack: () => undefined,
}

describe('New Game Container', () => {
    it('Renders without any option sets', async () => {
        store.dispatch(addGameAction('Test Game'));
        
        const component = renderer.create(<NewGame navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with option sets', async () => {
        const gameAction = addGameAction('Test Game');
        store.dispatch(gameAction);
        store.dispatch(addOptionSetAction('Set 1', gameAction.newGame.id));
        store.dispatch(addOptionSetAction('Set 2', gameAction.newGame.id));
        
        const component = renderer.create(<NewGame navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
