import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
    },
    button: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
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
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.onPress()}>
                <Text style={styles.button}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}
