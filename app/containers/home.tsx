import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { Death, Playthrough, Game } from '../state';
import { getAllDeaths } from '../selectors/deaths';
import { getSelectedGame } from '../selectors/games';
import { getSelectedPlaythrough } from '../selectors/playthroughs';
import { addDeathAction } from '../actions';
import DeathButton from '../components/deathButton';
import { backgroundColor, white, buttonColor } from '../colors';
import InfoDisplay from '../components/infoDisplay';
import { Screens } from '../screens';

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
            return <View></View>
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
        if (state.games.length === 0) {
            this.goToGamesList();
        }

        this.setState({
            deaths: getAllDeaths(state),
            game: getSelectedGame(state),
            playthrough: getSelectedPlaythrough(state),
        });
    }

    private addDeath() {
        const action = addDeathAction(this.state.playthrough.id);
        store.dispatch(action);
        this.props.navigation.navigate(Screens.NewDeath);
    }

    private goToGamesList() {
        this.props.navigation.navigate(Screens.GamesList);
    }
}
