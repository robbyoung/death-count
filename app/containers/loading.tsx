import { View } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps, StackActions, NavigationActions } from 'react-navigation';
import store from '../store';
import { Screens } from '../screens';

export default class Loading extends Component<NavigationInjectedProps> {

    public componentDidMount() {
        this.navigateToHome();
    }

    public render() {
        return (
            <View></View>
        );
    }

    private navigateToHome() {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: Screens.Home })],
		});

		this.props.navigation.dispatch(resetAction);
	}
}