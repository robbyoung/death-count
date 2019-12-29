import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    button: {
        width: '80%',
        backgroundColor: buttonColor,
        height: 50,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: white,
        borderRadius: 5,
    },
});

interface ButtonProps {
    text: string;
    onPress: () => void;
}
export default class Button extends Component<ButtonProps> {
    public render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <View style={styles.container}>
                    <Text style={styles.button}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
