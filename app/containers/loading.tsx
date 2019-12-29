import { View } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps, StackActions, NavigationActions } from 'react-navigation';
import store from '../store';
import { Screens } from '../screens';
import { loadState } from '../storage';

export default class Loading extends Component<NavigationInjectedProps> {

    public async componentDidMount() {
        await loadState();
        const state = store.getState();
        if (state.games.length > 0) {
            this.navigateWithNoHistory(Screens.Home);
        } else {
            this.navigateWithNoHistory(Screens.Startup);
        }
        
    }

    public render() {
        return (
            <View></View>
        );
    }

    private navigateWithNoHistory(screen: Screens) {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: screen })],
		});

		this.props.navigation.dispatch(resetAction);
    }
}