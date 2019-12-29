import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { Death, Playthrough, Game, OptionSet } from '../state';
import { getAllDeaths } from '../selectors/deaths';
import { getSelectedGame } from '../selectors/games';
import { getSelectedPlaythrough } from '../selectors/playthroughs';
import { addDeathAction, completeDeathAction } from '../actions';
import DeathButton from '../components/deathButton';
import { backgroundColor, white, buttonColor } from '../colors';
import InfoDisplay from '../components/infoDisplay';
import { Screens } from '../screens';
import { getOptionSetsForSelectedGame } from '../selectors';

const styles = StyleSheet.create({
    homeScreen: {
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    }
})

interface HomeState {
    deaths: Death[];
    playthrough: Playthrough;
    game: Game;
    options: OptionSet[];
}
export default class Home extends Component<NavigationInjectedProps, HomeState> {
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
        this.unsubscribe = store.subscribe(
            () => this.refreshState()
        );
    }

    public componentWillUnmount() {
        this.unsubscribe();
    }

    public render() {
        if (!this.state || !this.state.game) {
            return <View><Text>Invalid state</Text></View>
        }

        return (
            <View style={styles.homeScreen}>
                <DeathButton
                    onPress={() => this.addDeath()}>
                </DeathButton>
                <InfoDisplay
                    deaths={this.state.deaths}
                    currentGame={this.state.game}
                    currentPlaythrough={this.state.playthrough}
                    onGamePress={() => this.goToGamesList()}>
                </InfoDisplay>
            </View>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            deaths: getAllDeaths(state),
            game: getSelectedGame(state),
            playthrough: getSelectedPlaythrough(state),
            options: getOptionSetsForSelectedGame(state),
        });
    }

    private addDeath() {
        const action = addDeathAction(this.state.playthrough.id);
        store.dispatch(action);

        if (this.state.options.length > 0) {
            this.goToNewDeath();
        } else {
            this.incrementDeathCounter();
        }
    }

    private incrementDeathCounter() {
        const action = completeDeathAction();
        store.dispatch(action);
    }

    private goToNewDeath() {
        this.props.navigation.navigate(Screens.NewDeath);
    }

    private goToGamesList() {
        this.props.navigation.navigate(Screens.GamesList);
    }
}
