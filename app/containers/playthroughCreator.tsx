import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { SolidIcons } from 'react-native-fontawesome';
import { backgroundColor, white, buttonColor } from '../colors';
import Input from '../components/input';
import OptionPicker from '../components/optionPicker';
import { Game, Playthrough } from '../state';
import store from '../store';
import { getAllGames, getIncompletePlaythrough } from '../selectors';
import { updatePlaythroughAction } from '../actions';
import HeaderButton from '../components/headerButton';

const styles = StyleSheet.create({
    header: {
        backgroundColor: buttonColor,
    },
    background: {
        backgroundColor: backgroundColor,
        height: '100%',
    }
});

interface PlaythroughCreatorState {
    games: Game[];
    playthrough: Playthrough;
}
export default class PlaythroughCreator extends Component<NavigationInjectedProps, PlaythroughCreatorState> {
    private unsubscribe = () => undefined;

    public static navigationOptions = (props: NavigationInjectedProps) => {
        return {
            title: 'New Playthrough',
            headerTintColor: white,
            headerStyle: styles.header,
            headerRight: () => (<HeaderButton
                icon={SolidIcons.check}
                onPress={() => PlaythroughCreator.onPlaythroughComplete(props)}
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
                <View/>
            );
        }

        return (
            <View style={styles.background}>
                <Input
                    title="Playthrough Name"
                    onTextChange={text => this.onNameUpdate(text)}>
                </Input>

                <OptionPicker
                    options={this.state.games.map(game => ({
                        key: game.name,
                        value: game.id,
                    }))}
                    onSelect={key => this.onGameUpdate(key)}
                    selected={this.state.playthrough.gameId}>
                </OptionPicker>
            </View>
        );
    }

    private refreshState() {
        const state = store.getState();
        this.setState({
            games: getAllGames(state),
            playthrough: getIncompletePlaythrough(state),
        });
    }

    private onNameUpdate(name: string) {
        const action = updatePlaythroughAction({
            ...this.state.playthrough,
            name,
        });
        store.dispatch(action);
    }

    private onGameUpdate(gameId: string) {
        const action = updatePlaythroughAction({
            ...this.state.playthrough,
            gameId,
        });
        store.dispatch(action);
    }
    
    private static onPlaythroughComplete(props: NavigationInjectedProps) {
        props.navigation.goBack();
    }
}
