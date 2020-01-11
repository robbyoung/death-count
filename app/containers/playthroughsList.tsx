import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import store from '../store';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import OptionList from '../components/optionList';
import OptionInput from '../components/optionInput';
import { Game, Playthrough } from '../state';
import { getSelectedGame } from '../selectors/games';
import { addPlaythroughAction, selectPlaythroughAction } from '../actions';
import { saveState } from '../storage';
import { getPlaythroughsForCurrentGame } from '../selectors';

const styles = StyleSheet.create({
    newDeathScreen: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    },
});

interface PlaythroughsListState {
    playthroughs: Playthrough[];
    selectedGame: Game;
}
export default class PlaythroughsList extends Component<
    NavigationInjectedProps,
    PlaythroughsListState
> {
    private unsubscribe = () => undefined;

    public static navigationOptions = () => {
        return {
            title: 'Playthroughs',
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
                <OptionList
                    options={this.state.playthroughs.map(
                        playthrough => playthrough.name,
                    )}
                    onSelect={(_playthrough, index) =>
                        this.onPlaythroughSelect(index)
                    }></OptionList>
                <OptionInput
                    onSubmit={name => this.onNewPlaythroughPress(name)}
                    placeholder="Add a new playthrough"></OptionInput>
            </ScrollView>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            playthroughs: getPlaythroughsForCurrentGame(state),
            selectedGame: getSelectedGame(state),
        });
    }

    private onPlaythroughSelect(index: number) {
        const action = selectPlaythroughAction(
            this.state.playthroughs[index].id,
        );
        store.dispatch(action);
        this.props.navigation.goBack();
    }

    private onNewPlaythroughPress(name: string) {
        if (name === '') {
            return;
        }

        const newPlaythroughAction = addPlaythroughAction(
            name,
            this.state.selectedGame.id,
        );
        store.dispatch(newPlaythroughAction);
        void saveState();
        this.props.navigation.goBack();
    }
}
