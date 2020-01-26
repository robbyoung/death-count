import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { white, grey } from '../colors';

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    text: {
        color: white,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    subText: {
        color: grey,
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

interface CurrentPlaythroughProps {
    playthroughName: string;
    gameName: string;
    onPress: () => void;
}
export default class CurrentPlaythrough extends Component<
    CurrentPlaythroughProps
> {
    public render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.onPress()}>
                <Text style={styles.text}>{this.props.playthroughName}</Text>
                <Text style={styles.subText}>{this.props.gameName}</Text>
            </TouchableOpacity>
        );
    }
}
