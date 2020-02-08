import React from 'react';
import renderer from 'react-test-renderer';
import { SolidIcons } from 'react-native-fontawesome';
import HeaderButton from '../../app/components/headerButton';

describe('Header Button Component', () => {
    it('renders correctly', () => {
        const component = renderer.create(<HeaderButton
            onPress={() => undefined}
            icon={SolidIcons.plus}
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});