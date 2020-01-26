import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';
import { Death } from '../state';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 30,
    },
    text: {
        color: white,
        borderRadius: 100,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    deathCount: {
        backgroundColor: buttonColor,
        borderRadius: 25,
        color: white,
        padding: 10,
        margin: 5,
    },
});

interface DeathCounterProps {
    deaths: Death[];
    onPress: () => void;
}
export default class DeathCounter extends Component<DeathCounterProps> {
    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.deathCount}
                    onPress={() => this.props.onPress()}>
                    <Text style={styles.text}>{this.props.deaths.length}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Deaths So Far</Text>
            </View>
        );
    }
}
