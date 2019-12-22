import { View, Text } from 'react-native';
import React, { Component } from 'react';
import store from '../store';
import { Death, Playthrough, Game } from '../state';
import { getAllDeaths } from '../selectors/deaths';
import { getSelectedGame } from '../selectors/games';
import { getSelectedPlaythrough } from '../selectors/playthroughs';

interface HomeState {
    deaths: Death[];
    playthrough: Playthrough;
    game: Game;
}
export default class Home extends Component<void, HomeState> {
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
        if (!this.state) {
            return <View/>
        }

        return (
            <View>
                <Text>Playthrough {this.state.playthrough.name}</Text>
                <Text>Playing {this.state.game.name}</Text>
                <Text>{this.state.deaths.length} deaths so far</Text>
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
}
