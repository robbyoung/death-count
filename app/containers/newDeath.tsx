import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../store';
import { Game, DeathOptions } from '../state';
import { backgroundColor, white, buttonColor } from '../colors';

const styles = StyleSheet.create({
    newDeathScreen: {
        backgroundColor: backgroundColor,
        height: '100%',
    },
    header: {
        backgroundColor: buttonColor,
    }
})

interface NewDeathState {
    options: DeathOptions[];
    game: Game;
}
export default class NewDeath extends Component<NavigationInjectedProps, NewDeathState> {
    private unsubscribe = () => undefined;

    public static navigationOptions = () => {
		return {
            title: 'New Death',
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
        return (
            <View style={styles.newDeathScreen}>
                <Text>Hello</Text>
            </View>
        );
    }

    private refreshState() {
    }

}
