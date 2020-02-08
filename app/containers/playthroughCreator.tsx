import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';

const styles = StyleSheet.create({
    header: {
        backgroundColor: buttonColor,
    },
    background: {
        backgroundColor: backgroundColor,
        width: '100%',
    }
});

export default class PlaythroughCreator extends Component<NavigationInjectedProps> {
    public static navigationOptions = () => {
        return {
            title: 'New Playthrough',
            headerTintColor: white,
            headerStyle: styles.header,
        };
    };

    public render() {
        return (
            <View style={styles.background}>
            </View>
        );
    }
}
