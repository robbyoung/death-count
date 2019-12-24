import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import store from '../store';
import { Death, Playthrough, Game } from '../state';
import { getAllDeaths } from '../selectors/deaths';
import { getSelectedGame } from '../selectors/games';
import { getSelectedPlaythrough } from '../selectors/playthroughs';
import { addDeathAction } from '../actions';
import DeathButton from '../components/deathButton';
import { backgroundColor } from '../colors';
import InfoDisplay from '../components/infoDisplay';

const styles = StyleSheet.create({
    homeScreen: {
        justifyContent: 'center',
        backgroundColor: backgroundColor,
        height: '100%',
    }
})

interface HomeState {
    deaths: Death[];
    playthrough: Playthrough;
    game: Game;
}
export default class Home extends Component<{}, HomeState> {
    private unsubscribe = () => undefined;

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
            return <View><Text>There are no games in the state</Text></View>
        }
        return (
            <View style={styles.homeScreen}>
                <DeathButton
                    onPress={() => this.addDeath()}>
                </DeathButton>
                <InfoDisplay
                    deaths={this.state.deaths}
                    currentGame={this.state.game}
                    currentPlaythrough={this.state.playthrough}>
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
        });
    }

    private addDeath() {
        const action = addDeathAction(this.state.playthrough.id);
        store.dispatch(action);
    }
}
