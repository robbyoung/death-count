import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { SolidIcons } from 'react-native-fontawesome';
import store from '../store';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import { Game, ExpandedPlaythrough } from '../state';
import { getSelectedGame } from '../selectors/games';
import {
    selectPlaythroughAction,
    deletePlaythroughAction,
    addPlaythroughAction,
} from '../actions';
import { saveState } from '../storage';
import { getPlaythroughsForCurrentGameExpanded } from '../selectors';
import PlaythroughDisplay from '../components/playthroughDisplay';
import HeaderButton from '../components/headerButton';
import { Screens } from '../screens';

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
    playthroughs: ExpandedPlaythrough[];
    selectedGame: Game;
}
export default class PlaythroughsList extends Component<
    NavigationInjectedProps,
    PlaythroughsListState
> {
    private unsubscribe = () => undefined;

    public static navigationOptions = (props: NavigationInjectedProps) => {
        return {
            title: 'Playthroughs',
            headerTintColor: white,
            headerStyle: styles.header,
            headerRight: () => (<HeaderButton
                icon={SolidIcons.plus}
                onPress={() => PlaythroughsList.onPlaythroughAdd(props)}
            ></HeaderButton>)
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
                {this.state.playthroughs.map(playthrough => {
                    return (
                        <PlaythroughDisplay
                            key={playthrough.id}
                            playthrough={playthrough}
                            onSelect={id => this.onPlaythroughSelect(id)}
                            onDelete={id =>
                                this.onPlaythroughDelete(id)
                            }></PlaythroughDisplay>
                    );
                })}
            </ScrollView>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            playthroughs: getPlaythroughsForCurrentGameExpanded(state),
            selectedGame: getSelectedGame(state),
        });
    }

    private static onPlaythroughAdd(props: NavigationInjectedProps) {
        store.dispatch(addPlaythroughAction());
        props.navigation.navigate(Screens.PlaythroughCreator);
    }

    private onPlaythroughSelect(id: string) {
        const action = selectPlaythroughAction(id);
        store.dispatch(action);
        this.props.navigation.goBack();
        saveState();
    }

    private onPlaythroughDelete(id: string) {
        const action = deletePlaythroughAction(id);
        store.dispatch(action);
        saveState();
    }
}
