import { View } from 'react-native';
import React, { Component } from 'react';
import {
    NavigationInjectedProps,
    StackActions,
    NavigationActions,
} from 'react-navigation';
import store from '../store';
import { Screens } from '../screens';
import { loadState } from '../storage';
import { getAllGames } from '../selectors/games';
import { backgroundColor } from '../colors';

export default class Loading extends Component<NavigationInjectedProps> {
    public static navigationOptions = () => {
        return {
            headerShown: false
        };
    };

    public async componentDidMount() {
        await loadState();
        const state = store.getState();
        if (getAllGames(state).length > 0) {
            this.navigateWithNoHistory(Screens.Home);
        } else {
            this.navigateWithNoHistory(Screens.Startup);
        }
    }

    public render() {
        return <View style={{backgroundColor: backgroundColor}}></View>;
    }

    private navigateWithNoHistory(screen: Screens) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: screen })],
        });

        this.props.navigation.dispatch(resetAction);
    }
}
