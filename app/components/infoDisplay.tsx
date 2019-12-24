import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';
import { Game, Playthrough, Death } from '../state';

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    text: {
        color: white,
        borderRadius: 100,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    deathCountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 20,
    },
    deathCount: {
        backgroundColor: buttonColor,
        borderRadius: 25,
        color: white,
        padding: 10,
        margin: 5,
    }
});

interface InfoDisplayProps {
    deaths: Death[];
    currentGame: Game;
    currentPlaythrough: Playthrough;
}
export default class InfoDisplay extends Component<InfoDisplayProps> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.currentPlaythrough.name}</Text>
                <Text style={styles.text}>Playing {this.props.currentGame.name}</Text>
                <View style={styles.deathCountContainer}>
                    <View style={styles.deathCount}><Text style={styles.text}>{this.props.deaths.length}</Text></View>
                    <Text style={styles.text}>
                        Deaths So Far
                    </Text>
                </View>
            </View>
        );
    }
}
