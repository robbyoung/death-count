import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { Component } from 'react';
import store from '../store';
import { NavigationInjectedProps, StackActions, NavigationActions } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import OptionList from '../components/optionList';
import OptionInput from '../components/optionInput';
import { selectGameAction, addGameAction, addPlaythrough, addPlaythroughAction } from '../actions';
import { Screens } from '../screens';

const styles = StyleSheet.create({
    startupScreen: {
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

export default class Startup extends Component<NavigationInjectedProps> {

    public static navigationOptions = () => {
        return {
            title: 'Getting Started',
            headerTintColor: white,
            headerStyle: styles.header,
        };
    };

    public render() {
        return (
            <View style={styles.startupScreen}>
                <Text style={styles.title}>What game are you playing?</Text>
                <OptionInput
                    onSubmit={(name) => this.onSubmit(name)}
                    placeholder=''>
                </OptionInput>
            </View>
        );
    }

    private onSubmit(name: string) {
        const newGameAction = addGameAction(name);
        store.dispatch(newGameAction);
        const newPlaythroughAction = addPlaythroughAction(`${name} Playthrough`, newGameAction.newGame.id);
        store.dispatch(newPlaythroughAction);
        this.props.navigation.navigate(Screens.Home);
    }

    private navigateWithNoHistory(screen: Screens) {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: screen })],
		});

		this.props.navigation.dispatch(resetAction);
	}
}
