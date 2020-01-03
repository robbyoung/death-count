import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { Death, Playthrough, Game, OptionSet } from '../state';
import { getDeathsForCurrentPlaythrough } from '../selectors/deaths';
import { getSelectedGame } from '../selectors/games';
import { getSelectedPlaythrough } from '../selectors/playthroughs';
import { backgroundColor, white, buttonColor } from '../colors';
import { getOptionSetsForSelectedGame } from '../selectors';

const styles = StyleSheet.create({
    statsScreen: {
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    }
})

interface StatsState {
    deaths: Death[];
    playthrough: Playthrough;
    game: Game;
    options: OptionSet;
}
export default class Stats extends Component<NavigationInjectedProps, StatsState> {

    public static navigationOptions = () => {
        return {
            title: 'Death Stats',
            headerTintColor: white,
            headerStyle: styles.header,
        };
    };

    public componentDidMount() {
        const state = store.getState();
        this.setState({
            deaths: getDeathsForCurrentPlaythrough(state),
            game: getSelectedGame(state),
            playthrough: getSelectedPlaythrough(state),
            options: getOptionSetsForSelectedGame(state)[0],
        });
    }

    public render() {
        if (!this.state || !this.state.game) {
            return <View><Text>Invalid state</Text></View>
        }

        return (
            <View style={styles.statsScreen}>

            </View>
        );
    }
}
