import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import store from '../store';
import { Death, Playthrough, Game, OptionSet } from '../state';
import { getDeathsForCurrentPlaythrough } from '../selectors/deaths';
import { getSelectedGame } from '../selectors/games';
import { getSelectedPlaythrough } from '../selectors/playthroughs';
import {
    addDeathAction,
    completeDeathAction,
    selectOptionSetAction,
} from '../actions';
import DeathButton from '../components/deathButton';
import { backgroundColor, white, buttonColor } from '../colors';
import DeathCounter from '../components/deathCounter';
import { Screens } from '../screens';
import { getOptionSetsForSelectedGame } from '../selectors';
import { saveState } from '../storage';
import CurrentPlaythrough from '../components/currentPlaythrough';

const styles = StyleSheet.create({
    homeScreen: {
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    },
});

interface HomeState {
    deaths: Death[];
    playthrough: Playthrough;
    game: Game;
    options: OptionSet[];
}
export default class Home extends Component<
    NavigationInjectedProps,
    HomeState
    > {
    private unsubscribe = () => undefined;

    public static navigationOptions = () => {
        return {
            title: 'Death Counter',
            headerTintColor: white,
            headerStyle: styles.header,
        };
    };

    public componentDidMount() {
        this.refreshState();
        this.unsubscribe = store.subscribe(() => this.refreshState());
        SplashScreen.hide();
    }

    public componentWillUnmount() {
        this.unsubscribe();
    }

    public render() {
        if (!this.state || !this.state.game) {
            return (
                <View>
                    <Text>Invalid state</Text>
                </View>
            );
        }

        return (
            <View style={styles.homeScreen}>
                <CurrentPlaythrough
                    gameName={this.state.game.name}
                    playthroughName={this.state.playthrough.name}
                    onPress={() =>
                        this.navigateToScreen(Screens.PlaythroughsList)
                    }></CurrentPlaythrough>
                <DeathButton onPress={() => this.addDeath()}></DeathButton>
                <DeathCounter
                    deaths={this.state.deaths}
                    onPress={() => this.viewStats()}></DeathCounter>
            </View>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            deaths: getDeathsForCurrentPlaythrough(state),
            game: getSelectedGame(state),
            playthrough: getSelectedPlaythrough(state),
            options: getOptionSetsForSelectedGame(state),
        });
    }

    private addDeath() {
        const action = addDeathAction(this.state.playthrough.id);
        store.dispatch(action);

        if (this.state.options.length > 0) {
            this.navigateToScreen(Screens.NewDeath);
        } else {
            this.incrementDeathCounter();
        }
    }

    private incrementDeathCounter() {
        const action = completeDeathAction();
        store.dispatch(action);
        saveState();
    }

    private viewStats() {
        store.dispatch(selectOptionSetAction(undefined));
        this.navigateToScreen(Screens.Stats);
    }

    private navigateToScreen(screen: Screens) {
        this.props.navigation.navigate(screen);
    }
}
