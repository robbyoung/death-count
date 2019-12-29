import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import store from '../store';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import OptionList from '../components/optionList';
import OptionInput from '../components/optionInput';
import { Game } from '../state';
import { getAllGames } from '../selectors/games';
import { selectGameAction, addGameAction, addPlaythrough, addPlaythroughAction } from '../actions';
import { Screens } from '../screens';
import { saveState } from '../storage';

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
    private unsubscribe = () => undefined;
    
    public static navigationOptions = () => {
        return {
            title: 'Games',
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
        if (!this.state) {
            return (<View><Text>Invalid state</Text></View>)
        }

        return (
            <ScrollView style={styles.newDeathScreen}>
                <OptionList
                    options={this.state.games.map(game => game.name)}
                    onSelect={(_game, index) => this.onGameSelect(index)}>
                </OptionList>
                <OptionInput
                    onSubmit={(name) => this.onNewGamePress(name)}
                    placeholder='Add a new game'>
                </OptionInput>
            </ScrollView>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            games: getAllGames(state),
        });
    }

    private onGameSelect(index: number) {
        const action = selectGameAction(this.state.games[index].id);
        store.dispatch(action);
        this.props.navigation.goBack();
    }

    private onNewGamePress(name: string) {
        if (name === '') {
            return;
        }
        
        const newGameAction = addGameAction(name);
        store.dispatch(newGameAction);
        const newPlaythroughAction = addPlaythroughAction(`${name} Playthrough`, newGameAction.newGame.id);
        store.dispatch(newPlaythroughAction);
        void saveState();
        this.props.navigation.navigate(Screens.NewGame);
    }
}
