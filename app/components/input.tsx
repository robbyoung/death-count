import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import { white } from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    title: {
        color: white,
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
    },
    textbox: {
        backgroundColor: white,
        width: '100%',
        borderRadius: 5,
        color: '#000000',
        fontSize: 18,
        padding: 10,
    }
});

interface InputProps {
    title: string;
    onTextChange: (text: string) => void;
}
export default class Input extends Component<InputProps> {
    public render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <TextInput
                    style={styles.textbox}
                    onChangeText={text => this.props.onTextChange(text)}>
                </TextInput>
            </View>
        );
    }
}
