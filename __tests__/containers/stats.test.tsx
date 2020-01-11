import React from 'react';
import renderer from 'react-test-renderer';
import store from '../../app/store';
import { loadStateAction } from '../../app/actions';
import Stats from '../../app/containers/stats';
import { createTestState } from '../../app/state';

const fakeNavigation = {
    dispatch: () => undefined,
}

describe('Stats Container', () => {
    it('Renders with no option set selected', () => {
        const state = createTestState(2, 5, 20, 0, 0);
        store.dispatch(loadStateAction(state));
        
        const component = renderer.create(<Stats navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Renders with chart and stats', () => {
        const state = createTestState(2, 5, 20, 0, 0, 0);
        store.dispatch(loadStateAction(state));
        
        const component = renderer.create(<Stats navigation={fakeNavigation as any} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
