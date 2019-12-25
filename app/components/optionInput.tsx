import { View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import { white, buttonColor } from '../colors';
import FontAwesome, { SolidIcons } from 'react-native-fontawesome';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        width: 30,
        backgroundColor: buttonColor,
        height: 30,
        borderRadius: 2,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: white,
    },
    textbox: {
        backgroundColor: white,
    }
});

interface OptionInputProps {
    onSubmit: (option: string) => void;
}
interface OptionInputState {
    text: string;
}
export default class OptionInput extends Component<OptionInputProps, OptionInputState> {
    public state: OptionInputState = {
        text: '',
    }

    public render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.updateText(text)}
                    style={styles.textbox}>
                </TextInput>
                <TouchableOpacity
                    onPress={() => this.submitAndClear()}>
                    <FontAwesome icon={SolidIcons.arrowRight} style={styles.button} />
                </TouchableOpacity>
            </View>
        );
    }

    private updateText(text: string) {
        this.setState({ text })
    }

    private submitAndClear() {
        this.props.onSubmit(this.state.text);
        this.updateText('');
    }
}
