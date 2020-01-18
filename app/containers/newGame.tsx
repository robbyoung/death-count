import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import {
    NavigationInjectedProps,
    StackActions,
    NavigationActions,
} from 'react-navigation';
import store from '../store';
import { backgroundColor, white, buttonColor } from '../colors';
import {
    getIncompleteGame,
    getOptionSetsForIncompleteGame,
} from '../selectors';
import OptionInput from '../components/optionInput';
import { OptionSet, Game } from '../state';
import {
    addOptionSetAction,
    completeGameAction,
    selectGameAction,
    addPlaythroughAction,
} from '../actions';
import OptionList from '../components/optionList';
import { saveState } from '../storage';
import Button from '../components/button';
import { Screens } from '../screens';

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
});

interface NewGameState {
    game: Game;
    optionSets: OptionSet[];
}
export default class NewGame extends Component<
    NavigationInjectedProps,
    NewGameState
> {
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
        this.unsubscribe = store.subscribe(() => this.refreshState());
    }

    public componentWillUnmount() {
        this.unsubscribe();
    }

    public render() {
        if (!this.state) {
            return (
                <View>
                    <Text>Invalid state</Text>
                </View>
            );
        }

        return (
            <ScrollView style={styles.newDeathScreen}>
                <Text style={styles.title}>{this.state.game.name}</Text>
                <OptionList
                    options={this.state.optionSets.map(
                        set => set.title,
                    )}></OptionList>
                <OptionInput
                    onSubmit={name => this.addOptionSet(name)}
                    placeholder="Add a new option set"></OptionInput>
                <Button text="Submit" onPress={() => this.onSubmit()}></Button>
            </ScrollView>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            game: getIncompleteGame(state),
            optionSets: getOptionSetsForIncompleteGame(state),
        });
    }

    private addOptionSet(title: string) {
        if (title !== '') {
            const action = addOptionSetAction(title, this.state.game.id);
            store.dispatch(action);
        }
    }

    private onSubmit() {
        this.unsubscribe();

        store.dispatch(
            addPlaythroughAction(
                `${this.state.game.name} Playthrough`,
                this.state.game.id,
            ),
        );
        store.dispatch(completeGameAction());
        store.dispatch(selectGameAction(this.state.game.id));

        saveState();
        this.navigateToHome();
    }

    private navigateToHome() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: Screens.Home })],
        });
        this.props.navigation.dispatch(resetAction);
    }
}
