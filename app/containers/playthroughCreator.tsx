import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { NavigationInjectedProps } from 'react-navigation';
import { backgroundColor, white, buttonColor } from '../colors';
import Input from '../components/input';

const styles = StyleSheet.create({
    header: {
        backgroundColor: buttonColor,
    },
    background: {
        backgroundColor: backgroundColor,
        height: '100%',
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
                <Input
                    title="Playthrough Name"
                    onTextChange={text => this.onNameUpdate(text)}>
                </Input>
            </View>
        );
    }

    private onNameUpdate(text: string) {

    }
}
