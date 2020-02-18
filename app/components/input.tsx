import { View, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { white } from '../colors';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    title: {
        color: white,
        fontSize: 22,
        marginTop: 5,
        marginBottom: 5,
    },
    textbox: {
        backgroundColor: white,
        width: '100%',
        borderRadius: 10,
        color: '#000000',
        fontSize: 22,
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
