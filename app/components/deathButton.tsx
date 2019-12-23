import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        width: 200,
        backgroundColor: buttonColor,
        height: 200,
        borderRadius: 100,
        fontSize: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: white,
    },
});

interface DeathButtonProps {
    onPress: () => void;
}
export default class DeathButton extends Component<DeathButtonProps> {
    public render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.onPress()}>
                        <Text style={styles.button}>OOF</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
