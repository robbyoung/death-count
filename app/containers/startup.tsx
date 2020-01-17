import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { Component } from 'react';
import store from '../store';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import OptionInput from '../components/optionInput';
import { addGameAction } from '../actions';
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

    public componentDidMount() {
        SplashScreen.hide();
    }

    public render() {
        return (
            <View style={styles.startupScreen}>
                <Text style={styles.title}>What game are you playing?</Text>
                <OptionInput
                    onSubmit={name => this.onSubmit(name)}
                    placeholder=""></OptionInput>
            </View>
        );
    }

    private onSubmit(name: string) {
        if (!name) {
            return;
        }

        const newGameAction = addGameAction(name);
        store.dispatch(newGameAction);
        this.props.navigation.navigate(Screens.NewGame);
    }
}
