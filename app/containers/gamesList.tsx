import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import store from '../store';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import OptionList from '../components/optionList';
import OptionInput from '../components/optionInput';
import { Game } from '../state';
import { getAllGames } from '../selectors/games';

const styles = StyleSheet.create({
    newDeathScreen: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    },
});

interface GamesListState {
    games: Game[];
}
export default class GamesList extends Component<NavigationInjectedProps, GamesListState> {
    public static navigationOptions = () => {
        return {
            title: 'Games',
            headerTintColor: white,
            headerStyle: styles.header,
        };
    };

    public componentDidMount() {
        const state = store.getState();
        this.setState({
            games: getAllGames(state),
        })
    }

    public render() {
        if (!this.state) {
            return (<View><Text>Invalid state</Text></View>)
        }

        return (
            <ScrollView style={styles.newDeathScreen}>
                <OptionList
                    options={this.state.games.map(game => game.name)}
                    onSelect={(game) => console.error(game)}>
                </OptionList>
            </ScrollView>
        );
    }
}
