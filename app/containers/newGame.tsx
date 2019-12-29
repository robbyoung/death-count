import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { backgroundColor, white, buttonColor } from '../colors';
import { getSelectedGame, getOptionSetsForSelectedGame } from '../selectors';
import OptionInput from '../components/optionInput';
import { OptionSet, Game } from '../state';
import { addOptionSetAction } from '../actions';
import OptionList from '../components/optionList';
import { saveState } from '../storage';
import Button from '../components/button';

const styles = StyleSheet.create({
    newDeathScreen: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    },
    title: {
        fontSize: 22,
        color: white,
        margin: 10,
        fontWeight: 'bold',
    },
})

interface NewGameState {
    game: Game;
    optionSets: OptionSet[];
}
export default class NewGame extends Component<NavigationInjectedProps, NewGameState> {
    private unsubscribe = () => undefined;

    public static navigationOptions = () => {
        return {
            title: 'New Game',
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
                <Text style={styles.title}>{this.state.game.name}</Text>
                <OptionList
                    options={this.state.optionSets.map(set => set.title)}>
                </OptionList>
                <OptionInput
                    onSubmit={(name) => this.addOptionSet(name)}
                    placeholder='Add a new option set'>
                </OptionInput>
                <Button
                    text="Submit"
                    onPress={() => this.submitGame()}></Button>
            </ScrollView>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            game: getSelectedGame(state),
            optionSets: getOptionSetsForSelectedGame(state),
        });
    }

    private addOptionSet(title: string) {
        if (title !== '') {
            const action = addOptionSetAction(title, this.state.game.id);
            store.dispatch(action);
            void saveState();
        }
    }

    private submitGame() {}
}
