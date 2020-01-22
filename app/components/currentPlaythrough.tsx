import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor, grey } from '../colors';
import { ExpandedPlaythrough } from '../state';

const styles = StyleSheet.create({
    container: {
        margin: 10,
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
    }
});

interface CurrentPlaythroughProps {
    playthroughName: string;
    gameName: string;
    onPress: () => void;
}
export default class currentPlaythrough extends Component<CurrentPlaythroughProps> {
    public render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.onPress()}>
                <Text style={styles.text}>
                    {this.props.playthroughName}
                </Text>
                <Text style={styles.text}>
                    {this.props.gameName}
                </Text>
            </TouchableOpacity>
        );
    }
}
